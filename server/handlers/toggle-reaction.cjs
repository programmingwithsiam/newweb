const {
  authenticate,
  assertAllowedKeys,
  consumeSocialActionRate,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../community-media.cjs');

const REACTION_TYPES = new Set(['like', 'love', 'care', 'haha', 'wow', 'sad', 'angry']);

module.exports = async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    if (!setCors(request, response)) return json(response, 403, { error: 'Origin not allowed.' });
    response.status(204).end();
    return;
  }
  if (!setCors(request, response)) return json(response, 403, { error: 'Origin not allowed.' });
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST, OPTIONS');
    return json(response, 405, { error: 'Method not allowed.' });
  }
  try {
    const body = parseJsonBody(request);
    assertAllowedKeys(body, ['postId', 'type']);
    const { uid, db } = await authenticate(request);
    const postId = typeof body.postId === 'string' ? body.postId : '';
    const type = body.type === null ? null : typeof body.type === 'string' ? body.type : '';
    if (!/^[A-Za-z0-9_-]{1,150}$/.test(postId) || (type !== null && !REACTION_TYPES.has(type))) {
      return json(response, 400, { error: 'Post ID or reaction type is invalid.' });
    }

    const postRef = db.doc(`posts/${postId}`);
    const userRef = db.doc(`users/${uid}`);
    const rateRef = db.doc(`socialActionRates/${uid}`);
    const reactionRef = postRef.collection('reactions').doc(uid);
    let result;
    await db.runTransaction(async (transaction) => {
      const [postSnapshot, userSnapshot, reactionSnapshot, rateSnapshot] = await Promise.all([
        transaction.get(postRef),
        transaction.get(userRef),
        transaction.get(reactionRef),
        transaction.get(rateRef),
      ]);
      if (!postSnapshot.exists) {
        const error = new Error('Post not found.');
        error.status = 404;
        throw error;
      }
      if (userSnapshot.data()?.banned === true) {
        const error = new Error('This account is not permitted to react.');
        error.status = 403;
        throw error;
      }
      const post = postSnapshot.data();
      const authorUid = String(post.authorUid || '');
      const [authorBlock, userBlock] = await Promise.all([
        transaction.get(db.doc(`blocks/${uid}_${authorUid}`)),
        transaction.get(db.doc(`blocks/${authorUid}_${uid}`)),
      ]);
      const blocked = authorBlock.exists || userBlock.exists;
      const current = reactionSnapshot.exists ? reactionSnapshot.data() : null;
      if (current && current.uid !== uid) {
        const error = new Error('Reaction ownership could not be verified.');
        error.status = 409;
        throw error;
      }
      const stateUnchanged = current?.type === type || (!current && type === null);
      if (blocked && !stateUnchanged && type !== null) {
        const error = new Error('You cannot react to this post.');
        error.status = 403;
        throw error;
      }
      if (!stateUnchanged) consumeSocialActionRate(transaction, rateRef, rateSnapshot, 'lastReactionAt');

      const storedCount = Number.isSafeInteger(post.likeCount) && post.likeCount >= 0
        ? post.likeCount
        : Number.isSafeInteger(post.likes) && post.likes >= 0 ? post.likes : 0;
      let likeCount = storedCount;
      let selectedType = type;
      let countChanged = false;
      if (!stateUnchanged && current && type === null) {
        transaction.delete(reactionRef);
        likeCount = Math.max(0, storedCount - 1);
        countChanged = true;
      } else if (!stateUnchanged && current) {
        transaction.update(reactionRef, {
          type,
          updatedAt: FieldValue.serverTimestamp(),
        });
      } else if (!stateUnchanged) {
        transaction.create(reactionRef, {
          uid,
          type,
          createdAt: FieldValue.serverTimestamp(),
        });
        likeCount = storedCount + 1;
        countChanged = true;
      }
      if (countChanged) {
        transaction.update(postRef, {
          likeCount,
          updatedAt: FieldValue.serverTimestamp(),
        });
      }
      result = {
        liked: Boolean(selectedType),
        type: selectedType,
        likeCount,
      };
    });
    return json(response, 200, result);
  } catch (error) {
    return fail(response, error);
  }
};
