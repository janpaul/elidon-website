"use client";
import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Tooltip,
  Select,
  SelectItem,
} from "@heroui/react";
import { p2000Regions, type Call } from "@/app/api/p2000/[region]/route";

const callType: Record<string, string> = {
  Ambulance: "🚑",
  Politie: "🚓",
  Brandweer: "🚒",
  Lifeliner: "🚁",
  KNRM: "🚤",
};

const sortedRegions = p2000Regions.sort((a, b) =>
  a.value.localeCompare(b.value),
);

type Props = {
  region: string;
};

export const Overview = ({ region: defaultRegion }: Props) => {
  const [data, setData] = useState<Call[]>([]);
  const [region, setRegion] = useState<string>(defaultRegion);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/p2000/${region}`);
      return await response.json();
    };
    fetchData().then(setData);
  }, [region]);
  // console.log({ data, region, defaultRegion });
  console.log({ p2000Regions });

  return (
    <>
      <Select
        className="max-w-xs mb-2"
        label="Region"
        placeholder="Selecteer een regio"
        color="primary"
        selectionMode="single"
        value={region}
        onChange={(e) => {
          setRegion(e.target.value);
        }}
      >
        {sortedRegions.map(({ key, value }) => (
          <SelectItem key={key} value={key}>
            {value}
          </SelectItem>
        ))}
      </Select>
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
                <Tooltip content={call.type}>
                  {callType[call.type] ?? "?"}
                </Tooltip>
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
    </>
  );
};
