const crypto = require('node:crypto');
const {
  authenticate,
  assertAllowedKeys,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../community-media.cjs');

const isDocumentId = (value) => typeof value === 'string' && value.length > 0 &&
  value.length <= 500 && !value.includes('/');

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
    assertAllowedKeys(body, ['type', 'targetId', 'sourceId']);
    const { uid, db } = await authenticate(request);
    const { type, targetId, sourceId } = body;
    if (!['comment', 'reaction', 'follow', 'message'].includes(type) ||
        !isDocumentId(targetId) || !isDocumentId(sourceId)) {
      return json(response, 400, { error: 'Invalid notification event.' });
    }

    let parentRef;
    let sourceRef;
    if (type === 'follow') {
      parentRef = db.doc(`follows/${uid}_${targetId}`);
    } else if (type === 'message') {
      parentRef = db.doc(`chats/${targetId}`);
      sourceRef = parentRef.collection('messages').doc(sourceId);
    } else {
      parentRef = db.doc(`posts/${targetId}`);
      sourceRef = parentRef.collection(type === 'comment' ? 'comments' : 'reactions').doc(
        type === 'reaction' ? uid : sourceId,
      );
    }

    const sourcePath = sourceRef?.path || parentRef.path;
    const notificationId = crypto.createHash('sha256').update(`${type}:${sourcePath}`).digest('hex');
    let result = { created: false, skipped: false };

    await db.runTransaction(async (transaction) => {
      result = { created: false, skipped: false };
      const [parentSnapshot, sourceSnapshot] = await Promise.all([
        transaction.get(parentRef),
        sourceRef ? transaction.get(sourceRef) : Promise.resolve(null),
      ]);
      if (!parentSnapshot.exists || (sourceSnapshot && !sourceSnapshot.exists)) {
        const error = new Error('The activity is no longer available.');
        error.status = 404;
        throw error;
      }

      let recipientUid;
      if (type === 'follow') {
        const follow = parentSnapshot.data();
        if (follow.followerUid !== uid || follow.followingUid !== targetId) {
          const error = new Error('A matching follow activity was not found.');
          error.status = 403;
          throw error;
        }
        recipientUid = targetId;
      } else if (type === 'message') {
        const chat = parentSnapshot.data();
        if (!Array.isArray(chat.members) || !chat.members.includes(uid) ||
            sourceSnapshot.data().senderUid !== uid) {
          const error = new Error('A matching message activity was not found.');
          error.status = 403;
          throw error;
        }
        recipientUid = chat.members.find((member) => member !== uid);
      } else {
        const post = parentSnapshot.data();
        const event = sourceSnapshot.data();
        if (post.authorUid === uid) {
          result.skipped = true;
          return;
        }
        if ((type === 'comment' && event.authorUid !== uid) ||
            (type === 'reaction' && event.uid !== uid)) {
          const error = new Error('A matching activity was not found.');
          error.status = 403;
          throw error;
        }
        recipientUid = post.authorUid;
      }

      if (!recipientUid || recipientUid === uid) {
        result.skipped = true;
        return;
      }
      const blockRefs = [
        db.doc(`blocks/${uid}_${recipientUid}`),
        db.doc(`blocks/${recipientUid}_${uid}`),
        db.doc(`mutes/${recipientUid}_${uid}`),
      ];
      const [profileSnapshot, ...relationshipSnapshots] = await Promise.all([
        transaction.get(db.doc(`users/${uid}`)),
        ...blockRefs.map((ref) => transaction.get(ref)),
      ]);
      if (relationshipSnapshots.some((snapshot) => snapshot.exists)) {
        result.skipped = true;
        return;
      }
      const notificationRef = db.doc(`notifications/${recipientUid}/items/${notificationId}`);
      const existing = await transaction.get(notificationRef);
      if (existing.exists) return;

      const displayName = String(profileSnapshot.data()?.name || 'A community member').slice(0, 120);
      const messages = {
        comment: `${displayName} commented on your post.`,
        reaction: `${displayName} reacted to your post.`,
        follow: `${displayName} followed you.`,
        message: `${displayName} sent you a message.`,
      };
      transaction.create(notificationRef, {
        fromUid: uid,
        type,
        targetId: type === 'message' ? targetId : type === 'follow' ? uid : targetId,
        text: messages[type],
        createdAt: FieldValue.serverTimestamp(),
        read: false,
      });
      result.created = true;
    });

    return json(response, result.created ? 201 : 200, result);
  } catch (error) {
    return fail(response, error);
  }
};
