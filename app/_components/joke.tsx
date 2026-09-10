import jokes from "@/app/_components/data/jokes.json";
import { revalidate } from "@/app/page";
import { SingleJoke } from "@/app/_components/single-joke";

const getJoke = (): string[] | string =>
  jokes[Math.floor(Date.now() / (revalidate * 1000)) % jokes.length];

export const Joke = () => {
  const joke = getJoke();
  return (
    <>
      <p className="text-muted-foreground text-sm">joke of the day</p>
      <div className="mt-2 text-base">
        <SingleJoke joke={joke} />
      </div>
    </>
  );
};
