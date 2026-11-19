import type { Language } from "@/app/bar/dict";

import nl from "@/app/bar/flag/nl.svg";
import gb from "@/app/bar/flag/gb.svg";
import de from "@/app/bar/flag/de.svg";
import fr from "@/app/bar/flag/fr.svg";
import es from "@/app/bar/flag/es.svg";
import it from "@/app/bar/flag/it.svg";
import pt from "@/app/bar/flag/pt.svg";
import tr from "@/app/bar/flag/tr.svg";
import pl from "@/app/bar/flag/pl.svg";
import dk from "@/app/bar/flag/dk.svg";
import se from "@/app/bar/flag/se.svg";
import no from "@/app/bar/flag/no.svg";
import fi from "@/app/bar/flag/fi.svg";

const flagsMap: Record<Language, { src: string }> = {
  nl,
  en: gb,
  de,
  fr,
  es,
  it,
  pt,
  tr,
  pl,
  da: dk,
  sv: se,
  nb: no,
  fi,
};

type Props = {
  language: Language;
};

console.log({ nl });

export const Flag = ({ language }: Props) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={flagsMap[language].src} alt={language} className="w-6 h-6" />
);
