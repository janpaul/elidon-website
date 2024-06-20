import { NextResponse } from "next/server";
import { bookmarks, type Bookmark } from "@/data/bookmarks";

export const revalidate = 7_200;

export const GET = async (): Promise<NextResponse<Bookmark[]>> =>
  NextResponse.json(bookmarks.sort((a, b) => a.title.localeCompare(b.title)));
