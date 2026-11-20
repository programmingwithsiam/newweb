const {
  authenticate,
  assertAllowedKeys,
  consumeSocialActionRate,
  fail,
  json,
  parseJsonBody,
  setCors,
  FieldValue,
} = require('../server/community-media.cjs');

function profileCount(profile, field, legacyField) {
  const count = profile[field];
  if (Number.isSafeInteger(count) && count >= 0) return count;
  const legacy = profile[legacyField];
  return Array.isArray(legacy) ? legacy.length : 0;
}

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
    assertAllowedKeys(body, ['followingUid', 'following']);
    const { uid, db } = await authenticate(request);
    const targetUid = typeof body.followingUid === 'string' ? body.followingUid : '';
    if (!/^[A-Za-z0-9_-]{1,128}$/.test(targetUid) || targetUid === uid ||
        typeof body.following !== 'boolean') {
      return json(response, 400, { error: 'Follow target or action is invalid.' });
    }

    const actorRef = db.doc(`publicProfiles/${uid}`);
    const targetRef = db.doc(`publicProfiles/${targetUid}`);
    const actorUserRef = db.doc(`users/${uid}`);
    const targetUserRef = db.doc(`users/${targetUid}`);
    const followRef = db.doc(`follows/${uid}_${targetUid}`);
    const rateRef = db.doc(`socialActionRates/${uid}`);
    const result = await db.runTransaction(async (transaction) => {
      const [
        actorSnapshot,
        targetSnapshot,
        actorUserSnapshot,
        targetUserSnapshot,
        followSnapshot,
        rateSnapshot,
        outgoingBlock,
        incomingBlock,
      ] = await Promise.all([
        transaction.get(actorRef),
        transaction.get(targetRef),
        transaction.get(actorUserRef),
        transaction.get(targetUserRef),
        transaction.get(followRef),
        transaction.get(rateRef),
        transaction.get(db.doc(`blocks/${uid}_${targetUid}`)),
        transaction.get(db.doc(`blocks/${targetUid}_${uid}`)),
      ]);
      if (!actorSnapshot.exists || !targetSnapshot.exists) {
        const error = new Error('A Community profile could not be found.');
        error.status = 404;
        throw error;
      }
      if (actorUserSnapshot.data()?.banned === true || targetUserSnapshot.data()?.banned === true) {
        const error = new Error('This account is not permitted to follow users.');
        error.status = 403;
        throw error;
      }
      const currentlyFollowing = followSnapshot.exists;
      const actor = actorSnapshot.data();
      const target = targetSnapshot.data();
      const actorHasLegacyFollow = Array.isArray(actor.following) && actor.following.includes(targetUid);
      const targetHasLegacyFollower = Array.isArray(target.followers) && target.followers.includes(uid);
      const relationshipExists = currentlyFollowing || actorHasLegacyFollow || targetHasLegacyFollower;
      if (body.following && !currentlyFollowing && (outgoingBlock.exists || incomingBlock.exists)) {
        const error = new Error('You cannot follow this user.');
        error.status = 403;
        throw error;
      }
      if (body.following === relationshipExists) {
        if (body.following && !currentlyFollowing) {
          consumeSocialActionRate(transaction, rateRef, rateSnapshot, 'lastFollowAt');
          const followingCount = profileCount(actor, 'followingCount', 'following') + (actorHasLegacyFollow ? 0 : 1);
          const followersCount = profileCount(target, 'followersCount', 'followers') + (targetHasLegacyFollower ? 0 : 1);
          transaction.create(followRef, {
            followerUid: uid,
            followingUid: targetUid,
            createdAt: FieldValue.serverTimestamp(),
          });
          transaction.update(actorRef, {
            following: FieldValue.arrayUnion(targetUid),
            followingCount,
            updatedAt: FieldValue.serverTimestamp(),
          });
          transaction.update(targetRef, {
            followers: FieldValue.arrayUnion(uid),
            followersCount,
            updatedAt: FieldValue.serverTimestamp(),
          });
          return { following: true, followersCount, followingCount };
        }
        return {
          following: relationshipExists,
          followersCount: profileCount(target, 'followersCount', 'followers'),
          followingCount: profileCount(actor, 'followingCount', 'following'),
        };
      }
      consumeSocialActionRate(transaction, rateRef, rateSnapshot, 'lastFollowAt');
      const followingCount = profileCount(actor, 'followingCount', 'following') +
        (body.following ? 1 : -(currentlyFollowing || actorHasLegacyFollow ? 1 : 0));
      const followersCount = profileCount(target, 'followersCount', 'followers') +
        (body.following ? 1 : -(currentlyFollowing || targetHasLegacyFollower ? 1 : 0));
      if (body.following) {
        transaction.create(followRef, {
          followerUid: uid,
          followingUid: targetUid,
          createdAt: FieldValue.serverTimestamp(),
        });
        transaction.update(actorRef, {
          following: FieldValue.arrayUnion(targetUid),
          followingCount: Math.max(0, followingCount),
          updatedAt: FieldValue.serverTimestamp(),
        });
        transaction.update(targetRef, {
          followers: FieldValue.arrayUnion(uid),
          followersCount: Math.max(0, followersCount),
          updatedAt: FieldValue.serverTimestamp(),
        });
      } else {
        transaction.delete(followRef);
        transaction.update(actorRef, {
          following: FieldValue.arrayRemove(targetUid),
          followingCount: Math.max(0, followingCount),
          updatedAt: FieldValue.serverTimestamp(),
        });
        transaction.update(targetRef, {
          followers: FieldValue.arrayRemove(uid),
          followersCount: Math.max(0, followersCount),
          updatedAt: FieldValue.serverTimestamp(),
        });
      }
      return {
        following: body.following,
        followersCount: Math.max(0, followersCount),
        followingCount: Math.max(0, followingCount),
      };
    });
    return json(response, 200, result);
  } catch (error) {
    return fail(response, error);
  }
};
