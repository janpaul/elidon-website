"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SingleJoke } from "@/components/single-joke";

type Props = {
  jokes: Array<string | string[]>;
};

const searchThreshold = 2;

export const JokesContent = ({ jokes: allJokes }: Props) => {
  const [search, setSearch] = useState<string>("");
  const jokes =
    search.length >= searchThreshold
      ? allJokes.filter((joke) =>
          typeof joke === "string"
            ? joke.toLowerCase().includes(search.toLowerCase())
            : joke.some((line) =>
                line.toLowerCase().includes(search.toLowerCase()),
              ),
        )
      : allJokes;

  return (
    <section>
      <section id="jokes-search" className="mb-4">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </section>
      <section>
        {jokes.map((joke, index) => (
          <Card key={index} className="mb-2">
            <CardContent>
              <SingleJoke key={index} joke={joke} />
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
};
