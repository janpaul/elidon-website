"use client";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandReddit,
  IconMailbox,
  IconCoinEuro,
} from "@tabler/icons-react";
import { useContact } from "@/hooks";
import { flattenPhone } from "@/lib";

type SocialItemProps = {
  href: string;
  title: string;
  icon: any;
};
const SocialItem = ({ title, href, icon: Icon }: SocialItemProps) => (
  <div className="flex flex-row gap-1 items-center">
    <Tooltip content={title} placement="bottom">
      <Link href={href} isExternal>
        <Icon className="h-12 w-12 lg:h-16 lg:w-16 text-gray-700 dark:text-gray-200 hover:rotate-6" />
      </Link>
    </Tooltip>
  </div>
);

export const Social = () => {
  const { email, phone, github, instagram, reddit, bunq, soundcloud } =
    useContact();
  return (
    <div className="flex flex-row gap-2 md:gap-4 flex-wrap p-2 rounded-md w-fit">
      <SocialItem
        title="Whatsapp"
        icon={IconBrandWhatsapp}
        href={`//wa.me/${flattenPhone(phone)}`}
      />
      <SocialItem
        title="Hey email"
        icon={IconMailbox}
        href={`mailto:${email}`}
      />
      <SocialItem
        title="Soundcloud"
        icon={IconBrandSoundcloud}
        href={`https://soundcloud.com/${soundcloud}`}
      />
      <SocialItem
        title="Github"
        icon={IconBrandGithub}
        href={`//github.com/${github}`}
      />
      <SocialItem
        title="Instagram"
        icon={IconBrandInstagram}
        href={`//instagram.com/${instagram}`}
      />
      <SocialItem
        title="Reddit"
        icon={IconBrandReddit}
        href={`//reddit.com/u/${reddit}`}
      />
      <SocialItem title="Bunq" icon={IconCoinEuro} href={`//bunq.me/${bunq}`} />
    </div>
  );
};
