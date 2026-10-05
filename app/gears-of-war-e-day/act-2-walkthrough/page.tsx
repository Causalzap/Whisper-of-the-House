import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GearsEDayAct2Content from "@/data/gears-of-war-e-day/act-2-walkthrough.mdx";


const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/gears-of-war-e-day`;
const pageUrl = `${hubUrl}/act-2-walkthrough`;

const metadataTitle =
  "Gears of War E-Day Act 2 Walkthrough: Legacy Bridge & Airfield";

const metadataDescription =
  "Complete Gears of War E-Day Act 2 through Legacy Bridge, Hold the Line, Charlie Squad, the Raven mission, and the collapsing airfield.";

const articleDescription =
  "Follow Gears of War: E-Day Act 2 from Legacy Bridge through Bravo Squad's downtown assignments, Charlie Squad's last signal, the Raven flight, and the airfield retreat.";

const heroImage =
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-legacy-bridge-skytrain-route.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-first-weapon-modification.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-flyboys-raven-guns.webp`,
  `${siteUrl}/images/gears-of-war-e-day/gears-e-day-overrun-runway-collapse.webp`,
];

const toc = [
  {
    id: "chapter-1-bravo-squad",
    label: "Bravo Squad",
  },
  {
    id: "legacy-bridge-first-control-room",
    label: "Jammed Bridge Controls",
  },
  {
    id: "legacy-bridge-eastern-control-room",
    label: "Eastern Controls",
  },
  {
    id: "chapter-2-hold-the-line",
    label: "Hold the Line",
  },
  {
    id: "quartermaster-weapon-modification",
    label: "Quartermaster",
  },
  {
    id: "octus-way-station",
    label: "Octus Way Station",
  },
  {
    id: "all-fathers-plaza",
    label: "All Father's Plaza",
  },
  {
    id: "kalona-hotel",
    label: "Kalona Hotel",
  },
  {
    id: "chapter-3-no-gear-left-behind",
    label: "No Gear Left Behind",
  },
  {
    id: "subway-route",
    label: "Subway Route",
  },
  {
    id: "chapter-4-flyboys",
    label: "Flyboys",
  },
  {
    id: "raven-guns",
    label: "Raven Defense",
  },
  {
    id: "chapter-5-overrun",
    label: "Overrun",
  },
  {
    id: "leave-tarmac",
    label: "Leave the Runway",
  },
  {
    id: "west-control-tower",
    label: "West Control Tower",
  },
  {
    id: "before-act-3",
    label: "After the Airfield",
  },
];

const relatedLinks = [
  {
    href: "/gears-of-war-e-day/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/act-1-walkthrough",
    label: "Act 1 Walkthrough",
  },
  {
    href: "/gears-of-war-e-day/weapon-mods",
    label: "Weapon Mods & Locations",
  },
  {
    href: "/gears-of-war-e-day/act-3-walkthrough",
    label: "Act 3 Walkthrough",
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
        alt: "Gears of War E-Day Act 2 Legacy Bridge Skytrain route toward the eastern controls",
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


export default function GearsEDayAct2WalkthroughPage() {
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
            name: "Act 2 Walkthrough",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Gears of War: E-Day Act 2 Walkthrough — Legacy Bridge & Airfield",
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
          title="Gears of War: E-Day Act 2 Walkthrough — Legacy Bridge & Airfield"
          description={articleDescription}
          gameTitle="Gears of War: E-Day"
          gameHref="/gears-of-war-e-day"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GearsEDayAct2Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}