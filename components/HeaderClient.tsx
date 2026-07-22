"use client";

import { useState } from "react";
import ActiveLink from "./ActiveLink";

type FeaturedGuide = {
  label: string;
  href: string;
};

type HeaderClientProps = {
  featuredGuides: FeaturedGuide[];
};

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "All Guides", href: "/all-game-guides" },
  { label: "About", href: "/about" },
];

const quickLinks = [
  {
    label: "Latest Stories",
    href: "/#latest-updates",
    description: "Jump to the newest homepage guide picks.",
  },
  {
    label: "Guide Archive",
    href: "/all-game-guides",
    description: "Browse every game hub, guide collection, and archive entry.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Send corrections, questions, or coverage notes.",
  },
];

export default function HeaderClient({ featuredGuides }: HeaderClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <ActiveLink
          href="/"
          className="flex items-center gap-3 rounded-xl transition-opacity duration-300 hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 md:h-10 md:w-10">
            <span className="text-lg font-black text-white md:text-xl">W</span>
          </div>

          <div className="text-lg font-black tracking-tight text-white md:text-xl lg:text-2xl">
            Whisper of the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              House
            </span>
          </div>
        </ActiveLink>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            <li>
              <ActiveLink
                href="/"
                className="nav-link rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Home
              </ActiveLink>
            </li>

            <li className="group relative">
              <button
                type="button"
                className="nav-link flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Game Guides
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-1/2 top-full w-[820px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-md">
                  <div className="grid grid-cols-[1fr_0.55fr] gap-6">
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-sm font-black uppercase tracking-wide text-purple-300">
                          Featured Guide Hubs
                        </h3>

                        <ActiveLink
                          href="/all-game-guides"
                          className="text-sm font-black text-cyan-300 hover:text-cyan-200"
                        >
                          View archive →
                        </ActiveLink>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {featuredGuides.map((item) => (
                          <ActiveLink
                            key={item.href}
                            href={item.href}
                            className="group/item rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition-all duration-300 hover:border-purple-300/50 hover:bg-white/[0.09]"
                          >
                            <div className="mb-1 text-sm font-black leading-snug text-white group-hover/item:text-cyan-200">
                              {item.label}
                            </div>
                            <div className="text-xs font-semibold text-purple-200">
                              Guide Hub
                            </div>
                          </ActiveLink>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-sm font-black uppercase tracking-wide text-purple-300">
                        Browse
                      </h3>

                      <div className="space-y-2">
                        {quickLinks.map((item) => (
                          <ActiveLink
                            key={item.href}
                            href={item.href}
                            className="block rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/[0.09]"
                          >
                            <div className="text-sm font-black text-white">
                              {item.label}
                            </div>
                            <p className="mt-1 text-xs leading-relaxed text-slate-400">
                              {item.description}
                            </p>
                          </ActiveLink>
                        ))}
                      </div>

                      <div className="mt-4 rounded-2xl border border-purple-300/20 bg-purple-400/10 p-4">
                        <div className="text-sm font-black text-white">
                          Looking for a specific game?
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                          Use the complete archive to browse guide hubs,
                          walkthroughs, achievements, endings, builds,
                          collectibles, and systems pages.
                        </p>
                        <ActiveLink
                          href="/all-game-guides"
                          className="mt-3 inline-flex rounded-full bg-white px-3 py-2 text-xs font-black text-slate-950 transition hover:bg-purple-50"
                        >
                          Browse all guides
                        </ActiveLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {primaryNav.slice(1).map((item) => (
              <li key={item.href}>
                <ActiveLink
                  href={item.href}
                  className="nav-link rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </ActiveLink>
              </li>
            ))}

            <li>
              <ActiveLink
                href="/#latest-updates"
                className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white transition-all duration-300 hover:bg-white/20"
              >
                Latest
              </ActiveLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-slate-950 px-4 pb-5 pt-4 shadow-2xl backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl space-y-5">
            <div className="grid grid-cols-2 gap-2">
              {primaryNav.map((item) => (
                <div key={item.href} onClick={closeMobileMenu}>
                  <ActiveLink
                    href={item.href}
                    className="block rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-slate-100 transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </ActiveLink>
                </div>
              ))}

              <div onClick={closeMobileMenu}>
                <ActiveLink
                  href="/#latest-updates"
                  className="block rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-slate-100 transition-colors hover:bg-white/10"
                >
                  Latest Stories
                </ActiveLink>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-black uppercase tracking-wide text-purple-300">
                Featured Guide Hubs
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {featuredGuides.map((item) => (
                  <div key={item.href} onClick={closeMobileMenu}>
                    <ActiveLink
                      href={item.href}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 transition-colors hover:bg-white/10"
                    >
                      <span className="text-sm font-black text-white">
                        {item.label}
                      </span>
                      <span className="shrink-0 text-xs font-bold text-cyan-300">
                        Hub
                      </span>
                    </ActiveLink>
                  </div>
                ))}
              </div>
            </div>

            <div onClick={closeMobileMenu}>
              <ActiveLink
                href="/all-game-guides"
                className="flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition-colors hover:bg-purple-50"
              >
                Browse All Game Guides
              </ActiveLink>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx>{`
        :global(.nav-link.active) {
          color: rgb(103 232 249);
          background: rgba(255, 255, 255, 0.12);
        }
      `}</style>
    </header>
  );
}