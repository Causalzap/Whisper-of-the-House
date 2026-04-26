import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AirborneEmpireGuideHubContent from "@/data/airborne-empire/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/airborne-empire`;

export const metadata: Metadata = {
    title: "Airborne Empire Guide Hub: Kingsfell, Layouts & Bosses",
    description: "Your ultimate Airborne Empire 1.0 strategy hub. Find expert guides for city balance, Jet Engine upgrades, Kingsfell survival, and the Pirate Queen fight.",
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
          name: "Guide Hub",
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
        "Airborne Empire Guide Hub: Kingsfell, Pirate Queen, Jet Engine, and City Balance",
      description:
        "This Airborne Empire guide hub helps you find the right page for tilt, lift, and balance, Jet Engine upgrades, Kingsfell preparation, and the Pirate Queen final boss fight.",
      image: [
        `${siteUrl}/images/airborne-empire/airborne-empire-guide-hub-hero.webp`,
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
          name: "Pirate Queen",
        },
        {
          "@type": "Thing",
          name: "Jet Engine",
        },
        {
          "@type": "Thing",
          name: "Tilt",
        },
        {
          "@type": "Thing",
          name: "Lift",
        },
        {
          "@type": "Thing",
          name: "City Balance",
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
          title="Airborne Empire Guide Hub: Kingsfell, Pirate Queen, Jet Engine, and City Balance"
          description="Use this Airborne Empire guide hub to find the right strategy page for city balance, Jet Engine upgrades, Kingsfell preparation, and the Pirate Queen final boss fight."
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
              id: "what-this-airborne-empire-guide-hub-covers",
              label: "What This Airborne Empire Guide Hub Covers",
            },
            {
              id: "best-order-to-read-these-guides",
              label: "Best Order to Read These Guides",
            },
            {
              id: "airborne-empire-city-layout-and-balance-guides",
              label: "Airborne Empire City Layout and Balance Guides",
            },
            {
              id: "airborne-empire-late-game-propulsion-guides",
              label: "Airborne Empire Late-Game Propulsion Guides",
            },
            {
              id: "airborne-empire-kingsfell-and-final-region-guides",
              label: "Airborne Empire Kingsfell and Final Region Guides",
            },
            {
              id: "airborne-empire-final-boss-guide",
              label: "Airborne Empire Final Boss Guide",
            },
            {
              id: "most-useful-airborne-empire-guides-right-now",
              label: "Most Useful Airborne Empire Guides Right Now",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/airborne-empire/tilt-lift-balance-guide",
              label: "Airborne Empire tilt, lift, and balance guide",
            },
            {
              href: "/airborne-empire/jet-engine-guide",
              label: "Airborne Empire Jet Engine guide",
            },
            {
              href: "/airborne-empire/kingsfell-guide",
              label: "Airborne Empire Kingsfell guide",
            },
            {
              href: "/airborne-empire/pirate-queen-guide",
              label: "Airborne Empire Pirate Queen guide",
            },
          ]}
        >
          <AirborneEmpireGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}