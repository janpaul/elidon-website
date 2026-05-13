import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const ExternalLink = ({ href, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 dark:text-blue-400 hover:underline"
  >
    {children}
  </a>
);
