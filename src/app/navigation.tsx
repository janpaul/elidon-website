import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Social } from "@/components";

type MenuItem = { label: string; href: string };
const menuItems: MenuItem[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
];

export const Navigation = () => (
  <Navbar isBordered>
    <NavbarContent justify="start">
      <NavbarMenuToggle aria-label="toggle menu" className="sm:hidden" />
      <NavbarBrand>
        <span className="hidden sm:flex ring-2 ring-blue-500 ring-offset-1 rounded-md p-2 uppercase">
          Jan Paul
        </span>
        <Avatar
          name="JP"
          size="sm"
          isBordered
          color="primary"
          className="flex sm:hidden"
        />
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="gap-4 hidden sm:flex">
      {menuItems.map(({ label, href }) => (
        <NavbarItem key={label} className="uppercase">
          <Link href={href} isBlock>
            {label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
    <NavbarContent className="gap-4 " justify="end">
      <NavbarItem>
        <Social />
      </NavbarItem>
    </NavbarContent>

    {/* The menu below is only displayed on sm devices */}
    <NavbarMenu>
      {menuItems.map(({ label, href }) => (
        <NavbarMenuItem key={label}>
          <Link href={href} className="capitalize">
            {label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
);
