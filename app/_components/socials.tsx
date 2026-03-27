import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  socials,
  socialIconsMap,
  type Social,
  type SocialName,
} from "@/app/_components/data/socials";

const Social = ({ name, url, icon, title = name }: Social) => {
  const Icon = socialIconsMap[icon];
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" asChild key={name}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Icon className="h-6 w-6" size={48} />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const getSocialByName = (name: SocialName) =>
  socials.find((social) => social.name === name);

export const Socials = () => (
  <>
    <div className="flex gap-2 mt-4">
      {socials.map((social) => (
        <Social key={social.name} {...social} />
      ))}
    </div>

    <p className="text-sm text-muted-foreground">
      No calls. No forms. Just slide into my DMs.
    </p>
  </>
);
