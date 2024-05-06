import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandReddit,
  IconMailShare,
} from "@tabler/icons-react";
import { contact } from "@/data/contact";
import type { ReactNode } from "react";

const { email, phoneFlat } = contact;
const className = "h-12 w-12 lg:h-16 lg:w-16 text-gray-700 dark:text-gray-200";

type SocialItemProps = {
  href: string;
  title: string;
  icon: any;
};
const SocialItem = ({ title, href, icon: Icon }: SocialItemProps) => (
  <div className="flex flex-row gap-1 items-center">
    <Tooltip content={title} placement="bottom">
      <Link href={href} isExternal>
        <Icon className="h-12 w-12 lg:h-16 lg:w-16 text-gray-700 dark:text-gray-200" />
      </Link>
    </Tooltip>
  </div>
);

export const Social = () => (
  <div className="flex flex-row gap-2 md:gap-4 flex-wrap p-2 rounded-md w-fit">
    <SocialItem
      title="Whatsapp"
      icon={IconBrandWhatsapp}
      href={`//wa.me/${phoneFlat}`}
    />
    <SocialItem
      title="Hey email"
      icon={IconMailShare}
      href={`mailto:${email}`}
    />
    <SocialItem
      title="Soundcloud"
      icon={IconBrandSoundcloud}
      href="https://soundcloud.com/janpaul-418014217"
    />
    <SocialItem
      title="Github"
      icon={IconBrandGithub}
      href={`//github.com/${contact.github}`}
    />
    <SocialItem
      title="Instagram"
      icon={IconBrandInstagram}
      href={`//instagram.com/${contact.instagram}`}
    />
    <SocialItem
      title="Reddit"
      icon={IconBrandReddit}
      href={`//reddit.com/u/${contact.reddit}`}
    />
  </div>
);
