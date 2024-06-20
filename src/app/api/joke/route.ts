import { NextResponse } from "next/server";
import { jokes } from "@/app/api/jokes/jokes";

export const revalidate = 60;

export const GET = async (): Promise<NextResponse<string>> => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return NextResponse.json(joke instanceof Array ? joke.join(`\n`) : joke);
};
