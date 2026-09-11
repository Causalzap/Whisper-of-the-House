import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainStreetWalkthroughContent from "@/data/halloween-the-game/main-street-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/main-street-walkthrough`;

const metadataTitle =
  "Halloween: The Game Main Street Walkthrough & 6 Challenges";

const metadataDescription =
  "Complete Chapter 2: Main Street from the hardware store to Judith Myers' grave, with the full route and all 6 challenge conditions.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-main-street-challenges.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-main-street-mask-pickup.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-tanya-cash-register.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-slab-peeing.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-rachel-fence-kill.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-rachels-friends-house.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-main-street-hide-bodies.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-main-street-judith-gravestone.webp`,
];

const toc = [
  {
    id: "main-street-route",
    label: "Chapter 2 route & challenge order",
  },
  {
    id: "hardware-store",
    label: "Hardware store & Eric",
  },
  {
    id: "tanya-cash-register",
    label: "Tanya cash-register execution",
  },
  {
    id: "dead-end-job",
    label: "Dead-End Job — No alerts",
  },
  {
    id: "rachel-group",
    label: "Rachel's group split",
  },
  {
    id: "slab",
    label: "Slab peeing challenge",
  },
  {
    id: "rachel-environmental-kill",
    label: "Rachel environmental kill",
  },
  {
    id: "rachels-friends",
    label: "Rachel's three friends",
  },
  {
    id: "body-cleanup",
    label: "Hide Rachel's body",
  },
  {
    id: "judith-gravestone",
    label: "Judith Myers' grave & car",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "Chapter 4 Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
  },
  {
    href: "/halloween-the-game/progression-perks",
    label: "Progression, Perks & Prestige Guide",
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
    title: "Halloween: The Game Chapter 2 Main Street Walkthrough",
    description:
      "Follow the full Chapter 2 route from the hardware store through Rachel's group and Judith Myers' grave while preserving all six challenge conditions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Chapter 2 Main Street challenge list showing all six challenges",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Chapter 2 Main Street Walkthrough",
    description:
      "Follow Main Street from the hardware store to Judith Myers' grave and complete all six Chapter 2 challenges along the way.",
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
          name: "Halloween: The Game Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chapter 2 Main Street Walkthrough",
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
        "Halloween: The Game Chapter 2: Main Street Walkthrough and All 6 Challenges",
      description:
        "A complete Chapter 2 Main Street walkthrough for Halloween: The Game, covering the hardware store and mask, Eric's stockroom shelf execution, Tanya's cash-register kill, Dead-End Job, Rachel's group, Slab's peeing challenge, Rachel's environmental execution, all three of her friends, the required body cleanup, Judith Myers' grave, and the final return to the car.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-11",
      articleSection: "Halloween: The Game Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Halloween: The Game Chapter 2",
        },
        {
          "@type": "Thing",
          name: "Main Street",
        },
        {
          "@type": "Thing",
          name: "Main Street walkthrough",
        },
        {
          "@type": "Thing",
          name: "Chapter 2 challenges",
        },
        {
          "@type": "Thing",
          name: "Dead-End Job",
        },
        {
          "@type": "Thing",
          name: "Eric stockroom shelf challenge",
        },
        {
          "@type": "Thing",
          name: "Tanya cash register challenge",
        },
        {
          "@type": "Thing",
          name: "Slab peeing challenge",
        },
        {
          "@type": "Thing",
          name: "Rachel environmental execution",
        },
        {
          "@type": "Thing",
          name: "Rachel's three friends",
        },
        {
          "@type": "Thing",
          name: "Judith Myers' gravestone",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Halloween: The Game Chapter 2: Main Street Walkthrough"
          description="Follow the full Main Street route from the hardware store to Judith Myers' grave and the final car return, while preserving the exact states needed for all six Chapter 2 challenges."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 11, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <MainStreetWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}