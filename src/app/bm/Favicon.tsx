import { Image } from "@nextui-org/image";
import type { Bookmark } from "@/data/bookmarks";

type Props = {
  bookmark: Bookmark;
};

export const Favicon = ({ bookmark }: Props) => {
  const urlObj = new URL(bookmark.url);
  const faviconUrl = `//www.google.com/s2/favicons?domain=${urlObj.hostname}`;

  return <Image src={faviconUrl} width={16} height={16} alt={`favicon`} />;
};
