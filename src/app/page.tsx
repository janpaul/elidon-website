import NextImage from "next/image";
import { Joke, Socials } from "@/app/_components";
import {
  TypographyLead,
  TypographyH2,
  TypographyP,
} from "@/components/typography";
import { getAge } from "@/lib";
import jp from "@/media/jp.jpg";

const Home = () => (
  <>
    <div className="fixed top-0 right-0 z-20">
      <NextImage
        src={jp}
        alt="Jan Paul"
        width={512 / 4}
        height={910 / 4}
        className="rounded-bl-2xl grayscale hover:grayscale-0"
      />
    </div>

    <div className="fixed bottom-2 left-0 border-t-2 border-r-2 p-2 rounded-tr-xl backdrop-blur-md z-10">
      <TypographyLead className="text-sm text-left">
        <Joke />
      </TypographyLead>
    </div>

    <div className="min-h-screen flex flex-col gap-4 lg:gap-6 xl:gap-8">
      <TypographyH2>Jan Paul</TypographyH2>

      <div className="max-w-3/5 md:max-w-3/5 lg:max-w-4/5">
        <TypographyP>
          {getAge()} year young guy living in{" "}
          <TypographyLead>Amsterdam</TypographyLead>. Aspiring{" "}
          <TypographyLead>Hugo Boss</TypographyLead> model and{" "}
          <TypographyLead>international superstar DJ</TypographyLead> but since
          that doesn&apos;t work out, also freelance{" "}
          <TypographyLead>principal software engineer</TypographyLead>.
        </TypographyP>
      </div>

      <div>
        <Socials />
      </div>
    </div>
  </>
);

export default Home;
