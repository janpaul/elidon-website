import jokes from "@/app/_components/data/jokes.json";

const getJoke = (): string[] => {
  const joke = jokes[(Math.random() * jokes.length) | 0];
  return Array.isArray(joke) ? joke : [joke];
};

export const Joke = () => {
  const joke = getJoke();
  return (
    <>
      <p className="text-muted-foreground text-sm">joke of the day</p>
      <p className="mt-2 text-base">
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
      </p>
    </>
  );
};
