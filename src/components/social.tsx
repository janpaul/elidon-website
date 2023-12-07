import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import {
  GithubIcon,
  HeyIcon,
  InstagramIcon,
  BunqIcon,
  RedditIcon,
  AppleIcon,
} from "@/components/icons";
import { Link } from "@/components";
import { contact } from "@/data/contact";

export const Social = () => (
  <div className="flex flex-row gap-2 md:gap-4 flex-wrap">
    <div className="flex flex-row gap-1 items-center">
      <Link href={`mailto:${contact.email}`}>
        <AppleIcon />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`tel:${contact.phone}`}>
        <DevicePhoneMobileIcon className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//github.com/${contact.github}`}>
        <GithubIcon />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//instagram.com/${contact.instagram}`}>
        <InstagramIcon />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//bunq.me/${contact.bunq}`}>
        <BunqIcon />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//reddit.com/u/${contact.reddit}`}>
        <RedditIcon />
      </Link>
    </div>
  </div>
);
