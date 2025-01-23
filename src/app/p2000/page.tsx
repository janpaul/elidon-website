import Link from "next/link";
import { sortedRegions } from "@/app/p2000/[region]/[page]/lib";

const P2000BasePage = async () => {
  return (
    <ul>
      {sortedRegions.map(({ key, value }) => (
        <li key={key} className="text-blue-500 hover:underline">
          <Link href={`/p2000/${key}/1`}>{value}</Link>
        </li>
      ))}
    </ul>
  );
};

export default P2000BasePage;
