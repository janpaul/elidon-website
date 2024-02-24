export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
export const flattenPhone = (phone: string): string =>
  phone.replace(/\s/g, ``).replace(/\+/g, ``);
