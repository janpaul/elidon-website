import { Link } from "@nextui-org/link";

import {
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandReddit,
  IconMailShare,
} from "@tabler/icons-react";
import { contact } from "@/data/contact";

const { email, phoneFlat } = contact;
const className = "h-12 w-12 lg:h-16 lg:w-16 text-gray-700 dark:text-gray-200";

export const Social = () => (
  <div className="flex flex-row gap-2 md:gap-4 flex-wrap p-2 rounded-md w-fit">
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//wa.me/${phoneFlat}`} isExternal>
        <IconBrandWhatsapp className={className} />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`mailto:${email}`} isExternal>
        <IconMailShare className={className} />
      </Link>
    </div>
    {/*<div className="flex flex-row gap-1 items-center">*/}
    {/*  <Link href={`//signal.me/#p/+${phoneFlat}`} isExternal>*/}
    {/*    <NextImage src={signal.src} width={32} height={32} alt="Signal" />*/}
    {/*  </Link>*/}
    {/*</div>*/}
    <div className="flex flex-row gap-1 items-center">
      <Link href="https://soundcloud.com/janpaul-418014217" isExternal>
        <IconBrandSoundcloud className={className} />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//github.com/${contact.github}`} isExternal>
        <IconBrandGithub className={className} />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//instagram.com/${contact.instagram}`} isExternal>
        <IconBrandInstagram className={className} />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//reddit.com/u/${contact.reddit}`} isExternal>
        <IconBrandReddit className={className} />
      </Link>
    </div>
  </div>
);
