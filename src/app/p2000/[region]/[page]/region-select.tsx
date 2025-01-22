"use client";
import { useRouter } from "next/navigation";
import { Select, SelectItem } from "@heroui/react";
import { sortedRegions } from "@/app/p2000/[region]/[page]/lib";

type Props = {
  region: string;
};
export const RegionSelect = ({ region }: Props) => {
  const router = useRouter();
  return (
    <Select
      className="max-w-xs mb-2"
      label="Region"
      placeholder="Selecteer een regio"
      color="primary"
      selectionMode="single"
      value={region}
      onChange={(e) => {
        const newRegion = e.target.value;
        console.log({ newRegion });
        router.push(`/p2000/${newRegion}/1`);
      }}
    >
      {sortedRegions.map(({ key, value }) => (
        <SelectItem key={key} value={key}>
          {value}
        </SelectItem>
      ))}
    </Select>
  );
};
