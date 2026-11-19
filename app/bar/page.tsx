"use client";
import { useState } from "react";
import { DictionaryTable } from "@/app/bar/dict-table";
import { languages, type Language } from "@/app/bar/dict";
import { languageName } from "@/app/bar/utils";
import { Button } from "@/components/ui/button";

const defaultLanguage: Language = "fr";

const BarPage = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  return (
    <>
      <div className="mb-4 flex flex-row gap-3 md:gap-2 lg:gap-1 flex-wrap justify-center">
        {languages.map((lang) => (
          <Button
            key={lang}
            onClick={() => setSelectedLanguage(lang)}
            variant={selectedLanguage === lang ? "outline" : "ghost"}
            aria-pressed={lang === selectedLanguage}
            className="text-2xl md:text-xl lg:text-base"
          >
            {languageName(lang)}
          </Button>
        ))}
      </div>
      <DictionaryTable language={selectedLanguage} />
    </>
  );
};

export default BarPage;
