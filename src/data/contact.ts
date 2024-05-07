import { flattenPhone } from "@/lib";

type Contact = {
  email: string;
  phone: string;
  phoneFlat: string;
  github: string;
  instagram: string;
  bunq: string;
  reddit: string;
  soundcloud: string;
};

const phone = `+31 6 2926 7339`;

export const contact: Contact = {
  email: `janpaul@hey.com`,
  phone,
  phoneFlat: flattenPhone(phone),
  github: `janpaul`,
  instagram: `janpaul`,
  bunq: `jpstegeman`,
  reddit: `janpaul74`,
  soundcloud: `janpaul-418014217`,
};
