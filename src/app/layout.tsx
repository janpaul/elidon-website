import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Background } from "@/app/background";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Paul",
  description: "The website of Elidon Consultancy",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body className="transform-gpu">
        <Background />
        <Providers>
          <main className="mx-1 md:mx-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
