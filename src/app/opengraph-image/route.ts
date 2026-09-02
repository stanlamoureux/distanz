import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

/** Messengers that still hit /opengraph-image get the photo, not the old black block. */
export async function GET() {
  const file = await readFile(join(process.cwd(), "public/og-share-v8.jpg"));
  return new Response(file, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
