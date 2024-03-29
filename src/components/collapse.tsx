"use client";
import { useState, type ReactNode } from "react";
import { Button } from "@nextui-org/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

type Props = {
  children: ReactNode;
  text?: {
    more: string;
    less: string;
  };
  defaultOpen?: boolean;
};
export const Collapse = ({
  children,
  text: { more: readMore, less: readLess } = {
    more: `Read more`,
    less: `Less`,
  },
  defaultOpen = false,
}: Props) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  return (
    <>
      <Button size="sm" onClick={() => setOpen(!open)} color="primary">
        {open ? (
          <>
            {readLess}
            <ChevronUpIcon className="h-4 w-5" />
          </>
        ) : (
          <>
            {readMore}
            <ChevronDownIcon className="h-4 w-5" />
          </>
        )}
      </Button>
      {open && <section>{children}</section>}
    </>
  );
};
