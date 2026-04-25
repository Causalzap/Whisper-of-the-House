import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HoloVillageGuideHubContent from "@/data/holovillage-our-cozy-days/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = gameUrl;

export const metadata: Metadata = {
  title:
    "holoVillage: Our Cozy Days Guide Hub – Beginner Tips, Fishing & Villagers",
  description:
    "A holoVillage: Our Cozy Days guide hub for early-game progression, including beginner tips, fishing, inviting villagers, shop and money systems, and early combat.",
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
          name: "holoVillage: Our Cozy Days",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      url: pageUrl,
      name: "holoVillage: Our Cozy Days Guide Hub",
      headline:
        "holoVillage: Our Cozy Days Guide Hub – Beginner Tips, Fishing, Villagers, Shop, and Combat",
      description:
        "This holoVillage: Our Cozy Days guide hub collects practical early-game guides for what to do first, fishing spots and bait, inviting villagers, shop and money systems, and early combat progression.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/guide-hub.webp`,
      ],
      inLanguage: "en",
      about: [
        {
          "@type": "VideoGame",
          name: "holoVillage: Our Cozy Days",
        },
        {
          "@type": "Thing",
          name: "Guide Hub",
        },
        {
          "@type": "Thing",
          name: "Beginner Guide",
        },
        {
          "@type": "Thing",
          name: "Fishing",
        },
        {
          "@type": "Thing",
          name: "Villagers",
        },
        {
          "@type": "Thing",
          name: "Shop and Money",
        },
        {
          "@type": "Thing",
          name: "Early Combat",
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
      hasPart: [
        {
          "@type": "Article",
          name: "holoVillage Beginner Guide",
          url: `${gameUrl}/beginner-guide`,
        },
        {
          "@type": "Article",
          name: "holoVillage Fishing Guide",
          url: `${gameUrl}/fishing-guide`,
        },
        {
          "@type": "Article",
          name: "How to Invite Villagers in holoVillage",
          url: `${gameUrl}/how-to-invite-villagers`,
        },
        {
          "@type": "Article",
          name: "holoVillage Shop and Money Guide",
          url: `${gameUrl}/shop-money-guide`,
        },
        {
          "@type": "Article",
          name: "holoVillage Early Combat Guide",
          url: `${gameUrl}/early-combat-guide`,
        },
      ],
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
          title="holoVillage: Our Cozy Days Guide Hub – Beginner Tips, Fishing, Villagers, Shop, and Combat"
          description="Use this holoVillage: Our Cozy Days guide hub to find practical early-game guides for what to do first, fishing spots and bait, inviting villagers, shop and money systems, and early combat progression."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "early-game-progression-route",
              label: "Early-game route",
            },
            {
              id: "beginner-guide",
              label: "Beginner Guide",
            },
            {
              id: "fishing-guide",
              label: "Fishing Guide",
            },
            {
              id: "how-to-invite-villagers",
              label: "How to Invite Villagers",
            },
            {
              id: "shop-and-money-guide",
              label: "Shop and Money Guide",
            },
            {
              id: "early-combat-guide",
              label: "Early Combat Guide",
            },
            {
              id: "recommended-reading-order",
              label: "Reading order",
            },
            {
              id: "what-this-hub-does-not-cover",
              label: "What this hub does not cover",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/holovillage-our-cozy-days/beginner-guide",
              label: "holoVillage Beginner Guide",
            },
            {
              href: "/holovillage-our-cozy-days/fishing-guide",
              label: "holoVillage Fishing Guide",
            },
            {
              href: "/holovillage-our-cozy-days/how-to-invite-villagers",
              label: "How to Invite Villagers in holoVillage",
            },
            {
              href: "/holovillage-our-cozy-days/shop-money-guide",
              label: "holoVillage Shop and Money Guide",
            },
            {
              href: "/holovillage-our-cozy-days/early-combat-guide",
              label: "holoVillage Early Combat Guide",
            },
          ]}
        >
          <HoloVillageGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
