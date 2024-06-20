export type Bookmark = {
  title: string;
  url: string;
  tags?: string[];
};

export const bookmarks: Bookmark[] = [
  { title: "NOS Nieuws", url: "//nos.nl", tags: ["news"] },
  { title: "AT5", url: "//at5.nl", tags: ["news", "amsterdam"] },
  { title: "Hey Imbox", url: "//hey.com", tags: ["mail"] },
  { title: "Youtube", url: "//youtube.com", tags: ["media"] },
  { title: "SCP Foundation", url: "//scp-wiki.wikidot.com", tags: ["fun"] },
  { title: "8 Sidor", url: "//8sidor.se", tags: ["svenska"] },
  { title: "Ordbok", url: "//ordbok.lagom.nl/ordbok.html", tags: ["svenska"] },
  { title: "Udemy", url: "//udemy.com", tags: ["learning"] },
  {
    title: "XDJ RX3 Firmware",
    url: "https://www.pioneerdj.com/en/support/software/all-in-one-system/xdj-rx3/",
    tags: ["dj"],
  },
  {
    title: "Club Ready DJ Course",
    url: "//www.clubreadydjcourse.com/course/1/lesson/1/",
    tags: ["dj"],
  },
  {
    title: "Wicked Wims",
    url: "https://wickedwhimsmod.com/download/",
    tags: ["games"],
  },
  {
    title: "The Sims 4 cheatsheet",
    url: "//www.polygon.com/the-sims-4-guides/22700899/cheats-ps4-pc-xbox-one-needs-macmoney-skill-mob-objects-cas",
    tags: ["games"],
  },
  {
    title: "Året Rund",
    url: "//portal.coutinho.nl/aretrunt/studiemateriaal.html",
    tags: ["svenska"],
  },
  {
    title: "Standard E-Books",
    url: "//standardebooks.org",
    tags: ["fun", "books", "media"],
  },
  {
    title: "Instagram",
    url: "//instagram.com/janpaul",
    tags: ["social"],
  },
  { title: "Github", url: "//github.com/janpaul", tags: ["development"] },
  { title: "Vercel", url: "//vercel.com", tags: ["development"] },
  { title: "Supabase", url: "//supabase.com", tags: ["development"] },
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
    url: "//www.zainrizvi.io/blog/falsehoods-programmers-believe-about-time-zones/",
    tags: ["development"],
  },
  {
    title: "Rust",
    url: "https://www.rust-lang.org",
    tags: ["development", "rust"],
  },
  {
    title: "PBF Format",
    url: "//wiki.openstreetmap.org/wiki/PBF_Format",
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
  { title: "Tabler Icons", url: "//tabler.io/icons", tags: ["development"] },
];
