// components/Header.tsx
'use client';

import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">W</span>
          </div>
          <div className="text-2xl font-bold text-white">
            Whisper of the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">House</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            <li>
              <ActiveLink 
                href="/" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink 
                href="/guides" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Guides
              </ActiveLink>
            </li>
            <li>
              <ActiveLink 
                href="/collection" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Collection
              </ActiveLink>
            </li>
            <li>
              <ActiveLink 
                href="/play-online" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Play Online
              </ActiveLink>
            </li>

            <li>
              <ActiveLink 
                href="/winter-burrow" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Winter Burrow Guide
              </ActiveLink>
            </li>

            <li>
              <ActiveLink 
                href="/abnormal-points-collection" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Abnormal Points
              </ActiveLink>
            </li>
            <li>
              <ActiveLink 
                href="/download-and-news" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Downloads & News
              </ActiveLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button (简单实现) */}
        <button className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ActiveLink 样式 */}
      <style jsx>{`
        :global(.nav-link.active) {
          color: rgb(96 165 250);
          background: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </header>
  );
};

export default Header;