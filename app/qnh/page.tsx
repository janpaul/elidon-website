import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const factor = 0.02953;

const QnhPage = () => (
  <div>
    <Table>
      <TableCaption>QNH Conversion Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">mbar</TableHead>
          <TableHead>inHg</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array(50)
          .fill(0)
          .map((_, index) => index + 985)
          .map((value) => (
            <TableRow key={value}>
              <TableCell>{value}</TableCell>
              <TableCell>{(value * factor).toFixed(2)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
);

export default QnhPage;
