import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkYellowTowerTunnelContent from "@/data/big-walk/yellow-tower-tunnel.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/yellow-tower-tunnel`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-green-chairlift-to-yellow.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-tower-beach-route.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-mirrored-button-wall.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-hidden-piece-under-platform.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-seven-light-signal.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-sound-matching-speakers.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-key-cutter-arrow.png`,
  `${siteUrl}/images/big-walk/big-walk-yellow-tunnel-door-open.png`,
];

export const metadata: Metadata = {
  title: "Big Walk Yellow Tower Guide: 5 Heads, Key & Tunnel",
  description:
    "Complete five Yellow Tower Heads, solve the button, signal and sound puzzles, shape the key through five cutters, and open the Tunnel in Big Walk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Yellow Tower and Tunnel Guide",
    description:
      "Reach Yellow from the Green Tram, collect five Heads, finish all five key cutters, and open the underground Tunnel toward Blue.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[7],
        width: 1280,
        height: 720,
        alt: "Big Walk Yellow Tunnel door open after the completed Yellow key is inserted",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Yellow Tower and Tunnel Guide",
    description:
      "Collect five Yellow Heads, solve the key-cutter route, and open the underground Tunnel.",
    images: [imageUrls[7]],
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
          name: "Yellow Tower and Tunnel Guide",
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
        "Big Walk Yellow Tower and Tunnel Guide: Five Heads, Yellow Key Cutters, Beach Puzzles, and Tunnel Route",
      description:
        "This Big Walk Yellow Tower walkthrough explains how to travel from the Green-side Tram to Yellow, use the tower as a Head deposit point, solve the separated button wall, hidden-piece, seven-position signal, and five-sound puzzles, return five Heads, protect the Yellow key through five cutters, open the Tunnel, and continue toward the Blue Tower route.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Yellow Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Yellow Tunnel",
        },
        {
          "@type": "Thing",
          name: "Big Walk Yellow key",
        },
        {
          "@type": "Thing",
          name: "Big Walk five Heads",
        },
        {
          "@type": "Thing",
          name: "Big Walk key cutters",
        },
        {
          "@type": "Thing",
          name: "Big Walk button puzzle",
        },
        {
          "@type": "Thing",
          name: "Big Walk sound puzzle",
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
    id: "reach-yellow-tower",
    label: "Reach the Yellow Tower",
  },
  {
    id: "set-up-yellow-tower",
    label: "Set up at Yellow Tower",
  },
  {
    id: "return-yellow-heads",
    label: "Return the first Heads",
  },
  {
    id: "choose-yellow-puzzles",
    label: "Choose five Head puzzles",
  },
  {
    id: "yellow-button-wall",
    label: "Separated button wall",
  },
  {
    id: "yellow-hidden-piece",
    label: "Hidden-piece puzzle",
  },
  {
    id: "yellow-seven-light-signal",
    label: "Seven-position signal",
  },
  {
    id: "yellow-sound-puzzle",
    label: "Five-sound puzzle",
  },
  {
    id: "finish-yellow-heads",
    label: "Finish five Yellow Heads",
  },
  {
    id: "yellow-key-cutters",
    label: "Follow all five cutters",
  },
  {
    id: "open-yellow-tunnel",
    label: "Open the Yellow Tunnel",
  },
  {
    id: "use-yellow-tunnel",
    label: "Use the Tunnel toward Blue",
  },
  {
    id: "yellow-stuck",
    label: "Yellow route fixes",
  },
  {
    id: "yellow-faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Green Key Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/puzzles",
    label: "Big Walk Puzzle Solutions",
  },
  {
    href: "/big-walk/achievements",
    label: "Big Walk Achievements Checklist",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and True Ending Guide",
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
          title="Big Walk Yellow Tower and Tunnel Guide"
          description="Travel from the Green Tram to Yellow Tower, collect five Heads, solve the beach puzzles, finish all five key cutters, and open the underground Tunnel."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 5, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkYellowTowerTunnelContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}