import { getErotigifs } from "@/app/erotigif/helpers";
import { Slideshow } from "@/app/erotigif/slideshow/_components/slideshow";

const ErotigifSlideshowPage = async () => {
  const images = await getErotigifs();
  return images ? <Slideshow images={images} interval={10_000} /> : null;
};

export default ErotigifSlideshowPage;
