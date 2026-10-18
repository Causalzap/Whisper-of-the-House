
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import VeilwaterBasinHollowHallsContent from "@/data/enshrouded/veilwater-basin-hollow-halls.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/enshrouded`;
const pageUrl = `${hubUrl}/veilwater-basin-hollow-halls`;

const metadataTitle =
  "Enshrouded Veilwater Basin Hollow Halls Walkthrough";

const metadataDescription =
  "Beat Veilwater Basin Hollow Halls in Enshrouded 1.0. Solve underwater puzzles, activate the waterwheel and floor switches, and defeat Hollow Wispwyvern.";

const articleTitle =
  "Enshrouded Veilwater Basin Hollow Halls Walkthrough";

const articleDescription =
  "Enter the Veilwater Basin Hollow Halls with the Bone Key, solve flooded-room puzzles, use the Underwater Grappling Hook, restore the waterwheel, and defeat Hollow Wispwyvern.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-veilwater-hollow-halls-wispwyvern.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-veilwater-hollow-halls-first-drain-switch.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-underwater-grappling-hook.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-mining-sieve.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-veilwater-hollow-halls-two-floor-switches.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-veilwater-hollow-halls-laser-lift.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-veilwater-hollow-halls-final-sarcophagi.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "entrance",
    label: "Entrance & Bone Key",
  },
  {
    id: "equipment",
    label: "Required Equipment",
  },
  {
    id: "first-drain",
    label: "First Water-Level Puzzles",
  },
  {
    id: "underwater-grappling-hook",
    label: "Underwater Grappling Hook",
  },
  {
    id: "toxic-sludge",
    label: "Survive Toxic Sludge",
  },
  {
    id: "waterwheel",
    label: "Start the Waterwheel",
  },
  {
    id: "floor-switches",
    label: "Floor Switches & Laser Lift",
  },
  {
    id: "hollow-wispwyvern",
    label: "Hollow Wispwyvern Boss",
  },
  {
    id: "final-rewards",
    label: "Final Rewards & Sarcophagi",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded",
    label: "Enshrouded 1.0 Walkthrough & Progression",
  },
  {
    href: "/enshrouded/albaneve-summits-hollow-halls",
    label: "Albaneve Summits Hollow Halls Walkthrough",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 720,
        height: 363,
        alt: "Hollow Wispwyvern boss with its health bar in Enshrouded Veilwater Basin Hollow Halls",
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
          name: "Enshrouded",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Veilwater Basin Hollow Halls",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Veilwater Basin Hollow Halls",
        },
        {
          "@type": "Thing",
          name: "Veilwater Basin Bone Key",
        },
        {
          "@type": "Thing",
          name: "Underwater Grappling Hook",
        },
        {
          "@type": "Thing",
          name: "Mining Sieve",
        },
        {
          "@type": "Thing",
          name: "Veilwater Hollow Halls Waterwheel Puzzle",
        },
        {
          "@type": "Thing",
          name: "Hollow Wispwyvern",
        },
        {
          "@type": "Thing",
          name: "Ectoplasm Aggregate",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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
    },
  ],
};

export default function VeilwaterBasinHollowHallsPage() {
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <VeilwaterBasinHollowHallsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
