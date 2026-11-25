export const CDN = "https://cdn.elidon.net";
export const EROTIGIF_BASE = "erotigif";
const IMAGES_URL = `${CDN}/${EROTIGIF_BASE}/erotigif.json`;

export const getEroticImageIds = async (
  revalidate: number,
): Promise<string[]> => {
  const res = await fetch(IMAGES_URL, { next: { revalidate } });
  if (!res.ok) throw new Error(`Failed to fetch ${IMAGES_URL}: ${res.status}`);
  const body = (await res.json()) as string[];
  return body.map((id) => id.replace(/\.mp4$/, ""));
};

export const getImageUrl = (id: string) => `${CDN}/${EROTIGIF_BASE}/${id}.mp4`;
