"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const INTERVAL = 30_000;

export const Joke = () => {
  const [joke, setJoke] = useState<string[] | null>(null);
  useEffect(() => {
    const _fetchJoke = async () => {
      const response = await fetch("/api/joke");
      const data = await response.json();
      setJoke(data);
    };
    const _interval = setInterval(() => {
      _fetchJoke().then(() => {});
    }, INTERVAL);
    _fetchJoke().then(() => {});
    return () => clearInterval(_interval);
  }, []);

  return joke ? (
    <div className="max-w-[400px]">
      {joke.map((line, index) => (
        <div key={index} className="text-wrap">
          {line}
        </div>
      ))}
    </div>
  ) : (
    <Skeleton className="h-16 w-[400px] rounded-full" />
  );
};
