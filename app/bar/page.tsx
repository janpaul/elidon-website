"use client";
import { useState } from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DictionaryTable } from "@/app/bar/dict-table";
import { Flag } from "@/app/bar/flag";
import { languages, type Language } from "@/app/bar/dict";

const defaultLanguage: Language = "fr";

const BarPage = () => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);

  return (
    <>
      <FieldGroup className="mb-4 flex flex-row gap-1">
        {languages.map((lang) => (
          <Field key={lang} orientation="horizontal">
            <Checkbox
              id={`checkbox-${lang}`}
              checked={selectedLanguage === lang}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedLanguage(lang);
                } else {
                  setSelectedLanguage(defaultLanguage);
                }
              }}
            />
            <Label htmlFor={`checkbox-${lang}`}>
              <Flag lang={lang} />
            </Label>
          </Field>
        ))}
      </FieldGroup>
      <DictionaryTable language={selectedLanguage} />
    </>
  );
};

export default BarPage;
