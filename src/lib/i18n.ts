import { flattenObject } from "@/lib";

export type Language = `nl` | `en` | `se`;
export type TranslateFn = (key: string) => string;

const dictionaries = {
  en: () => import("../i18n/en.json").then((module) => module.default),
  nl: () => import("../i18n/nl.json").then((module) => module.default),
  se: () => import("../i18n/se.json").then((module) => module.default),
};

export const translate = async (lang: Language): Promise<TranslateFn> => {
  const dict = flattenObject(await dictionaries[lang]());
  return (key: string): string => {
    // @ts-ignore
    const value = dict[key];
    return value ?? `MISSING ${key}`;
  };
};
