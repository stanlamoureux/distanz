export const MEDIA_FILES = [
  "hero-night.png",
  "avant-obstacles.png",
  "apres-ville.png",
  "studio-roue.png",
  "benefit-obstacles.png",
  "benefit-motor.png",
  "benefit-clip.png",
  "benefit-carry.png",
  "benefit-offroad.png",
  "benefit-autonomy.png",
  "wheel-static.png",
  "compare-now.png",
  "compare-with.png",
] as const;

export type MediaFile = (typeof MEDIA_FILES)[number];

export function localMedia(file: MediaFile): string {
  return `/media/${file}`;
}

export function mediaSrc(file: MediaFile): string {
  return localMedia(file);
}
