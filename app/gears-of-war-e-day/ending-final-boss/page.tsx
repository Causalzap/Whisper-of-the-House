import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayEndingContent from "@/data/gears-of-war-e-day/ending-final-boss.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/ending-final-boss`;

const metadataTitle =
  "Gears of War E-Day Vraahk Final Boss & Ending Guide";

const metadataDescription =
  "Beat Vraahk, cross the failed east bridge, use the Skytrain, reach the detonator, and understand the Gears of War: E-Day ending.";

const articleDescription =
  "Beat Vraahk in the final Gears of War: E-Day operation, including the failed east bridge, Skytrain route, detonator fight, Port Ferrell, and ending.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-final-bridge-grenade-fight.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-marcus-dom-final-promise.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-final-detonator.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-final-boss-down-detonator.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-ending-marcus-dom.webp`,
];

const toc = [
  {
    id: "bridge-controls-fail",
    label: "East Bridge Controls",
  },
  {
    id: "first-vraahk-fight",
    label: "First Vraahk Fight",
  },
  {
    id: "incinerator",
    label: "Incinerator vs Vraahk",
  },
  {
    id: "dom-marcus",
    label: "Marcus & Dom",
  },
  {
    id: "reach-detonator",
    label: "Reach the Detonator",
  },
  {
    id: "use-skytrain",
    label: "Skytrain Route",
  },
  {
    id: "final-vraahk-fight",
    label: "Final Vraahk Fight",
  },
  {
    id: "hit-detonator",
    label: "Activate the Detonator",
  },
  {
    id: "ending",
    label: "Ending & Epilogue",
  },
  {
    id: "port-ferrell",
    label: "Port Ferrell",
  },
  {
    id: "dom-home",
    label: "Why Dom Goes Home",
  },
  {
    id: "ending-conversation",
    label: "Final Conversation",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/act-5-walkthrough",
    label: "Act 5 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/bosses",
    label: "Boss Guide",
  },
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
];


export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Vraahk the Impaler during the final bridge fight in Gears of War E-Day",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};


export default function GearsEDayEndingFinalBossPage() {
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
            name: "Gears of War: E-Day",
            item: hubUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Vraahk Final Boss & Ending",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Vraahk Final Boss & Ending Guide",
        description: articleDescription,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        author: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        datePublished: "2026-10-01",
        dateModified: "2026-10-05",
        inLanguage: "en-US",
        image: imageUrls,
        about: {
          "@type": "VideoGame",
          name: "Gears of War: E-Day",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Gears of War: E-Day Vraahk Final Boss & Ending Guide"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayEndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}