import { Mix } from "@/app/dj/_components";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Joke, Socials, MyAvatar } from "@/app/_components";
import type { MixType } from "@/app/dj/types";

export const revalidate = 300;

const mixes: MixType[] = [
  { file: "REC013 - 25-03-2026", name: "25-03-2026" },
  { file: "REC014 - 10-04-2026", name: "10-04-2026" },
  { file: "REC015 - 20-08-2026", name: "20-08-2026" },
  { file: "REC016 - 05-09-2026", name: "05-09-2026" },
];

const DJPage = () => (
  <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
    <div className="flex flex-row gap-2 md:gap-4 align-middle items-start w-full">
      <MyAvatar />
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
        DJ Jean Paul
      </h1>
    </div>
    <div>
      <Socials />
    </div>
    {mixes.reverse().map((mix) => (
      <Card key={mix.file}>
        <CardContent>
          <CardTitle>{mix.name}</CardTitle>
          <Mix mix={mix} />
        </CardContent>
      </Card>
    ))}
    <div>
      <Joke />
    </div>
  </div>
);

export default DJPage;
