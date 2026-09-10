import jokes from "@/app/_components/data/jokes.json";
import { JokesContent } from "@/app/jokes/_components/jokes-content";

const JokesPage = () => {
  return <JokesContent jokes={jokes} />;
};

export default JokesPage;
