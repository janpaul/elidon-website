import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Providers } from "./providers";
import { Navigation } from "@/app/navigation";
import "./style.css";

export const metadata: Metadata = {
  title: "Jan Paul",
  description: "Jan Paul's website",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" className="dark">
    <body className="min-w-screen scroll-smooth antialiased transform-gpu bg-white text-black dark:text-white dark:bg-black">
      <Providers>
        <Navigation />
        <main className="mt-2 mx-2 md:mx-4 lg:mx-16">{children}</main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
