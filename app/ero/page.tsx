import { Slideshow } from "@/app/ero/slideshow";
import { getEroticImageIds } from "@/app/ero/helpers";

export const revalidate = 43_200;

const EroticPage = async () => {
  const images = await getEroticImageIds(revalidate);

  return (
    <div className="m-0 p-0 w-screen h-screen bg-black">
      <Slideshow images={images} />
    </div>
  );
};

export default EroticPage;
