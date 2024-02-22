"use client";

import type { ReactNode } from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/16/solid";
import { classNames } from "@/lib";

type SnippetProps = {
  children: ReactNode;
  className?: string;
  copyText?: string;
};

export const Snippet = ({ children, className, copyText }: SnippetProps) => (
  <div
    className={classNames(
      "flex flex-row rounded-md bg-purple-600 p-3 bg-opacity-30 dark:text-purple-400 w-fit font-mono text-sm items-start gap-4",
      className,
    )}
  >
    <p>{children}</p>
    {copyText && (
      <button
        onClick={async () => {
          await navigator.clipboard.writeText(copyText);
        }}
        className="text-purple-400"
      >
        <ClipboardDocumentIcon className="h-4 w-4" />
      </button>
    )}
  </div>
);
