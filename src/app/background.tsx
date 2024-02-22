import NextImage from "next/image";
import bg from "@/media/amsterdam.webp";
export const Background = () => (
  <>
    <NextImage
      src={bg}
      className="absolute top-0 left-0 -z-10 bg-fixed bg-clip-content opacity-20 bg-center bg-no-repeat bg-cover w-auto h-auto"
      alt="Amsterdam wallpaper"
    />
  </>
);
