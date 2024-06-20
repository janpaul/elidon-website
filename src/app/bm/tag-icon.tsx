import {
  IconVinyl,
  IconQuestionMark,
  IconBuildingBridge2,
  IconConfetti,
  IconDeviceGamepad,
  IconSchool,
  IconSocial,
  IconMail,
  IconDeviceTv,
  IconBrandApple,
  IconNews,
  IconCurrencyKroneSwedish,
  IconBooks,
  IconGlobe,
  IconCode,
  IconBrandCpp,
  IconBrandRust,
  IconBrandTypescript,
  IconHtml,
  IconBrandCss3,
  IconBrandSwift,
  IconPackage,
  IconBuildingBank,
  IconWomanFilled,
} from "@tabler/icons-react";
import type { Tag } from "@/data/bookmarks";

const TagMapping: Record<Tag, any> = {
  all: IconGlobe,
  dj: IconVinyl,
  amsterdam: IconBuildingBridge2,
  fun: IconConfetti,
  games: IconDeviceGamepad,
  learning: IconSchool,
  social: IconSocial,
  mail: IconMail,
  media: IconDeviceTv,
  apple: IconBrandApple,
  news: IconNews,
  svenska: IconCurrencyKroneSwedish,
  books: IconBooks,
  development: IconCode,
  cpp: IconBrandCpp,
  rust: IconBrandRust,
  typescript: IconBrandTypescript,
  html: IconHtml,
  css: IconBrandCss3,
  mdn: IconHtml,
  swift: IconBrandSwift,
  dhl: IconPackage,
  work: IconBuildingBank,
  nsfw: IconWomanFilled,
};
type Props = {
  tag: Tag;
  size?: number;
};
export const TagIcon = ({ tag, size = 32 }: Props) => {
  const Icon = TagMapping[tag] ?? IconQuestionMark;
  return (
    <>
      <Icon size={size} />
    </>
  );
};
