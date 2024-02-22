import NextImage from "next/image";
import { Link } from "@nextui-org/react";
import { contact } from "@/data/contact";

import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";
import apple from "@/icons/apple-color.svg";
import github from "@/icons/github-color.svg";
import instagram from "@/icons/instagram-color.svg";
import bunq from "@/icons/bunq-color.svg";
import reddit from "@/icons/reddit-color.svg";

export const Social = () => (
  <div className="flex flex-row gap-2 md:gap-4 flex-wrap bg-white p-2 rounded-md w-fit bg-opacity-10">
    <div className="flex flex-row gap-1 items-center">
      <Link href={`//wa.me/31629267339`} isExternal>
        <NextImage src={wa.src} width={32} height={32} alt="Whatsapp" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`mailto:${contact.email}`} isExternal>
        <NextImage src={hey.src} width={32} height={32} alt="Hey email" />
      </Link>
    </div>
    <div className="flex flex-row gap-1 items-center">
      <Link href={`tel:${contact.phone}`} isExternal>
        <NextImage src={apple.src} width={32} height={32} alt="Apple" />
      </Link>
    </div>
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
