import {
  HeartIcon,
  GiftIcon,
  UserPlusIcon,
  UserGroupIcon,
  UserMinusIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "@/lib";

const timeline = [
  {
    id: 1,
    content: "Born",
    target: "In Deventer",
    href: "#",
    date: "Jun 11, 1974",
    datetime: "11-06-1974",
    icon: UserPlusIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Became father",
    target: "Eva Luna",
    href: "#",
    date: "May 16, 2005",
    datetime: "16-05-2005",
    icon: UserGroupIcon,
    iconBackground: "bg-pink-400",
  },
  {
    id: 3,
    content: "Married",
    target: "Danielle",
    href: "#",
    date: "Jun 7, 2007",
    datetime: "07-06-2007",
    icon: HeartIcon,
    iconBackground: "bg-red-400",
  },
  {
    id: 4,
    content: "Became father (again)",
    target: "Anne Lieve",
    href: "#",
    date: "Jul 12, 2008",
    datetime: "12-07-2008",
    icon: UserGroupIcon,
    iconBackground: "bg-pink-400",
  },
  {
    id: 5,
    content: "Divorced",
    target: "Danielle",
    href: "#",
    date: "Feb 3, 2015",
    datetime: "03-02-2015",
    icon: UserMinusIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 6,
    content: "Became father (yet again)",
    target: "Alexander",
    href: "#",
    date: "Jun 12, 2012",
    datetime: "12-06-2012",
    icon: UserGroupIcon,
    iconBackground: "bg-blue-400",
  },
  {
    id: 7,
    content: "Married (again)",
    target: "Roos",
    href: "#",
    date: "Jun 18, 2018",
    datetime: "18-06-2018",
    icon: HeartIcon,
    iconBackground: "bg-red-400",
  },
  {
    id: 8,
    content: "Divorced",
    target: "Roos",
    href: "#",
    date: "April 6, 2022",
    datetime: "06-04-2012",
    icon: UserMinusIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 9,
    content: "Still alive",
    target: "@ Vinkenstraat",
    href: "#",
    date: "Nov 13, 2023",
    datetime: "13-11-2023",
    icon: UserPlusIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 10,
    content: "50 !!!",
    target: "",
    href: "#",
    date: "Nov 13, 2023",
    datetime: "13-11-2023",
    icon: GiftIcon,
    iconBackground: "bg-yellow-400",
  },
];

export const Timeline = () => (
  <div className="flow-root">
    <ul role="list" className="-mb-8">
      {timeline.map((event, eventIdx) => (
        <li key={event.id}>
          <div className="relative pb-8">
            {eventIdx !== timeline.length - 1 ? (
              <span
                className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative flex space-x-3">
              <div>
                <span
                  className={classNames(
                    event.iconBackground,
                    "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white",
                  )}
                >
                  <event.icon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                <div>
                  <p className="text-sm text-gray-500">
                    {event.content}{" "}
                    <a
                      href={event.href}
                      className="font-medium text-gray-700 dark:text-gray-200"
                    >
                      {event.target}
                    </a>
                  </p>
                </div>
                <div className="whitespace-nowrap text-right text-sm text-gray-700 dark:text-gray-200">
                  <time dateTime={event.datetime}>{event.date}</time>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
