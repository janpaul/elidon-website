import type { Language } from "@/app/bar/dict";

const flagCountry: Record<Language, string> = {
  nl: "nl",
  en: "gb",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  pt: "pt",
  tr: "tr",
  pl: "pl",
  da: "dk",
  sv: "se",
  nb: "no",
  fi: "fi",
};

// Flag component to display the flag icon for a given language. When the language is "en", it will display the UK flag.
export const Flag = ({ lang }: { lang: Language }) => (
  <span className={`fi fi-${flagCountry[lang]}`} title={lang.toUpperCase()} />
);
