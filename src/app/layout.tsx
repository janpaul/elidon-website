import NextImage from "next/image";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components";
import { ThemeSwitcher } from "@/app/_components";
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
  description: "Jan Paul / Elidon",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <header className="hidden w-screen md:flex flex-row justify-start">
          <ThemeSwitcher />
        </header>
        <main className="m-0 md:m-1 lg:m-2 pt-0">{children}</main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
