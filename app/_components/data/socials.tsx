import {
  FaGithub,
  FaInstagram,
  FaReddit,
  FaApple,
  FaMixcloud,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type SocialName =
  | "mail"
  | "github"
  | "instagram"
  | "reddit"
  | "mixcloud";
export type Social = {
  name: SocialName;
  url: string;
  icon: string;
  title?: string;
};

export const socialIconsMap: Record<string, IconType> = {
  apple: FaApple,
  github: FaGithub,
  instagram: FaInstagram,
  reddit: FaReddit,
  mixcloud: FaMixcloud,
};

export const socials: Social[] = [
  {
    name: "mail",
    url: "mailto:janpaul@elidon.net",
    icon: "apple",
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
