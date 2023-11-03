"use client";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/lib";

export const revalidate = 60;

export const Joke = () => {
  const { data: joke } = useSWR<string>(`/api/joke`, fetcher, {
    refreshInterval: revalidate * 1000,
  });
  const loadJoke = async () => mutate(`/api/joke`).then(() => {});
  return joke ? (
    <div className="flex flex-col cursor-pointer" onClick={loadJoke}>
      {joke.split(`\n`).map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  ) : null;
};
