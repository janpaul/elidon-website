"use client";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: ReactNode;
};

export const Providers = ({ children }: Props) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
