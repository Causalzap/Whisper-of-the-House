// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">

            {/* Brand */}
            <div className="max-w-md">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <span className="text-2xl font-bold text-white">W</span>
                </div>

                <div className="text-3xl font-bold leading-tight text-white">
                  Whisper of the <span className="text-blue-400">House</span>
                </div>
              </div>

              <p className="text-base leading-7 text-gray-300">
                Independent PC and Steam game guides, walkthroughs, beginner tips,
                puzzle solutions, and gaming-related recommendations.
              </p>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                We do not host pirated files, cracks, cheats, or unauthorized downloads.
                When we link to games, we link to official stores or publisher pages.
              </p>
            </div>

            {/* Popular Guides */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-blue-300">
                Popular Guides
              </h3>

              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/dwarf-eats-mountain" className="text-gray-300 transition-colors hover:text-white">
                    Dwarf Eats Mountain
                  </Link>
                </li>
                <li>
                  <Link href="/moomintroll" className="text-gray-300 transition-colors hover:text-white">
                  Moomintroll Winter’s Warmth
                  </Link>
                </li>
                <li>
                  <Link href="/directive-8020" className="text-gray-300 transition-colors hover:text-white">
                    Directive 8020
                  </Link>
                </li>
                <li>
                  <Link href="/far-far-west/secret-missions" className="text-gray-300 transition-colors hover:text-white">
                    Far Far West
                  </Link>
                </li>
                <li>
                  <Link href="/everything-is-crab" className="text-gray-300 transition-colors hover:text-white">
                    Everything Is Crab
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h3 className="mb-5 text-lg font-semibold text-blue-300">
                Legal & Trust
              </h3>

              <ul className="space-y-3 text-base">
                <li>
                  <Link href="/about" className="text-gray-300 transition-colors hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 transition-colors hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-300 transition-colors hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate-disclosure" className="text-gray-300 transition-colors hover:text-white">
                    Affiliate Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 transition-colors hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-300">
                  Contact
                </h4>
                <a
                  href="mailto:support@whisperofthehouse.com"
                  className="break-all text-sm text-gray-300 transition-colors hover:text-white"
                >
                  support@whisperofthehouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/25">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Whisper of the House. All Rights Reserved.
            </div>

            <div className="max-w-2xl text-xs leading-5 text-gray-500 md:text-right">
              Whisper of the House is an independent game guide website and is not affiliated
              with Steam, Valve, or any game publisher unless specifically stated. All trademarks
              belong to their respective owners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;