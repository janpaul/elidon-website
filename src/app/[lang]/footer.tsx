import { Link } from "@nextui-org/react";
import NextImage from "next/image";
import wa from "@/media/WhatsAppButtonGreenSmall.svg";
import { contact } from "@/data/contact";

const { phoneFlat } = contact;

export const Footer = () => (
  <div className="flex flex-row justify-start lg:justify-end">
    <Link href={`//wa.me/${phoneFlat}`} isExternal>
      <NextImage src={wa} alt="Chat on Whatsapp" />
    </Link>
  </div>
);
