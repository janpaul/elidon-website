"use client";
import type { ReactNode } from "react";
import { Image } from "@heroui/react";
import NextImage from "next/image";

import { Joke } from "@/components";
import me from "@/media/jp.jpg";

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="uppercase text-4xl md:text-6xl lg:text-8xl">{children}</span>
);

const Home = () => (
  <>
    <h2 className="text-6xl mb-3">
      I&apos;m a <Highlight>full-stack developer</Highlight> &{" "}
      <Highlight>software engineer</Highlight>.
    </h2>
    <div className="mb-4 w-fit">
      <Image
        as={NextImage}
        src={me.src}
        alt="Jan Paul"
        isZoomed
        width={me.width / 7}
        height={me.height / 3}
        loading="lazy"
      />
    </div>
    <Joke />
  </>
);

export default Home;
