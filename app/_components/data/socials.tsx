import {
  SiHey,
  SiGithub,
  SiInstagram,
  SiReddit,
  SiMixcloud,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type SocialName =
  "mail" | "github" | "instagram" | "reddit" | "mixcloud";
export type Social = {
  name: SocialName;
  url: string;
  icon: string;
  title?: string;
};

export const socialIconsMap: Record<string, IconType> = {
  mail: SiHey,
  github: SiGithub,
  instagram: SiInstagram,
  reddit: SiReddit,
  mixcloud: SiMixcloud,
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
  {
    name: "mixcloud",
    url: "https://mixcloud.com/janpaul74",
    icon: "mixcloud",
    title: "DJ Jean Paul @ Mixcloud",
  },
];
