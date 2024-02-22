import { text, type Language } from "./text";
import { Spacer, Divider, Link, Tooltip, User } from "@nextui-org/react";
import NextLink from "next/link";
import { Joke, Paragraph, Title } from "@/components";
import NextImage from "next/image";
import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";
import me from "@/media/jp.jpg";
import "flag-icons/css/flag-icons.min.css";

type Props = {
  params: { lang: string };
};

const FiftyLangPage = ({ params: { lang } }: Props) => {
  const activeText = text[lang as Language];
  return (
    <>
      <Spacer x={4} />
      <div className="flex flex-row gap-4">
        <NextLink href="/50/nl">
          <span className="fi fi-nl rounded-sm"></span>
        </NextLink>
        <NextLink href="/50/en">
          <span className="fi fi-gb rounded-sm"></span>
        </NextLink>
        <NextLink href="/50/se">
          <span className="fi fi-se rounded-sm"></span>
        </NextLink>
      </div>
      <Divider />
      <Title size="md">{activeText.greeting}</Title>
      <Paragraph className="mb-4" size="lg">
        {activeText.p1}{" "}
        <Link
          href="//maps.apple.com/?t=h&address=Oudezijds%20Achterburgwal%2028%20Amsterdam&daddr=Oudezijds%20Achterburgwal%2028%20Amsterdam&dirflg=d"
          className="text-2xl"
          isExternal
        >
          Café De Zeevaart
        </Link>{" "}
        {activeText.p2}
      </Paragraph>
      <Paragraph size="lg">
        {activeText.rsvp}. {activeText.reach}{" "}
        <Tooltip content="Whatsapp">
          <Link href="//wa.me/31629267339" isExternal>
            <NextImage src={wa.src} width={16} height={16} alt="Whatsapp" />
          </Link>
        </Tooltip>{" "}
        {activeText.or}{" "}
        <Tooltip content="Hey email">
          <Link href="mailto:janpaul@hey.com" isExternal>
            <NextImage src={hey.src} width={16} height={16} alt="Hey email" />
          </Link>
        </Tooltip>
        .
      </Paragraph>
      <Spacer x={16} />
      <User
        name="Jan Paul"
        description={activeText.diss}
        avatarProps={{
          src: me.src,
        }}
      />
      <Spacer x={4} />
      <Joke />
    </>
  );
};

export default FiftyLangPage;
