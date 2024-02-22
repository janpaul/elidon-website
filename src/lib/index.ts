import dayjs, { type Dayjs, UnitType } from "dayjs";

export const classNames = (...classes: (string | undefined)[]) =>
  classes.filter(Boolean).join(` `);

export const fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

const _getDatesToCalculateDifference = (): [Dayjs, Dayjs] => [
  dayjs(new Date()),
  dayjs(new Date(1974, 7, 11, 2, 15, 0)),
];

export const getAge = (unit: UnitType): number => {
  const [now, birthDate] = _getDatesToCalculateDifference();
  return now.diff(birthDate, unit);
};

export const getYear = (): number => new Date().getFullYear();

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
