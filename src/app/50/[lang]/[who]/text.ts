export type Language = `nl` | `en` | `se`;

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
    coming: {
      yes: string;
      no: string;
      maybe: string;
    };
  }
>;

export const text: Text = {
  en: {
    greeting: "Hey",
    p1: `On June 11, 2024, I'm hitting the big 5-0 – kind of a big deal for me. I usually don't do birthday parties, but this time I don't want to let it pass by unnoticed. So, how about hanging out at`,
    p2: `from 7 PM till late on Tuesday the 11th? It would be awesome if you could make it.`,
    rsvp: `Can you let me know if you're coming? That would be great!`,
    diss: `Old geezer`,
    reach: `For questions, you can reach me at `,
    or: `or`,
    coming: {
      yes: `I'm coming for sure`,
      no: `I can't make it`,
      maybe: `I will let you know, while figuring out an excuse`,
    },
  },
  nl: {
    greeting: "Hoi",
    p1: `Op 11 juni 2024 tik ik de 50 aan – best een big deal voor mij. Normaal doe ik niet aan verjaardagsfeestjes, maar deze keer wil ik het niet zomaar voorbij laten gaan. Dus, wat denk je ervan om op dinsdag de 11e vanaf 19.00 uur tot laat in `,
    p2: `te hangen? Het zou super zijn als je erbij kunt zijn.`,
    rsvp: `Laat je me weten of je komt? Zou top zijn!`,
    diss: `Ouwe lul`,
    reach: `Voor vragen kan je me bereiken op `,
    or: `of`,
    coming: {
      yes: `Ik kom zeker`,
      no: `Ik red het niet`,
      maybe: `Ik zal het je laten weten, terwijl ik een excuus bedenk`,
    },
  },
  se: {
    greeting: "Hej hej",
    p1: `Den 11 juni 2024 fyller jag 50 år - en ganska stor sak för mig. Jag brukar inte ha födelsedagskalas, men den här gången vill jag inte låta det passera. Så vad sägs om att på tisdagen den 11 juni från kl. 19.00 till sent `,
    p2: `att umgås? Det skulle vara super om du kunde vara där.`,
    rsvp: `Kan du meddela mig om du kommer? Det skulle vara fantastiskt!`,
    diss: `Gammal kuk`,
    reach: `Om du har några frågor kan du kontakta mig på`,
    or: `eller`,
    coming: {
      yes: `Jag kommer säkert`,
      no: `Jag kan inte göra det`,
      maybe: `Jag låter dig veta, medan jag funderar ut en ursäkt`,
    },
  },
};
