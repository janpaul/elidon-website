"use client";
import useSWR from "swr";
import { fetcher } from "@/lib";
import { SingleJoke } from "@/app/jokes/single-joke";

export const revalidate = 60;

export const Joke = () => {
  const { data: joke } = useSWR<string>("/api/joke", fetcher, {
    refreshInterval: revalidate * 1000,
  });
  return joke ?
      <>
        <SingleJoke joke={joke} />
      </>
    : null;
};
