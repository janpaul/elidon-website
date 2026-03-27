type SocialName = "mail" | "github" | "instagram" | "reddit" | "mixcloud";
type Social = { name: SocialName; url: string; icon: string; title?: string };

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

export const getSocialByName = (name: SocialName) =>
  socials.find((social) => social.name === name);
