import { TableHead, TableRow, TableHeader } from "@/components/ui/table";
import type { Language } from "@/app/bar/dict";

type Props = {
  languages: Language[];
  addFirstColumn?: boolean;
};

export const LangTableHeader = ({
  languages: selectedLanguages,
  addFirstColumn = false,
}: Props) => (
  <TableHeader>
    <TableRow>
      {addFirstColumn && <TableHead />}
      {selectedLanguages
        .filter((lang) => lang != "nl")
        .map((lang) => (
          <TableHead key={lang}>{lang.toUpperCase()}</TableHead>
        ))}
    </TableRow>
  </TableHeader>
);
