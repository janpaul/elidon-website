import type { Language } from "@/app/bar/dict";

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
