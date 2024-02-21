import type { ReactNode } from "react";
import { Spacer } from "@nextui-org/react";
import { classNames } from "@/lib";

export { Stats } from "./stats";
export { Joke } from "./joke";
export { Social } from "./social";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Title = ({ children, className }: Props) => (
  <>
    <h1 className={classNames(`text-3xl`, className)}>{children}</h1>
    <Spacer x={4} />
  </>
);
export const Block = ({ children, className }: Props) => (
  <>
    <div className={className}>{children}</div>
    <Spacer x={4} />
  </>
);
export const Paragraph = ({ children, className }: Props) => (
  <>
    <p className={className}>{children}</p>
    <Spacer x={4} />
  </>
);
