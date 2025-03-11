import NextImage from "next/image";
import { Joke } from "@/app/_components/joke";
import {
  TypographyH1,
  TypographyP,
  TypographyInlineCode,
} from "@/components/typography";

type IconLinkProps = {
  href: string;
  title: string;
  icon: string;
};
const IconLink = ({ href, title, icon }: IconLinkProps) => (
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NextImage
      className="dark:invert"
      src={icon}
      alt={`${title} icon`}
      width={16}
      height={16}
    />
    <span>{title}</span>
  </a>
);

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TypographyH1>Jan Paul</TypographyH1>
        <TypographyP className="text-2xl">
          Aspiring Hugo Boss model and software engineer
        </TypographyP>
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
        <IconLink
          href="mailto:janpaul@hey.com"
          title="Hey"
          icon="/icons/hey.svg"
        />
        <IconLink
          href="//bsky.app/profile/janpaul.dev"
          title="Bluesky"
          icon="/icons/bluesky.svg"
        />
        <IconLink
          href="//instagram.com/janpaul"
          title="Instagram"
          icon="/icons/instagram.svg"
        />
        <IconLink
          href="//reddit.com/u/janpaul75"
          title="Reddit"
          icon="/icons/reddit.svg"
        />
      </footer>
    </div>
  );
}
