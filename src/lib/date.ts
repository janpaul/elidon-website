import dayjs, { Dayjs, UnitType } from "dayjs";

const _getDatesToCalculateDifference = (): [Dayjs, Dayjs] => [
  dayjs(new Date()),
  dayjs(new Date(1974, 7, 11, 2, 15, 0)),
];

export const getAge = (unit: UnitType): number => {
  const [now, birthDate] = _getDatesToCalculateDifference();
  return now.diff(birthDate, unit);
};

export const getYear = (): number => new Date().getFullYear();
