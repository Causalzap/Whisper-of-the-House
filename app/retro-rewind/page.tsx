import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Retro Rewind Strategy Guide: Black Market, Damaged Tapes, and Early Decisions",
  description:
    "Retro Rewind strategy hub covering the Black Market, damaged tape decisions, and the store management choices that matter most.",
  alternates: {
    canonical: "https://www.whisperofthehouse.com/retro-rewind",
  },
};

const coreGuides = [
  {
    href: "/retro-rewind/is-the-black-market-worth-it/",
    title: "Is the Black Market Worth It in Retro Rewind?",
    description:
      "Learn when the shady Tape Dealer is actually worth using, when regular PC orders are better, and how to avoid reputation damage from bad shelf placement.",
  },
  {
    href: "/retro-rewind/when-to-replace-damaged-tape/",
    title: "Damaged Tapes in Retro Rewind: Replace, Wait, or Trash?",
    description:
      "A decision guide for broken tapes, replacement costs, rainy Friday timing, and when to replace revenue instead of chasing the exact same title.",
  },
];

const comingSoon = [
  "Best Early-Game Priorities in Retro Rewind",
  "Inventory Strategy: Variety vs Demand",
  "How to Use the Black Market Without Hurting Your Store",
];

export default function Page() {
  // FAQ JSON-LD 结构化数据，用于抢占谷歌搜索结果的富文本展示
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
        name: "Should you replace every damaged tape?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Replace proven earners and let weak stock go. In many cases, it is smarter to replace the revenue than the exact title.",
        },
      },
    ],
  };

  return (
    <>
      {/* 注入 JSON-LD */}
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
            Retro Rewind is not really about stocking tapes — it is about making
            the right store decisions. Most players lose money because they
            replace the wrong tapes, overuse the Black Market, or chase exact
            titles instead of protecting revenue.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            This hub collects the guides that matter most for running a smarter
            video store, starting with damaged tape decisions and whether the
            Black Market is actually worth using.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Core Decisions That Define Your Store
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
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
          {/* 优化了这里的列表：使用了 Tailwind 的原生态 list-disc 和 list-inside */}
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <li>Replace hot demand drivers quickly</li>
            <li>Let weak stock die instead of overpaying to recover it</li>
            <li>Use the Black Market for precision, not general growth</li>
            <li>Think about timing, weather, and busy weekends before ordering</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            What to Learn Next
          </h2>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            {/* 优化了这里的列表：去掉了硬编码的圆点，使用 Tailwind 原生样式 */}
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
                Should you replace every damaged tape?
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                No. Replace proven earners and let weak stock go. In many cases,
                it is smarter to replace the revenue than the exact title.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}