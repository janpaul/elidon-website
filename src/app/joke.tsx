"use client";
import { Snippet } from "@nextui-org/snippet";
import useSWR from "swr";
import { fetcher } from "@/lib";

export const revalidate = 60;

export const Joke = () => {
  const { data: joke } = useSWR<string>(`/api/joke`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  return joke ? (
    <>
      <Snippet
        color="secondary"
        symbol="&nbsp;"
        variant="bordered"
        className="text-xl max-w-3xl"
      >
        {joke.split(`\n`).map((line, index) => (
          <span key={index} className="text-wrap">
            {line}
          </span>
        ))}
      </Snippet>
    </>
  ) : null;
};
