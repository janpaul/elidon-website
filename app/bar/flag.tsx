import type { Language } from "@/app/bar/dict";

// Flag component to display the flag icon for a given language. When the language is "en", it will display the UK flag.
export const Flag = ({ lang }: { lang: Language }) => (
  <span
    className={`fi fi-${lang === "en" ? "gb" : lang}`}
    title={lang.toUpperCase()}
  />
);
