import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MyAvatar } from "@/app/_components/my-avatar";
import { Socials, getSocialByName } from "@/app/_components/socials";
import { Joke } from "@/app/_components/joke";

export const revalidate = 3600;

const Home = () => (
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
      Aspiring Hugo Boss model and{" "}
      <a
        href={getSocialByName("mixcloud")!.url}
        className="text-blue-400 hover:underline"
      >
        Superstar Tech House DJ
      </a>{" "}
      by night. Current Jordaan resident. You&apos;ll find me debugging
      TypeScript, C++ and Rust, tending bar at a{" "}
      <a href="//cafedezeevaart.com" className="text-blue-400 hover:underline">
        brown café
      </a>{" "}
      in the red light district, or cornering hard on my MT-09 SP.
    </p>

    <Socials />

    <Separator className="my-6" />

    <Card className="max-w-xl">
      <CardContent>
        <Joke />
      </CardContent>
    </Card>
  </div>
);

export default Home;
