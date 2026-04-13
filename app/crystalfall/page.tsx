import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CrystalfallGuideHubContent from "@/data/crystalfall/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/crystalfall`;

export const metadata: Metadata = {
  title: "Crystalfall Guide Hub",
  description:
    "The main Crystalfall guide hub for beginners and early Early Access players, including the best beginner guide, Fireball build guide, crafting guide, and inventory guide.",
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
          name: "Crystalfall",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      headline: "Crystalfall Guide Hub",
      description:
        "A practical Crystalfall guide hub covering the beginner guide, Fireball build guide, crafting guide, and inventory guide for Early Access players.",
      inLanguage: "en",
      dateModified: "2026-04-13",
      about: [
        {
          "@type": "VideoGame",
          name: "Crystalfall",
        },
        {
          "@type": "Thing",
          name: "Beginner Guide",
        },
        {
          "@type": "Thing",
          name: "Fireball Build",
        },
        {
          "@type": "Thing",
          name: "Crafting",
        },
        {
          "@type": "Thing",
          name: "Inventory",
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
          title="Crystalfall Guide Hub"
          description="Start here for the best Crystalfall beginner guide, Fireball build guide, crafting guide, and inventory guide for Early Access players."
          gameTitle="Crystalfall"
          gameHref="/crystalfall"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 13, 2026"
          toc={[
            {
              id: "what-this-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "start-here",
              label: "Start here",
            },
            {
              id: "core-systems",
              label: "Core systems",
            },
            {
              id: "which-guide-should-you-read-first",
              label: "Which guide should you read first",
            },
            {
              id: "coming-next",
              label: "Coming next",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/crystalfall/beginner-guide/",
              label: "Crystalfall Beginner Guide",
            },
            {
              href: "/crystalfall/fireball-build-guide/",
              label: "Best Fireball Build in Crystalfall for Beginners",
            },
            {
              href: "/crystalfall/crafting-sockets-gem-fusion-guide/",
              label: "Crystalfall Crafting, Sockets, and Gem Fusion Guide",
            },
            {
              href: "/crystalfall/inventory-stash-guide/",
              label: "Crystalfall Inventory and Stash Guide",
            },
          ]}
        >
          <CrystalfallGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}