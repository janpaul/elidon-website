import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { TagIcon } from "@/app/bm/tag-icon";
import type { Bookmark as TBookmark } from "@/data/bookmarks";
import { tagSorter } from "@/app/bm/helpers";
import { FavIcon } from "@/app/bm/fav-icon";

type Props = {
  bookmark: TBookmark;
};
export const Bookmark = ({ bookmark }: Props) => (
  <div className="flex flex-row gap-2 items-center">
    <FavIcon bookmark={bookmark} />
    <Link
      href={bookmark.url}
      color="primary"
      size="md"
      underline="hover"
      target="_blank"
      className="grow"
    >
      {bookmark.title.toUpperCase()}
    </Link>
    {bookmark.tags && (
      <div className="flex flex-row gap-1">
        {bookmark.tags?.sort(tagSorter("asc")).map((tag) => (
          <Chip
            key={tag}
            size="sm"
            radius="sm"
            color="primary"
            variant="bordered"
            startContent={<TagIcon tag={tag} size={16} />}
          >
            {tag.toLowerCase()}
          </Chip>
        ))}
      </div>
    )}
  </div>
);
