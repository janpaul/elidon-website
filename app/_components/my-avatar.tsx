"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useSleeping } from "@/hooks";

export const MyAvatar = () => {
  const sleeping = useSleeping();
  return (
    <>
      <Avatar className="h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 hover:grayscale-50">
        <AvatarImage src="//github.com/janpaul.png" alt="Jan Paul Stegeman" />
        <AvatarFallback className="text-lg font-medium">JP</AvatarFallback>
      </Avatar>
      <span
        className={cn(
          "absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full ring-2 ring-background",
          sleeping ? "bg-red-500" : "bg-green-500",
        )}
      />
      {sleeping && (
        <span className="absolute bottom-4 right-2 text-xs leading-none text-muted-foreground">
          💤
        </span>
      )}
    </>
  );
};
