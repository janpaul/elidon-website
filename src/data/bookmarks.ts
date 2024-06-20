export type Tag =
  | "all"
  | "dj"
  | "amsterdam"
  | "fun"
  | "games"
  | "learning"
  | "social"
  | "mail"
  | "media"
  | "apple"
  | "news"
  | "svenska"
  | "books"
  | "development"
  | "cpp"
  | "rust"
  | "typescript"
  | "html"
  | "css"
  | "mdn"
  | "swift"
  | "dhl"
  | "work"
  | "nsfw";
export type Bookmark = {
  title: string;
  url: string;
  tags?: Tag[];
};

export const bookmarks: Bookmark[] = [
  { title: "NOS Nieuws", url: "https://nos.nl", tags: ["news"] },
  { title: "AT5", url: "https://at5.nl", tags: ["news", "amsterdam"] },
  { title: "Hey Imbox", url: "https://hey.com", tags: ["mail"] },
  { title: "Youtube", url: "https://youtube.com", tags: ["media"] },
  {
    title: "SCP Foundation",
    url: "https://scp-wiki.wikidot.com",
    tags: ["fun"],
  },
  { title: "8 Sidor", url: "https://8sidor.se", tags: ["svenska"] },
  {
    title: "Ordbok",
    url: "https://ordbok.lagom.nl/ordbok.html",
    tags: ["svenska"],
  },
  { title: "Udemy", url: "https://udemy.com", tags: ["learning"] },
  {
    title: "XDJ RX3 Firmware",
    url: "https://www.pioneerdj.com/en/support/software/all-in-one-system/xdj-rx3/",
    tags: ["dj"],
  },
  {
    title: "Club Ready DJ Course",
    url: "https://www.clubreadydjcourse.com/course/1/lesson/1/",
    tags: ["dj"],
  },
  {
    title: "Wicked Wims",
    url: "https://wickedwhimsmod.com/download/",
    tags: ["games", "nsfw"],
  },
  {
    title: "The Sims 4 cheatsheet",
    url: "https://www.polygon.com/the-sims-4-guides/22700899/cheats-ps4-pc-xbox-one-needs-macmoney-skill-mob-objects-cas",
    tags: ["games"],
  },
  {
    title: "Året Rund",
    url: "https://portal.coutinho.nl/aretrunt/studiemateriaal.html",
    tags: ["svenska"],
  },
  {
    title: "Standard E-Books",
    url: "https://standardebooks.org",
    tags: ["fun", "books", "media"],
  },
  {
    title: "Instagram",
    url: "https://instagram.com/janpaul",
    tags: ["social"],
  },
  { title: "Github", url: "https://github.com/janpaul", tags: ["development"] },
  { title: "Vercel", url: "https://vercel.com", tags: ["development"] },
  { title: "Supabase", url: "https://supabase.com", tags: ["development"] },
  {
    title: "MDN: HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tags: ["development", "mdn"],
  },
  {
    title: "MDN: HTTP Request Methods",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",
    tags: ["development", "mdn"],
  },
  {
    title: "MDN: HTTP Response Status Codes",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
    tags: ["development", "mdn"],
  },
  {
    title: "Falsehoods programmers believe about time zones",
    url: "https://www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/",
    tags: ["development"],
  },
  {
    title: "Rust",
    url: "https://www.rust-lang.org",
    tags: ["development", "rust"],
  },
  {
    title: "PBF Format",
    url: "https://wiki.openstreetmap.org/wiki/PBF_Format",
    tags: ["development"],
  },
  {
    title: "The Swift Programming Language",
    url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "The Swift Standard Library",
    url: "https://developer.apple.com/documentation/swift/swift-standard-library",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "SwiftUI",
    url: "https://developer.apple.com/documentation/SwiftUI",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "SwiftUI Tutorials",
    url: "https://developer.apple.com/tutorials/swiftui/",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "Swift Charts",
    url: "https://developer.apple.com/documentation/Charts",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "Swift Data",
    url: "https://developer.apple.com/documentation/SwiftData",
    tags: ["development", "apple", "swift"],
  },
  {
    title: "JIRA",
    url: "https://dhlbnl.atlassian.net/jira/software/projects/B2X/boards/65",
    tags: ["development", "dhl"],
  },
  {
    title: "My Vibegroup",
    url: "https://my.vibegroup.nl/",
    tags: ["dhl", "work"],
  },
  {
    title: "NextUI",
    url: "https://nextui.org/docs/components",
    tags: ["development", "typescript"],
  },
  {
    title: "Tabler Icons",
    url: "https://tabler.io/icons",
    tags: ["development"],
  },
  {
    title: "Factoring Portal",
    url: "https://www.factoringportal.nl/nl/login",
    tags: ["dhl", "work"],
  },
  {
    title: "OPS recurring pickups",
    url: "https://ops-admin-accept.dhlparcel.nl/app/pickup/pickups/list?sandbox=false&sort=&page=1&size=25",
    tags: ["dhl"],
  },
  {
    title: "DHL eCommerce Admin accept",
    url: "https://admin-accept.dhlparcel.nl",
    tags: ["dhl"],
  },
  {
    title: "DHL eCommerce Accept",
    url: "https://admin.dhlparcel.nl",
    tags: ["dhl"],
  },
  {
    title: "DHL Outlook",
    url: "https://outlook.office.com/mail/inbox",
    tags: ["dhl"],
  },
  {
    title: "Pornhub",
    url: "https://pornhub.com",
    tags: ["nsfw"],
  },
  {
    title: "Bella Belles",
    url: "https://bellabelles.com",
    tags: ["nsfw"],
  },
  {
    title: "Only Fans",
    url: "https://onlyfans.com",
    tags: ["nsfw"],
  },
];
