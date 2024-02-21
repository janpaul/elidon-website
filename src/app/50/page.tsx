"use client";
import { useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import {
  Button,
  ButtonGroup,
  Breadcrumbs,
  BreadcrumbItem,
  User,
  Link,
  Tooltip,
  Divider,
  Accordion,
  AccordionItem,
  Snippet,
} from "@nextui-org/react";
import me from "@/media/jp.jpg";
import { Paragraph, Title, Joke } from "@/components";
import { text, type Language } from "./text";
import { Timeline } from "./timeline";
import "flag-icons/css/flag-icons.min.css";
import wa from "@/icons/whatsapp-color.svg";
import hey from "@/icons/hey-color.svg";

const FiftyPage = () => {
  const [language, setLanguage] = useState<Language>(`nl`);
  const activeText = text[language];
  return (
    <>
      <Breadcrumbs className="mb-4">
        <BreadcrumbItem>
          <NextLink href="/">Home</NextLink>
        </BreadcrumbItem>
        <BreadcrumbItem isDisabled>
          <NextLink href="/50">
            {language === `nl` ? `Vijftig` : `Fifty`}
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumbs>
      <ButtonGroup className="mb-4" size="sm">
        <Button onClick={() => setLanguage(`nl`)}>
          <span className="fi fi-nl"></span>
        </Button>
        <Button onClick={() => setLanguage(`en`)}>
          <span className="fi fi-gb"></span>
        </Button>
      </ButtonGroup>
      <Divider />
      <Title>{activeText.greeting}</Title>
      <Paragraph className="mb-4">
        {activeText.p1}{" "}
        <Link href="//maps.apple.com/?t=h&address=Oudezijds%20Achterburgwal%2028%20Amsterdam&daddr=Oudezijds%20Achterburgwal%2028%20Amsterdam&dirflg=d">
          Café De Zeevaart
        </Link>{" "}
        {activeText.p2}
      </Paragraph>
      <Paragraph>
        {activeText.rsvp}. {activeText.reach}{" "}
        <Tooltip content="Whatsapp">
          <Link href="//wa.me/31629267339">
            <NextImage src={wa.src} width={16} height={16} alt="Whatsapp" />
          </Link>
        </Tooltip>{" "}
        {activeText.or}{" "}
        <Tooltip content="Hey email">
          <Link href="mailto:janpaul@hey.com">
            <NextImage src={hey.src} width={16} height={16} alt="Hey email" />
          </Link>
        </Tooltip>
        .
      </Paragraph>
      <User
        name="Jan Paul"
        description={activeText.diss}
        avatarProps={{
          src: me.src,
        }}
        className="mt-8"
      />
      <div className="my-4">
        <Snippet color="secondary" size="sm">
          <Joke />
        </Snippet>
      </div>
      <Divider />
      <Accordion className="mt-2">
        <AccordionItem
          key={1}
          title="Story of my life"
          subtitle={activeText.expand}
        >
          <Timeline />
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FiftyPage;
