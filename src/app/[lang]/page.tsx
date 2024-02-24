import { Divider, Avatar } from "@nextui-org/react";
import { Title, Paragraph, Block, Joke, Social } from "@/components";
import me from "@/media/jp.jpg";
import { type Language, translate } from "@/lib";
import { Stats } from "./stats";
import type { LangProps } from "@/app/[lang]/types";

export const revalidate = 86_400;

type Props = LangProps & {};

const Home = async ({ params: { lang } }: Props) => {
  const t = await translate(lang as Language);
  return (
    <div>
      <Title>{t(`home.title`)}</Title>
      <Paragraph size="md">{t(`home.p1`)}</Paragraph>
      <Paragraph size="md">{t(`home.p2`)}</Paragraph>
      <Paragraph size="md">{t(`home.p3`)}</Paragraph>
      <Paragraph size="md">{t(`home.p4`)}</Paragraph>
      <Divider className="my-5" />
      <Avatar
        src={me.src}
        size="lg"
        isBordered
        className="w-64 h-64 text-large"
      />
      <Divider />
      <Block className="text-sm italic my-4">
        <Joke />
      </Block>
      <Divider className="my-5" />
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
