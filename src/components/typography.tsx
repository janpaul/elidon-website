import type { ReactNode } from "react";
import { classNames } from "@/lib";
import type { Size } from "@/components/types";

type Props = {
  children: ReactNode;
  className?: string;
  size?: Size;
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

export const Block = ({ children, className }: Props) => (
  <>
    <div className={classNames("mb-1 lg:mb-2", className)}>{children}</div>
  </>
);
export const Paragraph = ({ children, className, size = `md` }: Props) => (
  <>
    <div
      className={classNames(
        "mb-1 lg:mb-2 leading-snug tracking-wide",
        paragraphSizeToClassname(size),
        className,
      )}
    >
      {children}
    </div>
  </>
);
