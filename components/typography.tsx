import type { PropsWithChildren } from "react";

export const TypographyH1 = ({ children }: PropsWithChildren) => (
  <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
    {children}
  </h1>
);

export const TypographyH2 = ({ children }: PropsWithChildren) => (
  <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    {children}
  </h2>
);

export const TypographyH3 = ({ children }: PropsWithChildren) => (
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    {children}
  </h3>
);

export const TypographyH4 = ({ children }: PropsWithChildren) => (
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
    {children}
  </h4>
);

export const TypographyP = ({ children }: PropsWithChildren) => (
  <p className="leading-7 not-first:mt-6">{children}</p>
);
