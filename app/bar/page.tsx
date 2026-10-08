import { Words } from "./words";
import { Greetings } from "./greetings";
import { Counting } from "./counting";

const Page = () => (
  <div className="flex flex-col gap-4">
    <Greetings />
    <Words />
    <Counting />
  </div>
);

export default Page;
