import { erotigifImageUri } from "@/app/erotigif/helpers";

type Props = {
  id: string;
};
export const ErotigifImage = ({ id }: Props) => (
  <video
    src={erotigifImageUri(id)}
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="w-screen h-screen object-contain"
  />
);
