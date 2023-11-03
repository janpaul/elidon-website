import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  title: "Jan Paul",
  description: "The website of Elidon Consultancy",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={`${GeistSans.variable}`}>
    <body className="transform-gpu">
      <main className="mx-1 md:mx-8">{children}</main>
    </body>
  </html>
);
export default RootLayout;
