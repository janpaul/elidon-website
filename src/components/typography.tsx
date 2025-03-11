/**
 * This is shadcn typography according to https://ui.shadcn.com/docs/components/typography
 */
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};
export const TypographyH1 = ({ children }: Props) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
);
export const TypographyH2 = ({ children }: Props) => (
  <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    {children}
  </h1>
);
export const TypographyH3 = ({ children }: Props) => (
  <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    {children}
  </h1>
);
export const TypographyH4 = ({ children }: Props) => (
  <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
    {children}
  </h1>
);

export const TypographyP = ({ children }: Props) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
);

export const TypographyBlockquote = ({ children }: Props) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
);

export const TypographyList = ({ children }: Props) => (
  <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
);

export const TypographyListItem = ({ children }: Props) => <li>{children}</li>;

export const TypographyInlineCode = ({ children }: Props) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
    {children}
  </code>
);

export const TypographyLead = ({ children }: Props) => (
  <p className="text-xl text-muted-foreground">{children}</p>
);

export const TypographyLarge = ({ children }: Props) => (
  <div className="text-lg font-semibold">{children}</div>
);

export const TypographySmall = ({ children }: Props) => (
  <small className="text-sm font-medium leading-none">{children}</small>
);

export const TypographyMuted = ({ children }: Props) => (
  <p className="text-sm text-muted-foreground">{children}</p>
);
