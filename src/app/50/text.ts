export type Language = `nl` | `en`;

type Text = Record<
  Language,
  {
    greeting: string;
    p1: string;
    p2: string;
    rsvp: string;
    diss: string;
    reach: string;
    or: string;
  }
>;

export const text: Text = {
  en: {
    greeting: "Hey!",
    p1: `On June 11, 2024, I'm hitting the big 5-0 – kind of a big deal for me. I usually don't do birthday parties, but this time I don't want to let it pass by unnoticed. So, how about hanging out at`,
    p2: `from 7 PM till late on Tuesday the 11th? It would be awesome if you could make it.`,
    rsvp: `Can you let me know if you're coming? That would be great!`,
    diss: `Old geezer`,
    reach: `You can reach me at `,
    or: `or`,
  },
  nl: {
    greeting: "Hoi!",
    p1: `Op 11 juni 2024 tik ik de 50 aan – best een big deal voor mij. Normaal doe ik niet aan verjaardagsfeestjes, maar deze keer wil ik het niet zomaar voorbij laten gaan. Dus, wat denk je ervan om op dinsdag de 11e vanaf 19.00 uur tot laat in `,
    p2: `te hangen? Het zou super zijn als je erbij kunt zijn.`,
    rsvp: `Laat je me weten of je komt? Zou top zijn!`,
    diss: `Ouwe lul`,
    reach: `Je kunt me bereiken op `,
    or: `of`,
  },
};
