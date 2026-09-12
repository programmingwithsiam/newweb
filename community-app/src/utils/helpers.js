// Small pure-function helpers shared across components.

export function timeAgo(ts) {
  if (!ts) return '';
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d`;
  return new Date(ts).toLocaleDateString();
}

export function extractHashtags(text = '') {
  const matches = text.match(/#[\p{L}0-9_]+/gu) || [];
  // de-dupe, strip '#', lowercase for the index key but keep original for display
  const seen = new Set();
  const tags = [];
  for (const m of matches) {
    const clean = m.slice(1);
    const key = clean.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      tags.push(key);
    }
  }
  return tags;
}

export function linkifyHashtags(text = '') {
  return text.split(/(\s+)/).map((word, i) => {
    if (word.startsWith('#') && word.length > 1) {
      return { type: 'hashtag', value: word, key: i };
    }
    return { type: 'text', value: word, key: i };
  });
}

const hostWithoutWww = (url) => new URL(url).hostname.toLowerCase().replace(/^www\./, '');

// Return an official provider embed URL when one can be built locally.
export function getEmbedUrl(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = hostWithoutWww(url);
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com') {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
      const shortsMatch = u.pathname.match(/\/shorts\/([\w-]+)/);
      if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    }
    if (host === 'youtu.be') {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (host === 'vimeo.com') {
      const id = u.pathname.split('/').filter(Boolean)[0];
      if (id) return `https://player.vimeo.com/video/${id}`;
    }
    if (isFacebookUrl(url)) {
      const cleanUrl = getFacebookEmbedSource(url);
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(cleanUrl)}&show_text=false&width=560`;
    }
    if (host === 'instagram.com') {
      const match = u.pathname.match(/\/(p|reel|reels)\/([^/]+)/i);
      if (match) return `https://www.instagram.com/${match[1].toLowerCase()}/${match[2]}/embed`;
    }
    if (host === 'tiktok.com') {
      const match = u.pathname.match(/\/video\/(\d+)/i);
      if (match) return `https://www.tiktok.com/player/v1/${match[1]}?description=1&music_info=1`;
    }
    if (host === 'x.com' || host === 'twitter.com') {
      const match = u.pathname.match(/\/status\/(\d+)/i);
      if (match) return `https://platform.twitter.com/embed/Tweet.html?id=${match[1]}`;
    }
    if (host === 'threads.net' || host === 'threads.com') {
      const match = u.pathname.match(/(\/[@\w.-]+\/post\/[^/]+)/i);
      if (match) return `https://www.threads.net${match[1]}/embed`;
    }
    if (host === 'pinterest.com' || host === 'pin.it') {
      const match = u.pathname.match(/\/pin\/(\d+)/i);
      if (match) return `https://assets.pinterest.com/ext/embed.html?id=${match[1]}`;
    }
    if (host === 'soundcloud.com') {
      return `https://w.soundcloud.com/player/?url=${encodeURIComponent(`${u.origin}${u.pathname}`)}&color=%23ff5500&auto_play=false`;
    }
    if (host === 'open.spotify.com') {
      const match = u.pathname.match(/^\/(track|album|playlist|episode|show)\/([^/]+)/i);
      if (match) return `https://open.spotify.com/embed/${match[1]}/${match[2]}`;
    }
    if (/\.(mp4|webm|ogg|mov|m4v)$/i.test(u.pathname)) return url;
  } catch {
    return null;
  }
  return null;
}

export function getFacebookEmbedSource(url = '') {
  try {
    const parsed = new URL(url);
    return isFacebookUrl(url) ? `https://www.facebook.com${parsed.pathname}` : url;
  } catch {
    return url;
  }
}

export function getEmbedProvider(url = '') {
  try {
    const host = hostWithoutWww(url);
    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'music.youtube.com' || host === 'youtu.be') return 'youtube';
    if (host === 'vimeo.com') return 'vimeo';
    if (isFacebookUrl(url)) return 'facebook';
    if (host === 'instagram.com') return 'instagram';
    if (host === 'tiktok.com') return 'tiktok';
    if (host === 'x.com' || host === 'twitter.com') return 'x';
    if (host === 'threads.net' || host === 'threads.com') return 'threads';
    if (host === 'pinterest.com' || host === 'pin.it') return 'pinterest';
    if (host === 'soundcloud.com') return 'soundcloud';
    if (host === 'open.spotify.com') return 'spotify';
    if (/\.(mp4|webm|ogg|mov|m4v)$/i.test(new URL(url).pathname)) return 'direct';
  } catch {
    return null;
  }
  return null;
}

export function isFacebookUrl(url = '') {
  try {
    const hostname = new URL(url).hostname;
    return hostname === 'facebook.com'
      || hostname.endsWith('.facebook.com')
      || hostname === 'fb.watch';
  } catch {
    return false;
  }
}

export function isFacebookReelUrl(url = '') {
  try {
    return isFacebookUrl(url) && /\/(reel|reels|share\/r)\//i.test(new URL(url).pathname);
  } catch {
    return false;
  }
}

export function isValidVideoUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

export function usernameToKey(username = '') {
  return username.trim().toLowerCase();
}

export function validateUsername(username) {
  return /^[a-zA-Z0-9_.]{3,20}$/.test(username);
}
