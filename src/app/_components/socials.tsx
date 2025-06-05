import { IconLink } from "@/app/_components";
import { config } from "@/data/config";

const { email, socials } = config;

export const Socials = () => (
  <div className="flex flex-row md:flex-col gap-6 md:gap-1">
    <IconLink href={`mailto:${email}`} title={email} icon="/icons/hey.svg" />
    <IconLink
      href="https://signal.me/#p/+31629267339"
      title="Signal"
      icon="/icons/signal.svg"
    />
    <IconLink
      href="//wa.me/31629267339"
      title="Whatsapp"
      icon="/icons/whatsapp.svg"
    />
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
    <span className="hidden md:inline-block ml-8 lg:ml-6 line-through">
      LinkedIn
    </span>
  </div>
);
