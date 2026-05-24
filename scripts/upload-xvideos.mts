import { put, list } from "@vercel/blob";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const CLIPS_DIR = `${process.env.HOME}/Downloads/xvideos`;

const existing = await list({ prefix: "xvideos/" });
const existingNames = new Set(existing.blobs.map((b) => b.pathname));

const files = (await readdir(CLIPS_DIR)).filter((f) => f.endsWith(".mp4"));

for (const file of files) {
  const pathname = `xvideos/${file}`;

  if (existingNames.has(pathname)) {
    console.log(`Skip ${file} (already uploaded)`);
    continue;
  }

  const body = await readFile(join(CLIPS_DIR, file));
  const blob = await put(pathname, body, {
    access: "public",
    contentType: "video/mp4",
    addRandomSuffix: false,
  });
  console.log(`✓ ${file} → ${blob.url}`);
}
