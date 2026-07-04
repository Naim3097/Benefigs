import Link from "next/link";
import type { Article } from "@/lib/journal";
import { Media, accentForCategory } from "@/components/media/Media";
import { formatDate, cn } from "@/lib/utils";

export function ArticleCard({
  article,
  priority = false,
  className,
}: {
  article: Article;
  priority?: boolean;
  className?: string;
}) {
  const href = `/journal/${article.slug}`;
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link href={href} aria-hidden="true" tabIndex={-1} className="block">
        <Media
          image={article.image}
          ratio="16 / 10"
          rounded="2xl"
          accent={accentForCategory("")}
          priority={priority}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="transition-transform duration-500 ease-soft group-hover:scale-[1.02]"
        />
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-small font-semibold uppercase tracking-wide text-berry-700">{article.category}</p>
        <h3 className="mt-2 text-[1.35rem] font-medium leading-snug text-ink-900">
          <Link href={href} className="transition-colors hover:text-berry-700">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-ink-700">{article.excerpt}</p>
        <p className="mt-3 text-small text-ink-500">
          {formatDate(article.date)} · {article.readingMinutes} minit bacaan
        </p>
      </div>
    </article>
  );
}
