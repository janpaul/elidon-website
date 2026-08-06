import jokes from "@/app/data/jokes.json";
import { JokesContent } from "@/app/jokes/_components/jokes-content";

const JokesPage = () => {
  return <JokesContent jokes={jokes} />;
};

export default JokesPage;
