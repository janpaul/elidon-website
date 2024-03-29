import { Divider, Avatar } from "@nextui-org/react";
import {
  Title,
  Paragraph,
  Block,
  Joke,
  Social,
  Collapse,
  LanguageSelect,
} from "@/components";
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
      <LanguageSelect />
      <Title>{t(`home.title`)}</Title>
      <Divider />
      <Avatar
        src={me.src}
        size="lg"
        isBordered
        className="h-32 w-32 lg:w-64 lg:h-64 text-large"
      />
      <Paragraph size="lg">{t(`home.p1`)}</Paragraph>
      <Collapse
        text={{
          more: t(`components.collapse.read_more`),
          less: t(`components.collapse.read_less`),
        }}
      >
        <Paragraph size="lg">{t(`home.p2`)}</Paragraph>
        <Paragraph size="lg">{t(`home.p3`)}</Paragraph>
        <Paragraph size="lg">{t(`home.p4`)}</Paragraph>
      </Collapse>
      <Divider className="my-5" />
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
