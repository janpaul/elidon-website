import { useEffect, useState } from "react";
import jokes from "@/data/jokes.json";
import { revalidate } from "@/app/page";

const getJoke = (): string[] => {
  const joke =
    jokes[Math.floor((Date.now() / revalidate) * 1_000) % jokes.length];
  return Array.isArray(joke) ? joke : [joke];
};

export const useJoke = () => {
  const [joke, setJoke] = useState<string[] | undefined>(getJoke());

  useEffect(() => {
    const interval = setInterval(() => {
      setJoke(getJoke());
    }, 60 * 1_000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return joke;
};
