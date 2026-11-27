import { getEroticImageIds } from "@/app/ero/helpers";
import { GalleryItem } from "@/app/ero/gallery/gallery-item";

export const revalidate = 43_200;

const EroGalleryPage = async () => {
  const images = await getEroticImageIds(revalidate);
  return (
    <div className="flex flex-row flex-wrap gap-0.5">
      {images.map((imageId) => (
        <GalleryItem key={imageId} imageId={imageId} />
      ))}
    </div>
  );
};

export default EroGalleryPage;
