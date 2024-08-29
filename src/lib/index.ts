export const getYear = (): number => new Date().getFullYear();

export const flattenPhone = (phone: string): string =>
  phone.replace(/\s|\+/g, "");
