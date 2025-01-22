import { NextResponse, NextRequest } from "next/server";
import { parse } from "node-html-parser";

export const revalidate = 300;

export type Call = {
  date: string;
  type: string;
  fullMessage: string;
  prio: string;
  capcode: number;
  message: string;
  called: string;
};
const p2000RegionsObj: Record<string, string> = {
  "13": "Amsterdam Amstelland",
  "20": "Brabant Midden en West Brabant",
  "21": "Brabant Noord",
  "22": "Brabant Zuid en Oost",
  "3": "Drenthe",
  "25": "Flevoland",
  "2": "Friesland",
  "1": "Groningen",
  "4": "IJsselland",
  "7": "Gelderland Midden",
  "6": "Gelderland Noord en Oost",
  "8": "Gelderland Zuid",
  "14": "Gooi en Vechtstreek",
  "15": "Haaglanden",
  "16": "Hollands Midden",
  "12": "Kennermerland",
  "23": "Limburg Noord",
  "24": "Limburg Zuid",
  "10": "Noord Holland Noord",
  "17": "Rotterdam Rijnmond",
  "5": "Twente",
  "9": "Utrecht",
  "11": "Zaanstreek Waterland",
  "19": "Zeeland",
  "18": "Zuid Holland Zuid",
  "40": "Landelijk",
};
export const p2000Regions = Object.entries(p2000RegionsObj).map(
  ([key, value]) => ({
    key,
    value,
  }),
);

// https://p2000mobiel.nl/13/3/amsterdam-amstelland.html

const regionToName = (region: string) =>
  p2000RegionsObj[region].replace(/\s+/g, "-").toLowerCase() ?? "Onbekend";

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ region: string }> },
): Promise<NextResponse<Call[]>> => {
  const { region } = await params;
  const page = 1;
  const uri = `https://p2000mobiel.nl/${region}/${page}/${regionToName(region)}.html`;
  // console.log({ uri, params });
  const response = await fetch(uri, {
    headers: { "Content-Type": "text/html" },
  });
  const calls: Call[] = [];
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
      capcode: Number(capcode ?? 0),
      message: rest.join(" "),
      called:
        callNode
          .querySelectorAll(".called")
          ?.map((node) => node.text)
          .join(", ") ?? "",
    };
    calls.push(call);
    // console.log({ call });
  }

  return NextResponse.json(calls);
};
