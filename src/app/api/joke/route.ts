import { NextResponse } from "next/server";
import { jokes } from "@/data/jokes";

export const revalidate = 30;

export const GET = async (): Promise<NextResponse<string>> => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return NextResponse.json(joke instanceof Array ? joke.join(`\n`) : joke);
};
