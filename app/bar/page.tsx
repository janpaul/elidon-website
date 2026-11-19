"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { DictionaryTable } from "@/app/bar/dict-table";
import type { Language } from "@/app/bar/types";
import { languageName, languages } from "@/app/bar/utils";
import { Button } from "@/components/ui/button";
import { Flag } from "@/app/bar/flag/flag";
import { CountingTable } from "@/app/bar/counting-table";

const defaultLanguage: Language = "fr";

const BarPage = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  return (
    <>
      <div className="mb-4 flex flex-row gap-3 md:gap-2 lg:gap-1 flex-wrap justify-center">
        {languages
          .filter((lang) => lang !== "nl")
          .map((lang) => (
            <Button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              variant={selectedLanguage === lang ? "outline" : "ghost"}
              aria-pressed={lang === selectedLanguage}
              className="text-2xl md:text-xl lg:text-base"
            >
              <Flag language={lang} /> {languageName(lang)}
            </Button>
          ))}
      </div>

      <Table className="text-2xl">
        <TableCaption>Dictionary</TableCaption>
        <TableBody>
          <DictionaryTable language={selectedLanguage} />
          <TableRow>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
          <CountingTable language={selectedLanguage} />
        </TableBody>
      </Table>
    </>
  );
};

export default BarPage;
