import type { Bookmark as TBookmark, Tag } from "@/data/bookmarks";

export type SortDirection = "asc" | "desc";

export const tagSorter = (dir: SortDirection) => (a: string, b: string) =>
  dir === "asc" ? a.localeCompare(b) : b.localeCompare(a);
export const bookmarksSorter =
  (dir: SortDirection) => (a: TBookmark, b: TBookmark) =>
    dir === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);

export const tagsFromBookmarks = (bookmarks: TBookmark[]): Set<Tag> =>
  bookmarks.reduce((acc: Set<Tag>, bookmark: TBookmark) => {
    if (bookmark.tags) {
      bookmark.tags.forEach((tag) => acc.add(tag));
    }
    return acc;
  }, new Set<Tag>());
