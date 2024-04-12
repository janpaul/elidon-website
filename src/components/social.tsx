import NextImage from "next/image";
import { Link } from "@nextui-org/react";
import { contact } from "@/data/contact";

import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";
import github from "@/icons/github-color.svg";
import instagram from "@/icons/instagram-color.svg";
import bunq from "@/icons/bunq-color.svg";
import reddit from "@/icons/reddit-color.svg";
import signal from "@/icons/signal-color.svg";
import soundcloud from "@/icons/soundcloud-color.svg";

const { email, phoneFlat } = contact;

export const Social = () => (
  <div className="flex flex-row gap-2 md:gap-4 flex-wrap bg-white p-2 rounded-md w-fit bg-opacity-80 dark:bg-opacity-20">
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//wa.me/${phoneFlat}`} isExternal>
        <NextImage src={wa.src} width={32} height={32} alt="Whatsapp" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`mailto:${email}`} isExternal>
        <NextImage src={hey.src} width={32} height={32} alt="Hey email" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//signal.me/#p/+${phoneFlat}`} isExternal>
        <NextImage src={signal.src} width={32} height={32} alt="Signal" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href="https://soundcloud.com/janpaul-418014217" isExternal>
        <NextImage
          src={soundcloud.src}
          width={32}
          height={32}
          alt="Soundcloud"
        />
      </Link>
    </div>
    {/*<div className="flex flex-row gap-1 items-center">*/}
    {/*  <Link href={`tel:${contact.phone}`} isExternal>*/}
    {/*    <NextImage src={apple.src} width={32} height={32} alt="Apple" />*/}
    {/*  </Link>*/}
    {/*</div>*/}
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//github.com/${contact.github}`} isExternal>
        <NextImage src={github.src} width={32} height={32} alt="Github" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//instagram.com/${contact.instagram}`} isExternal>
        <NextImage src={instagram.src} width={32} height={32} alt="Instagram" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//bunq.me/${contact.bunq}`} isExternal>
        <NextImage src={bunq.src} width={32} height={32} alt="Bunq" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//reddit.com/u/${contact.reddit}`} isExternal>
        <NextImage src={reddit.src} width={32} height={32} alt="Reddit" />
      </Link>
    </div>
  </div>
);
