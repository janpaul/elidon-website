import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Title = ({ children }: Props) => (
  <h1 className="text-6xl my-4">{children}</h1>
);
export const Block = ({ children }: Props) => (
  <div className="text-xl my-2">{children}</div>
);
export const Paragraph = ({ children }: Props) => (
  <p className="text-xl my-2">{children}</p>
);

type LinkProps = Props & { href: string };
export const Link = ({ children, href }: LinkProps) => (
  <a
    className="text-red-500 dark:text-blue-500 underline underline-offset-2 hover:no-underline transition-all duration-300"
    href={href}
  >
    {children}
  </a>
);
