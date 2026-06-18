"use client";
import { useJoke } from "@/hooks";

export const Joke = () => {
  const joke = useJoke();
  return joke ? (
    <>
      <p className="text-muted-foreground text-sm">joke of the day</p>
      <div className="mt-2 text-base">
        {joke.map((line, index) => (
          <p
            key={index}
            className={
              joke.length === 2 && index === 0
                ? "text-muted-foreground"
                : "font-medium"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </>
  ) : null;
};
