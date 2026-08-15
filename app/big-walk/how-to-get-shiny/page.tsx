import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkHowToGetShinyContent from "@/data/big-walk/how-to-get-shiny.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/how-to-get-shiny`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-shiny-secret-location.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-blue-tunnel-entrance.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-green-pipe-turn.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-multicolor-bridge.webp`,
  `${siteUrl}/images/big-walk/big-walk-shiny-red-zigzag-stairs.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk Shiny Location: Big Makeover Achievement Guide",
  description:
    "Find Shiny in Big Walk through the Blue tunnel entrance. Follow the green pipe, multicolor bridge, and red stairs to complete Big Makeover.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Shiny Location & Big Makeover Guide",
    description:
      "Find the hidden Shiny location through the Blue tunnel entrance, then use the new colors to complete the Big Makeover achievement.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Big Walk Shiny location hidden underground for the Big Makeover achievement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Shiny Location & Big Makeover Guide",
    description:
      "Find Shiny through the Blue tunnel entrance, follow the underground landmarks, and use the new colors to complete Big Makeover.",
    images: [imageUrls[0]],
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
          name: "Shiny Location & Big Makeover",
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
      headline:
        "Big Walk Shiny Location: How to Complete the Big Makeover Achievement",
      description:
        "A Big Walk Shiny location guide covering the Yellow Tower prerequisite, Blue tunnel entrance, green pipe route, mixed-color tunnels, multicolor bridge, red zigzag stairs, hidden underground Shiny area, and Big Makeover achievement completion.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-15",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Shiny location",
        },
        {
          "@type": "Thing",
          name: "Big Makeover achievement",
        },
        {
          "@type": "Thing",
          name: "Big Walk underground tunnels",
        },
        {
          "@type": "Thing",
          name: "Big Walk Blue tunnel entrance",
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
    label: "Shiny location",
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
          title="Where to Find Shiny and Complete Big Makeover"
          description="I enter from the Blue side, follow the underground landmarks to Shiny, and use the new colors before leaving to complete Big Makeover."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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