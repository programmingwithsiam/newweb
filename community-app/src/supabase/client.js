import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const bucketName = import.meta.env.VITE_SUPABASE_BUCKET || 'community-images';

function withTimeout(promise, message, milliseconds = 12000) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error(message)), milliseconds);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function uploadCommunityImage(file, path) {
  if (!supabase) {
    throw new Error('Supabase image storage is not configured.');
  }
  if (!file.type.startsWith('image/')) {
    throw new Error('Only image files are allowed.');
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error('Image is too large (max 5MB).');
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-');
  const objectPath = `${path}/${Date.now()}-${safeName}`;
  const { error } = await withTimeout(
    supabase.storage
      .from(bucketName)
      .upload(objectPath, file, { contentType: file.type, upsert: false }),
    'Image upload timed out. Check the Supabase bucket policy and try again.'
  );

  if (error) throw error;
  const { data } = supabase.storage.from(bucketName).getPublicUrl(objectPath);
  return data.publicUrl;
}