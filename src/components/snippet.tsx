"use client";

import type { ReactNode } from "react";
import { IconClipboardCopy } from "@tabler/icons-react";
import { classNames } from "@/lib";

type SnippetProps = {
  children: ReactNode;
  className?: string;
  copyText?: string;
};

export const Snippet = ({ children, className, copyText }: SnippetProps) => (
  <div
    className={classNames(
      "flex flex-row rounded-md bg-purple-600 p-3 bg-opacity-30 dark:text-purple-400 w-fit font-mono items-start gap-4",
      className,
    )}
  >
    <div>{children}</div>
    {copyText && (
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(copyText);
        }}
        className="text-purple-400"
      >
        <IconClipboardCopy className="h-4 w-4" />
      </button>
    )}
  </div>
);
