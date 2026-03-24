import type { ReactNode } from "react";
import Link from "next/link";

type TocItem = {
  id: string;
  label: string;
};

type RelatedLink = {
  href: string;
  label: string;
};

type GuideArticlePageProps = {
  title: string;
  description: string;
  gameTitle: string;
  breadcrumbBaseHref?: string;
  breadcrumbBaseLabel?: string;
  updatedAt?: string;
  toc?: TocItem[];
  relatedLinks?: RelatedLink[];
  children: ReactNode;
};

export default function GuideArticlePage({
  title,
  description,
  gameTitle,
  breadcrumbBaseHref = "/",
  breadcrumbBaseLabel = "Home",
  updatedAt,
  toc = [],
  relatedLinks = [],
  children,
}: GuideArticlePageProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href={breadcrumbBaseHref} className="hover:underline">
          {breadcrumbBaseLabel}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/retro-rewind/" className="hover:underline">
          {gameTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-700 dark:text-zinc-300">{title}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <header className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500">
              {gameTitle} Guide
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
              {description}
            </p>
            {updatedAt ? (
              <p className="mt-3 text-sm text-zinc-500">Updated: {updatedAt}</p>
            ) : null}
          </header>

          <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:scroll-mt-24">
            {children}
          </div>

          {relatedLinks.length > 0 ? (
            <section className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Related Guides
              </h2>
              <ul className="space-y-3">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-300">
              On this page
            </h2>
            <ul className="space-y-2 text-sm">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-zinc-700 hover:underline dark:text-zinc-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}