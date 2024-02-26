import { Language } from "@/lib";

type Coming = "coming" | "not-coming" | "maybe" | "unknown";
export type Birthday = {
  id: string;
  name: string;
  lang: Language;
  coming: Coming;
};

const birthdays: Birthday[] = [
  {
    id: `tap-dancing-octopus`,
    name: "Jan Paul",
    lang: "nl",
    coming: "coming",
  },
  {
    id: "trampoline-jumping-cactus",
    name: "Stephanie",
    lang: "nl",
    coming: "coming",
  },
  {
    id: "marshmallow-weightlifting-champ",
    name: "Vera",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "hula-hooping-cactus",
    name: "Martin",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "skydiving-sheep-baaas",
    name: "Nina",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "tightrope-walking-elephant",
    name: "Mick",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "sunbathing-owl-tans",
    name: "Nevil & Ans",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "burping-flower-blooms",
    name: "Fabienne",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "invisible-dog-barks",
    name: "Patricia & Rens",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "jumping-cake-escapes",
    name: "Danielle",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "roller-skating-baguette",
    name: "Roos & Wilfred",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "sleepwalking-pillow-fights",
    name: "Liam & Anna",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "moon-cheese-melts",
    name: "Floor & Ralph",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "cartwheeling-walrus-flops",
    name: "Charita",
    lang: "nl",
    coming: "unknown",
  },
  { id: "surfing-cow-moos", name: "Sidney", lang: "nl", coming: "unknown" },
  {
    id: "whistling-teapot-dances",
    name: "Anouk & Ivo",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "yodeling-pickle-echoes",
    name: "Maartje & Jasper",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "photobombing-ghost-appears",
    name: "Jip",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "blushing-lobster-crawls",
    name: "Siem",
    lang: "nl",
    coming: "unknown",
  },
  { id: "giggling-toast-jump", name: "Tim", lang: "nl", coming: "unknown" },
  {
    id: "spy-penguin-disguises",
    name: "Nathalie",
    lang: "se",
    coming: "unknown",
  },
  {
    id: "bungee-jumping-turtle",
    name: "Melanie",
    lang: "se",
    coming: "unknown",
  },
  {
    id: "moonwalking-shoe-unties",
    name: "Martijn",
    lang: "nl",
    coming: "unknown",
  }, // Groenewegen
  {
    id: "gossiping-plants-whisper",
    name: "Martijn",
    lang: "nl",
    coming: "unknown",
  }, // Clarenbeek
  {
    id: "mystery-potato-vanishes",
    name: "Daniel",
    lang: "nl",
    coming: "unknown",
  },
  { id: "disco-yeti-grooves", name: "Jesse", lang: "nl", coming: "unknown" },
  {
    id: "karate-kitten-chops",
    name: "Serge",
    lang: "nl",
    coming: "unknown",
  },
  { id: "cheeky-moon-winks", name: "Anna", lang: "nl", coming: "unknown" },
  {
    id: "ticklish-sun-laughs",
    name: "Andre",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "alien-socks-dance",
    name: "Merlijn",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "singing-fish-giggles",
    name: "Thomas",
    lang: "nl",
    coming: "unknown",
  },
  { id: "sassy-cloud-squirts", name: "Stef", lang: "nl", coming: "unknown" },
  { id: "flying-pig-winks", name: "Linda", lang: "nl", coming: "unknown" }, // voetbal
  {
    id: "sneezing-cupcake-frosting",
    name: "Alessandra",
    lang: "nl",
    coming: "unknown",
  }, // voetbal
  {
    id: "breakdancing-banana-slips",
    name: "Rens & Imane",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "dancing-robot-malfunctions",
    name: "Lita",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "couch-potato-sprouts",
    name: "Mike",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "lazy-sofa-naps",
    name: "Remco & Sim",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "ninja-cat-bathes",
    name: "Bas & Monique",
    lang: "nl",
    coming: "unknown",
  },
  { id: "hungry-book-eats", name: "Katja", lang: "nl", coming: "unknown" },
  {
    id: "time-traveling-snail",
    name: "Jordy",
    lang: "nl",
    coming: "unknown",
  },
  { id: "wizard-hat-flies", name: "Fabio", lang: "nl", coming: "unknown" },
  {
    id: "pirate-duck-quacks",
    name: "Pietro & Raffaella",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "flirty-mirror-winks",
    name: "Marjolein",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "giant-snail-races",
    name: "Marc & Christien",
    lang: "nl",
    coming: "unknown",
  },
  {
    id: "sneaky-fridge-raids",
    name: "Emre & Meryem",
    lang: "en",
    coming: "unknown",
  },
  {
    id: "napping-dragon-drools",
    name: "Patricia",
    lang: "en",
    coming: "unknown",
  }, // Sawamura
  {
    id: "exploding-pizza-sauce",
    name: "Cindy & Anita",
    lang: "nl",
    coming: "unknown",
  },
];

export const useBirthday = (id: string): Birthday | undefined =>
  birthdays.find((b) => b.id === id);

export const useAllBirthdays = (): Birthday[] => Object.values(birthdays);
