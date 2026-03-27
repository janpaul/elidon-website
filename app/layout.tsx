import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/app/_components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jan Paul",
  description:
    "The website of Jan Paul, a software engineer, aspiring super star DJ and barkeeper for the fun of it all.",
};

type Props = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: Props) => (
  <html
    lang="en"
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased transform-gpu`}
    suppressHydrationWarning
  >
    <body className="min-h-full flex flex-col m-2">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>
          <main className="min-h-screen flex flex-col items-start md:items-center justify-start md:justify-center">
            <div className="w-full max-w-2xl px-2 md:px-4">{children}</div>
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
