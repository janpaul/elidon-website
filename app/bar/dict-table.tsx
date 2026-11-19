"use client";
import { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { dictionary, languages, type Language } from "@/app/bar/dict";
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Flag component to display the flag icon for a given language. When the language is "en", it will display the UK flag.
const Flag = ({ lang }: { lang: Language }) => (
  <span
    className={`fi fi-${lang === "en" ? "gb" : lang}`}
    title={lang.toUpperCase()}
  />
);

export const DictionaryTable = () => {
  const [selected, setSelected] = useState<Language[]>(["nl", "fr", "es"]);
  const selectedLanguages = languages.filter((l) => selected.includes(l));

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
                  setSelected(selected.filter((l) => l !== lang));
                }
              }}
            />
            <Label htmlFor={`checkbox-${lang}`}>
              <Flag lang={lang} />
            </Label>
          </Field>
        ))}
      </FieldGroup>
      <Table>
        <TableHeader>
          <TableRow>
            {selectedLanguages.map((lang) => (
              <TableHead key={lang}>{lang.toUpperCase()}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dictionary.map((entry, index) => (
            <TableRow key={index}>
              {selectedLanguages.map((lang) => (
                <TableCell key={lang}>{entry[lang]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
