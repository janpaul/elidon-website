import type { ReactNode } from "react";
import { classNames } from "@/lib";

export { Stats } from "./stats";
export { Joke } from "./joke";
export { Social } from "./social";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Title = ({ children, className }: Props) => (
  <h1 className={classNames(`text-3xl my-4`, className)}>{children}</h1>
);
export const Block = ({ children, className }: Props) => (
  <div className={classNames(`my-2`, className)}>{children}</div>
);
export const Paragraph = ({ children, className }: Props) => (
  <p className={classNames(`my-2`, className)}>{children}</p>
);
