'use client';

import React, { useState } from 'react';
import ActiveLink from './ActiveLink';

const featuredGuides = [
  { label: 'Whisper of the House', href: '/guides', tag: 'Featured' },
  { label: 'Retro Rewind', href: '/retro-rewind', tag: 'New' },
  { label: 'Moomintroll Winter’s Warmth', href: '/moomintroll', tag: 'Cozy' },
  { label: 'The Long Dark Episode 5', href: '/the-long-dark-episode-5', tag: 'Survival' },
  { label: 'Road To Vostok', href: '/road-to-vostok', tag: 'Survival' },
  { label: 'Sol Cesto', href: '/sol-cesto', tag: 'Strategy' },
  { label: 'Gamble With Your Friends', href: '/gamble-with-your-friends', tag: 'Party' },
  { label: 'Far Far West', href: '/far-far-west/secret-missions', tag: 'Hot' },
];

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <ActiveLink
          href="/"
          className="flex items-center gap-3 rounded-xl transition-opacity duration-300 hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm md:h-10 md:w-10">
            <span className="text-lg font-bold text-white md:text-xl">W</span>
          </div>

          <div className="text-lg font-bold text-white md:text-xl lg:text-2xl">
            Whisper of the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              House
            </span>
          </div>
        </ActiveLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">
            <li>
              <ActiveLink
                href="/"
                className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Home
              </ActiveLink>
            </li>

            {/* Game Guides Mega Menu */}
            <li className="group relative">
              <button
                type="button"
                className="nav-link flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Game Guides
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="invisible absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-purple-700/50 bg-purple-950/95 p-5 shadow-2xl backdrop-blur-md">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-sm font-bold uppercase tracking-wide text-purple-200">
                          Featured Game Guides
                        </h3>
                        <ActiveLink
                          href="/#all-game-guides"
                          className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                        >
                          View All →
                        </ActiveLink>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {featuredGuides.map((item) => (
                          <ActiveLink
                            key={item.href}
                            href={item.href}
                            className="group/item rounded-xl border border-white/5 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10"
                          >
                            <div className="mb-1 text-sm font-semibold text-white group-hover/item:text-cyan-200">
                              {item.label}
                            </div>
                            <div className="text-xs font-medium text-purple-200">{item.tag}</div>
                          </ActiveLink>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-purple-200">
                        Browse by Type
                      </h3>

                      <div className="mt-5 rounded-xl bg-white/5 p-4">
                        <div className="mb-2 text-sm font-bold text-white">Latest Updates</div>
                        <p className="mb-3 text-xs leading-relaxed text-purple-100">
                          Jump to the newest guide updates on the homepage.
                        </p>
                        <ActiveLink
                          href="/#latest-updates"
                          className="inline-flex rounded-lg bg-white px-3 py-2 text-xs font-bold text-purple-900 transition-colors duration-300 hover:bg-purple-50"
                        >
                          View Updates
                        </ActiveLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {mainNav.slice(1).map((item) => (
              <li key={item.href}>
                <ActiveLink
                  href={item.href}
                  className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </ActiveLink>
              </li>
            ))}

            <li>
              <ActiveLink
                href="/#all-game-guides"
                className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20"
              >
                All Games
              </ActiveLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-purple-950 px-4 pb-5 pt-4 shadow-2xl backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl space-y-5">
            <div className="grid grid-cols-2 gap-2">
              {mainNav.map((item) => (
                <div key={item.href} onClick={closeMobileMenu}>
                  <ActiveLink
                    href={item.href}
                    className="block rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                  >
                    {item.label}
                  </ActiveLink>
                </div>
              ))}

              <div onClick={closeMobileMenu}>
                <ActiveLink
                  href="/#latest-updates"
                  className="block rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Latest Updates
                </ActiveLink>
              </div>

              <div onClick={closeMobileMenu}>
                <ActiveLink
                  href="/#all-game-guides"
                  className="block rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  All Games
                </ActiveLink>
              </div>
            </div>

            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-wide text-purple-200">
                Featured Game Guides
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {featuredGuides.map((item) => (
                  <div key={item.href} onClick={closeMobileMenu}>
                    <ActiveLink
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                    >
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                      <span className="text-xs font-medium text-cyan-300">{item.tag}</span>
                    </ActiveLink>
                  </div>
                ))}
              </div>
            </div>

            <div onClick={closeMobileMenu}>
              <ActiveLink
                href="/#all-game-guides"
                className="flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-purple-900 transition-colors hover:bg-purple-50"
              >
                Browse All Game Guides
              </ActiveLink>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :global(.nav-link.active) {
          color: rgb(103 232 249);
          background: rgba(255, 255, 255, 0.12);
        }
      `}</style>
    </header>
  );
};

export default Header;