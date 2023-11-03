import { differenceInDays, differenceInYears } from "date-fns";

export const classNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(` `);

export const fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

const _getDatesToCalculateDifference = (): [Date, Date] => [
  new Date(),
  new Date(1974, 7, 11, 2, 15, 0),
];

export const getAgeInYears = (): number => {
  const [now, birthDate] = _getDatesToCalculateDifference();
  return differenceInYears(now, birthDate);
};

export const getYear = (): number => new Date().getFullYear();

export const getAgeInDays = (): number => {
  const [now, birthDate] = _getDatesToCalculateDifference();
  return differenceInDays(now, birthDate);
};
