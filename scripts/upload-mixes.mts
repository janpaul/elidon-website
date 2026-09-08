import { put, list } from "@vercel/blob";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const MIXES_DIR = `${process.env.HOME}/Downloads`;

const existing = await list({ prefix: "dj/" });
const existingNames = new Set(existing.blobs.map((b) => b.pathname));

const files = (await readdir(MIXES_DIR)).filter((f) => f.endsWith(".m4a"));

for (const file of files) {
  const pathname = `dj/${file}`;
  if (existingNames.has(pathname)) {
    console.log(`skip ${file} (already uploaded)`);
    continue;
  }

  const body = await readFile(join(MIXES_DIR, file));
  console.log(`uploading ${file}...`);
  const blob = await put(pathname, body, {
    access: "public",
    contentType: "audio/m4a",
    addRandomSuffix: false,
  });
  console.log(`✓ ${file} → ${blob.url}`);
}
