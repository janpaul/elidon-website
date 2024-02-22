import type { Height } from "@/components/types";

type Props = {
  height?: Height;
};
export const Spacer = ({ height = "h-4" }: Props) => {
  return <div className={height} />;
};
