import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/app/providers";
import { Footer } from "@/app/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jan Paul",
  description: "Jan Paul's personal website",
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body className="transform-gpu antialiased">
        <Providers>
          <div className="flex flex-col h-screen justify-between">
            <main className="mx-1 md:mx-32 grow">{children}</main>
            <footer className="lg:grow-0 px-1 lg:px-4 pb-1 lg:pb-2 ">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
