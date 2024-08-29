"use client";

import { useState, useEffect } from "react";
import { Snippet } from "@nextui-org/snippet";

const INTERVAL = 30_000;

export const Joke = () => {
  const [joke, setJoke] = useState<string | null>(null);

  useEffect(() => {
    const _fetchJoke = async () => {
      const response = await fetch("/api/joke");
      const data = await response.json();
      setJoke(data);
    };
    let _interval;
    _interval = setInterval(async () => {
      await _fetchJoke();
    }, INTERVAL);
    _fetchJoke().then(() => {});
    return () => clearInterval(_interval);
  }, []);

  return joke ? (
    <Snippet color="success" variant="flat" symbol="">
      {joke.split(`\n`).map((line, index) => (
        <div key={index} className="text-wrap">
          {line}
        </div>
      ))}
    </Snippet>
  ) : null;
};
