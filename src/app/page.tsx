import NextImage from "next/image";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Title, Paragraph, Block, Link, Stats, Joke } from "@/components";
import { contact } from "@/data/contact";
import me from "@/media/jp.jpg";

const Home = () => (
  <div>
    <Title>Hi! My name is Jan Paul</Title>
    <Paragraph>
      I am a software engineer who creates and develop experiences that make
      people&apos;s lives simple and awesome. I am an aspiring Hugo Boss model
      and (try to be) a Club DJ.
    </Paragraph>
    <NextImage
      src={me}
      alt="JP"
      width={256}
      className="grayscale aspect-auto rounded-xl hover:grayscale-0 transition-all duration-300 my-2 ring-4 ring-offset-1 mx-auto md:mx-0"
    />
    <Block className="text-sm italic my-4 border-l-2 pl-2 lg:pl-8 border-red-500 dark:border-blue-500">
      <Joke />
    </Block>
    <Block className="mx-auto md:mx-0">
      <div className="flex flex-row gap-2 md:gap-4">
        <div className="flex flex-row gap-1 items-center">
          <DevicePhoneMobileIcon className="w-5 h-5" />
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <EnvelopeIcon className="w-5 h-5" />
          <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </div>
      </div>
    </Block>
    <Block>
      <Stats />
    </Block>
  </div>
);

export default Home;
