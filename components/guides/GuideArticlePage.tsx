"use client";

import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";
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
  console.log("Current TOC IDs:", toc.map(t => t.id));
  const [activeId, setActiveId] = useState<string>("");
  // 使用 Ref 防止点击跳转时触发观察器的更新逻辑导致的闪烁
  const isClickScrolling = useRef(false);

  useEffect(() => {
    if (toc.length === 0) return;

    // 1. 查找所有标题元素
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    // 2. 优化后的观察逻辑
    const observer = new IntersectionObserver(
      (entries) => {
        // 如果是点击目录触发的滚动，暂时忽略观察回调
        if (isClickScrolling.current) return;

        // 寻找当前最靠近视口顶部的元素
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        // rootMargin 决定了触发高亮的“视口线”
        // 这里设置为靠近顶部 100px 的位置触发
        rootMargin: "-100px 0% -80% 0%",
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    // 处理初始 URL Hash
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveId(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [toc]);

  // 处理点击跳转，避免高亮跳动
  const handleTocClick = (id: string) => {
    isClickScrolling.current = true;
    setActiveId(id);
    
    // 延迟恢复观察，等待滚动结束（简单处理）
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* 面包屑导航 */}
      <nav className="mb-6 text-sm text-zinc-500">
        <Link href={breadcrumbBaseHref} className="hover:underline">
          {breadcrumbBaseLabel}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/retro-rewind/" className="hover:underline">
          {gameTitle}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-zinc-700 dark:text-zinc-300 line-clamp-1 inline-block align-bottom max-w-[200px] sm:max-w-none">
          {title}
        </span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
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
              <p className="mt-3 text-sm text-zinc-500 italic">Last Updated: {updatedAt}</p>
            )}
          </header>

          {/* 文章正文 */}
          <div className="prose prose-zinc max-w-none dark:prose-invert 
            prose-headings:scroll-mt-28 prose-a:text-blue-600 
            dark:prose-a:text-blue-400 prose-img:rounded-2xl">
            {children}
          </div>

          {/* 相关链接 */}
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
                      <span className="text-zinc-900 font-medium group-hover:text-blue-600 dark:text-zinc-200 dark:group-hover:text-blue-400">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        {/* 右侧边栏目录 */}
<aside className="hidden lg:block">
  <div className="sticky top-24">
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        On this page
      </h2>
      <nav>
        <ul className="space-y-3">
          {/* 注意这里：必须写成 (item, index) */}
          {toc.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              /* 使用模板字符串包裹组合 Key */
              <li key={`${item.id}-${index}`}>
                <a
                  href={`#${item.id}`}
                  onClick={() => handleTocClick(item.id)}
                  className={`relative block text-sm transition-all duration-200 ${
                    isActive
                      ? "font-semibold text-blue-600 dark:text-blue-400 translate-x-1"
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

      </div>
    </main>
  );
}