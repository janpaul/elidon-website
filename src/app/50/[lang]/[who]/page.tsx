import { text, type Language } from "./text";
import {
  Spacer,
  Divider,
  Link,
  Tooltip,
  User,
  Card,
  CardBody,
} from "@nextui-org/react";
import NextLink from "next/link";
import NextImage from "next/image";
import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";
import { Joke, Paragraph, Title } from "@/components";
import { capitalize } from "@/lib";
import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";
import signal from "@/icons/signal-color.svg";
import me from "@/media/jp.jpg";
import "flag-icons/css/flag-icons.min.css";

const defaultWho = `unknown`;
type Props = {
  params: { lang: string; who: string };
};

const FiftyLangPage = ({ params: { lang, who = defaultWho } }: Props) => {
  const activeText = text[lang as Language];
  return (
    <>
      <Spacer x={4} />
      <div className="flex flex-row gap-4">
        <NextLink href={`/50/nl/${who}`}>
          <span className="fi fi-nl rounded-sm"></span>
        </NextLink>
        <NextLink href={`/50/en/${who}`}>
          <span className="fi fi-gb rounded-sm"></span>
        </NextLink>
        <NextLink href={`/50/se/${who}`}>
          <span className="fi fi-se rounded-sm"></span>
        </NextLink>
      </div>
      <Divider />
      <Spacer x={8} />
      <Title size="md">
        {activeText.greeting} {who === defaultWho ? "" : capitalize(who)}!
      </Title>
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
        </Tooltip>
        ,{" "}
        <Tooltip content="Signal">
          <Link href="https://signal.me/#p/+31629267339" isExternal>
            <NextImage src={signal.src} width={16} height={16} alt="Signal" />
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
      <section className="flex flex-col lg:flex-row gap-1 lg:gap-4 my-8">
        <Card>
          <CardBody>
            <Link
              href={`mailto:janpaul@hey.com?subject=${capitalize(who)}:%20${activeText.coming.yes}`}
              className="flex flex-row items-center gap-2 text-lg"
            >
              <HandThumbUpIcon className="w-8 h-8 text-green-500" />
              {activeText.coming.yes}
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Link
              href={`mailto:janpaul@hey.com?subject=${capitalize(who)}:%20${activeText.coming.maybe}`}
              className="flex flex-row items-center gap-2 text-lg"
            >
              <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-500" />
              {activeText.coming.maybe}
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Link
              href={`mailto:janpaul@hey.com?subject=${capitalize(who)}:%20${activeText.coming.no}`}
              className="flex flex-row items-center gap-2 text-lg"
            >
              <HandThumbDownIcon className="w-8 h-8 text-red-500" />
              {activeText.coming.no}
            </Link>
          </CardBody>
        </Card>
      </section>
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
