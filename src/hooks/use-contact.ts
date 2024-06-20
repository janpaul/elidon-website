type Contact = {
  email: string;
  phone: string;
  github: string;
  instagram: string;
  bunq: string;
  reddit: string;
  soundcloud: string;
};

const phone = `+31 6 2926 7339`;

const contact: Contact = {
  email: `janpaul@hey.com`,
  phone,
  github: `janpaul`,
  instagram: `janpaul`,
  bunq: `jpstegeman`,
  reddit: `janpaul74`,
  soundcloud: `janpaul-418014217`,
};

export const useContact = () => contact;
