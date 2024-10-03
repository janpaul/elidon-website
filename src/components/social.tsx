import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandReddit,
  IconMailbox,
} from "@tabler/icons-react";
import { Link, Button } from "@nextui-org/react";

import { flattenPhone } from "@/lib";
import { contact } from "@/data";

type SocialItemProps = {
  url: string;
  icon: any;
};
const SocialItem = ({ url, icon: Icon }: SocialItemProps) => (
  <Button
    as={Link}
    variant="light"
    size="sm"
    href={url}
    className="text-black dark:text-white"
    isExternal
    isIconOnly
    role="button"
  >
    <Icon className="w-6 h-6" />
  </Button>
);

export const Social = () => (
  <div className="flex flex-row gap-0">
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
