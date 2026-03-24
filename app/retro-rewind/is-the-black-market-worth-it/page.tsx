import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BlackMarketContent from "@/data/retro-rewind/is-the-black-market-worth-it.mdx";

export const metadata: Metadata = {
  title: "Is the Black Market Worth It in Retro Rewind? When to Use It (and When to Avoid It)",
  description:
    "Find out when the Black Market is worth using in Retro Rewind, when it hurts your profits, and how it compares to regular PC orders.",
    alternates: {
        canonical: "https://www.whisperofthehouse.com/retro-rewind/is-the-black-market-worth-it",
      },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GuideArticlePage
          title="Is the Black Market Worth It in Retro Rewind?"
          description="The Black Market can be great for exact replacements and rare finds, but it is often a bad way to stock your store. Here’s when it helps, when it hurts, and what most players get wrong."
          gameTitle="Retro Rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="March 24, 2026"
          toc={[
            {
              id: "what-the-black-market-is-actually-good-for",
              label: "What the Black Market is good for",
            },
            {
              id: "black-market-vs-regular-pc-orders",
              label: "Black Market vs Regular PC",
            },
            {
              id: "when-the-black-market-is-worth-it",
              label: "When it is worth it",
            },
            {
              id: "when-the-black-market-is-not-worth-it",
              label: "When it is not worth it",
            },
            {
              id: "why-black-market-pricing-feels-confusing",
              label: "Pricing differences",
            },
            {
              id: "why-shelf-placement-matters",
              label: "Shelf placement risks",
            },
            {
              id: "how-to-use-the-black-market-safely",
              label: "How to use it safely",
            },
            {
              id: "best-use-cases-vs-worst-use-cases",
              label: "Best vs Worst use cases",
            },
            {
              id: "when-this-advice-does-not-apply",
              label: "Exceptions",
            },
            {
              id: "black-market-and-achievements",
              label: "Achievements",
            },
            {
              id: "final-verdict-by-player-type",
              label: "Final verdict",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/retro-rewind/when-to-replace-damaged-tape/",
              label: "When to Replace a Damaged Tape in Retro Rewind",
            },
          ]}
        >
          <BlackMarketContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}