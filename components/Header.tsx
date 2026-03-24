'use client';

import React from 'react';
import ActiveLink from './ActiveLink';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 shadow-lg backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">W</span>
          </div>
          <div className="text-2xl font-bold text-white">
            Whisper of the <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">House</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            <li>
              <ActiveLink 
                href="/" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Home
              </ActiveLink>
            </li>
            
            {/* Game Guides Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer">
                Game Guides
                {/* 下拉小箭头 */}
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* 下拉面板 */}
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out w-72">
                <div className="bg-purple-900/95 backdrop-blur-md border border-purple-700/50 rounded-xl shadow-xl overflow-hidden flex flex-col p-1">
                  <ActiveLink 
                    href="/retro-rewind" 
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Retro Rewind - Video Store Simulator
                  </ActiveLink>
                  <ActiveLink 
                    href="/winter-burrow" 
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Winter Burrow
                  </ActiveLink>
                  <ActiveLink 
                    href="/routine-guide" 
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Routine
                  </ActiveLink>
                  <ActiveLink 
                    href="/i-am-alone" 
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    YES, I'M ALONE.
                  </ActiveLink>
                  <ActiveLink 
                    href="/abnormal-points-collection" 
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Abnormal Points - Whisper of the house
                  </ActiveLink>
                </div>
              </div>
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
                href="/download-and-news" 
                className="nav-link px-3 py-2 text-slate-200 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-lg"
              >
                Downloads & News
              </ActiveLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

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