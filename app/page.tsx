"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => (
  <div className="py-8 max-w-2xl">
    <div className="flex items-center gap-6 mb-6">
      <div className="relative shrink-0">
        <Avatar className="h-18 w-18">
          <AvatarImage src="//github.com/janpaul.png" alt="Jan Paul Stegeman" />
          <AvatarFallback className="text-lg font-medium">JP</AvatarFallback>
        </Avatar>
        {/* online dot — weglaten als je 't niet wil */}
        <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-background" />
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
  </div>
);
export default Home;
