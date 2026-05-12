import { getErotigifs } from "@/app/erotigif/helpers";
import { Slideshow } from "@/app/erotigif/_components";

const ErotigifPage = async () => {
  const images = await getErotigifs();

  return <Slideshow images={images} interval={10_000} />;
};

export default ErotigifPage;
