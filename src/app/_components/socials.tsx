import { IconLink } from "@/app/_components";
import { config } from "@/data/config";

const { email, socials } = config;

export const Socials = () => (
  <>
    <IconLink href={`mailto:${email}`} title="Hey" icon="/icons/hey.svg" />
    <IconLink
      href={`//bsky.app/profile/${socials.bluesky}`}
      title="Bluesky"
      icon="/icons/bluesky.svg"
    />
    <IconLink
      href={`//instagram.com/${socials.instagram}`}
      title="Instagram"
      icon="/icons/instagram.svg"
    />
    <IconLink
      href={`//reddit.com/u/${socials.reddit}`}
      title="Reddit"
      icon="/icons/reddit.svg"
    />
  </>
);
