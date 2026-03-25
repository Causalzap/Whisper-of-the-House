import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CommunityContent from "@/data/retro-rewind/community.mdx";

export const metadata: Metadata = {
  title:
    "Retro Rewind Discord, Community, and Official Links Guide",
  description:
    "Find the official Retro Rewind Discord, where players discuss bugs, custom videos, mods, store layouts, and roadmap updates.",
  alternates: {
    canonical:
      "https://www.whisperofthehouse.com/retro-rewind/community",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <GuideArticlePage
          title="Retro Rewind Discord, Community, and Official Links"
          description="Looking for the official Retro Rewind Discord or the best place to discuss bugs, custom videos, mods, and store layouts? This page covers the main community spaces and what each one is best for."
          gameTitle="Retro Rewind"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="March 26, 2026"
          toc={[
            {
              id: "is-there-an-official-retro-rewind-discord",
              label: "Official Discord",
            },
            {
              id: "where-players-discuss-retro-rewind",
              label: "Where players discuss the game",
            },
            {
              id: "what-the-official-discord-is-best-for",
              label: "What Discord is best for",
            },
            {
              id: "what-players-are-talking-about-right-now",
              label: "Current hot topics",
            },
            {
              id: "useful-official-and-community-links",
              label: "Useful links",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/retro-rewind/custom-videos/",
              label: "How to Add Your Own Videos to Retro Rewind",
            },
            {
              href: "/retro-rewind/is-the-black-market-worth-it/",
              label: "Is the Black Market Worth It in Retro Rewind?",
            },
            {
              href: "/retro-rewind/when-to-replace-damaged-tape/",
              label: "When to Replace a Damaged Tape in Retro Rewind",
            },
          ]}
        >
          <CommunityContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}