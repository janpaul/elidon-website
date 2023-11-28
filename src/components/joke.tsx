"use client";
import useSWR from "swr";
import { fetcher } from "@/lib";

export const revalidate = 30;

export const Joke = () => {
  const { data: joke } = useSWR<string>(`/api/joke`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  return joke ?
      <div className="flex flex-col text-xl lg:text-2xl">
        {joke.split(`\n`).map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    : null;
};
