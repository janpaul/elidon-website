import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import {
  Paragraph,
  Block,
  TextGenerateEffect,
  WavyBackground,
} from "@/components";
import me from "@/media/jp.jpg";
import { translate, type Language } from "@/lib";
import { LanguageSelect } from "./language-select";
import { Stats } from "./stats";
import { Social } from "./social";
import { Joke } from "./joke";
import type { LangProps } from "@/app/[lang]/types";

const Home = async ({ params: { lang } }: LangProps) => {
  const t = await translate(lang as Language);
  return (
    <div className="">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <TextGenerateEffect words={t(`home.title`)} />
        </div>
      </WavyBackground>
      <div className="fixed top-0 left-0 m-1">
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
