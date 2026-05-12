import { getErotigifs } from "@/app/erotigif/helpers";
import { Slideshow } from "@/app/erotigif/_components";

const ErotigifPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const interval = params?.interval ? Number(params.interval) : 10_000;
  const images = await getErotigifs();

  return <Slideshow images={images} interval={interval} />;
};

export default ErotigifPage;
