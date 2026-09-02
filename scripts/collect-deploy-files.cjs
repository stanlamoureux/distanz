const fs = require("fs");
const path = require("path");

const root = process.cwd();
const skipDir = new Set([
  "node_modules",
  ".next",
  ".tmp-npm-cache",
  ".git",
  ".agents",
  ".claude",
  ".cursor",
  "skills",
  ".tmp-skills",
]);
const skipFile = new Set([
  ".env",
  ".env.local",
  ".env.production",
  "tsconfig.tsbuildinfo",
  ".tmp-deploy-files.json",
]);
const skipExt = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".ico", ".woff", ".woff2"]);

const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDir.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (skipFile.has(entry.name)) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (skipExt.has(ext)) continue;
    const rel = path.relative(root, full).split(path.sep).join("/");
    if (rel.startsWith("public/media/")) continue;
    const data = fs.readFileSync(full, "utf8");
    files.push({ file: rel, data, bytes: Buffer.byteLength(data) });
  }
}

walk(root);
files.sort((a, b) => a.file.localeCompare(b.file));
const total = files.reduce((n, f) => n + f.bytes, 0);
console.log(`count=${files.length} bytes=${total}`);
for (const f of files) console.log(`${f.bytes}\t${f.file}`);
fs.writeFileSync(
  path.join(root, ".tmp-deploy-files.json"),
  JSON.stringify(files.map(({ file, data }) => ({ file, data }))),
);
console.log("wrote .tmp-deploy-files.json");
