import Markdown from "react-markdown";
import NextLink from "next/link";
import { ExternalLink } from "./external-link";

type Props = {
  children: string;
};

export const MyMarkdown = ({ children }: Props) => (
  <Markdown
    components={{
      a: ({ href = "", children, node, ...props }) =>
        href.startsWith("/") ? (
          <NextLink
            href={href}
            className="text-blue-500 hover:underline"
            {...props}
          >
            {children}
          </NextLink>
        ) : (
          <ExternalLink href={href} {...props}>
            {children}
          </ExternalLink>
        ),
    }}
  >
    {children}
  </Markdown>
);
