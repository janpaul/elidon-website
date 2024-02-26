"use client";
import { useBirthday } from "@/hooks";

//http://localhost:3000/nl/50/426614174000
type Props = {
  uuid: string;
};
export const BirthdayName = ({ uuid }: Props) => {
  const birthday = useBirthday(uuid);
  console.log({ birthday });
  return birthday ? <span>{birthday.name}</span> : null;
};
