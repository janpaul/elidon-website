import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { dictionary, type Language } from "@/app/bar/dict";
import { LangTableHeader } from "@/app/bar/lang-table-header";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { CountingTable } from "@/app/bar/counting-table";

type Props = {
  language: Language;
};

export const DictionaryTable = ({ language }: Props) => {
  const languages: Language[] = ["nl", language];
  return (
    <>
      <Table>
        <TableCaption>Dictionary Table</TableCaption>
        <LangTableHeader languages={languages} />
        <TableBody>
          {dictionary.map((entry, index) => (
            <TableRow key={index}>
              {languages.map((lang) => (
                <TableCell key={lang}>{entry[lang]}</TableCell>
              ))}
            </TableRow>
          ))}
          <CountingTable language={language} />
        </TableBody>
      </Table>
    </>
  );
};
