import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import type { Bookmark as TBookmark } from "@/data/bookmarks";

type Props = {
  bookmark: TBookmark;
};
export const Bookmark = ({ bookmark }: Props) => (
  <div className="flex flex-row gap-2">
    <Link
      href={bookmark.url}
      color="primary"
      size="md"
      underline="hover"
      target="_blank"
      className="grow"
    >
      {bookmark.title}
    </Link>
    {bookmark.tags && (
      <div className="flex flex-row gap-1">
        {bookmark.tags?.map((tag) => (
          <Chip key={tag} size="sm" radius="sm" color="primary">
            {tag.toLowerCase()}
          </Chip>
        ))}
      </div>
    )}
  </div>
);
