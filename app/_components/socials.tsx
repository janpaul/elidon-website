import { FaGithub, FaInstagram, FaReddit, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Socials = () => (
  <div className="flex gap-2 mt-4">
    <Button variant="ghost" size="icon" asChild>
      <a href="mailto:janpaul@elidon.net" target="_blank">
        <FaApple className="h-6 w-6" />
      </a>
    </Button>
    <Button variant="ghost" size="icon" asChild>
      <a href="https://github.com/janpaul" target="_blank">
        <FaGithub className="h-6 w-6" />
      </a>
    </Button>
    <Button variant="ghost" size="icon" asChild>
      <a href="https://instagram.com/janpaul" target="_blank">
        <FaInstagram className="h-6 w-6" />
      </a>
    </Button>
    <Button variant="ghost" size="icon" asChild>
      <a href="https://reddit.com/u/janpaul74" target="_blank">
        <FaReddit className="h-6 w-6" />
      </a>
    </Button>
  </div>
);
