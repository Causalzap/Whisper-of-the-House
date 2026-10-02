import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAct1Content from "@/data/gears-of-war-e-day/act-1-walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/act-1-walkthrough`;

const metadataTitle =
  "Gears of War E-Day Act 1 Walkthrough: Police HQ & City Hall";

const metadataDescription =
  "Complete Gears of War E-Day Act 1 with Police HQ, the armory, recruitment center, Pay N Save, Emergence Holes, and the City Hall defense.";

const articleDescription =
  "Complete Gears of War: E-Day Act 1 from Police HQ and the armory through the recruitment center, Pay N Save rescue, Mayor Shaw escort, Emergence Holes, and City Hall defense.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-police-hq-armory.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-recruitment-center-truck-route.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-emergence-hole-grenade.webp`,
];

const toc = [
  {
    id: "chapter-1-emergence",
    label: "Emergence",
  },
  {
    id: "police-hq-entrance",
    label: "Police HQ Entrance",
  },
  {
    id: "chapter-2-survival-of-the-fittest",
    label: "Survival of the Fittest",
  },
  {
    id: "make-police-hq-safe",
    label: "Police HQ Rally Point",
  },
  {
    id: "reach-recruitment-center",
    label: "Recruitment Center",
  },
  {
    id: "chapter-3-a-gear-in-need",
    label: "A Gear in Need",
  },
  {
    id: "clear-pay-n-save",
    label: "Pay N Save",
  },
  {
    id: "meet-tai",
    label: "Tai & Mayor Shaw",
  },
  {
    id: "chapter-4-back-in-the-fold",
    label: "Back in the Fold",
  },
  {
    id: "seal-emergence-holes",
    label: "Emergence Holes",
  },
  {
    id: "reach-city-hall",
    label: "Reach City Hall",
  },
  {
    id: "grenade-launcher",
    label: "Grenade Launcher",
  },
  {
    id: "defend-city-hall",
    label: "City Hall Defense",
  },
  {
    id: "before-act-2",
    label: "After City Hall",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/achievements",
    label: "Achievements",
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
        alt: "Gears of War E-Day Act 1 Police HQ armory with Lancer weapons",
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


export default function GearsEDayAct1WalkthroughPage() {
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
            name: "Act 1 Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Act 1 Walkthrough — Police HQ & City Hall",
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
        dateModified: "2026-10-02",
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
          title="Gears of War: E-Day Act 1 Walkthrough — Police HQ & City Hall"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAct1Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}