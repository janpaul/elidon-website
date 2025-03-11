import { getJoke } from "../actions";

export const revalidate = 30;

export const Joke = async () => {
  const joke = await getJoke();
  return (
    <div>
      {joke.split(`\n`).map((line, index) => (
        <div key={index} className="text-wrap">
          {line}
        </div>
      ))}
    </div>
  );
};
