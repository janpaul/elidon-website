import type { ReactNode } from "react";
import { classNames } from "@/lib";

export { Stats } from "./stats";
export { Joke } from "./joke";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Title = ({ children, className }: Props) => (
  <h1 className={classNames(`text-6xl my-4`, className)}>{children}</h1>
);
export const Block = ({ children, className }: Props) => (
  <div className={classNames(`my-2`, className)}>{children}</div>
);
export const Paragraph = ({ children, className }: Props) => (
  <p className={classNames(`text-xl my-2`, className)}>{children}</p>
);

type LinkProps = Props & { href: string };
export const Link = ({ children, className, href }: LinkProps) => (
  <a
    className={classNames(
      `text-red-500 dark:text-blue-500 underline underline-offset-2 hover:no-underline transition-all duration-300`,
      className,
    )}
    href={href}
  >
    {children}
  </a>
);
