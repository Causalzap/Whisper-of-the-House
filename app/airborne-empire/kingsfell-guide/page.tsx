import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirborneEmpireKingsfellGuideContent from "@/data/airborne-empire/kingsfell-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/airborne-empire/kingsfell-guide`;

export const metadata: Metadata = {
  title: "Airborne Empire Kingsfell Guide: Jet Engines & Pirate Queen",
  description: "Master the Kingsfell biome in Airborne Empire 1.0! Learn when to enter the final zone, unlock Jet Engines, optimize your layout, and beat the Pirate Queen.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Airborne Empire",
          item: `${siteUrl}/airborne-empire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kingsfell Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline:
        "Airborne Empire Kingsfell Guide: When to Go, Jet Engine Unlock, and Pirate Queen Prep",
      description:
        "This Airborne Empire Kingsfell guide explains when to enter the final biome, how to approach Jet Engine unlock and deployment, how to tighten your city for better anti-air coverage, and how to prepare for the Pirate Queen endgame push.",
      image: [
        `${siteUrl}/images/airborne-empire/airborne-empire-kingsfell-guide-hero.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-frozen-north-foreshadowing.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-jet-engine-blueprint.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-free-the-queen-objective.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-20",
      about: [
        {
          "@type": "VideoGame",
          name: "Airborne Empire",
        },
        {
          "@type": "Thing",
          name: "Kingsfell",
        },
        {
          "@type": "Thing",
          name: "Jet Engine",
        },
        {
          "@type": "Thing",
          name: "Pirate Queen",
        },
        {
          "@type": "Thing",
          name: "Final Biome",
        },
        {
          "@type": "Thing",
          name: "Propulsion",
        },
        {
          "@type": "Thing",
          name: "Lift",
        },
        {
          "@type": "Thing",
          name: "Coal",
        },
        {
          "@type": "Thing",
          name: "Anti-Air Coverage",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
    },
  ],
};

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
          title="Airborne Empire Kingsfell Guide: When to Go, Jet Engine Unlock, and Pirate Queen Prep"
          description="Use this Airborne Empire Kingsfell guide to learn when to enter the final biome, how Jet Engine progression fits into the late game, how to tighten your city layout for better anti-air coverage, and how to prepare for the Pirate Queen push."
          gameTitle="Airborne Empire"
          gameHref="/airborne-empire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 20, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick Answer",
            },
            {
              id: "what-is-airborne-empire-kingsfell",
              label: "What Is Airborne Empire Kingsfell?",
            },
            {
              id: "when-to-go-to-airborne-empire-kingsfell",
              label: "When to Go to Airborne Empire Kingsfell",
            },
            {
              id: "why-airborne-empire-kingsfell-is-so-hard",
              label: "Why Airborne Empire Kingsfell Is So Hard",
            },
            {
              id: "how-to-prepare-for-airborne-empires-kingsfell-biome",
              label: "How to Prepare for Airborne Empire’s Kingsfell Biome",
            },
            {
              id: "where-to-focus-first-in-airborne-empire-kingsfell",
              label: "Where to Focus First in Airborne Empire Kingsfell",
            },
            {
              id: "airborne-empire-kingsfell-jet-engine-guide",
              label: "Airborne Empire Kingsfell Jet Engine Guide",
            },
            {
              id: "best-airborne-empire-kingsfell-city-layout",
              label: "Best Airborne Empire Kingsfell City Layout",
            },
            {
              id: "airborne-empire-kingsfell-pirate-queen-summary",
              label: "Airborne Empire Kingsfell Pirate Queen Summary",
            },
            {
              id: "common-airborne-empire-kingsfell-mistakes",
              label: "Common Airborne Empire Kingsfell Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/airborne-empire/guide-hub/",
              label: "Airborne Empire guide hub",
            },
            {
              href: "/airborne-empire/tilt-lift-balance-guide/",
              label: "Airborne Empire tilt, lift, and balance guide",
            },
            {
              href: "/airborne-empire/jet-engine-guide/",
              label: "Airborne Empire Jet Engine guide",
            },
            {
              href: "/airborne-empire/pirate-queen-guide/",
              label: "Airborne Empire Pirate Queen guide",
            },
          ]}
        >
          <AirborneEmpireKingsfellGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}