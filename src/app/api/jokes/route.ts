import { NextResponse } from "next/server";
import type { TJoke } from "@/app/jokes/types";
import { jokes } from "@/app/api/jokes/jokes";

export const GET = async (): Promise<NextResponse<TJoke[]>> =>
  NextResponse.json(jokes);
