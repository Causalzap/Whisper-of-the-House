import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CollectiblesHubContent from "@/data/mouse-pi-for-hire/collectibles-hub.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/mouse-pi-for-hire/collectibles-hub`;

export const metadata: Metadata = {
  title: "MOUSE: P.I. For Hire Collectibles & 100% Completion Hub",
  description:
    "Use this collectibles hub to plan a safe 100% run in MOUSE: P.I. For Hire, including missables rules, buy-back logic, Side Job reward risks, and the main collectible guides.",
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
          name: "MOUSE: P.I. For Hire",
          item: `${siteUrl}/mouse-pi-for-hire`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Collectibles & 100% Completion Hub",
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
      headline: "MOUSE: P.I. For Hire Collectibles & 100% Completion Hub",
      description:
        "This hub helps players plan a safe 100% collectible route in MOUSE: P.I. For Hire by linking the missables rules, buy-back logic, Side Job reward risks, and the major collectible guides in the right order.",
      inLanguage: "en",
      dateModified: "2026-04-17",
      about: [
        {
          "@type": "VideoGame",
          name: "MOUSE: P.I. For Hire",
        },
        {
          "@type": "Thing",
          name: "Collectibles",
        },
        {
          "@type": "Thing",
          name: "100% Completion",
        },
        {
          "@type": "Thing",
          name: "Missables",
        },
        {
          "@type": "Thing",
          name: "Buy-Back System",
        },
        {
          "@type": "Thing",
          name: "Side Job Rewards",
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
          title="MOUSE: P.I. For Hire Collectibles & 100% Completion Hub"
          description="Need the safest way to plan collectibles in MOUSE: P.I. For Hire? This hub points you to the right guide in the right order, starting with missables rules and buy-back logic before moving into the specific collectible lines."
          gameTitle="MOUSE: P.I. For Hire"
          gameHref="/mouse-pi-for-hire"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 17, 2026"
          toc={[
            {
              id: "how-to-use-this-collectibles-hub",
              label: "How to use this Collectibles Hub",
            },
            {
              id: "start-here-rules-pages",
              label: "Start here: the rules pages",
            },
            {
              id: "collectible-guides-in-this-cluster",
              label: "Collectible guides in this cluster",
            },
            {
              id: "what-to-read-first-based-on-your-goal",
              label: "What to read first based on your goal",
            },
            {
              id: "best-practical-order-for-a-100-percent-run",
              label: "Best practical order for a 100% run",
            },
            {
              id: "collectibles-at-a-glance",
              label: "Collectibles at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/mouse-pi-for-hire/missables-guide",
              label: "Missables Guide",
            },
            {
              href: "/mouse-pi-for-hire/buy-back-guide",
              label: "Buy-Back Guide",
            },
            {
              href: "/mouse-pi-for-hire/missable-side-job-rewards",
              label: "Missable Side Job Rewards",
            },
            {
              href: "/mouse-pi-for-hire/baseball-card-locations",
              label: "Baseball Card Locations Guide",
            },
            {
              href: "/mouse-pi-for-hire/mouseberg-herald-comic-locations",
              label: "Mouseberg Herald & Comic Locations Guide",
            },
            {
              href: "/mouse-pi-for-hire/weapon-schematics-secret-figurines-guide",
              label: "Weapon Schematics & Secret Figurines Guide",
            },
          ]}
        >
          <CollectiblesHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}