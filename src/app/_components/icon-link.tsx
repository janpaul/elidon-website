import NextImage from "next/image";

type Props = {
  href: string;
  title: string;
  icon: string;
};
export const IconLink = ({ href, title, icon }: Props) => (
  <a
    className="flex flex-row items-center gap-2 hover:underline hover:underline-offset-4"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <NextImage
      className="dark:invert hover:opacity-90"
      src={icon}
      alt={`${title} icon`}
      width={16}
      height={16}
    />
    <span className="hidden md:inline-block">{title}</span>
  </a>
);
