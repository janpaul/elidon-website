"use client";

import { useState, useEffect } from "react";

const INTERVAL = 30_000;

export const Joke = () => {
  const [joke, setJoke] = useState<string | null>(null);
  useEffect(() => {
    const _fetchJoke = async () => {
      const response = await fetch("/api/joke");
      const data = await response.json();
      setJoke(data);
    };
    const _interval = setInterval(() => {
      _fetchJoke().then((_joke) => {
        console.log({ _joke });
      });
    }, INTERVAL);
    _fetchJoke().then(() => {});
    return () => clearInterval(_interval);
  }, []);

  return joke ? (
    <div>
      {joke.split(`\n`).map((line, index) => (
        <div key={index} className="text-wrap">
          {line}
        </div>
      ))}
    </div>
  ) : null;
};
