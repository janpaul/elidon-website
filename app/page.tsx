import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Joke,
  Socials,
  getSocialByName,
  MyAvatar,
  ExternalLink,
} from "@/app/_components";

export const revalidate = 3600;

const Home = () => (
  <div className="min-h-screen flex flex-col items-start md:items-center justify-start md:justify-center">
    <div className="w-full max-w-2xl px-2 md:px-4">
      <div className="py-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative shrink-0">
            <MyAvatar />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
              Jan Paul Stegeman
            </h1>
            <p className="text-sm text-muted-foreground">
              Senior Software Engineer · Amsterdam 🇳🇱
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
          Full-stack engineer with a frontend heart. Building software by day.
          Aspiring <ExternalLink href="//hugoboss.nl">Hugo Boss</ExternalLink>{" "}
          model and{" "}
          <ExternalLink href={getSocialByName("mixcloud")!.url}>
            Superstar DJ
          </ExternalLink>{" "}
          by night. You&apos;ll find me debugging{" "}
          <ExternalLink href="//typescriptlang.org">TypeScript</ExternalLink>,{" "}
          <ExternalLink href="//learncpp.com">C++</ExternalLink> and{" "}
          <ExternalLink href="//rust-lang.org">Rust</ExternalLink>, or cornering
          hard on my{" "}
          <ExternalLink href="//www.yamahamotorsports.com/models/mt-09-sp">
            MT-09 SP
          </ExternalLink>
          . Current{" "}
          <ExternalLink href="//en.wikipedia.org/wiki/Jordaan">
            Jordaan
          </ExternalLink>{" "}
          resident. Moonlighting as a bartender at a{" "}
          <ExternalLink href="//cafedezeevaart.com">brown café</ExternalLink> in
          the Red Light District, where the tourists are confused and the beer
          is cold.
        </p>

        <Socials />

        <Separator className="my-6" />

        <Card className="max-w-xl">
          <CardContent>
            <Joke />
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Home;
