"use client";
import useSWR from "swr";
import { fetcher } from "@/lib";
import { Snippet, TypewriterEffect } from "@/components";

export const revalidate = 30;

export const Joke = () => {
  const { data: joke } = useSWR<string>(`/api/joke`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  return joke ? (
    <>
      <Snippet copyText={joke}>
        {joke.split(`\n`).map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </Snippet>
    </>
  ) : null;
};
