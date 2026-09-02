import { createClient } from "@supabase/supabase-js";
import { readFile } from "node:fs/promises";
import path from "node:path";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  process.exit(1);
}

const supabase = createClient(url, key);
const files = [
  "hero-night.png",
  "avant-trottoir.png",
  "apres-ville.png",
  "studio-roue.png",
];

const { error: bucketError } = await supabase.storage.createBucket("media", {
  public: true,
  fileSizeLimit: "8MB",
});

if (bucketError && !/already exists/i.test(bucketError.message)) {
  console.warn("Bucket:", bucketError.message);
}

for (const file of files) {
  const buf = await readFile(path.join("public", "media", file));
  const { error } = await supabase.storage.from("media").upload(file, buf, {
    contentType: "image/png",
    upsert: true,
  });
  if (error) {
    console.error(file, error.message);
  } else {
    console.log("uploaded", file);
  }
}
