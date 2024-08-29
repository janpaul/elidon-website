import { Avatar } from "@nextui-org/avatar";

import { Joke, Social } from "@/components";
import me from "@/app/jp.jpg";

const Home = () => (
  <main className="min-w-full">
    <h1 className="text-6xl mb-3">Jan Paul</h1>
    <div className="mb-4">
      <Avatar src={me.src} size="lg" isBordered color="secondary" name="JPS" />
    </div>
    <div className="mb-4">
      <Social />
    </div>
    <Joke />
  </main>
);

export default Home;
