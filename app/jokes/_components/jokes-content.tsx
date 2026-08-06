"use client";
import { useState } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardAction,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { SingleJoke } from "@/components/single-joke";
import { useClipboard } from "@/hooks/use-clipboard";
import { CopyIcon } from "lucide-react";

type Props = {
  jokes: Array<string | string[]>;
};

const searchThreshold = 2;

export const JokesContent = ({ jokes: allJokes }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [hasClipboard, copyToClipboard] = useClipboard();
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
    <>
      <section className="w-full lg:w-4/5 m-auto">
        <section id="jokes-search" className="mb-4">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </section>
        <section>
          {jokes.map((joke, index) => (
            <Card key={index} className="mb-2">
              {hasClipboard && (
                <CardHeader>
                  <CardAction>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={async () => {
                        await copyToClipboard(
                          Array.isArray(joke) ? joke.join("\n") : joke,
                        );
                        toast("Joke copied to clipboard");
                      }}
                    >
                      <CopyIcon className="w-4 h-4" />
                    </Button>
                  </CardAction>
                </CardHeader>
              )}
              <CardContent>
                <SingleJoke key={index} joke={joke} />
              </CardContent>
            </Card>
          ))}
        </section>
      </section>
      <Toaster position="bottom-right" />
    </>
  );
};
