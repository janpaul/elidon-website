import { NextResponse } from "next/server";

type TSitemap = {
  [key: string]: {
    changefreq: "monthly" | "weekly" | "daily"; // there are more options
    priority: number;
    lastmod?: string;
  };
};

export const GET = async (): Promise<NextResponse<{ sitemap: TSitemap }>> => {
  const sitemap: TSitemap = {
    "/": {
      changefreq: "monthly",
      priority: 1,
    },
  };
  return NextResponse.json({ sitemap });
};
