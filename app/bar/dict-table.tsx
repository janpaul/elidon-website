import { SpeechIcon } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { dictionary } from "@/app/bar/dict";
import type { Language } from "@/app/bar/types";
import { speak } from "@/app/bar/speak";

type Props = {
  language: Language;
};

console.log({ words: dictionary.map((entry) => entry.nl) });

export const DictionaryTable = ({ language }: Props) => {
  const languages: Language[] = [language];

  return (
    <>
      {dictionary.map((entry, index) => (
        <TableRow key={index}>
          {languages.map((lang) => (
            <TableCell key={lang} className="">
              <div className="text-xs text-muted-foreground">{entry.nl}</div>
              <div className="text-inherit flex flex-row gap-2">
                <div>{entry[lang]}</div>
                <Button
                  variant="secondary"
                  onClick={() => speak(entry[lang], lang)}
                  size="icon-lg"
                >
                  <SpeechIcon size={16} />
                </Button>
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};
