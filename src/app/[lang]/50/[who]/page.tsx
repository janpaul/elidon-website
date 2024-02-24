import {
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
  CalendarDaysIcon,
} from "@heroicons/react/16/solid";
import { Joke, Paragraph, Title, Spacer, Breadcrumbs } from "@/components";
import { capitalize, translate, type Language } from "@/lib";
import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";
import signal from "@/icons/signal-color.svg";
import me from "@/media/jp.jpg";
import "flag-icons/css/flag-icons.min.css";
import type { LangProps } from "@/app/[lang]/types";
import { contact } from "@/data/contact";

const { email, phoneFlat } = contact;
const defaultWho = `unknown`;
type Props = LangProps & {
  params: { who: string };
};

const FiftyLangPage = async ({ params: { lang, who = defaultWho } }: Props) => {
  const t = await translate(lang as Language);
  return (
    <>
      <Breadcrumbs
        path={[
          { title: `home`, href: `/${lang}` },
          { title: `50`, href: `/${lang}/50/${who}` },
        ]}
      />
      <Spacer />
      <div className="flex flex-row gap-4">
        <NextLink href={`/nl/50/${who}`}>
          <span className="fi fi-nl rounded-sm"></span>
        </NextLink>
        <NextLink href={`/en/50/${who}`}>
          <span className="fi fi-gb rounded-sm"></span>
        </NextLink>
        <NextLink href={`/se/50/${who}`}>
          <span className="fi fi-se rounded-sm"></span>
        </NextLink>
      </div>
      <Divider />
      <Spacer />
      <Title size="md">
        {t(`50.greeting`)} {who === defaultWho ? "" : capitalize(who)}!
      </Title>
      <Spacer />
      <Paragraph className="mb-4" size="lg">
        {t(`50.p1`)}{" "}
        <Link
          href="//maps.apple.com/?t=h&address=Oudezijds%20Achterburgwal%2028%20Amsterdam&daddr=Oudezijds%20Achterburgwal%2028%20Amsterdam&dirflg=d"
          className="text-2xl"
          isExternal
        >
          Café De Zeevaart
        </Link>{" "}
        {t(`50.p2`)}
      </Paragraph>
      <Paragraph size="lg">
        {t(`50.rsvp`)}. {t(`50.reach`)}{" "}
        <Tooltip content="Whatsapp">
          <Link href={`//wa.me/${phoneFlat}`} isExternal>
            <NextImage src={wa.src} width={16} height={16} alt="Whatsapp" />
          </Link>
        </Tooltip>
        ,{" "}
        <Tooltip content="Hey email">
          <Link href={`mailto:${email}`} isExternal>
            <NextImage src={hey.src} width={16} height={16} alt="Hey email" />
          </Link>
        </Tooltip>{" "}
        {t(`common.or`)}{" "}
        <Tooltip content="Signal">
          <Link href={`https://signal.me/#p/+${phoneFlat}`} isExternal>
            <NextImage src={signal.src} width={16} height={16} alt="Signal" />
          </Link>
        </Tooltip>{" "}
        .
      </Paragraph>
      <Card className="w-fit my-4">
        <Link href="/api/50/ical">
          <CalendarDaysIcon className="h-5 w-5" />
          {t("50.calendar")}
        </Link>
      </Card>
      <Spacer />
      <section className="flex flex-col lg:flex-row gap-1 lg:gap-4 my-8">
        <Card>
          <CardBody>
            <Link
              href={`//wa.me/${phoneFlat}?text=(${capitalize(who)}) %20${t(`50.coming.yes`)}`}
              className="flex flex-row items-center gap-2 text-lg"
              isExternal
            >
              <HandThumbUpIcon className="w-8 h-8 text-green-500" />
              {t(`50.coming.yes`)}
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Link
              href={`//wa.me/${phoneFlat}?text=(${capitalize(who)})%20${t(`50.coming.maybe`)}`}
              className="flex flex-row items-center gap-2 text-lg"
              isExternal
            >
              <QuestionMarkCircleIcon className="w-8 h-8 text-yellow-500" />
              {t(`50.coming.maybe`)}
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Link
              href={`//wa.me/${phoneFlat}?text=(${capitalize(who)})%20${t(`50.coming.no`)}`}
              className="flex flex-row items-center gap-2 text-lg"
              isExternal
            >
              <HandThumbDownIcon className="w-8 h-8 text-red-500" />
              {t(`50.coming.no`)}
            </Link>
          </CardBody>
        </Card>
      </section>
      <User
        name="Jan Paul"
        description={t(`common.diss`)}
        avatarProps={{
          src: me.src,
        }}
      />
      <Spacer />
      <Joke />
    </>
  );
};

export default FiftyLangPage;
