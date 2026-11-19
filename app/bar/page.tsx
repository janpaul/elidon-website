"use client";
import { useState } from "react";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { DictionaryTable } from "@/app/bar/dict-table";
import { CountingTable } from "@/app/bar/counting-table";
import { Flag } from "@/app/bar/flag";
import { languages, type Language } from "@/app/bar/dict";

const defaultLanguages: Language[] = ["nl", "fr"];

const BarPage = () => {
  const [selected, setSelected] = useState<Language[]>(defaultLanguages);
  const selectedAndSortedLanguages = languages.filter((l) =>
    selected.includes(l),
  );

  return (
    <>
      <FieldGroup className="mb-4 flex flex-row gap-1">
        {languages.map((lang) => (
          <Field key={lang} orientation="responsive">
            <Checkbox
              id={`checkbox-${lang}`}
              checked={selected.includes(lang)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelected([...selected, lang]);
                } else {
                  const _newSelected = selected.filter((l) => l !== lang);
                  setSelected(
                    _newSelected.length > 0 ? _newSelected : defaultLanguages,
                  );
                }
              }}
            />
            <Label htmlFor={`checkbox-${lang}`}>
              <Flag lang={lang} />
            </Label>
          </Field>
        ))}
      </FieldGroup>
      <DictionaryTable languages={selectedAndSortedLanguages} />
      <CountingTable languages={selectedAndSortedLanguages} />
    </>
  );
};

export default BarPage;
