import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const amISleeping = () => {
  const hour = parseInt(
    new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      hour: "numeric",
      hour12: false,
    }).format(new Date()),
  );
  return hour >= 23 || hour < 7;
};
