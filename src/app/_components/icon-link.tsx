import NextImage from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  icon: string;
  hiddenOnMobile?: boolean;
};
export const IconLink = ({
  href,
  title,
  icon,
  hiddenOnMobile = false,
}: Props) => (
  <a
    className={cn(
      "flex flex-row items-center gap-2 hover:underline hover:underline-offset-4",
      hiddenOnMobile && "hidden md:flex",
    )}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NextImage
      className="dark:invert hover:opacity-90 w-8 h-8 md:w-6 md:h-6 lg:w-4 lg:h-4"
      src={icon}
      alt={`${title} icon`}
      width={16}
      height={16}
    />
    <span className="hidden md:inline-block">{title}</span>
  </a>
);
