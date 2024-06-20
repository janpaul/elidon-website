import dayjs, { Dayjs, type UnitType } from "dayjs";

const _getDatesToCalculateDifference = (): [Dayjs, Dayjs] => [
  dayjs(),
  dayjs("1974-06-11 02:10"),
];

export const getAge = (unit: UnitType): number => {
  const [now, birthDate] = _getDatesToCalculateDifference();
  return now.diff(birthDate, unit);
};

export const getYear = (): number => new Date().getFullYear();
