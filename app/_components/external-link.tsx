import type { PropsWithChildren } from "react";
import { linkClass } from "@/lib/utils";

type Props = PropsWithChildren<{
  href: string;
}>;

export const ExternalLink = ({ href, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={linkClass}
  >
    {children}
  </a>
);
