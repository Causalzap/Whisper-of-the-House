import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Retro Rewind Strategy Guide: SKU Codes, Black Market, Damaged Tapes, Custom Videos, and Community",
  description:
    "Retro Rewind strategy hub covering SKU codes, the Black Market, damaged tape decisions, custom TV videos, community links, and the store-management choices that matter most.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/retro-rewind",
  },
};

const coreGuides = [
  {
    href: "/retro-rewind/sku-codes/",
    title: "Retro Rewind SKU Codes & Black Market Guide",
    description:
      "Learn how to find SKU codes, use them in the Black Market, and decide when exact VHS replacement is actually worth the extra cost.",
  },
  {
    href: "/retro-rewind/is-the-black-market-worth-it/",
    title: "Is the Black Market Worth It in Retro Rewind?",
    description:
      "Learn when the shady Tape Dealer is actually worth using, when regular PC orders are better, and how to avoid overusing exact-title purchases.",
  },
  {
    href: "/retro-rewind/when-to-replace-damaged-tape/",
    title: "Damaged Tapes in Retro Rewind: Replace, Wait, or Trash?",
    description:
      "A decision guide for broken tapes, replacement costs, rainy Friday timing, and when to replace revenue instead of chasing the exact same title.",
  },
  {
    href: "/retro-rewind/custom-videos/",
    title: "How to Add Your Own Videos to Retro Rewind",
    description:
      "Learn how to replace TV channel files, use the correct filename and format, and avoid common custom video playback problems.",
  },
  {
    href: "/retro-rewind/community/",
    title: "Retro Rewind Discord, Community, and Official Links",
    description:
      "Find the official Discord, the best places to report bugs, where players share custom content, and which community spaces are most useful.",
  },
];

const comingSoon = [
  "Best Early-Game Priorities in Retro Rewind",
  "Inventory Strategy: Variety vs Demand",
  "Best Genres and Shelf Priorities in Retro Rewind",
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the biggest early-game mistake in Retro Rewind?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treating every tape as equally important. Early progress usually comes from protecting strong demand, not from replacing every loss or chasing perfect shelves.",
        },
      },
      {
        "@type": "Question",
        name: "Should you use the Black Market early?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually only in specific situations. It is better as a precision tool than as your main growth engine.",
        },
      },
      {
        "@type": "Question",
        name: "What do SKU codes do in Retro Rewind?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SKU codes let you order one exact VHS tape through the Black Market instead of waiting for normal stock rotation. They are most useful for replacing a proven seller or targeting one exact title.",
        },
      },
      {
        "@type": "Question",
        name: "Should you replace every damaged tape?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Replace proven earners and let weak stock go. In many cases, it is smarter to replace the revenue than the exact title.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add your own videos to Retro Rewind?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can replace the default public TV channel file with your own compatible MP4 video, as long as you use the correct filename and folder path.",
        },
      },
      {
        "@type": "Question",
        name: "Does Retro Rewind have an official Discord?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Retro Rewind has an official Discord, and it is one of the best places for updates, bug discussion, and custom-content help.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <nav className="mb-6 text-sm text-zinc-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-700 dark:text-zinc-300">Retro Rewind</span>
        </nav>

        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-zinc-500">
            Retro Rewind Guide Hub
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl">
            Retro Rewind Strategy Guide: What Actually Matters
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            Retro Rewind is not just about stocking tapes. It is about making
            the right store decisions at the right time — whether that means
            using SKU codes for an exact replacement, deciding if the Black
            Market premium is justified, or knowing when to stop protecting weak
            inventory.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            This hub collects the guides that matter most for running a smarter
            video store, from SKU codes and Black Market strategy to damaged
            tape decisions, custom TV videos, and the main community spaces
            players actually use.
          </p>
        </header>

        <section className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Start Here First
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            If you only read one guide first, start with SKU codes. It explains
            how exact-title ordering works, how the Black Market fits into that
            system, and why precise replacement is sometimes smart — but not
            always.
          </p>
          <div className="mt-4">
            <Link
              href="/retro-rewind/sku-codes/"
              className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-700"
            >
              Read the SKU Codes & Black Market Guide
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Core Decisions That Define Your Store
          </h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {coreGuides.map((guide) => (
              <article
                key={guide.href}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  <Link
                    href={guide.href}
                    className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                  >
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  {guide.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={guide.href}
                    className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:text-zinc-100 dark:decoration-zinc-700"
                  >
                    Read guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            How to Think Like a Profitable Store Owner
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
            Strong players do not just manage tapes — they manage revenue.
            Instead of asking, “Do I need this exact movie?”, they ask, “What
            earns the most from this shelf right now?” That is the difference
            between replacing titles and replacing revenue.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Use SKU codes when exact replacement is actually justified</li>
            <li>Replace hot demand drivers quickly</li>
            <li>Let weak stock die instead of overpaying to recover it</li>
            <li>Use the Black Market for precision, not general growth</li>
            <li>Think about timing, weather, and busy weekends before ordering</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Featured Guides
          </h2>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <ul className="list-inside list-disc space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              <li>
                <Link
                  href="/retro-rewind/sku-codes/"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                >
                  SKU codes, exact-title ordering, and when the Black Market is worth using
                </Link>
              </li>
              <li>
                <Link
                  href="/retro-rewind/is-the-black-market-worth-it/"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                >
                  Black Market strategy and exact-title decisions
                </Link>
              </li>
              <li>
                <Link
                  href="/retro-rewind/when-to-replace-damaged-tape/"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                >
                  Damaged tapes, replacement timing, and rainy Friday demand
                </Link>
              </li>
              <li>
                <Link
                  href="/retro-rewind/custom-videos/"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                >
                  Custom TV videos, channel files, and playback fixes
                </Link>
              </li>
              <li>
                <Link
                  href="/retro-rewind/community/"
                  className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-600 dark:decoration-zinc-700"
                >
                  Official Discord, bug-report channels, and community links
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            What to Learn Next
          </h2>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <ul className="list-inside list-disc space-y-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
              {comingSoon.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Retro Rewind FAQ
          </h2>
          <div className="space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                What is the biggest early-game mistake in Retro Rewind?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Treating every tape as equally important. Early progress usually
                comes from protecting strong demand, not from replacing every
                loss or chasing perfect shelves.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Should you use the Black Market early?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Usually only in specific situations. It is better as a precision
                tool than as your main growth engine.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                What do SKU codes do in Retro Rewind?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                SKU codes let you order one exact VHS tape through the Black
                Market instead of waiting for normal stock rotation. They are
                most useful for replacing a proven seller or targeting one exact
                title.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Should you replace every damaged tape?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                No. Replace proven earners and let weak stock go. In many cases,
                it is smarter to replace the revenue than the exact title.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Can you add your own videos to Retro Rewind?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Yes. You can replace the default public TV channel file with
                your own compatible MP4 video, as long as you use the correct
                filename and folder path.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Does Retro Rewind have an official Discord?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                Yes. Retro Rewind has an official Discord, and it is one of the
                best places for updates, bug discussion, and custom-content
                help.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}