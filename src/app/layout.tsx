import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { Social } from "@/components";
import avatar from "@/app/jp.jpg";
import { Providers } from "./providers";
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
        <Navbar isBordered>
          <NavbarBrand>
            <span className="ring-2 ring-blue-500 ring-offset-1 rounded-md p-2 uppercase">
              Jan Paul
            </span>
          </NavbarBrand>
          <NavbarContent className="gap-4 " justify="center">
            <NavbarItem>
              <Social />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="hidden lg:flex">
            <Avatar src={avatar.src} />
          </NavbarContent>
        </Navbar>
        <>{children}</>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
