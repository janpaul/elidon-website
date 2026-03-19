import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MyAvatar } from "@/app/_components/my-avatar";
import { Socials } from "@/app/_components/socials";
import { Joke } from "@/app/_components/joke";

const Home = () => (
  <div className="py-8 max-w-2xl">
    <div className="flex items-center gap-6 mb-6">
      <div className="relative shrink-0">
        <MyAvatar />
      </div>
      <div>
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          Jan Paul Stegeman
        </h1>
        <p className="text-sm text-muted-foreground">
          Senior Software Engineer · Amsterdam
        </p>
      </div>
    </div>

    <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
      Full-stack engineer met een frontend hart. Building software by day.
      Aspiring Hugo Boss model and superstar DJ. Current Jordaan resident.
      You&apos;ll find me debugging TypeScript, C++ and Rust, tending bar at a
      brown café, or cornering hard on my MT-09 SP.
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
