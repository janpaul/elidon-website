import { Snippet } from "@nextui-org/snippet";
import { classNames } from "@/lib";
import type { TJoke } from "@/app/jokes/types";

type Props = {
  joke: TJoke;
  fullWidth?: boolean;
};
export const SingleJoke = ({ joke, fullWidth = false }: Props) => {
  const rjoke = Array.isArray(joke) ? joke.join(`\n`) : joke;
  return (
    <Snippet
      color="secondary"
      symbol="&nbsp;"
      variant="bordered"
      className={classNames("text-xl", fullWidth ? "" : "max-w-3xl")}
    >
      {rjoke.split(`\n`).map((line, index) => (
        <span key={index} className="text-wrap">
          {line}
        </span>
      ))}
    </Snippet>
  );
};
