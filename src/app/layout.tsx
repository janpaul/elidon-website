import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Providers } from "./providers";
import { NavigationBar } from "@/app/navigation-bar";
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
  <html lang="en" suppressHydrationWarning>
    <body className="min-w-screen scroll-smooth antialiased transform-gpu">
      <Providers>
        <NavigationBar />
        <main className="mt-2 mx-2 md:mx-4 lg:mx-16">{children}</main>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
