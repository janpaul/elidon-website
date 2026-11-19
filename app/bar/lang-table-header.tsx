import { TableHead, TableRow, TableHeader } from "@/components/ui/table";
import type { Language } from "@/app/bar/dict";

type Props = {
  languages: Language[];
};

export const LangTableHeader = ({ languages: selectedLanguages }: Props) => (
  <TableHeader>
    <TableRow>
      {selectedLanguages.map((lang) => (
        <TableHead key={lang}>{lang.toUpperCase()}</TableHead>
      ))}
    </TableRow>
  </TableHeader>
);
