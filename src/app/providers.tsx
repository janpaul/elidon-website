"use client";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/system";

export const Providers = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
