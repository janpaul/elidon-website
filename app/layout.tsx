import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
    className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    suppressHydrationWarning
  >
    <body className="min-h-full flex flex-col m-2">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main>{children}</main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
