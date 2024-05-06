export const flattenPhone = (phone: string): string =>
  phone.replace(/\s/g, ``).replace(/\+/g, ``);
