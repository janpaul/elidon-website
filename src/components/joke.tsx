"use client";
import useSWR from "swr";
import { Snippet } from "@nextui-org/react";
import { fetcher } from "@/lib";

export const revalidate = 30;

export const Joke = () => {
  const { data: joke } = useSWR<string>(`/api/joke`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  return joke ? (
    <Snippet symbol=" " color="secondary" size="md">
      {joke.split(`\n`).map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </Snippet>
  ) : null;
};
