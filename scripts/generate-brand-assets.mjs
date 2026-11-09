// Builds favicon.ico, icon.png, apple-icon.png and opengraph-image.png from the
// supplied brand SVGs in public/brand, and records each logo's dimensions so the
// page can reserve the right space (no layout shift). The SVGs are only read and
// rasterised — never modified. Runs automatically before `npm run build`.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const brandDir = path.join(root, "public/brand");
const appDir = path.join(root, "src/app");
const genDir = path.join(root, "src/generated");

const SAGE = "#A8B79B";
const files = {
  primary: "three-guys_primary_full-colour.svg",
  primaryOnDark: "three-guys_primary_full-colour-on-dark.svg",
  primarySlogan: "three-guys_primary-slogan_full-colour.svg",
  wordmark: "three-guys_wordmark_full-colour.svg",
  totem: "three-guys_icon_full-colour.svg",
  happyFace: "three-guys_face_full-colour.svg",
};

const svgs = {};
const dims = {};
const placeholders = [];
for (const [key, name] of Object.entries(files)) {
  const buf = await readFile(path.join(brandDir, name));
  svgs[key] = buf;
  const text = buf.toString("utf8");
  if (text.includes("PLACEHOLDER")) placeholders.push(name);
  const vb = text.match(/viewBox\s*=\s*["']\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/);
  const meta = await sharp(buf).metadata();
  dims[key] = {
    src: `/brand/${name}`,
    x: vb ? Number(vb[1]) : 0,
    y: vb ? Number(vb[2]) : 0,
    width: vb ? Number(vb[3]) : meta.width,
    height: vb ? Number(vb[4]) : meta.height,
  };
}

const raster = (buf, size) =>
  sharp(buf, { density: 600 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

/** Logo centred on a solid background with even padding. */
async function onBackground(buf, width, height, logoWidth, logoHeight) {
  const logo = await sharp(buf, { density: 600 })
    .resize(logoWidth, logoHeight, { fit: "inside" })
    .png()
    .toBuffer();
  return sharp({ create: { width, height, channels: 4, background: SAGE } })
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();
}

/** ICO container holding PNG images (valid in every current browser). */
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries = [];
  let offset = 6 + 16 * pngs.length;
  for (const { size, data } of pngs) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

// Icons use the totem (all three faces), by choice. The brand guide (p.5)
// recommends the happy face below 40px; set ICON = "happyFace" to switch back.
const ICON = "totem";

const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await raster(svgs[ICON], size) })),
);
await writeFile(path.join(appDir, "favicon.ico"), ico(icoPngs));
await writeFile(path.join(appDir, "icon.png"), await raster(svgs[ICON], 512));
// iOS fills transparency with black, so the apple icon sits on sage.
await writeFile(path.join(appDir, "apple-icon.png"), await onBackground(svgs[ICON], 180, 180, 150, 150));
await writeFile(path.join(appDir, "opengraph-image.png"), await onBackground(svgs.primary, 1200, 630, 760, 380));

await mkdir(genDir, { recursive: true });
await writeFile(path.join(genDir, "brand.json"), JSON.stringify(dims, null, 2) + "\n");

console.log("Brand assets generated from public/brand.");
if (placeholders.length) {
  console.warn(
    "\n\x1b[33m⚠ Placeholder logos still in public/brand:\x1b[0m\n  " +
      placeholders.join("\n  ") +
      "\n  Replace them with the supplied brand files (see public/brand/README.md).\n",
  );
}
