import { TableHead, TableRow, TableHeader } from "@/components/ui/table";
import type { Language } from "@/app/bar/dict";
import { languageName } from "@/app/bar/utils";

type Props = {
  languages: Language[];
};

export const LangTableHeader = ({ languages: selectedLanguages }: Props) => (
  <TableHeader>
    <TableRow>
      {selectedLanguages.map((lang) => (
        <TableHead key={lang}>{languageName(lang)}</TableHead>
      ))}
    </TableRow>
  </TableHeader>
);
