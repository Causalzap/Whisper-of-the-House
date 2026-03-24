import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DamagedTapeContent from "@/data/retro-rewind/when-to-replace-damaged-tape.mdx";

export const metadata: Metadata = {
  title: "When Should You Replace a Damaged Tape in Retro Rewind?",
  description:
    "Broken tape fees in Retro Rewind often do not cover replacement costs. Here’s when to skip it, and how to recover lost revenue instead of chasing exact replacements.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GuideArticlePage
          title="When to Replace a Damaged Tape in Retro Rewind"
          description="Broken tape fees often feel too low, which means you should not replace every damaged tape. Here’s when replacing one makes sense, when to wait, and when to let it go."
          gameTitle="Retro Rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="March 24, 2026"
          toc={[
            {
              id: "why-damaged-tapes-feel-so-punishing",
              label: "Why damaged tapes feel punishing",
            },
            {
              id: "why-replacing-the-exact-title-is-often-the-wrong-move",
              label: "Why exact replacement is wrong",
            },
            {
              id: "replace-revenue-not-the-title",
              label: "Replace revenue, not title",
            },
            {
              id: "replace-the-title-genre-or-revenue",
              label: "What should you replace",
            },
            {
              id: "when-to-replace-immediately",
              label: "When to replace immediately",
            },
            {
              id: "when-to-wait-or-skip-replacement",
              label: "When to wait or skip",
            },
            {
              id: "replace-now-wait-or-trash-it",
              label: "Replace vs wait vs trash",
            },
            {
              id: "when-this-advice-does-not-apply",
              label: "Exceptions",
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
              href: "/retro-rewind/is-the-black-market-worth-it/",
              label: "Is the Black Market Worth It in Retro Rewind?",
            },
          ]}
        >
          <DamagedTapeContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}