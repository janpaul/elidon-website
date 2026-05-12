import { list } from "@vercel/blob";

const prefix = "erotigif/";
const postfix = ".mp4";

export const getErotigifs = async () => {
  const images = await list({ prefix });
  return images.blobs
    .map((b) => b.pathname)
    .map((n) => n.replace(prefix, ""))
    .map((n) => n.replace(postfix, ""))
    .sort((a, b) => a.localeCompare(b));
};

export const erotigifImageUri = (id: string) =>
  `https://rvalfhikxfvgaxsh.public.blob.vercel-storage.com/${prefix}${id}${postfix}`;
