import NextLink from "next/link";
import NextImage from "next/image";
import type { Language } from "@/lib";

type LanguageLinkProps = {
  language: Language;
  flag?: string;
};
const LanguageLink = ({ language, flag = language }: LanguageLinkProps) => (
  <NextLink href={`/${language}`}>
    <NextImage
      src={`https://flagcdn.com/w80/${flag}.png`}
      width="24"
      height="20"
      alt="Dutch"
    />
  </NextLink>
);

type Props = {
  path?: string;
};
export const LanguageSelect = ({ path = `` }: Props) => (
  <div className="flex flex-row gap-4">
    <LanguageLink language="nl" />
    <LanguageLink language="en" flag="gb" />
    <LanguageLink language="se" />
    <LanguageLink language="it" />
  </div>
);
