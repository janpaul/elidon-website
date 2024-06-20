"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { jokes } from "@/app/api/jokes/jokes";
import { SingleJoke } from "@/app/jokes/single-joke";

const JokesPage = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <Input
        type="search"
        placeholder="Search jokes"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="hidden"
      />
      <div className="flex flex-col gap-4">
        {jokes.map((joke, index) => (
          <SingleJoke key={index} joke={joke} fullWidth />
        ))}
      </div>
    </>
  );
};

export default JokesPage;
