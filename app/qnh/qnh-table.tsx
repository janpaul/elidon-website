import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { STD, mbarToInHg } from "./helpers";

type Props = {
  min: number;
  max: number;
};

export const QnhTable = ({ min, max }: Props) => {
  const rows = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  if (STD >= min && STD <= max) rows.push(STD);
  rows.sort((a, b) => a - b);

  return (
    <Table>
      <TableCaption>QNH Conversion Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">mbar</TableHead>
          <TableHead>inHg</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((mbar) => {
          const isStd = mbar === STD;
          return (
            <TableRow
              key={mbar}
              className={isStd ? "font-semibold bg-muted" : undefined}
            >
              <TableCell>{isStd ? `${STD} (STD)` : mbar}</TableCell>
              <TableCell>{mbarToInHg(mbar).toFixed(2)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
