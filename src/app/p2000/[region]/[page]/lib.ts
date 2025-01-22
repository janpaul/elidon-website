export type Call = {
  date: string;
  type: string;
  fullMessage: string;
  prio: string;
  capcode: string;
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
const p2000Regions = Object.entries(p2000RegionsObj).map(([key, value]) => ({
  key,
  value,
}));
export const sortedRegions = p2000Regions.sort((a, b) =>
  a.value.localeCompare(b.value),
);

export const regionToName = (region: string) =>
  p2000RegionsObj[region].replace(/\s+/g, "-").toLowerCase() ?? "Onbekend";
export const callType: Record<string, string> = {
  Ambulance: "🚑",
  Politie: "🚓",
  Brandweer: "🚒",
  Lifeliner: "🚁",
  KNRM: "🚤",
};
