import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataUnknownSignalGuideContent from "@/data/pragmata/pragmata-unknown-signal-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/pragmata/pragmata-unknown-signal-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/pragmata`;

export const metadata: Metadata = {
  title:
    "Pragmata Unknown Signal Guide: How to Unlock It and 100% Cleanup",
  description:
    "How to unlock Unknown Signal in Pragmata, what you can clean up in postgame, how 100% completion works, and the best rewards and loadout for all sim missions.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pragmata",
        item: gameHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pragmata Unknown Signal Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "Pragmata Unknown Signal Guide: How to Unlock It and 100% Cleanup",
    description:
      "How to unlock Unknown Signal in Pragmata, what you can clean up in postgame, how 100% completion works, and the best rewards and loadout for all sim missions.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "Pragmata",
    },
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Pragmata Unknown Signal Guide"
          description="This guide explains how to unlock Unknown Signal in Pragmata, what you can still clean up in postgame, what counts for 100% completion, and which rewards and loadouts matter most in the sim missions."
          gameTitle="Pragmata"
          gameHref="/pragmata"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 18, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick answer",
            },
            {
              id: "how-to-unlock-unknown-signal",
              label: "How to unlock Unknown Signal",
            },
            {
              id: "what-unknown-signal-is",
              label: "What Unknown Signal is",
            },
            {
              id: "can-you-clean-up-collectibles-in-postgame",
              label: "Can you clean up collectibles in postgame?",
            },
            {
              id: "what-you-cannot-fix-in-postgame",
              label: "What you cannot fix in postgame",
            },
            {
              id: "what-counts-for-100-percent-cleanup",
              label: "What counts for 100% cleanup",
            },
            {
              id: "best-rewards-in-unknown-signal",
              label: "Best rewards in Unknown Signal",
            },
            {
              id: "best-loadout-for-unknown-signal",
              label: "Best loadout for Unknown Signal",
            },
            {
              id: "best-mods-and-tools-for-unknown-signal",
              label: "Best mods and tools",
            },
            {
              id: "how-many-sim-missions-are-in-unknown-signal",
              label: "How many sim missions are there?",
            },
            {
              id: "should-you-rush-to-the-end-of-each-pod",
              label: "Should you rush each pod?",
            },
            {
              id: "what-happens-after-all-10-pods",
              label: "What happens after all 10 pods",
            },
            {
              id: "is-unknown-signal-worth-doing",
              label: "Is Unknown Signal worth doing?",
            },
            {
              id: "final-verdict",
              label: "Final verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/pragmata",
              label: "Pragmata Guide Hub",
            },
            {
              href: "/pragmata/pragmata-best-pc-settings",
              label: "Pragmata Best PC Settings",
            },
            {
              href: "/pragmata/pragmata-best-early-upgrades",
              label: "Pragmata Best Early Upgrades",
            },
            {
              href: "/pragmata/pragmata-pure-lunum-farming",
              label: "Pragmata Pure Lunum Farming Guide",
            },
          ]}
        >
          <PragmataUnknownSignalGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}