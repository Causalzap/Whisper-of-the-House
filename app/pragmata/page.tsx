import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataHubContent from "@/data/pragmata/index.mdx";

const pageUrl = "https://www.whisperofthehouse.com/pragmata";
const siteUrl = "https://www.whisperofthehouse.com";

export const metadata: Metadata = {
  title:
    "Pragmata Guide Hub: Best Settings, Early Upgrades, Unknown Signal, and Pure Lunum",
  description:
    "Your Pragmata guide hub for the best PC settings, early upgrades, Unknown Signal postgame cleanup, and Pure Lunum locations and uses.",
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
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Pragmata Guide Hub: Best Settings, Early Upgrades, Unknown Signal, and Pure Lunum",
    description:
      "This Pragmata guide hub helps players find the right article fast, whether they need better PC settings, stronger early upgrades, postgame Unknown Signal help, or Pure Lunum upgrade advice.",
    inLanguage: "en",
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
    dateModified: "2026-04-18",
    mainEntity: {
      "@id": `${pageUrl}#itemlist`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "Pragmata guides",
    numberOfItems: 4,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Pragmata Best PC Settings",
        url: `${siteUrl}/pragmata/pragmata-best-pc-settings`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pragmata Best Early Upgrades",
        url: `${siteUrl}/pragmata/pragmata-best-early-upgrades`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pragmata Unknown Signal Guide",
        url: `${siteUrl}/pragmata/pragmata-unknown-signal-guide`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Pragmata Pure Lunum Guide",
        url: `${siteUrl}/pragmata/pragmata-pure-lunum-guide`,
      },
    ],
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
          title="Pragmata Guide Hub"
          description="This Pragmata guide hub helps you find the right article fast, whether you need the best PC settings, stronger early upgrades, postgame Unknown Signal help, or Pure Lunum upgrade advice."
          gameTitle="Pragmata"
          gameHref="/pragmata"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          hideCurrentTitleInBreadcrumb={true}
          updatedAt="April 18, 2026"
          toc={[
            {
              id: "what-this-pragmata-guide-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "best-pragmata-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "best-guides-for-new-players",
              label: "Best guides for new players",
            },
            {
              id: "best-guides-for-postgame-and-cleanup",
              label: "Best guides for postgame and cleanup",
            },
            {
              id: "why-these-are-the-most-useful-pragmata-topics-right-now",
              label: "Why these topics matter",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/pragmata/pragmata-best-pc-settings",
              label: "Pragmata Best PC Settings",
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
              href: "/pragmata/pragmata-pure-lunum-guide",
              label: "Pragmata Pure Lunum Guide",
            },
          ]}
        >
          <PragmataHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}