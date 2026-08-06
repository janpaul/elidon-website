type Props = {
  joke: string | string[];
};

export const SingleJoke = ({ joke }: Props) => {
  const ajoke = Array.isArray(joke) ? joke : [joke];
  return (
    <div className="mt-2 text-base">
      {ajoke.map((line, index) => (
        <p
          key={index}
          className={
            ajoke.length === 2 && index === 0
              ? "text-muted-foreground"
              : "font-medium"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
};
