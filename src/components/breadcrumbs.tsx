import { Fragment } from "react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

type BreadcrumbPath = {
  title: string;
  href: string;
};
type Props = {
  path: BreadcrumbPath[];
  separator?: string;
};
export const Breadcrumbs = ({ path, separator = `/` }: Props) => (
  <div className="flex items-center gap-1">
    {path.map((p, index) => (
      <Fragment key={p.title}>
        <Link
          href={p.href}
          underline="hover"
          isBlock
          isDisabled={index === path.length - 1}
        >
          <span className="capitalize">{p.title}</span>
        </Link>
        {index < path.length - 1 && <span>{separator}</span>}
      </Fragment>
    ))}
  </div>
);
