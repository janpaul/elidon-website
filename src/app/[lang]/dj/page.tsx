"use client";
import { useState } from "react";
import { MusicalNoteIcon } from "@heroicons/react/16/solid";
import { Title } from "@/components";
import { mixes, type DJMix } from "./mixes";
import { Player } from "./player";

const DJPage = () => {
  const [selectedMix, setSelectedMix] = useState<DJMix | undefined>(undefined);
  return (
    <>
      <Title>DJ Jean Paul</Title>
      <ul>
        {mixes.map((mix) => (
          <li
            key={mix.file}
            className="cursor-pointer flex flex-row align-middle items-center gap-2 text-2xl text-blue-400"
            onClick={() => {
              setSelectedMix(mix);
            }}
          >
            <MusicalNoteIcon className="w-4 h-4" />
            {mix.title}
          </li>
        ))}
      </ul>
      {selectedMix && (
        <div className="mt-2">
          <Player mix={selectedMix} />
        </div>
      )}
    </>
  );
};

export default DJPage;
