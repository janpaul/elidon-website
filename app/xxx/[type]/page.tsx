import { getXxxVideos, type XxxType } from "@/app/xxx/[type]/helpers";
import { Slideshow } from "@/app/xxx/[type]/_components";

const XxxPage = async ({ params }: { params: { type: XxxType } }) => {
  const { type } = await params;
  const images = await getXxxVideos(type);

  return <Slideshow images={images} type={type} />;
};

export default XxxPage;
