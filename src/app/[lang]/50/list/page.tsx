"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Link,
  Button,
} from "@nextui-org/react";
import {
  CheckIcon,
  HandThumbDownIcon,
  ClipboardIcon,
  QuestionMarkCircleIcon,
  MinusIcon,
} from "@heroicons/react/16/solid";
import "flag-icons/css/flag-icons.min.css";
import { useAllBirthdays, useClipboard, type Birthday } from "@/hooks";
import { classNames } from "@/lib";
import { Title } from "@/components";

const birthdayLink = ({ lang, id }: Birthday): string =>
  `https://elidon.net/${lang}/50/${id}`;
const countPeople = (bs: Birthday[]): number =>
  bs.reduce((acc, b) => (b.extra ? acc + 1 + b.extra : acc + 1), 0);
const birthdaySorter = (a: Birthday, b: Birthday) =>
  a.name.localeCompare(b.name);
const BirthdayListPage = () => {
  const birthdays = useAllBirthdays();
  const [, copy] = useClipboard();
  return (
    <div>
      <Title>Birthday list</Title>
      <Table>
        <TableHeader>
          <TableColumn>Total:</TableColumn>
          <TableColumn>Coming:</TableColumn>
          <TableColumn>Not coming:</TableColumn>
          <TableColumn>Maybe:</TableColumn>
          <TableColumn>Unknown:</TableColumn>
        </TableHeader>
        <TableBody className="mt-4">
          <TableRow>
            <TableCell>{countPeople(birthdays)}</TableCell>
            <TableCell>
              {countPeople(birthdays.filter((b) => b.coming === "coming"))}
            </TableCell>
            <TableCell>
              {countPeople(birthdays.filter((b) => b.coming === "not-coming"))}
            </TableCell>
            <TableCell>
              {countPeople(birthdays.filter((b) => b.coming === "maybe"))}
            </TableCell>
            <TableCell>
              {countPeople(birthdays.filter((b) => b.coming === "unknown"))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table aria-label="birthday party attendees" isStriped>
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Language</TableColumn>
          <TableColumn>Coming</TableColumn>
          <TableColumn>Link</TableColumn>
          <TableColumn>Comments</TableColumn>
        </TableHeader>
        <TableBody>
          {birthdays.sort(birthdaySorter).map((b) => {
            const link = birthdayLink(b);
            return (
              <TableRow key={b.name}>
                <TableCell>{b.name}</TableCell>
                <TableCell>
                  <span
                    className={classNames(
                      `fi`,
                      `fi-${b.lang === `en` ? `gb` : b.lang}`,
                      `rounded-sm`,
                    )}
                  ></span>
                </TableCell>
                <TableCell>
                  {b.coming === "coming" && (
                    <CheckIcon className="h-4 q-4 text-green-500" />
                  )}
                  {b.coming === "not-coming" && (
                    <HandThumbDownIcon className="h-4 q-4 text-red-500" />
                  )}
                  {b.coming === "maybe" && (
                    <QuestionMarkCircleIcon className="h-4 q-4 text-orange-500" />
                  )}
                  {b.coming === "unknown" && (
                    <MinusIcon className="h-4 q-4 text-orange-500" />
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row items-center gap-2">
                    <Link href={link} isExternal className="text-sm">
                      {link}
                    </Link>
                    <Button
                      size="sm"
                      color="primary"
                      isIconOnly
                      onClick={() => copy(link)}
                    >
                      <ClipboardIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>{b.comment ?? ``}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default BirthdayListPage;
