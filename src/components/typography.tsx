/**
 * This is shadcn typography according to https://ui.shadcn.com/docs/components/typography
 */
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren & {
  className?: string;
};
export const TypographyH1 = ({ children, className }: Props) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className,
    )}
  >
    {children}
  </h1>
);
export const TypographyH2 = ({ children, className }: Props) => (
  <h1
    className={cn(
      "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      className,
    )}
  >
    {children}
  </h1>
);
export const TypographyH3 = ({ children, className }: Props) => (
  <h1
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className,
    )}
  >
    {children}
  </h1>
);
export const TypographyH4 = ({ children, className }: Props) => (
  <h1
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      className,
    )}
  >
    {children}
  </h1>
);

export const TypographyP = ({ children, className }: Props) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
    {children}
  </p>
);

export const TypographyBlockquote = ({ children, className }: Props) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
    {children}
  </blockquote>
);

export const TypographyList = ({ children, className }: Props) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
    {children}
  </ul>
);

export const TypographyListItem = ({ children, className }: Props) => (
  <li className={cn("", className)}>{children}</li>
);

export const TypographyInlineCode = ({ children, className }: Props) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      className,
    )}
  >
    {children}
  </code>
);

export const TypographyLead = ({ children, className }: Props) => (
  <span className={cn("text-xl text-muted-foreground", className)}>
    {children}
  </span>
);

export const TypographyLarge = ({ children, className }: Props) => (
  <div className={cn("text-lg font-semibold", className)}>{children}</div>
);

export const TypographySmall = ({ children, className }: Props) => (
  <small className={cn("text-sm font-medium leading-none", className)}>
    {children}
  </small>
);

export const TypographyMuted = ({ children, className }: Props) => (
  <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
);
