import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { dictionary, type Language } from "@/app/bar/dict";
import { CountingTable } from "@/app/bar/counting-table";
import { languageName } from "@/app/bar/utils";

type Props = {
  language: Language;
};

export const DictionaryTable = ({ language }: Props) => {
  const languages: Language[] = ["nl", language];
  return (
    <>
      <Table className="text-2xl">
        <TableCaption>Dictionary</TableCaption>
        <TableHeader>
          <TableRow>
            {languages.map((lang) => (
              <TableHead key={lang} className="w-px">
                {languageName(lang)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
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
