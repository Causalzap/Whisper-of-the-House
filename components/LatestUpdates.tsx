// components/LatestUpdates.tsx
import React from 'react';
import Link from 'next/link';

export default function LatestUpdates() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-10 px-4 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-4 md:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
            <h2 className="text-lg font-bold text-gray-900">Latest Updates</h2>
            <span className="text-xs text-gray-400">New guides & articles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* ===== I Am Jesus Christ ===== */}
            <Link href="/i-am-jesus-christ/walkthrough/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-500">I Am Jesus Christ</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700">Full Walkthrough</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Full story route from John the Baptist to the ending.</p>
            </Link>

            <Link href="/i-am-jesus-christ/miracles-list/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-500">I Am Jesus Christ</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700">Miracles List</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Holy Spirit, Divine Vision, miracle categories, and key story scenes.</p>
            </Link>

            <Link href="/i-am-jesus-christ/apostles-locations/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-500">I Am Jesus Christ</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700">12 Apostles Locations</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Recruitment order, trigger chains, missables, and follower route help.</p>
            </Link>

            <Link href="/i-am-jesus-christ/who-should-play/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-500">I Am Jesus Christ</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700">Who Should Play?</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Buying advice for Christians, non-Christians, and story-first players.</p>
            </Link>

            {/* ===== Retro Rewind ===== */}
            <Link href="/retro-rewind/custom-videos" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">Custom Videos Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">How custom videos work and how to use them effectively.</p>
            </Link>

            <Link href="/retro-rewind/community" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">Community Insights</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Tips and strategies from the community.</p>
            </Link>

            <Link href="/retro-rewind/is-the-black-market-worth-it" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">Black Market Worth It?</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Risks, rewards, and when to use it.</p>
            </Link>

            <Link href="/retro-rewind/when-to-replace-damaged-tape" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">Replace Damaged Tape</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">When replacing improves progress.</p>
            </Link>

            {/* ===== Hozy ===== */}
            <Link href="/guides/hozy/cafe-layout-tips" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Cafe Layout Tips</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Keep the Cafe cozy without clutter.</p>
            </Link>

            <Link href="/guides/hozy/hardest-levels-ranked" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Hardest Levels Ranked</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Which rooms feel toughest to finish.</p>
            </Link>

            <Link href="/guides/hozy/penthouse-layout-guide" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Penthouse Layout Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Balance the large space effectively.</p>
            </Link>

            <Link href="/guides/hozy/dreams-explained" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">Dreams Explained</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Why the level feels so strange.</p>
            </Link>

            {/* ===== GRIME II ===== */}
            <Link href="/grime-2/blade-mammoth-boss-guide" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">GRIME II</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">Blade Mammoth Boss Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">How to beat Blade Mammoth and survive Phase 2.</p>
            </Link>

            <Link href="/grime-2/kankan-guide" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">GRIME II</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">Kankan Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">What to do, where to go, and how to get back on track.</p>
            </Link>

            <Link href="/grime-2/best-early-weapons" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">GRIME II</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">Best Early Weapons</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Which weapon to use first and why Maul Axe is safest early.</p>
            </Link>

            <Link href="/grime-2/vs-grime-1-differences" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">GRIME II</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">GRIME II vs GRIME 1</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">What changed, what improved, and what old fans may miss.</p>
            </Link>

            {/* ===== THE OCCULTIST ===== */}
            <Link
              href="/the-occultist"
              className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">THE OCCULTIST</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                  Guide Hub
                </h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Collectibles, Codex pages, and the key puzzle solution routes in one place.
              </p>
            </Link>

            <Link
              href="/the-occultist/all-medallion-locations"
              className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">THE OCCULTIST</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                  All 15 Medallion Locations
                </h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Every Medallion location across the Farm, Hospital, Orphanage, Circus, Cemetery, Manor, and Temple.
              </p>
            </Link>

            <Link
              href="/the-occultist/all-altar-locations"
              className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">THE OCCULTIST</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                  All 7 Altar Locations
                </h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Every altar location, including the Lighthouse room, Mausoleum path, and final Redler Manor altar.
              </p>
            </Link>

            <Link
              href="/the-occultist/codex-lumina-fragments"
              className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-emerald-300"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-500 font-semibold">THE OCCULTIST</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                  Codex Lumina Fragments
                </h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">
                Find all four missing Codex pages in Redler Manor and complete the ritual book route.
              </p>
            </Link>

            {/* ===== All Will Fall ===== */}


            <Link href="/all-will-fall/oil-rig-guide/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-orange-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-orange-500 font-semibold">All Will Fall</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700">Oil Rig Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Best early build order, first raise timing, and the 500% Rain Catcher setup.</p>
            </Link>

            <Link href="/all-will-fall/tanker-truck-guide/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-orange-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-orange-500 font-semibold">All Will Fall</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700">Tanker Truck Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Early build order, fuel math, and how to keep zone progression from stalling out.</p>
            </Link>

            <Link href="/all-will-fall/tornado-race-guide/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-orange-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-orange-500 font-semibold">All Will Fall</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700">Tornado Race Guide</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Day 60 timeline, Thruster Engines, Power Grid timing, and evacuation planning.</p>
            </Link>

            <Link href="/all-will-fall/collapse-troubleshooting/" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-orange-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-orange-500 font-semibold">All Will Fall</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-orange-700">Collapse Troubleshooting</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Why buildings fail, what stability problems look like, and how to fix them fast.</p>
            </Link>

            {/* ===== The Long Dark Episode 5 ===== */}
            <Link href="/the-long-dark-episode-5" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-sky-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-sky-500 font-semibold">The Long Dark</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-sky-700">Episode 5 Guide Hub</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Walkthroughs, missing people help, ending answers, and hardcase guides.</p>
            </Link>

            <Link href="/the-long-dark-episode-5/episode-5-walkthrough" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-sky-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-sky-500 font-semibold">The Long Dark</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-sky-700">Episode 5 Walkthrough</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Full chapter route from Perseverance Mills to the ending.</p>
            </Link>

            <Link href="/the-long-dark-episode-5/episode-5-missing-people-locations" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-sky-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-sky-500 font-semibold">The Long Dark</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-sky-700">Missing People Locations</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">Basement, waterfall, and Constable routes in one guide.</p>
            </Link>

            <Link href="/the-long-dark-episode-5/episode-5-ending-explained" className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-sky-300">
              <div className="flex items-center gap-2">
                <span className="text-xs text-sky-500 font-semibold">The Long Dark</span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-sky-700">Episode 5 Ending Explained</h3>
              </div>
              <p className="mt-1 text-xs text-gray-600">What the ending means, what Atwood reveals, and how to read the final scenes.</p>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}