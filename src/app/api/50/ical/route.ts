import { contact } from "@/data/contact";

const event = [
  `BEGIN:VCALENDAR`,
  `VERSION:2.0`,
  `PRODID:-//hacksw/handcal//NONSGML v1.0//EN`,
  `BEGIN:VEVENT`,
  `UID:${contact.email}`,
  `ORGANIZER;CN=Jan Paul Stegeman:MAILTO::${contact.email}`,
  `DTSTAMP:20240611T170000Z`,
  `DTSTART:20240611T170000Z`,
  `DTEND:20240612T230000Z`,
  `SUMMARY:50ste verjaardag Jan Paul`,
  `GEO:52.37448;4.89992`,
  `END:VEVENT`,
  `END:VCALENDAR`,
];

export const GET = async (): Promise<Response> => {
  return new Response(event.join(`\r\n`), {
    status: 200,
    headers: {
      "Content-Type": `text/calendar`,
      "Content-Disposition": `attachment; filename="Jan Paul 50.ics"`,
    },
  });
};
