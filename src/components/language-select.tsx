import NextLink from "next/link";
import NextImage from "next/image";

type Props = {
  path?: string;
};
export const LanguageSelect = ({ path = `` }: Props) => (
  <div className="flex flex-row gap-4">
    <NextLink href={`/nl/${path}`}>
      <NextImage
        src="https://flagcdn.com/w80/nl.png"
        width="24"
        height="20"
        alt="Dutch"
      />
    </NextLink>
    <NextLink href={`/en/${path}`}>
      <NextImage
        src="https://flagcdn.com/w80/gb.png"
        width="24"
        height="20"
        alt="English"
      />
    </NextLink>
    <NextLink href={`/se/${path}`}>
      <NextImage
        src="https://flagcdn.com/w80/se.png"
        width="24"
        height="20"
        alt="Swedish"
      />
    </NextLink>
  </div>
);
