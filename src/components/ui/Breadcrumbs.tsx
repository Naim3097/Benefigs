import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; href: string };

/** Visual breadcrumb trail. Pair with <BreadcrumbSchema> for SEO. */
export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-small", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <Fragment key={item.href}>
              <li>
                {isLast ? (
                  <span aria-current="page" className="font-medium text-ink-700">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-berry-700 hover:underline underline-offset-4">
                    {item.name}
                  </Link>
                )}
              </li>
              {!isLast ? (
                <li aria-hidden="true" className="text-line-300">
                  /
                </li>
              ) : null}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
