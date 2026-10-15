import Markdown, { type Components } from "react-markdown";
import NextLink from "next/link";
import { ExternalLink } from "./external-link";
import { linkClass } from "@/lib/utils";

type Props = {
  children: string;
};

const isInternal = (href: string) =>
  href.startsWith("/") && !href.startsWith("//");

const components: Components = {
  h1: ({ node: _, ...p }) => (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...p}
    />
  ),
  h2: ({ node: _, ...p }) => (
    <h2
      className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight"
      {...p}
    />
  ),
  h3: ({ node: _, ...p }) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...p}
    />
  ),
  p: ({ node: _, ...p }) => <p className="leading-7 not-first:mt-6" {...p} />,
  ul: ({ node: _, ...p }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...p} />
  ),
  ol: ({ node: _, ...p }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...p} />
  ),
  blockquote: ({ node: _, ...p }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...p} />
  ),
  hr: ({ node: _, ...p }) => <hr className="my-8 border-border" {...p} />,
  code: ({ node: _, ...p }) => (
    <code
      className="rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...p}
    />
  ),
  pre: ({ node: _, ...p }) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border bg-muted p-4"
      {...p}
    />
  ),
  table: ({ node: _, ...p }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full text-sm" {...p} />
    </div>
  ),
  th: ({ node: _, ...p }) => (
    <th className="border px-4 py-2 text-left font-semibold" {...p} />
  ),
  td: ({ node: _, ...p }) => <td className="border px-4 py-2" {...p} />,
  a: ({ href = "", children, node: _, ...props }) =>
    isInternal(href) ? (
      <NextLink {...props} href={href} className={linkClass}>
        {children}
      </NextLink>
    ) : (
      <ExternalLink {...props} href={href}>
        {children}
      </ExternalLink>
    ),
};

export const MyMarkdown = ({ children }: Props) => (
  <Markdown components={components}>{children}</Markdown>
);
