import NextImage from "next/image";

type Props = {
  href: string;
  title: string;
  icon: string;
};
export const IconLink = ({ href, title, icon }: Props) => (
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NextImage
      className="dark:invert"
      src={icon}
      alt={`${title} icon`}
      width={16}
      height={16}
    />
    <span className="sm:hidden lg:inline-block">{title}</span>
  </a>
);
