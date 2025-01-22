import { parse } from "node-html-parser";
import Link from "next/link";
import { IconRefresh } from "@tabler/icons-react";
import { regionToName, type Call } from "@/app/p2000/[region]/[page]/lib";
import { RegionSelect } from "@/app/p2000/[region]/[page]/region-select";
import { P2000Table } from "@/app/p2000/[region]/[page]/table";

export const revalidate = 60;

const getData = async (region: string, page: number): Promise<Call[]> => {
  const calls: Call[] = [];
  const uri = `https://p2000mobiel.nl/${region}/${page}/${regionToName(region)}.html`;
  const response = await fetch(uri, {
    headers: { "Content-Type": "text/html" },
  });
  const html = await response.text();
  const root = parse(html);
  const callsNode = root.querySelectorAll("#calls .call");
  for (const callNode of callsNode) {
    // console.log({ call: callNode.innerHTML });
    const message = callNode.querySelector(".message")?.text ?? "";
    const [prio, capcode, ...rest] = message.split(" ");
    const call: Call = {
      date: callNode.querySelector(".date")?.text ?? "",
      type:
        callNode.querySelector(".call_type_1")?.text ??
        callNode.querySelector(".call_type_2")?.text ??
        callNode.querySelector(".call_type_3")?.text ??
        callNode.querySelector(".call_type_4")?.text ??
        callNode.querySelector(".call_type_5")?.text ??
        "",
      fullMessage: message,
      prio,
      capcode,
      message: rest.join(" "),
      called:
        callNode
          .querySelectorAll(".called")
          ?.map((node) => node.text)
          .join(", ") ?? "",
    };
    calls.push(call);
  }

  return calls;
};

const P2000Page = async ({
  params,
}: {
  params: Promise<{ region: string; page: string }>;
}) => {
  const { region, page } = await params;
  const data = await getData(region, Number(page));
  return (
    <>
      <h2 className="text-6xl mb-3">P2000</h2>
      <section className="flex flex-row align-middle items-center justify-between w-full">
        <RegionSelect region={region} />
        <Link href={`/p2000/${region}/${page}`}>
          <IconRefresh />
        </Link>
      </section>
      <section>
        <P2000Table data={data} />
      </section>
      <section className="w-full text-center">
        <p className="text-xs">
          All data grabbed from{" "}
          <a
            href={`//p2000mobiel.nl/${region}/${page}/index.html`}
            target="_blank"
            rel="noopener noreferer"
          >
            <span className="text-blue-500">P2000 Mobiel</span>
          </a>
          . Copyright &copy; 2025{" "}
          <a href="//xironics.nl" target="_blank" rel="noopener noreferer">
            <span className="text-blue-500">Xironics Internet Diensten</span>
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default P2000Page;
