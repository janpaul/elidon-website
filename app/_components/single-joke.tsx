import { MyMarkdown } from "@/app/_components";

type Props = {
  joke: string | string[];
};

export const SingleJoke = ({ joke }: Props) => {
  const aJoke = Array.isArray(joke) ? joke : [joke];
  return <MyMarkdown>{aJoke.join("\n\n")}</MyMarkdown>;
};
