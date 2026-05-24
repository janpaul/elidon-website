import { list } from "@vercel/blob";

const postfix = ".mp4";

export type XxxType = "erotigif" | "xvideos";

const getPrefix = (type: XxxType) => `${type}/`;

const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

export const getXxxVideos = async (type: XxxType) => {
  const prefix = getPrefix(type);
  const images = await list({ prefix });
  return shuffle(
    images.blobs
      .map((b) => b.pathname)
      .map((n) => n.replace(prefix, ""))
      .map((n) => n.replace(postfix, ""))
      .sort((a, b) => a.localeCompare(b))
      .filter(Boolean),
  );
};

export const xxxImageUri = (type: XxxType) => (id: string) =>
  `https://rvalfhikxfvgaxsh.public.blob.vercel-storage.com/${getPrefix(type)}${id}${postfix}`;
