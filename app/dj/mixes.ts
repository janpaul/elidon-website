import type { MixType } from "@/app/dj/types";

const _hms = (hours: number, minutes: number, seconds: number): number => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const mixes: MixType[] = [
  {
    file: "REC013 - 25-03-2026",
    name: "25-03-2026",
    duration: _hms(2, 1, 52),
  },
  {
    file: "REC014 - 10-04-2026",
    name: "10-04-2026",
    duration: _hms(1, 42, 2),
  },
  {
    file: "REC015 - 20-08-2026",
    name: "20-08-2026",
    duration: _hms(1, 42, 20),
  },
  {
    file: "REC016 - 05-09-2026",
    name: "05-09-2026",
    duration: _hms(1, 42, 50),
  },
  { file: "REC0017.WAV", name: "09-09-2026", duration: _hms(1, 45, 3) },
  { file: "REC0018.WAV", name: "11-09-2026", duration: _hms(1, 16, 23) },
];
