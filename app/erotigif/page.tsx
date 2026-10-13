import { Slideshow } from "@/components/slideshow";
import images from "./erotigif.json";
import { shuffle } from "@/lib/utils";

export const revalidate = 43200; // 60 * 60 * 12 = 12h

const XxxPage = async () => (
  <Slideshow images={shuffle(images)} loader="erotigif" />
);

export default XxxPage;
