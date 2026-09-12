-- The app uses Firebase Auth, so Supabase receives these uploads as anon.
-- Keep the bucket limited to image files in the Supabase bucket settings.
create policy "Allow community image uploads"
on storage.objects
for insert
to anon, authenticated
with check (
  bucket_id = 'community-images'
  and (metadata->>'mimetype') like 'image/%'
);