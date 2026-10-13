import videos from "./xvideos.json";
import { Gallery } from "@/app/xvideos/gallery";

export const revalidate = 43200; // 60 * 60 * 12 = 12h

const XvideosPage = () => <Gallery videos={videos} />;

export default XvideosPage;
