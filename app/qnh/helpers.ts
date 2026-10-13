export const STD = 1013.25;
export const minMbar = 950;
export const maxMbar = 1050;
const factor = 1 / 33.8639;

export const mbarToInHg = (mbar: number): number => mbar * factor;
