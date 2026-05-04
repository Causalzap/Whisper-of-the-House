"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import AdUnit from "@/components/ads/AdUnit";

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
  gameHref?: string;
  breadcrumbBaseHref?: string;
  breadcrumbBaseLabel?: string;
  hideCurrentTitleInBreadcrumb?: boolean;
  updatedAt?: string;
  toc?: TocItem[];
  relatedLinks?: RelatedLink[];

  /**
   * 默认开启文章顶部和底部广告。
   * 如果某篇短文章不想显示广告，可以在 page.tsx 里传 showAds={false}
   */
  showAds?: boolean;

  children: ReactNode;
};

export default function GuideArticlePage({
  title,
  description,
  gameTitle,
  gameHref = "/retro-rewind/",
  breadcrumbBaseHref = "/",
  breadcrumbBaseLabel = "Home",
  hideCurrentTitleInBreadcrumb = false,
  updatedAt,
  toc = [],
  relatedLinks = [],
  showAds = true,
  children,
}: GuideArticlePageProps) {
  const [activeId, setActiveId] = useState<string>("");
  const isClickScrolling = useRef(false);
  const hasToc = toc.length > 0;

  useEffect(() => {
    if (!hasToc) return;

    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-100px 0% -80% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setActiveId(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [toc, hasToc]);

  const handleTocClick = (id: string) => {
    isClickScrolling.current = true;
    setActiveId(id);

    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href={breadcrumbBaseHref} className="hover:underline">
          {breadcrumbBaseLabel}
        </Link>

        <span className="mx-2">/</span>

        <Link href={gameHref} className="hover:underline">
          {gameTitle}
        </Link>

        {!hideCurrentTitleInBreadcrumb && (
          <>
            <span className="mx-2">/</span>
            <span className="inline-block max-w-[200px] align-bottom text-zinc-700 line-clamp-1 dark:text-zinc-300 sm:max-w-none">
              {title}
            </span>
          </>
        )}
      </nav>

      <div
        className={
          hasToc
            ? "grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]"
            : "grid gap-10"
        }
      >
        <article className="min-w-0">
          <header className="mb-8">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {gameTitle} Guide
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>

            {updatedAt && (
              <p className="mt-3 text-sm italic text-zinc-500">
                Last Updated: {updatedAt}
              </p>
            )}
          </header>

          {/* Article top ad */}
          {showAds && <AdUnit placement="article_top" />}

          {/* Article body */}
          <div
            className="
              prose prose-zinc max-w-none dark:prose-invert
              prose-headings:scroll-mt-28
              prose-a:text-blue-600 dark:prose-a:text-blue-400
              prose-img:rounded-2xl
            "
          >
            {children}
          </div>

          {/* Article bottom ad */}
          {showAds && <AdUnit placement="article_bottom" />}

          {/* Related guides */}
          {relatedLinks.length > 0 && (
            <section className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Related Guides
              </h2>

              <ul className="grid gap-4 sm:grid-cols-2">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group block rounded-xl border border-zinc-200 p-4 transition-all hover:border-blue-500 hover:bg-blue-50/50 dark:border-zinc-800 dark:hover:bg-blue-900/10"
                    >
                      <span className="font-medium text-zinc-900 group-hover:text-blue-600 dark:text-zinc-200 dark:group-hover:text-blue-400">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        {/* Sidebar TOC */}
        {hasToc && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  On this page
                </h2>

                <nav>
                  <ul className="space-y-3">
                    {toc.map((item, index) => {
                      const isActive = activeId === item.id;

                      return (
                        <li key={`${item.id}-${index}`}>
                          <a
                            href={`#${item.id}`}
                            onClick={() => handleTocClick(item.id)}
                            className={`relative block text-sm transition-all duration-200 ${
                              isActive
                                ? "translate-x-1 font-semibold text-blue-600 dark:text-blue-400"
                                : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                            }`}
                          >
                            {isActive && (
                              <span className="absolute -left-3 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                            )}

                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}