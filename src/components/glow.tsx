import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import "@/components/glow.css";

type Props = PropsWithChildren & {
  position?: "left" | "right";
  animationDuration?: string;
};

export const GlowingBorder = ({
  position = "left",
  animationDuration = "10s",
  children,
}: Props) => (
  <div
    className={cn(
      "mb-2",
      "min-h-1/4",
      "w-11/12 md:w-9/12 lg:w-3/5 xl:w-2/5",
      "--glowing-border",
      position === "left" ? "--glowing-border-left" : "--glowing-border-right",
    )}
    style={{ animationDuration }}
  >
    {children}
  </div>
);
