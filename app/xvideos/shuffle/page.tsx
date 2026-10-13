import { Slideshow } from "@/components/slideshow";
import { shuffle } from "@/lib/utils";
import videos from "../xvideos.json";

export const revalidate = 43200; // 60 * 60 * 12 = 12h
console.log("Slideshow is:", typeof Slideshow);

const XvideosShufflePage = () => (
  <Slideshow images={shuffle(videos)} loader="xvideos" />
);

export default XvideosShufflePage;
