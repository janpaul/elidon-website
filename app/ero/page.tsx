import { shuffle } from "@/lib/utils";
import { Slideshow } from "@/app/ero/slideshow";
import { getEroticImageIds } from "@/app/ero/helpers";

export const revalidate = 43_200;

const EroticPage = async () => {
  const images = await getEroticImageIds(revalidate);

  return <Slideshow images={shuffle(images)} />;
};

export default EroticPage;
