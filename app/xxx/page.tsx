import { Slideshow } from "./_components";
import images from "./erotigif.json";

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]; // kopie, het origineel blijft heel
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const revalidate = 43200; // 60 * 60 * 12 = 12h

const XxxPage = async () => <Slideshow images={shuffle(images)} />;

export default XxxPage;
