insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "Public read media" on storage.objects;

create policy "Public read media"
on storage.objects for select
to public
using (bucket_id = 'media');
