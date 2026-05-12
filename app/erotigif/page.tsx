import { getErotigifs } from "@/app/erotigif/helpers";
import { ErotigifContent } from "@/app/erotigif/_components";

const ErotigifPage = async () => {
  const images = await getErotigifs();

  return <ErotigifContent images={images} />;
};

export default ErotigifPage;
