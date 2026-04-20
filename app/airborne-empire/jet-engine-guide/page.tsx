import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirborneEmpireJetEngineGuideContent from "@/data/airborne-empire/jet-engine-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/airborne-empire/jet-engine-guide`;

export const metadata: Metadata = {
    title: "Airborne Empire Jet Engine Guide: Unlocks & Best Layouts",
    description: "Master the Jet Engine in Airborne Empire 1.0! Learn how to unlock it, optimize your late-game city layout, and defeat the Pirate Queen in Kingsfell.",
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
          name: "Jet Engine Guide",
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
        "Airborne Empire Jet Engine Guide: Unlock, Best Layout, and Late-Game Use",
      description:
        "This Airborne Empire Jet Engine guide explains when the upgrade becomes relevant, how Jet Engine fits into late-game progression, how to rebuild your city around it, how it compares to fans and propellers, and how it helps in Kingsfell and the Pirate Queen fight.",
      image: [
        `${siteUrl}/images/airborne-empire/airborne-empire-jet-engine-guide-hero.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-jet-engine-blueprint.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-late-propulsion-comparison.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-jet-engine-layout-rebuild.webp`,
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
          name: "Jet Engine",
        },
        {
          "@type": "Thing",
          name: "Propulsion",
        },
        {
          "@type": "Thing",
          name: "Fans",
        },
        {
          "@type": "Thing",
          name: "Propellers",
        },
        {
          "@type": "Thing",
          name: "Kingsfell",
        },
        {
          "@type": "Thing",
          name: "Pirate Queen",
        },
        {
          "@type": "Thing",
          name: "Late-Game Upgrade",
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
          title="Airborne Empire Jet Engine Guide: Unlock, Best Layout, and Late-Game Use"
          description="Use this Airborne Empire Jet Engine guide to learn when the upgrade becomes relevant, how to rebuild your city around it, how it compares to older propulsion, and how it helps in Kingsfell and the Pirate Queen fight."
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
              id: "what-is-the-jet-engine-in-airborne-empire",
              label: "What Is the Jet Engine in Airborne Empire?",
            },
            {
              id: "how-to-unlock-jet-engine-in-airborne-empire",
              label: "How to Unlock Jet Engine in Airborne Empire",
            },
            {
              id: "is-jet-engine-worth-it-in-airborne-empire",
              label: "Is Jet Engine Worth It in Airborne Empire?",
            },
            {
              id: "when-to-switch-to-jet-engines",
              label: "When to Switch to Jet Engines",
            },
            {
              id: "best-airborne-empire-jet-engine-layout",
              label: "Best Airborne Empire Jet Engine Layout",
            },
            {
              id: "jet-engine-vs-fans-and-propellers",
              label: "Jet Engine vs Fans and Propellers",
            },
            {
              id: "how-many-jet-engines-do-you-need",
              label: "How Many Jet Engines Do You Need?",
            },
            {
              id: "how-to-use-jet-engines-in-kingsfell-and-the-final-fight",
              label: "How to Use Jet Engines in Kingsfell and the Final Fight",
            },
            {
              id: "common-airborne-empire-jet-engine-mistakes",
              label: "Common Airborne Empire Jet Engine Mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/airborne-empire/kingsfell-guide/",
              label: "Airborne Empire Kingsfell guide",
            },
            {
              href: "/airborne-empire/pirate-queen-guide/",
              label: "Airborne Empire Pirate Queen guide",
            },
            {
              href: "/airborne-empire/tilt-lift-balance-guide/",
              label: "Airborne Empire tilt, lift, and balance guide",
            },
            {
              href: "/airborne-empire/guide-hub/",
              label: "Airborne Empire guide hub",
            },
          ]}
        >
          <AirborneEmpireJetEngineGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}