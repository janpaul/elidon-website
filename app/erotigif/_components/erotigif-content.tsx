"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErotigifImage } from "@/app/erotigif/_components/erotigif-image";

type Props = {
  images: string[];
};

export const ErotigifContent = ({ images }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  return (
    <div>
      <Select onValueChange={setSelected} defaultValue={selected}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Select an image" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {images.map((id) => (
              <SelectItem value={id} key={id}>
                {id}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>{selected && <ErotigifImage id={selected} />}</div>
    </div>
  );
};
