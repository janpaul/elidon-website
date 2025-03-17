import NextImage from "next/image";
import { Joke, Socials } from "@/app/_components";
import {
  TypographyH1,
  TypographyH4,
  TypographyInlineCode,
} from "@/components/typography";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TypographyH1>Jan Paul</TypographyH1>
        <TypographyH4>
          Aspiring Hugo Boss model, would-be MotoGP racer and software engineer
        </TypographyH4>
        <figure className="rounded-2xl overflow-hidden">
          <NextImage
            src="/jp.jpg"
            alt="Jan Paul"
            width={512 / 4}
            height={910 / 4}
          />
        </figure>
        <TypographyInlineCode>
          <Joke />
        </TypographyInlineCode>
      </div>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Socials />
      </footer>
    </div>
  );
}
