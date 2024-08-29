import type { ReactNode } from "react";
import type { Metadata } from "next";
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
  <html lang="en">
    <body className="min-w-screen scroll-smooth antialiased bg-white text-black dark:text-white dark:bg-black mx-2 md:mx-4 lg:mx-16">
      {children}
    </body>
  </html>
);

export default RootLayout;
