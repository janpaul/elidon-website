import dayjs from "dayjs";

export const getYear = (): number => new Date().getFullYear();
export const getAge = (): number => {
  const birthDate = dayjs("1974-06-01");
  return dayjs().diff(birthDate, "year");
};
