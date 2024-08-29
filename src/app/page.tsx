import { Image } from "@nextui-org/react";
import NextImage from "next/image";

import { Joke, Social } from "@/components";
import me from "@/app/jp.jpg";

const Home = () => (
  <main className="min-w-full">
    <h1 className="text-6xl mb-3">Jan Paul</h1>
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
    <div className="mb-4">
      <Social />
    </div>
    <Joke />
  </main>
);

export default Home;
