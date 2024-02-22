import NextImage from "next/image";
import bg from "@/media/amsterdam.webp";
export const Background = () => (
  <div className="hidden dark:absolute dark:top-0 dark:left-0 dark:h-screen dark:-z-10">
    <NextImage
      src={bg}
      className="bg-fixed bg-clip-content opacity-20 bg-center bg-no-repeat w-full h-auto"
      alt="Amsterdam wallpaper"
    />
  </div>
);
