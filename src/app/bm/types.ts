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
  | "nsfw"
  | "fashion";
export type Bookmark = {
  title: string;
  url: string;
  tags?: Tag[];
  description?: string;
};
