import NextImage from "next/image";
import { Title, Paragraph, Block, Stats, Joke, Social } from "@/components";
import me from "@/media/jp.jpg";

export const revalidate = 86_400;

const Home = () => (
  <div>
    <Title>Hi! My name is Jan Paul</Title>
    <Paragraph>
      I am a software engineer who creates and develops experiences that make
      people&apos;s lives simple and awesome. I am an aspiring Hugo Boss model
      and (try to be) a Club DJ.
    </Paragraph>
    <NextImage
      src={me}
      alt="JP"
      width={384}
      className="grayscale-0 aspect-auto rounded-xl hover:grayscale transition-all duration-300 my-2 ring-4 ring-offset-1 mx-auto md:mx-0"
    />
    <Block className="text-sm italic my-4 border-l-2 pl-2 lg:pl-8 border-red-500 dark:border-blue-500">
      <Joke />
    </Block>

    <Block className="mx-auto md:mx-0">
      <Social />
    </Block>
    <Block>
      <Stats />
    </Block>
  </div>
);

export default Home;
