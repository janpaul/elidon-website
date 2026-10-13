import type { SlideshowLoader } from "@/components/slideshow";

const CDN = "https://cdn.elidon.net";

export const xxxImageUri = (id: string) => `${CDN}/erotigif/${id}`;
export const xvideoUri = (video: string) => `${CDN}/xvideos/${video}`;
export const xvideoThumbUri = (video: string) =>
  `${CDN}/xvideos/thumbs/${video.replace(/\.mp4$/i, ".jpg")}`;

export const loaders: Record<SlideshowLoader, (id: string) => string> = {
  xvideos: xvideoUri,
  erotigif: xxxImageUri,
};
