"use client";

import { useState } from "react";
import useSWR from "swr";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { fetcher } from "@/lib";
import type { Bookmark as TBookmark } from "@/data/bookmarks";
import { Bookmark } from "@/app/bm/bookmark";
import { TagIcon } from "@/app/bm/tag-icon";

export const revalidate = 7_200;

type BookmarkGrouping = "title" | "tag";

const tagsFromBookmarks = (bookmarks: TBookmark[]): Set<string> =>
  bookmarks.reduce((acc: Set<string>, bookmark: TBookmark) => {
    if (bookmark.tags) {
      bookmark.tags.forEach((tag) => acc.add(tag));
    }
    return acc;
  }, new Set<string>());

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
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  if (bookmarks) {
    const tags = tagsFromBookmarks(bookmarks);
    const bookmarksFiltered = selectedTag
      ? bookmarks.filter((bookmark) => bookmark.tags?.includes(selectedTag))
      : bookmarks;
    return (
      <>
        <section
          id="bookmarks-control"
          className="mb-2 flex flex-col lg:flex-row gap-2 items-start"
        >
          <ButtonGroup size="sm">
            <Button
              type="button"
              color={grouping === "title" ? "primary" : "default"}
              onClick={() => setGrouping("title")}
            >
              By title
            </Button>
            <Button
              type="button"
              color={grouping === "tag" ? "primary" : "default"}
              onClick={() => setGrouping("tag")}
            >
              By tag
            </Button>
          </ButtonGroup>
          {/*<ButtonGroup size="sm" className="flex-wrap">*/}
          <div className="flex flex-row gap-1 flex-wrap">
            <Button
              size="sm"
              color={!selectedTag ? "primary" : "default"}
              onClick={() => setSelectedTag(undefined)}
            >
              <TagIcon tag="all" size={16} />
              ALL
            </Button>
            {Array.from(tags)
              .sort()
              .map((tag) => (
                <Button
                  key={tag}
                  size="sm"
                  color={selectedTag === tag ? "primary" : "default"}
                  onClick={() => setSelectedTag(tag)}
                >
                  <TagIcon tag={tag} size={16} />
                  {tag}
                </Button>
              ))}
          </div>
          {/*</ButtonGroup>*/}
        </section>

        {grouping === "title" && (
          <section data-test="bookmarks-list-title">
            <ShowBookmarks bookmarks={bookmarksFiltered} />
          </section>
        )}

        {grouping === "tag" && (
          <section
            data-test="bookmarks-list-tag"
            className="flex flex-col gap-2"
          >
            {Array.from(tags)
              .sort()
              .map(
                (tag) =>
                  (selectedTag === undefined || selectedTag === tag) && (
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
