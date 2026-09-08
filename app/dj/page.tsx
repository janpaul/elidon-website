import { Mix } from "@/app/dj/_components";

const mixes: string[] = [
  "REC013 - 25-03-2026",
  "REC014 - 10-04-2026",
  "REC015 - 20-08-2026",
  "REC016 - 05-09-2026",
];

const DJPage = () => (
  <div>
    {mixes.map((mix) => (
      <Mix key={mix} mix={mix} />
    ))}
  </div>
);

export default DJPage;
