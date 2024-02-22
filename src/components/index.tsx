import type { ReactNode } from "react";
import { Spacer } from "@nextui-org/react";
import { classNames } from "@/lib";

export { Stats } from "./stats";
export { Joke } from "./joke";
export { Social } from "./social";

type Size = "sm" | "md" | "lg" | "xl";
type Props = {
  children: ReactNode;
  className?: string;
  size?: Size;
};

const headingSizeToClassname = (size: Size) => {
  switch (size) {
    case "sm":
      return `text-xl`;
    case "lg":
      return `text-6xl`;
    case "xl":
      return `text-7xl`;
  }
  return `text-4xl`;
};
const paragraphSizeToClassname = (size: Size) => {
  switch (size) {
    case "sm":
      return `text-sm`;
    case "lg":
      return `text-2xl`;
    case "xl":
      return `text-4xl`;
  }
  return undefined;
};

export const Title = ({ children, className, size = `md` }: Props) => (
  <>
    <h1 className={classNames(headingSizeToClassname(size), className)}>
      {children}
    </h1>
    <Spacer x={4} />
  </>
);
export const Block = ({ children, className }: Props) => (
  <>
    <div className={classNames(className)}>{children}</div>
    <Spacer x={4} />
  </>
);
export const Paragraph = ({ children, className, size = `md` }: Props) => (
  <>
    <p className={classNames(paragraphSizeToClassname(size), className)}>
      {children}
    </p>
    <Spacer x={4} />
  </>
);
