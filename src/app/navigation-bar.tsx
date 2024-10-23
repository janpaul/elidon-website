"use client";
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
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { contact } from "@/data";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandReddit,
  IconBrandWhatsapp,
  IconMailbox,
} from "@tabler/icons-react";
import { flattenPhone } from "@/lib";
import { ThemeSwitcher } from "@/components";

type MenuItem = { label: string; href: string };
const menuItems: MenuItem[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
];

type SocialItemProps = {
  url: string;
  icon: any;
};
const SocialItem = ({ url, icon: Icon }: SocialItemProps) => (
  <Button as={Link} href={url} isExternal role="button">
    <Icon className="w-6 h-6" />
  </Button>
);

export const NavigationBar = () => (
  <Navbar isBordered>
    <NavbarContent justify="start">
      <NavbarMenuToggle aria-label="toggle menu" className="sm:hidden" />
      <NavbarBrand>
        <span className="hidden sm:flex p-2 uppercase">Jan Paul</span>
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
        <ButtonGroup
          variant="light"
          size="sm"
          isIconOnly
          className="text-black dark:text-white"
        >
          <SocialItem url={`mailto:${contact.email}`} icon={IconMailbox} />
          <SocialItem
            url={`//wa.me/${flattenPhone(contact.phone)}`}
            icon={IconBrandWhatsapp}
          />
          <SocialItem
            url={`//github.com/${contact.github}`}
            icon={IconBrandGithub}
          />
          <SocialItem
            url={`//reddit.com/u/${contact.reddit}`}
            icon={IconBrandReddit}
          />
          <SocialItem
            url={`//instagram.com/${contact.instagram}`}
            icon={IconBrandInstagram}
          />
        </ButtonGroup>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent className="gap-4" justify="end">
      <NavbarItem>
        <ThemeSwitcher />
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
