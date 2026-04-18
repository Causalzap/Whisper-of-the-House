import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataPureLunumGuideContent from "@/data/pragmata/pragmata-pure-lunum-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/pragmata/pragmata-pure-lunum-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/pragmata`;

export const metadata: Metadata = {
  title: "Pragmata Pure Lunum Guide: Locations, Uses, and What to Upgrade First",
  description:
    "How to get Pure Lunum in Pragmata, where to find it, what it is used for, and what to upgrade first with this rare endgame material.",
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
        name: "Pragmata Pure Lunum Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "Pragmata Pure Lunum Guide: Locations, Uses, and What to Upgrade First",
    description:
      "How to get Pure Lunum in Pragmata, where to find it, what it is used for, and what to upgrade first with this rare endgame material.",
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
          title="Pragmata Pure Lunum Guide"
          description="This guide explains how to get Pure Lunum in Pragmata, whether it can be farmed, what it is used for, and what to upgrade first with this rare late-game material."
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
              id: "what-pure-lunum-is",
              label: "What Pure Lunum is",
            },
            {
              id: "how-to-get-pure-lunum",
              label: "How to get Pure Lunum",
            },
            {
              id: "can-you-farm-pure-lunum",
              label: "Can you farm Pure Lunum?",
            },
            {
              id: "best-pure-lunum-locations",
              label: "Best Pure Lunum locations",
            },
            {
              id: "can-you-get-missed-pure-lunum-in-postgame",
              label: "Can you get missed Pure Lunum in postgame?",
            },
            {
              id: "what-pure-lunum-is-used-for",
              label: "What Pure Lunum is used for",
            },
            {
              id: "what-to-upgrade-first-with-pure-lunum",
              label: "What to upgrade first",
            },
            {
              id: "best-upgrade-priority",
              label: "Best upgrade priority",
            },
            {
              id: "what-not-to-spend-pure-lunum-on-early",
              label: "What not to spend it on early",
            },
            {
              id: "pure-lunum-vs-luna-filament-vs-upgrade-components",
              label: "Pure Lunum vs other materials",
            },
            {
              id: "recommended-route-for-completion-players",
              label: "Recommended route for completion players",
            },
            {
              id: "best-related-pickups-to-watch-for",
              label: "Best related pickups",
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
              href: "/pragmata/pragmata-best-early-upgrades",
              label: "Pragmata Best Early Upgrades",
            },
            {
              href: "/pragmata/pragmata-unknown-signal-guide",
              label: "Pragmata Unknown Signal Guide",
            },
            {
              href: "/pragmata/pragmata-best-pc-settings",
              label: "Pragmata Best PC Settings",
            },
          ]}
        >
          <PragmataPureLunumGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}