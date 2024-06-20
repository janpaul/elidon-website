import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Tooltip } from "@nextui-org/tooltip";

import { TagIcon } from "@/app/bm/tag-icon";
import type { Bookmark as TBookmark } from "@/app/bm/types";
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
      <Tooltip
        content={bookmark.description ?? bookmark.title}
        showArrow
        placement="top"
        delay={500}
      >
        {bookmark.title}
      </Tooltip>
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
            <Tooltip
              content={tag}
              color="primary"
              placement="bottom"
              delay={500}
            >
              {tag.toLowerCase()}
            </Tooltip>
          </Chip>
        ))}
      </div>
    )}
  </div>
);
