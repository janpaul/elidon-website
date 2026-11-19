import type { Language } from "@/app/bar/types";

export const languages = [
  "nl",
  "en",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "tr",
  "pl",
  "da",
  "sv",
  "nb",
  "fi",
] as const;

const countryNameMap: Record<Language, string> = {
  nl: "Nederlands",
  en: "Engels",
  de: "Duits",
  fr: "Frans",
  es: "Spaans",
  it: "Italiaans",
  pt: "Portugees",
  tr: "Turks",
  pl: "Pools",
  da: "Deens",
  sv: "Zweeds",
  nb: "Noors",
  fi: "Fins",
};

export const languageName = (lang: Language): string => countryNameMap[lang];
