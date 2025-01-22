"use client";
import { callType, type Call } from "@/app/p2000/[region]/[page]/lib";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@heroui/react";

type Props = {
  data: Call[];
};
export const P2000Table = ({ data }: Props) => (
  <Table aria-label="P2000 table">
    <TableHeader>
      <TableColumn>Type</TableColumn>
      <TableColumn>Date</TableColumn>
      <TableColumn>Priority</TableColumn>
      <TableColumn>Capcode</TableColumn>
      <TableColumn>Message</TableColumn>
      <TableColumn>Called</TableColumn>
    </TableHeader>
    <TableBody>
      {data.map((call: Call, index) => (
        <TableRow key={index}>
          <TableCell>
            <Tooltip content={call.type}>{callType[call.type] ?? "?"}</Tooltip>
          </TableCell>
          <TableCell>{call.date}</TableCell>
          <TableCell>{call.prio}</TableCell>
          <TableCell>{call.capcode}</TableCell>
          <TableCell>{call.message}</TableCell>
          <TableCell>{call.called}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
