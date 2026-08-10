import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkHowToGetShinyContent from "@/data/big-walk/how-to-get-shiny.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/how-to-get-shiny`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-shiny-blue-tunnel-entrance.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-green-pipe-turn.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-multicolor-bridge.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-red-zigzag-stairs.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-secret-location.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk How to Get Shiny: Big Makeover Guide",
  description:
    "Follow the Blue tunnel route through the green pipe, multicolor bridge, and red stairs to find Shiny and complete Big Makeover.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Get Shiny in Big Walk",
    description:
      "Use the Blue tunnel entrance, follow six visual checkpoints, find the hidden Shiny area, and complete Big Makeover.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/big-walk/big-walk-shiny-secret-location.webp`,
        alt: "Hidden Shiny location in the Big Walk underground tunnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Shiny in Big Walk",
    description:
      "Find the hidden underground Shiny location and finish the Big Makeover achievement.",
    images: [
      `${siteUrl}/images/big-walk/big-walk-shiny-secret-location.webp`,
    ],
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Get Shiny",
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
      headline: "How to Get Shiny in Big Walk: Big Makeover Guide",
      description:
        "A Big Walk Shiny route covering the Yellow progression prerequisite, Blue tunnel entrance, green pipe, mixed-color tunnels, multicolor bridge, red stairs, hidden Shiny area, and Big Makeover completion.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Shiny",
        },
        {
          "@type": "Thing",
          name: "Big Walk Big Makeover",
        },
        {
          "@type": "Thing",
          name: "Big Walk underground tunnels",
        },
        {
          "@type": "Thing",
          name: "Big Walk secret location",
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

const toc = [
  {
    id: "what-you-need-before-getting-shiny",
    label: "Shiny prerequisite",
  },
  {
    id: "best-entrance-for-shiny",
    label: "Use the Blue entrance",
  },
  {
    id: "mixed-color-tunnel-route",
    label: "Mixed-color tunnels",
  },
  {
    id: "green-tunnels-shiny-route",
    label: "Green tunnel route",
  },
  {
    id: "red-zigzag-stairs",
    label: "Red zigzag stairs",
  },
  {
    id: "where-to-find-shiny",
    label: "Find Shiny",
  },
  {
    id: "shiny-route-not-working",
    label: "Shiny route fixes",
  },
  {
    id: "big-walk-shiny-faq",
    label: "FAQ",
  },
  {
    id: "shiny-route-takeaway",
    label: "Final route",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
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
          title="How to Get Shiny in Big Walk"
          description="Start from the Blue tunnel entrance, follow the colored underground landmarks, reach the hidden Shiny area, and complete Big Makeover."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkHowToGetShinyContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}