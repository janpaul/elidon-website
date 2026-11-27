import NextLink from "next/link";
import { getEroticImageIds, getImageUrl } from "@/app/ero/helpers";
import { revalidate } from "@/app/ero/page";
import { VideoPlayer } from "@/app/ero/video-player";

const EroImagePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const images = await getEroticImageIds(revalidate);

  return images.find((image) => image === id) ? (
    <video
      src={getImageUrl(id)}
      loop
      autoPlay
      muted
      playsInline
      className="w-screen h-screen object-contain grayscale-100"
    />
  ) : (
    <div>
      <h1 className="text-3xl">Image not found</h1>
      <NextLink href="/ero">Go away</NextLink>.
    </div>
  );
};

export default EroImagePage;
