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
  const languages: Language[] = [language];

  return (
    <>
      <Table className="text-2xl">
        <TableCaption>Dictionary</TableCaption>
        <TableBody>
          {dictionary.map((entry, index) => (
            <TableRow key={index}>
              {languages.map((lang) => (
                <TableCell key={lang} className="">
                  <div className="text-xs text-muted-foreground">
                    {entry.nl}
                  </div>
                  <div className="text-inherit">{entry[lang]}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
          <CountingTable language={language} />
        </TableBody>
      </Table>
    </>
  );
};
