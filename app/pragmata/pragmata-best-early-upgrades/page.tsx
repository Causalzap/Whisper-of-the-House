import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataBestEarlyUpgradesContent from "@/data/pragmata/pragmata-best-early-upgrades.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/pragmata/pragmata-best-early-upgrades";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/pragmata`;

export const metadata: Metadata = {
  title: "Pragmata Best Early Upgrades: What to Buy First",
  description:
    "The best early upgrades in Pragmata, including why your guns feel weak, what to buy first, and which hacking, thruster, and survival upgrades matter most.",
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
        name: "Pragmata Best Early Upgrades",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Pragmata Best Early Upgrades: What to Buy First",
    description:
      "The best early upgrades in Pragmata, including why your guns feel weak, what to buy first, and which hacking, thruster, and survival upgrades matter most.",
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
          title="Pragmata Best Early Upgrades"
          description="This guide explains the best early upgrades in Pragmata, why your guns feel weak at first, and what to buy first at the shelter to improve damage, movement, and survivability."
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
              id: "why-your-guns-feel-weak-in-pragmata",
              label: "Why your guns feel weak",
            },
            {
              id: "best-early-upgrades-to-buy-first",
              label: "Best early upgrades to buy first",
            },
            {
              id: "the-best-weapon-and-hacking-priorities-early",
              label: "Weapon vs hacking priorities",
            },
            {
              id: "best-early-mods",
              label: "Best early mods",
            },
            {
              id: "what-to-buy-first-at-the-shelter",
              label: "What to buy first at the shelter",
            },
            {
              id: "best-early-upgrades-by-playstyle",
              label: "Best early upgrades by playstyle",
            },
            {
              id: "what-not-to-prioritize-too-early",
              label: "What not to prioritize too early",
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
              href: "/pragmata/pragmata-unknown-signal-guide",
              label: "Pragmata Unknown Signal Guide",
            },
            {
              href: "/pragmata/pragmata-pure-lunum-farming",
              label: "Pragmata Pure Lunum Farming Guide",
            },
          ]}
        >
          <PragmataBestEarlyUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}