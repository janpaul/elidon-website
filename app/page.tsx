import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Joke, Socials, MyAvatar, MyMarkdown } from "@/app/_components";

export const revalidate = 300;

const HomePage = () => (
  <div className="min-h-screen flex flex-col items-start md:items-center justify-start md:justify-center">
    <div className="w-full max-w-2xl px-2 md:px-4">
      <div className="py-8 max-w-2xl">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative shrink-0">
            <MyAvatar />
          </div>
          <MyMarkdown>
            {`
## Jan Paul Stegeman
            
Senior Software Engineer · Bartender · Amsterdam 🇳🇱
            `}
          </MyMarkdown>
        </div>

        <div className="text-base leading-relaxed text-muted-foreground max-w-xl">
          <MyMarkdown>
            {`
Full-stack engineer with a frontend heart. Building software by day.
Aspiring [Hugo Boss](//hugoboss.nl) model and [international
Superstar DJ](/dj) by night. You'll find me debugging
[TypeScript](//typescriptlang.org), [C++](//learncpp.com) and
[Rust](//rust-lang.org), or riding fast on my [MT-09
SP](//www.yamahamotorsports.com/models/mt-09-sp). Current
[Haarlemmerbuurt](//en.wikipedia.org/wiki/Haarlemmerbuurt) resident.
Moonlighting as a bartender at a [brown café](//cafedezeevaart.com)
in the Red Light District, where the tourists are confused and the
beer is cold.
            `}
          </MyMarkdown>
        </div>

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

export default HomePage;
