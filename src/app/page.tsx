import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import {
  Paragraph,
  Block,
  TextGenerateEffect,
  WavyBackground,
} from "@/components";
import me from "@/media/jp.jpg";
import { Stats } from "@/app/stats";
import { Social } from "@/app/social";
import { Joke } from "@/app/joke";

const Home = async () => (
  <div className="">
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <div className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        <TextGenerateEffect words="Hi! My name is Jan Paul" />
      </div>
    </WavyBackground>
    <Paragraph size="lg">
      I am a software engineer with way too much energy, who creates and
      develops experiences that make people&apos;s lives simple and awesome. I
      am an aspiring Hugo Boss model.
    </Paragraph>
    <Avatar
      src={me.src}
      size="lg"
      isBordered
      className="h-32 w-32 lg:w-64 lg:h-64"
    />
    <Paragraph size="lg">
      I live in the beautiful Jordaan neighborhood in Amsterdam, bustling with
      culture and history, where every street corner tells its own story. My
      passion for travel has led me to faraway places, but I always love
      returning to the coziness of my own city. In addition to my adventures
      around the world, I love making the stand unsafe on my fixed gear. The
      feeling of freedom as I zigzag through the narrow streets, the wind in my
      hair, is incomparable.
    </Paragraph>
    <Divider className="my-5" />
    <Block>
      <Social />
    </Block>
    <Block className="mx-auto md:mx-0">
      <Joke />
    </Block>
    <Divider className="my-5" />
    <Block>
      <Stats />
    </Block>
  </div>
);

export default Home;
