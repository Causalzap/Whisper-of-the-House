import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainStreetWalkthroughContent from "@/data/halloween-the-game/main-street-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/main-street-walkthrough`;

const metadataTitle =
  "Halloween: The Game Chapter 2 Challenges – Main Street Guide";

const metadataDescription =
  "Complete all 6 Main Street challenges in Chapter 2, including Eric, Tanya, Slab, Rachel's group, Dead-End Job, body cleanup, and Judith's grave.";

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
    label: "Best route for all 6 challenges",
  },
  {
    id: "hardware-store",
    label: "Hardware store and Eric",
  },
  {
    id: "tanya-cash-register",
    label: "Tanya cash-register challenge",
  },
  {
    id: "dead-end-job",
    label: "Dead-End Job no-alert challenge",
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
    label: "Rachel body cleanup",
  },
  {
    id: "judith-gravestone",
    label: "Judith Myers' gravestone",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Mode Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "Chapter 4 Babysitters Challenges",
  },
  {
    href: "/halloween-the-game/prologue-challenges",
    label: "All 6 Prologue Challenges",
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
    title: "Halloween: The Game Chapter 2 Main Street Challenges",
    description:
      "Clear all six Main Street challenges while preserving Eric, Slab, Rachel's group, and the no-alert condition through the Chapter 2 cemetery finish.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game Main Street challenge list showing all six Chapter 2 challenges",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Chapter 2 Challenges",
    description:
      "Protect the challenge states that can disappear, then finish Main Street through Rachel's cleanup, Judith Myers' grave, and the return to the car.",
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
          name: "Chapter 2 Main Street Challenges",
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
        "Halloween: The Game Chapter 2 Challenges — Main Street Guide",
      description:
        "A complete Chapter 2 challenge guide for Main Street in Halloween: The Game. It covers all six challenge conditions, including preserving Eric for the hardware-store stockroom shelf execution, positioning Tanya at the cash register, keeping the Dead-End Job no-alert attempt alive, waiting for Slab's peeing state before the grab, reading Rachel's group before using her environmental execution, tracking all three of Rachel's friends, completing the required Rachel body-hiding objective, and finishing the chapter by taking Judith Myers' tombstone back to the car.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-05",
      articleSection: "Halloween: The Game Challenges",
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
          name: "Main Street challenges",
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
          title="Halloween: The Game Chapter 2 Challenges – Main Street"
          description="Clear all six challenges by protecting the states that disappear first: keep Eric for the stockroom shelf, let Slab reach his animation, track Rachel's group before it scatters, and finish the required cleanup before heading to Judith's grave."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 5, 2026"
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