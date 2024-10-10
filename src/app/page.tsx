import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { Joke, FlyingWords } from "@/components";
import me from "./jp.jpg";
import type { ReactNode } from "react";

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="uppercase text-4xl md:text-6xl lg:text-8xl">{children}</span>
);

const Home = () => (
  <>
    <h2 className="text-6xl mb-3">
      I&apos;m a <Highlight>full-stack developer</Highlight> &{" "}
      <Highlight>software engineer</Highlight>.
    </h2>
    <div className="mb-4">
      <Image
        as={NextImage}
        src={me.src}
        alt="Jan Paul"
        isZoomed
        width={me.width / 10}
        height={me.height / 10}
      />
    </div>
    <Joke />
    <FlyingWords
      enabled
      words={[
        "C",
        "C++",
        "CSS",
        "JavaScript",
        "HTML",
        "HTMX",
        "Rust",
        "Reddis",
        "Supabase",
        "TSX",
        "TypeScript",
      ]}
    />
  </>
);

export default Home;
