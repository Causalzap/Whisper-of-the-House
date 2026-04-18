import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataRedZonesAndStampClubGuideContent from "@/data/pragmata/pragmata-red-zones-and-stamp-club-guide.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/pragmata/pragmata-red-zones-and-stamp-club-guide";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/pragmata`;

export const metadata: Metadata = {
  title:
    "Pragmata Red Zones and Stamp Club Guide: Best Red Gate Key Route for Pure Lunum",
  description:
    "The best Red Gate Key route in Pragmata, which Red Zones to clear first for Pure Lunum, and how Cabin's Stamp Club speeds up your reward loop.",
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
        name: "Pragmata Red Zones and Stamp Club Guide",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "Pragmata Red Zones and Stamp Club Guide: Best Red Gate Key Route for Pure Lunum",
    description:
      "The best Red Gate Key route in Pragmata, which Red Zones to clear first for Pure Lunum, and how Cabin's Stamp Club speeds up your reward loop.",
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
          title="Pragmata Red Zones and Stamp Club Guide"
          description="This guide explains the best Red Gate Key route in Pragmata, which Red Zones to clear first for Pure Lunum, and how Cabin's Stamp Club helps you keep the reward loop moving."
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
              id: "how-the-red-zone-loop-actually-works",
              label: "How the loop works",
            },
            {
              id: "best-red-gate-key-route-for-pure-lunum",
              label: "Best Red Gate Key route",
            },
            {
              id: "all-confirmed-red-gate-keys",
              label: "All confirmed Red Gate Keys",
            },
            {
              id: "best-red-zones-to-clear-first",
              label: "Best Red Zones to clear first",
            },
            {
              id: "which-red-zone-rewards-are-most-worth-it",
              label: "Best Red Zone rewards",
            },
            {
              id: "how-cabins-stamp-club-feeds-the-route",
              label: "How Stamp Club feeds the route",
            },
            {
              id: "stamp-club-board-and-red-zone-links",
              label: "Board and Red Zone links",
            },
            {
              id: "best-stamp-club-rewards-to-prioritize",
              label: "Best Stamp Club rewards",
            },
            {
              id: "where-pure-lunum-fits-into-the-loop",
              label: "Where Pure Lunum fits",
            },
            {
              id: "cabin-coins-how-to-keep-stamp-club-moving",
              label: "Cabin Coins",
            },
            {
              id: "best-route-by-stage",
              label: "Best route by stage",
            },
            {
              id: "faq",
              label: "FAQ",
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
          <PragmataRedZonesAndStampClubGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}