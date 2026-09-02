/**
 * Rasterize the DISTANZ mark (black square + volt D) to PNG + ICO.
 * Supersampled even-odd fill of the same path used in the SVG mark.
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const VOLT = [0xc8, 0xf5, 0x42, 0xff];
const INK = [0x00, 0x00, 0x00, 0xff];

function cubic(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const uu = u * u;
  const uuu = uu * u;
  const tt = t * t;
  const ttt = tt * t;
  return [
    uuu * p0[0] + 3 * uu * t * p1[0] + 3 * u * tt * p2[0] + ttt * p3[0],
    uuu * p0[1] + 3 * uu * t * p1[1] + 3 * u * tt * p2[1] + ttt * p3[1],
  ];
}

function sampleBezier(p0, p1, p2, p3, steps = 28) {
  const pts = [];
  for (let i = 0; i <= steps; i++) pts.push(cubic(p0, p1, p2, p3, i / steps));
  return pts;
}

/** Same letterform as mark-geometry.ts, as two closed rings (outer, inner). */
function dRings() {
  const outer = [
    [7.5, 6],
    [13.8, 6],
    ...sampleBezier([13.8, 6], [18.2, 6], [21.6, 7.15], [22.95, 9.35]),
    ...sampleBezier([22.95, 9.35], [24.1, 11.25], [24.55, 13.45], [24.55, 16]),
    ...sampleBezier([24.55, 16], [24.55, 18.55], [24.1, 20.75], [22.95, 22.65]),
    ...sampleBezier([22.95, 22.65], [21.6, 24.85], [18.2, 26], [13.8, 26]),
    [7.5, 26],
  ];
  const inner = [
    [13.1, 10.4],
    [14.05, 10.4],
    ...sampleBezier([14.05, 10.4], [16.4, 10.4], [18.15, 11.15], [18.9, 12.45]),
    ...sampleBezier([18.9, 12.45], [19.55, 13.55], [19.8, 14.7], [19.8, 16]),
    ...sampleBezier([19.8, 16], [19.8, 17.3], [19.55, 18.45], [18.9, 19.55]),
    ...sampleBezier([18.9, 19.55], [18.15, 20.85], [16.4, 21.6], [14.05, 21.6]),
    [13.1, 21.6],
  ];
  return [outer, inner];
}

function pointInRings(x, y, rings) {
  let inside = false;
  for (const poly of rings) {
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const yi = poly[i][1];
      const yj = poly[j][1];
      const xi = poly[i][0];
      const xj = poly[j][0];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
  }
  return inside;
}

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const header = Buffer.alloc(8);
  header.writeUInt32BE(data.length, 0);
  header.write(type, 4, 4, "ascii");
  const crcBuf = Buffer.concat([header.subarray(4), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcBuf), 0);
  return Buffer.concat([header, data, crc]);
}

function encodePng(width, height, rgba) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (width * 4 + 1)] = 0;
    rgba.copy(raw, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function renderMark(size, samples = 5) {
  const rings = dRings();
  const rgba = Buffer.alloc(size * size * 4);
  const scale = 32 / size;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let volt = 0;
      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const px = (x + (sx + 0.5) / samples) * scale;
          const py = (y + (sy + 0.5) / samples) * scale;
          if (pointInRings(px, py, rings)) volt++;
        }
      }
      const t = volt / (samples * samples);
      const i = (y * size + x) * 4;
      rgba[i] = Math.round(INK[0] * (1 - t) + VOLT[0] * t);
      rgba[i + 1] = Math.round(INK[1] * (1 - t) + VOLT[1] * t);
      rgba[i + 2] = Math.round(INK[2] * (1 - t) + VOLT[2] * t);
      rgba[i + 3] = 255;
    }
  }
  return encodePng(size, size, rgba);
}

function encodeIco(pngs) {
  const count = pngs.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const entries = Buffer.alloc(16 * count);
  const images = [];
  let offset = 6 + 16 * count;
  pngs.forEach(({ size, data }, i) => {
    const e = entries.subarray(i * 16, i * 16 + 16);
    e[0] = size === 256 ? 0 : size;
    e[1] = size === 256 ? 0 : size;
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    images.push(data);
  });
  return Buffer.concat([header, entries, ...images]);
}

const png16 = renderMark(16, 6);
const png32 = renderMark(32, 5);
const png48 = renderMark(48, 4);

const ico = encodeIco([
  { size: 16, data: png16 },
  { size: 32, data: png32 },
  { size: 48, data: png48 },
]);

const targets = [
  join(root, "src", "app", "favicon.ico"),
  join(root, "public", "icon-32.png"),
  join(root, "src", "app", "icon.png"),
];

mkdirSync(join(root, "public"), { recursive: true });
mkdirSync(join(root, "src", "app"), { recursive: true });

writeFileSync(join(root, "src", "app", "favicon.ico"), ico);
writeFileSync(join(root, "public", "icon-32.png"), png32);
writeFileSync(join(root, "src", "app", "icon.png"), png32);

console.log(
  "Wrote",
  targets.map((t) => t.slice(root.length + 1)).join(", "),
);
