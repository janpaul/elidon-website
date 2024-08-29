import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandReddit,
  IconMailbox,
} from "@tabler/icons-react";
import { flattenPhone } from "@/lib";
import { contact } from "@/data";

export const Social = () => (
  <div className="flex flex-row gap-2">
    <a href={`mailto:${contact.email}`} className="text-blue-500">
      <IconMailbox className="w-8 h-8" />
    </a>
    <a
      href={`//wa.me/${flattenPhone(contact.phone)}`}
      className="text-blue-500"
    >
      <IconBrandWhatsapp className="w-8 h-8" />
    </a>
    <a href={`//github.com/${contact.github}`} className="text-blue-500">
      <IconBrandGithub className="w-8 h-8" />
    </a>
    <a href={`//reddit.com/u/${contact.reddit}`} className="text-blue-500">
      <IconBrandReddit className="w-8 h-8" />
    </a>
    <a href={`//instagram.com/${contact.instagram}`} className="text-blue-500">
      <IconBrandInstagram className="w-8 h-8" />
    </a>
  </div>
);
