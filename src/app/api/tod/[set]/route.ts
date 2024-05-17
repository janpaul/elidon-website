import { NextResponse } from "next/server";
import { truthOrDrinkCards, type TruthOrDrinkCard } from "@/data/tod";

type Props = {
  params: { set: string };
};
export const GET = async (
  request: Request,
  { params: { set } }: Props,
): Promise<NextResponse<TruthOrDrinkCard>> => {
  console.log(set);
  const card =
    truthOrDrinkCards[Math.floor(Math.random() * truthOrDrinkCards.length)];
  return NextResponse.json(card ?? {});
};
