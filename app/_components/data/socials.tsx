import { SiHey, SiGithub, SiInstagram, SiReddit } from "react-icons/si";
import type { IconType } from "react-icons";

export type SocialName = "mail" | "github" | "instagram" | "reddit";
export type Social = {
  name: SocialName;
  url: string;
  icon: string;
  title: string;
};

export const socialIconsMap: Record<SocialName, IconType> = {
  mail: SiHey,
  github: SiGithub,
  instagram: SiInstagram,
  reddit: SiReddit,
};

export const socials: Social[] = [
  {
    name: "mail",
    url: "mailto:janpaul@hey.com",
    icon: "mail",
    title: "Send me an email",
  },
  {
    name: "github",
    url: "https://github.com/janpaul",
    icon: "github",
    title: "Github",
  },
  {
    name: "instagram",
    url: "https://instagram.com/janpaul",
    icon: "instagram",
    title: "Instagram",
  },
  {
    name: "reddit",
    url: "https://reddit.com/u/janpaul74",
    icon: "reddit",
    title: "Reddit",
  },
];
