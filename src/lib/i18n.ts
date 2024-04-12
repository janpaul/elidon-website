import { flattenObject, type AnyObject } from "@/lib";
import nl from "@/i18n/nl.json";
import en from "@/i18n/en.json";
import se from "@/i18n/se.json";

export type Language = `nl` | `en` | `se`;
export type TranslateFn = (key: string) => string;

const dictionaries: Record<Language, AnyObject> = {
  nl,
  en,
  se,
};

export const translate = async (lang: Language): Promise<TranslateFn> => {
  const dict = flattenObject(dictionaries[lang]);
  return (key: string): string => {
    // @ts-ignore
    const value = dict[key];
    return value ?? `MISSING ${key}`;
  };
};
