import { IconLink } from "@/app/_components";
import { config } from "@/data/config";
import { TypographySmall } from "@/components";

const {
  email,
  socials: { youtube, bluesky, instagram, reddit, mixcloud },
} = config;

export const Socials = () => (
  <div className="flex flex-row md:flex-col gap-2">
    <IconLink href={`mailto:${email}`} title={email} icon="/icons/apple.svg" />
    <IconLink
      href={`//mixcloud.com/${mixcloud}`}
      title="Mixcloud"
      icon="/icons/mixcloud.svg"
    />
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
      href={`//www.youtube.com/channel/${youtube}`}
      title="YouTube"
      icon="/icons/youtube.svg"
    />
    <IconLink
      href={`//bsky.app/profile/${bluesky}`}
      title="Bluesky"
      icon="/icons/bluesky.svg"
    />
    <IconLink
      href={`//instagram.com/${instagram}`}
      title="Instagram"
      icon="/icons/instagram.svg"
    />
    <IconLink
      href={`//reddit.com/u/${reddit}`}
      title="Reddit"
      icon="/icons/reddit.svg"
      hiddenOnMobile
    />
    {/*<span className="hidden md:inline-block ml-8 lg:ml-6 ">*/}
    {/*  <span className="line-through">Phone</span>{" "}*/}
    {/*  <TypographySmall>(please don&apos;t call me)</TypographySmall>*/}
    {/*</span>*/}
    {/*<span className="hidden md:inline-block ml-8 lg:ml-6">*/}
    {/*  <span className="line-through">LinkedIn</span>{" "}*/}
    {/*  <TypographySmall>(never had, never will)</TypographySmall>*/}
    {/*</span>*/}
  </div>
);
