import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VampireCrawlersHubContent from "@/data/vampire-crawlers/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/vampire-crawlers`;

export const metadata: Metadata = {
  title: "Vampire Crawlers Guide Hub: Upgrades, Combos & Unlocks",
  description:
    "Start here for Vampire Crawlers guides on best early upgrades, combos, evolutions, beginner characters, all character unlocks, and secret characters.",
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
          name: "Vampire Crawlers",
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
      name: "Vampire Crawlers Guide Hub",
      headline:
        "Vampire Crawlers Guide Hub: Upgrades, Combos, Evolutions, Characters, and Secret Unlocks",
      description:
        "This is the main Vampire Crawlers guide hub. Start here for guides on early Power-Ups, combo sequencing, weapon evolutions, beginner characters, full roster unlocks, and secret characters.",
      image: [`${siteUrl}/images/vampire-crawlers/vampire-crawlers-cover.webp`],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Vampire Crawlers",
        },
        {
          "@type": "Thing",
          name: "Power-Ups",
        },
        {
          "@type": "Thing",
          name: "Combo System",
        },
        {
          "@type": "Thing",
          name: "Weapon Evolutions",
        },
        {
          "@type": "Thing",
          name: "Character Unlocks",
        },
        {
          "@type": "Thing",
          name: "Secret Characters",
        },
      ],
      hasPart: {
        "@type": "ItemList",
        "@id": `${pageUrl}#guide-list`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Vampire Crawlers Best Early Upgrades",
            url: `${pageUrl}/best-early-upgrades`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Vampire Crawlers Combo Guide",
            url: `${pageUrl}/combo-guide`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Vampire Crawlers Early Evolutions Guide",
            url: `${pageUrl}/early-evolutions-guide`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Vampire Crawlers Best Characters for Beginners",
            url: `${pageUrl}/best-characters-for-beginners`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Vampire Crawlers All Characters Unlock Guide",
            url: `${pageUrl}/all-characters-unlock-guide`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Vampire Crawlers Secret Characters How to Unlock",
            url: `${pageUrl}/secret-characters-how-to-unlock`,
          },
        ],
      },
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
          title="Vampire Crawlers Guide Hub: Upgrades, Combos, Evolutions, Characters, and Secret Unlocks"
          description="Start here for the main Vampire Crawlers guide cluster: best early upgrades, combo sequencing, early weapon evolutions, beginner characters, full roster unlocks, and secret characters."
          gameTitle="Vampire Crawlers"
          gameHref="/vampire-crawlers"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "vampire-crawlers-guide-map",
              label: "Guide map",
            },
            {
              id: "what-this-hub-covers",
              label: "What this hub covers",
            },
            {
              id: "start-here-by-player-goal",
              label: "Start by goal",
            },
            {
              id: "best-reading-order-for-new-players",
              label: "Reading order",
            },
            {
              id: "if-you-are-stuck",
              label: "If you are stuck",
            },
            {
              id: "how-the-current-guide-cluster-fits-together",
              label: "Cluster structure",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
              {
                href: "/vampire-crawlers/combo-guide",
                label: "Vampire Crawlers Combo Guide",
              },
              {
                href: "/vampire-crawlers/best-characters-for-beginners",
                label: "Best Characters for Beginners",
              },
              {
                href: "/vampire-crawlers/best-early-upgrades",
                label: "Best Early Upgrades in Vampire Crawlers",
              },
              {
                href: "/vampire-crawlers/all-characters-unlock-guide",
                label: "All Characters Unlock Guide",
              },
              {
                href: "/vampire-crawlers/early-evolutions",
                label: "Early Evolutions Guide",
              },
              {
                href: "/vampire-crawlers/secret-characters-how-to-unlock",
                label: "How to Unlock Secret Characters",
              },
          ]}
        >
          <VampireCrawlersHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
