import { Slideshow } from "./_components";
import images from "./erotigif.json";

export const revalidate = 43200; // 60 * 60 * 12 = 12h

const XxxPage = async () => <Slideshow images={images} />;

export default XxxPage;
