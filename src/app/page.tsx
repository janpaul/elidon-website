import { Divider, Avatar } from "@nextui-org/react";
import { Title, Paragraph, Block, Stats, Joke, Social } from "@/components";
import me from "@/media/jp.jpg";
import { translate } from "@/lib";

export const revalidate = 86_400;

const Home = async () => {
  const t = await translate("en");
  return (
    <div>
      <Title>Hi! My name is Jan Paul</Title>
      <Paragraph>
        I am a software engineer who creates and develops experiences that make
        people&apos;s lives simple and awesome. I am an aspiring Hugo Boss model
        and (try to be) a Club DJ.
      </Paragraph>
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
        <Stats />
      </Block>
    </div>
  );
};

export default Home;
