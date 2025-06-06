import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import "@/components/glow.css";

type Props = PropsWithChildren & {
  position?: "left" | "right";
  animationDuration?: string; // e.g., "10s" for 10 seconds. This is directly passed to the CSS animation `animation-duration` property.
};

export const GlowingBorder = ({
  position = "left",
  animationDuration = "10s",
  children,
}: Props) => (
  <div
    className={cn(
      "w-11/12 md:w-9/12 lg:w-3/5 xl:w-2/5",
      "--glowing-border",
      position === "left" ? "--glowing-border-left" : "--glowing-border-right",
    )}
    style={{ animationDuration }}
  >
    {children}
  </div>
);
