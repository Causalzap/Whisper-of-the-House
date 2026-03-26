import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import SkuCodesContent from "@/data/retro-rewind/sku-codes.mdx";

export const metadata: Metadata = {
  title:
    "Retro Rewind SKU Codes & Black Market Guide: How to Find and Use Them",
  description:
    "Learn how to find SKU codes in Retro Rewind, use them in the Black Market, and decide when exact VHS replacement is actually worth the extra cost.",
  alternates: {
    canonical:
      "https://www.whisperofthehouse.com/retro-rewind/sku-codes",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GuideArticlePage
          title="Retro Rewind SKU Codes & Black Market Guide"
          description="Looking for Retro Rewind SKU codes and how the Black Market works? This guide explains how to find SKU codes, how to use them, and when exact VHS replacement is actually worth it."
          gameTitle="Retro Rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="March 26, 2026"
          toc={[
            {
              id: "what-are-sku-codes-in-retro-rewind",
              label: "What SKU codes are",
            },
            {
              id: "how-to-find-sku-codes-in-retro-rewind",
              label: "How to find SKU codes",
            },
            {
              id: "how-to-use-sku-codes-in-the-black-market",
              label: "How to use SKU codes",
            },
            {
              id: "when-sku-codes-are-actually-worth-using",
              label: "When SKU codes are worth using",
            },
            {
              id: "when-you-should-not-use-sku-codes",
              label: "When not to use SKU codes",
            },
            {
              id: "selected-retro-rewind-sku-code-examples",
              label: "Selected SKU examples",
            },
            {
              id: "how-to-decide-if-a-tape-should-be-replaced-exactly",
              label: "When to replace exactly",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/retro-rewind/is-the-black-market-worth-it/",
              label: "Is the Black Market Worth It in Retro Rewind?",
            },
            {
              href: "/retro-rewind/when-to-replace-damaged-tape/",
              label: "When to Replace a Damaged Tape in Retro Rewind",
            },
            {
              href: "/retro-rewind/community/",
              label: "Retro Rewind Discord, Community, and Official Links",
            },
          ]}
        >
          <SkuCodesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}