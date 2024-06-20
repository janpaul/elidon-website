"use client";

import { useState } from "react";
import useSWR from "swr";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import {
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { fetcher } from "@/lib";
import type { Bookmark as TBookmark, Tag } from "@/app/bm/types";
import { Bookmark } from "@/app/bm/bookmark";
import { TagIcon } from "@/app/bm/tag-icon";
import {
  SortDirection,
  tagSorter,
  bookmarksSorter,
  tagsFromBookmarks,
} from "@/app/bm/helpers";

export const revalidate = 7_200;

type BookmarkGrouping = "title" | "tag";

export const ShowBookmarks = ({ bookmarks }: { bookmarks: TBookmark[] }) => (
  <div className="flex flex-col gap-1">
    {bookmarks.map((bookmark) => (
      <Bookmark key={bookmark.title} bookmark={bookmark} />
    ))}
  </div>
);

export const Bookmarks = () => {
  const { data: bookmarks } = useSWR<TBookmark[]>(`/api/bookmarks`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  const [grouping, setGrouping] = useState<BookmarkGrouping>("title");
  const [selectedTag, setSelectedTag] = useState<Tag>("all");
  const [sorting, setSorting] = useState<SortDirection>("asc");
  const [search, setSearch] = useState<string>("");
  const _tagSorter = tagSorter(sorting);
  const _bookmarksSorter = bookmarksSorter(sorting);
  const _bookmarksTitleFilter = (bookmark: TBookmark) =>
    bookmark.title.toLowerCase().includes(search.toLowerCase());
  const _bookmarksTagFilter = (bookmark: TBookmark) =>
    selectedTag === "all" ? true : bookmark.tags?.includes(selectedTag);
  if (bookmarks) {
    const tags = tagsFromBookmarks(bookmarks);
    const bookmarksFiltered = bookmarks
      .filter(_bookmarksTitleFilter)
      .filter(_bookmarksTagFilter);

    return (
      <>
        <section
          id="bookmarks-control"
          className="mb-2 flex flex-col lg:flex-row gap-2 items-start"
        >
          <div className="flex flex-col gap-2 grow min-w-[200px] justify-start">
            <ButtonGroup size="sm">
              <Tooltip content="Display by title" showArrow delay={500}>
                <Button
                  type="button"
                  color={grouping === "title" ? "primary" : "default"}
                  onClick={() => setGrouping("title")}
                >
                  By title
                </Button>
              </Tooltip>
              <Tooltip content="Display grouped by tag" showArrow delay={500}>
                <Button
                  type="button"
                  color={grouping === "tag" ? "primary" : "default"}
                  onClick={() => setGrouping("tag")}
                >
                  By tag
                </Button>
              </Tooltip>
            </ButtonGroup>
            <ButtonGroup size="sm">
              <Tooltip content="Sorting ascending" showArrow delay={500}>
                <Button
                  type="button"
                  color={sorting === "asc" ? "primary" : "default"}
                  onClick={() => setSorting("asc")}
                >
                  <IconSortAscendingLetters size={16} />
                  asc
                </Button>
              </Tooltip>
              <Tooltip content="Sorting descending" showArrow delay={500}>
                <Button
                  type="button"
                  color={sorting === "desc" ? "primary" : "default"}
                  onClick={() => setSorting("desc")}
                >
                  <IconSortDescendingLetters size={16} />
                  desc
                </Button>
              </Tooltip>
            </ButtonGroup>
            <Input
              type="search"
              size="sm"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              color="default"
              variant="flat"
              placeholder="Search bookmarks..."
            />
          </div>

          <div className="flex flex-row gap-1 flex-wrap grow-0">
            <Tooltip content="Show all tags" showArrow delay={500}>
              <Button
                size="sm"
                color={selectedTag === "all" ? "primary" : "default"}
                disabled={selectedTag === "all"}
                onClick={() => setSelectedTag("all")}
              >
                <TagIcon tag="all" size={16} />
                ALL
              </Button>
            </Tooltip>
            {Array.from(tags)
              .sort(_tagSorter)
              .map((tag) => (
                <Tooltip
                  key={tag}
                  content={`Show only "${tag}" bookmarks`}
                  showArrow
                  delay={500}
                >
                  <Button
                    size="sm"
                    color={selectedTag === tag ? "primary" : "default"}
                    onClick={() => setSelectedTag(tag)}
                    disabled={selectedTag === tag}
                  >
                    <TagIcon tag={tag} size={16} />
                    {tag}
                  </Button>
                </Tooltip>
              ))}
          </div>
        </section>

        {grouping === "title" && (
          <section data-test="bookmarks-list-title">
            <ShowBookmarks
              bookmarks={bookmarksFiltered.sort(_bookmarksSorter)}
            />
          </section>
        )}

        {grouping === "tag" && (
          <section
            data-test="bookmarks-list-tag"
            className="flex flex-col gap-2"
          >
            {Array.from(tags)
              .sort(_tagSorter)
              .map(
                (tag) =>
                  (selectedTag === "all" || selectedTag === tag) && (
                    <Card
                      key={tag}
                      data-test={`bookmarks-list-tag-${tag}`}
                      className="p-4"
                    >
                      <CardHeader className="flex gap-3">
                        <TagIcon tag={tag} />
                        <h4 className="text-small text-default-500">
                          {tag.toUpperCase()}
                        </h4>
                      </CardHeader>
                      <Divider className="my-2" />
                      <CardBody>
                        <ShowBookmarks
                          bookmarks={bookmarksFiltered.filter(
                            (bookmark) =>
                              bookmark.tags && bookmark.tags.includes(tag),
                          )}
                        />
                      </CardBody>
                    </Card>
                  ),
              )}
          </section>
        )}
      </>
    );
  }
  return null;
};
