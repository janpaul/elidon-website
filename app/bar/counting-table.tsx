import { Fragment } from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import type { Language } from "@/app/bar/dict";
import { counting, countingColumns } from "@/app/bar/counting";
import { LangTableHeader } from "@/app/bar/lang-table-header";

type Props = {
  languages: Language[];
};

export const CountingTable = ({ languages: selectedLanguages }: Props) => {
  const languagesWithoutNL = selectedLanguages.filter((lang) => lang !== "nl");
  return (
    <Table>
      <TableCaption>Counting Table</TableCaption>
      <LangTableHeader languages={languagesWithoutNL} addFirstColumn />
      <TableBody>
        {countingColumns.map((column) => (
          <TableRow key={column}>
            <TableCell>{column}</TableCell>
            {languagesWithoutNL.map((lang) => (
              <Fragment key={lang}>
                <TableCell>{counting[lang][column]}</TableCell>
              </Fragment>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
