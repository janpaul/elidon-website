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

type Props = {
  languages: Language[];
};

export const DictionaryTable = ({ languages: selectedLanguages }: Props) => (
  <>
    <Table>
      <TableCaption>Dictionary Table</TableCaption>
      <LangTableHeader languages={selectedLanguages} />
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
