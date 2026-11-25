import { Slideshow } from "@/app/ero/slideshow";
import { getEroticImageIds } from "@/app/ero/helpers";

export const revalidate = 43_200;

const EroticPage = async () => {
  const images = await getEroticImageIds(revalidate);

  return <Slideshow images={images} />;
};

export default EroticPage;
