import { NextResponse } from "next/server";
import { bookmarks } from "@/app/api/bookmarks/bookmarks";
import type { Bookmark } from "@/app/bm/types";

export const revalidate = 7_200;

export const GET = async (): Promise<NextResponse<Bookmark[]>> =>
  NextResponse.json(bookmarks.sort((a, b) => a.title.localeCompare(b.title)));
