import { TableRow, TableCell } from "@/components/ui/table";
import type { Language } from "@/app/bar/dict";
import { counting, countingColumns } from "@/app/bar/counting";

type Props = {
  language: Language;
};

export const CountingTable = ({ language }: Props) => {
  return (
    <>
      {countingColumns.map((column) => (
        <TableRow key={column}>
          <TableCell>
            <div className="text-xs text-muted-foreground">{column}</div>
            <div className="text-inherit">{counting[language][column]}</div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
