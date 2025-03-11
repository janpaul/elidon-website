"use server";
import { jokes } from "@/data/jokes";

export const getJoke = async () => {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  return joke instanceof Array ? joke.join(`\n`) : joke;
};
