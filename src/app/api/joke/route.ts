import { NextResponse } from "next/server";
import data from "@/data/jokes.json";

type JokeT = string[];
const jokes = data as JokeT[];

export const revalidate = 30;

export const GET = async (): Promise<NextResponse<JokeT>> => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return NextResponse.json(joke);
};
