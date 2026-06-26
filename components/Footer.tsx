import Link from "next/link";
import { footerFeaturedGuides } from "@/data/homeGuideCoverage";

const trustLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact Us", href: "/contact" },
];

const browseLinks = [
  { label: "All Game Guides", href: "/all-game-guides/" },
  { label: "Latest Stories", href: "/#latest-updates" },
  { label: "Featured Hubs", href: "/#featured-games" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="border-t border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-purple-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.25fr_0.8fr_0.9fr] md:gap-12">
            <div className="max-w-md">
              <Link
                href="/"
                className="mb-5 flex w-fit items-center gap-4 rounded-2xl transition-opacity hover:opacity-90"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-sm">
                  <span className="text-2xl font-black text-white">W</span>
                </div>

                <div className="text-3xl font-black leading-tight tracking-tight text-white">
                  Whisper of the{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    House
                  </span>
                </div>
              </Link>

              <p className="text-base leading-7 text-slate-300">
                Independent PC and Steam game guides, walkthroughs, beginner
                tips, puzzle solutions, achievements, endings, builds, and
                systems help.
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                We do not host pirated files, cracks, cheats, or unauthorized
                downloads. When we link to games, we link to official stores or
                publisher pages.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-black text-blue-300">
                Featured Guides
              </h3>

              <ul className="space-y-3 text-base">
                {footerFeaturedGuides.map((guide) => (
                  <li key={guide.href}>
                    <Link
                      href={guide.href}
                      className="text-slate-300 transition-colors hover:text-white"
                    >
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/all-game-guides/"
                  className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-slate-100 transition hover:border-purple-300/50 hover:bg-white/[0.14]"
                >
                  Browse all guides →
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-lg font-black text-blue-300">
                Browse & Trust
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
                <div>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-purple-300">
                    Browse
                  </h4>

                  <ul className="space-y-3 text-base">
                    {browseLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-slate-300 transition-colors hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-wide text-purple-300">
                    Legal & Trust
                  </h4>

                  <ul className="space-y-3 text-base">
                    {trustLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-slate-300 transition-colors hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <h4 className="mb-2 text-sm font-black uppercase tracking-wide text-blue-300">
                  Contact
                </h4>
                <a
                  href="mailto:support@whisperofthehouse.com"
                  className="break-all text-sm text-slate-300 transition-colors hover:text-white"
                >
                  support@whisperofthehouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Whisper of the House. All rights
              reserved.
            </div>

            <div className="max-w-2xl text-xs leading-5 text-slate-500 md:text-right">
              Whisper of the House is an independent game guide website and is
              not affiliated with Steam, Valve, or any game publisher unless
              specifically stated. All trademarks belong to their respective
              owners.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}