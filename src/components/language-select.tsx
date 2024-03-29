import NextLink from "next/link";
import "flag-icons/css/flag-icons.min.css";

type Props = {
  path?: string;
};
export const LanguageSelect = ({ path = `` }: Props) => (
  <div className="flex flex-row gap-4">
    <NextLink href={`/nl/${path}`}>
      <span className="fi fi-nl rounded-sm"></span>
    </NextLink>
    <NextLink href={`/en${path}`}>
      <span className="fi fi-gb rounded-sm"></span>
    </NextLink>
    <NextLink href={`/se${path}`}>
      <span className="fi fi-se rounded-sm"></span>
    </NextLink>
  </div>
);
