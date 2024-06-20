import { Image } from "@nextui-org/image";
import type { Bookmark } from "@/app/bm/types";

type Props = {
  bookmark: Bookmark;
};

export const FavIcon = ({ bookmark }: Props) => {
  const urlObj = new URL(bookmark.url);
  const faviconUrl = `//www.google.com/s2/favicons?domain=${urlObj.hostname}`;

  return <Image src={faviconUrl} width={16} height={16} alt={`favicon`} />;
};
