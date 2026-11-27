"use client";

import NextLink from "next/link";
import { getImageThumbnailUrl } from "@/app/ero/helpers";

type Props = {
  imageId: string;
  index: number;
  total: number;
};

export const GalleryItem = ({ imageId, index, total }: Props) => {
  return (
    <NextLink href={`/ero/${imageId}`} key={imageId}>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={getImageThumbnailUrl(imageId)}
        className="w-32 h-32 object-cover rounded-md grayscale-100 hover:rotate-10 transition-all duration-300 cursor-pointer"
        alt={`image ${index + 1} of ${total}`}
        title={`image ${index + 1} of ${total}`}
      />
    </NextLink>
  );
};
