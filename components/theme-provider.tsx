"use client";

import type { ComponentProps } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = ComponentProps<typeof NextThemesProvider>;

export const ThemeProvider = ({ children, ...props }: Props) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
