import {
  FaGithub,
  FaInstagram,
  FaReddit,
  FaApple,
  FaMixcloud,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { socials } from "@/app/_components/data/socials";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconsMap: Record<string, any> = {
  apple: FaApple,
  github: FaGithub,
  instagram: FaInstagram,
  reddit: FaReddit,
  mixcloud: FaMixcloud,
};

export const Socials = () => (
  <>
    <div className="flex gap-2 mt-4">
      {socials.map((social) => {
        const Icon = iconsMap[social.icon];
        return (
          <Button
            variant="ghost"
            size="icon"
            asChild
            title={social.title ?? social.name}
            key={social.name}
          >
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6" />
            </a>
          </Button>
        );
      })}
    </div>

    <p className="text-sm text-muted-foreground">
      No calls. No forms. Just slide into my DMs.
    </p>
  </>
);
