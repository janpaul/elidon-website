import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const getBadgeColor = () => {
  const hour = parseInt(
    new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      hour: "numeric",
      hour12: false,
    }).format(new Date()),
  );

  return hour >= 23 || hour < 7 ? "bg-red-500" : "bg-green-500";
};

export const MyAvatar = () => {
  return (
    <>
      <Avatar className="h-18 w-18">
        <AvatarImage src="//github.com/janpaul.png" alt="Jan Paul Stegeman" />
        <AvatarFallback className="text-lg font-medium">JP</AvatarFallback>
      </Avatar>
      <span
        className={cn(
          "absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full ring-2 ring-background",
          getBadgeColor(),
        )}
      />
    </>
  );
};
