import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandReddit,
  IconMailbox,
} from "@tabler/icons-react";
import { Link } from "@nextui-org/react";

import { flattenPhone } from "@/lib";
import { contact } from "@/data";

type SocialItemProps = {
  url: string;
  icon: any;
};
const SocialItem = ({ url, icon: Icon }: SocialItemProps) => (
  <Link
    href={url}
    className="text-black dark:text-white"
    isExternal
    role="button"
  >
    <Icon className="w-6 h-6" />
  </Link>
);

export const Social = () => (
  <div className="flex flex-row gap-2">
    <SocialItem url={`mailto:${contact.email}`} icon={IconMailbox} />
    <SocialItem
      url={`//wa.me/${flattenPhone(contact.phone)}`}
      icon={IconBrandWhatsapp}
    />
    <SocialItem url={`//github.com/${contact.github}`} icon={IconBrandGithub} />
    <SocialItem
      url={`//reddit.com/u/${contact.reddit}`}
      icon={IconBrandReddit}
    />
    <SocialItem
      url={`//instagram.com/${contact.instagram}`}
      icon={IconBrandInstagram}
    />
  </div>
);
