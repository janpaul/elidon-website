import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

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
      <Avatar className="h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20">
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
