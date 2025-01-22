import type { ReactNode } from "react";

import { Joke } from "@/components";
import { MyImage } from "@/app/my-image";

const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="uppercase text-4xl md:text-6xl lg:text-8xl">{children}</span>
);

const Home = () => (
  <section className="flex flex-col gap-4">
    <div>
      <h2 className="prose lg:prose-2xl prose-stone dark:prose-invert">
        I&apos;m a <Highlight>full-stack developer</Highlight> &{" "}
        <Highlight>software engineer</Highlight>.
      </h2>
    </div>
    <div>
      <Joke />
    </div>
    <div>
      <MyImage />
    </div>
  </section>
);

export default Home;
