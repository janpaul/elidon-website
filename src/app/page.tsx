import { Joke, Social } from "@/components";

const Home = () => (
  <main className="min-w-full">
    <h1 className="text-3xl mb-3">Jan Paul</h1>
    <div className="mb-4">
      <Social />
    </div>
    <Joke />
  </main>
);

export default Home;
