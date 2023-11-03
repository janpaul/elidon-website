import NextImage from "next/image";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { Title, Paragraph, Block, Link } from "@/components";
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
      className="grayscale aspect-auto rounded-xl hover:grayscale-0 transition-all duration-300"
    />
    <Block>
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
  </div>
);

export default Home;
