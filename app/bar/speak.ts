import type { Language } from "@/app/bar/types";

const speechLang: Record<Language, string> = {
  nl: "nl-NL",
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  es: "es-ES",
  it: "it-IT",
  pt: "pt-BR",
  tr: "tr-TR",
  pl: "pl-PL",
  da: "da-DK",
  sv: "sv-SE",
  nb: "nb-NO",
  fi: "fi-FI",
};

const stripEmoji = (text: string) =>
  text
    .replace(
      /[\p{Extended_Pictographic}\u{FE0F}\u{200D}\p{Emoji_Modifier}]/gu,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();

const speakParts = (text: string, lang: Language, pauseMs = 250) => {
  const parts = stripEmoji(text)
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);

  const next = (i: number) => {
    if (i >= parts.length) return;
    const u = new SpeechSynthesisUtterance(parts[i]);
    u.lang = speechLang[lang];
    u.onend = () => setTimeout(() => next(i + 1), pauseMs);
    speechSynthesis.speak(u);
  };
  next(0);
};

export const price = (n: number, lang: Language) =>
  new Intl.NumberFormat(speechLang[lang], {
    style: "currency",
    currency: "EUR",
  }).format(n);

export const speak = (text: string, language: Language) => {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(stripEmoji(text));
  utterance.lang = speechLang[language];
  // speechSynthesis.speak(utterance);
  speakParts(text, language);
};
