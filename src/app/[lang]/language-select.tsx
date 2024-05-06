import NextLink from "next/link";
import NextImage from "next/image";
import type { Language } from "@/lib";

type Props = {
  path?: string;
};
type LanguageLinkProps = {
  language: Language;
  flag?: string;
} & Required<Props>;
const LanguageLink = ({
  language,
  path,
  flag = language,
}: LanguageLinkProps) => (
  <NextLink href={`${path}${language}`}>
    <NextImage
      src={`https://flagcdn.com/w80/${flag}.png`}
      width="24"
      height="20"
      alt={language.toUpperCase()}
    />
  </NextLink>
);

export const LanguageSelect = ({ path = `/` }: Props) => (
  <div className="flex flex-row gap-4 md:gap-2">
    <LanguageLink path={path} language="nl" />
    <LanguageLink path={path} language="en" flag="gb" />
    <LanguageLink path={path} language="se" />
    <LanguageLink path={path} language="it" />
  </div>
);
