/**
 * 1200×630 share image. The center 630×630 is a daylight product photo
 * (person + DISTANZ clipped at the front) so messenger 1:1 crops stay relevant.
 */
import sharp from "sharp";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MARK_D_PATH =
  "M7.5 6H13.8C18.2 6 21.6 7.15 22.95 9.35C24.1 11.25 24.55 13.45 24.55 16C24.55 18.55 24.1 20.75 22.95 22.65C21.6 24.85 18.2 26 13.8 26H7.5V6ZM13.1 10.4H14.05C16.4 10.4 18.15 11.15 18.9 12.45C19.55 13.55 19.8 14.7 19.8 16C19.8 17.3 19.55 18.45 18.9 19.55C18.15 20.85 16.4 21.6 14.05 21.6H13.1V10.4Z";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const W = 1200;
const H = 630;
const srcPath = join(root, "public/media/hero-night.png");
const out = join(root, "public/og-share-v8.jpg");

const meta = await sharp(srcPath).metadata();
if (!meta.width || !meta.height) throw new Error("missing source dimensions");

const zoom = 1.12;
const cropW = Math.round(meta.width / zoom);
const cropH = Math.round((cropW * H) / W);
let left = Math.round((meta.width - cropW) / 2);
let top = Math.round((meta.height - cropH) / 2 - meta.height * 0.08);
top = Math.max(0, Math.min(meta.height - cropH, top));
left = Math.max(0, Math.min(meta.width - cropW, left));

const badgeSize = 56;
const badge = Buffer.from(
  `<svg width="${badgeSize}" height="${badgeSize}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" fill="#000000"/><path fill="#C8F542" fill-rule="evenodd" d="${MARK_D_PATH}"/></svg>`,
);

await sharp(srcPath)
  .extract({ left, top, width: cropW, height: cropH })
  .resize(W, H)
  .composite([
    {
      input: badge,
      left: 285 + 630 - 18 - badgeSize,
      top: H - 18 - badgeSize,
    },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(out);

console.log("Wrote", out);
