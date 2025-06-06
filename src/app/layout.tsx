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
        <header className="fixed w-screen flex flex-row justify-end px-2 mx-1">
          <ThemeSwitcher />
        </header>
        <main>{children}</main>
        <div className="fixed bottom-0 -right-2 -z-20">
          <NextImage
            src="/jp.jpg"
            alt="Jan Paul"
            width={512 / 4}
            height={910 / 4}
            className="rounded-tl-4xl grayscale hover:grayscale-0"
          />
        </div>
      </ThemeProvider>
    </body>
  </html>
);
export default RootLayout;
