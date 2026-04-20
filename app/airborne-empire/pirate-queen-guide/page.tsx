import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirborneEmpirePirateQueenGuideContent from "@/data/airborne-empire/pirate-queen-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/airborne-empire/pirate-queen-guide`;

export const metadata: Metadata = {
  title:
    "Airborne Empire Pirate Queen Guide: How to Beat the Final Boss",
  description:
    "Use this Airborne Empire Pirate Queen guide to learn the safest final boss strategy, the best city setup, how Jet Engines help with positioning, and how to clear the Queen’s defenses before the last push.",
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
          name: "Pirate Queen Guide",
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
        "Airborne Empire Pirate Queen Guide: How to Beat the Final Boss",
      description:
        "This Airborne Empire Pirate Queen guide explains how to prepare for the final boss, what city layout works best, how to use Jet Engines and side rotation during the fight, and how to clear the Queen’s defenses safely.",
      image: [
        `${siteUrl}/images/airborne-empire/airborne-empire-free-the-queen-objective.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-pirate-outpost-attack.webp`,
        `${siteUrl}/images/airborne-empire/airborne-empire-queen-rescue-lockade.webp`,
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
          name: "Pirate Queen",
        },
        {
          "@type": "Thing",
          name: "Final Boss",
        },
        {
          "@type": "Thing",
          name: "Jet Engine",
        },
        {
          "@type": "Thing",
          name: "Tesla Cannon",
        },
        {
          "@type": "Thing",
          name: "Final Battle",
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
          title="Airborne Empire Pirate Queen Guide: How to Beat the Final Boss"
          description="Use this Airborne Empire Pirate Queen guide to learn the safest final boss strategy, the best city setup, how Jet Engines help with positioning, and how to clear the Queen’s defenses before the last push."
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
              id: "who-is-the-pirate-queen-in-airborne-empire",
              label: "Who Is the Pirate Queen in Airborne Empire?",
            },
            {
              id: "how-to-prepare-for-the-pirate-queen-fight",
              label: "How to Prepare for the Pirate Queen Fight",
            },
            {
              id: "best-city-setup-for-the-pirate-queen",
              label: "Best City Setup for the Pirate Queen",
            },
            {
              id: "how-to-beat-the-pirate-queen-in-airborne-empire",
              label: "How to Beat the Pirate Queen in Airborne Empire",
            },
            {
              id: "phase-1-clear-the-screen",
              label: "Phase 1: Clear the Screen",
            },
            {
              id: "phase-2-break-the-outer-defenses",
              label: "Phase 2: Break the Outer Defenses",
            },
            {
              id: "phase-3-finish-the-core",
              label: "Phase 3: Finish the Core",
            },
            {
              id: "how-to-use-jet-engines-and-rotation",
              label: "How to Use Jet Engines and Rotation",
            },
            {
              id: "common-pirate-queen-mistakes",
              label: "Common Pirate Queen Mistakes",
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
              href: "/airborne-empire/jet-engine-guide/",
              label: "Airborne Empire Jet Engine guide",
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
          <AirborneEmpirePirateQueenGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}