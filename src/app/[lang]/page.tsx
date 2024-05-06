import { Divider, Avatar } from "@nextui-org/react";
import {
  Paragraph,
  Block,
  Joke,
  Social,
  LanguageSelect,
  TextGenerateEffect,
  WavyBackground,
} from "@/components";
import me from "@/media/jp.jpg";
import { translate, type Language } from "@/lib";
import { Stats } from "./stats";
import type { LangProps } from "@/app/[lang]/types";

export const revalidate = 86_400;

const Home = async ({ params: { lang } }: LangProps) => {
  const t = await translate(lang as Language);
  return (
    <div className="">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <TextGenerateEffect words={t(`home.title`)} />
        </div>
      </WavyBackground>
      <div className="fixed top-0 left-0 ">
        <LanguageSelect />
      </div>
      <Paragraph size="lg">{t(`home.p1`)}</Paragraph>
      <Avatar
        src={me.src}
        size="lg"
        isBordered
        className="h-32 w-32 lg:w-64 lg:h-64"
      />
      <Paragraph size="lg">{t(`home.p2`)}</Paragraph>
      <Paragraph size="lg">{t(`home.p3`)}</Paragraph>
      <Paragraph size="lg">{t(`home.p4`)}</Paragraph>
      <Divider className="my-5" />
      <Block>
        <Joke />
      </Block>
      <Block className="mx-auto md:mx-0">
        <Social />
      </Block>
      <Divider className="my-5" />
      <Block>
        <Stats t={t} />
      </Block>
    </div>
  );
};

export default Home;
