import { list } from "@vercel/blob";

const postfix = ".mp4";

export type XxxType = "erotigif" | "xvideos";

const getPrefix = (type: XxxType) => `${type}/`;

export const getXxxVideos = async (type: XxxType) => {
  const prefix = getPrefix(type);
  const images = await list({ prefix });
  return images.blobs
    .map((b) => b.pathname)
    .map((n) => n.replace(prefix, ""))
    .map((n) => n.replace(postfix, ""))
    .sort((a, b) => a.localeCompare(b));
};

export const xxxImageUri = (type: XxxType) => (id: string) =>
  `https://rvalfhikxfvgaxsh.public.blob.vercel-storage.com/${getPrefix(type)}${id}${postfix}`;
