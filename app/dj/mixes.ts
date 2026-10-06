import type { MixType } from "@/app/dj/types";

const _hms = (hours: number, minutes: number, seconds: number): number => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const mixes: MixType[] = [
  {
    file: "REC013",
    name: "25-03-2026 Funky Tech House",
    duration: _hms(2, 1, 52),
  },
  {
    file: "REC014",
    name: "10-04-2026 Funky Tech House",
    duration: _hms(1, 42, 2),
  },
  {
    file: "REC015",
    name: "20-08-2026 House Classics",
    duration: _hms(1, 42, 20),
  },
  {
    file: "REC016",
    name: "05-09-2026 Funky Tech House",
    duration: _hms(1, 42, 50),
  },
  {
    file: "REC017",
    name: "28-09-2026 Garage & House Classics",
    duration: _hms(1, 42, 50),
  },
  {
    file: "REC018",
    name: "05-10-2026 Funky Techno",
    duration: _hms(1, 1, 36),
  },
];
