import { Link } from "@nextui-org/react";
import NextImage from "next/image";
import wa from "@/media/WhatsAppButtonGreenSmall.svg";
import { contact } from "@/data/contact";

const { phoneFlat } = contact;

export const Footer = () => (
  <div className="flex flex-row justify-between items-end">
    <div>
      <small>&copy; 1974 - {new Date().getFullYear()} Jan Paul</small>
    </div>
    <Link href={`//wa.me/${phoneFlat}`} isExternal>
      <NextImage src={wa} alt="Chat on Whatsapp" />
    </Link>
  </div>
);
