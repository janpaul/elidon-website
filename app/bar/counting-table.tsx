import { Fragment } from "react";
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
          <TableCell>{column}</TableCell>
          <Fragment key={language}>
            <TableCell>{counting[language][column]}</TableCell>
          </Fragment>
        </TableRow>
      ))}
    </>
  );
};
