import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import MainStreetWalkthroughContent from "@/data/halloween-the-game/main-street-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/main-street-walkthrough`;

const metadataTitle =
  "Halloween: The Game Main Street Walkthrough & Challenges";

const metadataDescription =
  "Complete Main Street and all 6 Chapter 2 challenges: Eric's shelf kill, Tanya's register, Slab's timing, Rachel's friends, body cleanup, and Judith's grave.";

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
    label: "Main Street challenge route",
  },
  {
    id: "hardware-store",
    label: "Hardware store and Eric",
  },
  {
    id: "tanya-cash-register",
    label: "Tanya cash-register kill",
  },
  {
    id: "no-alert",
    label: "Dead-End Job no-alert run",
  },
  {
    id: "slab",
    label: "Slab peeing challenge",
  },
  {
    id: "rachel-group",
    label: "Rachel environmental kill",
  },
  {
    id: "rachels-friends",
    label: "Rachel's three friends",
  },
  {
    id: "body-cleanup",
    label: "Required body cleanup",
  },
  {
    id: "judith-gravestone",
    label: "Judith Myers' gravestone",
  },
  {
    id: "replay-priorities",
    label: "When to reset or finish",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Walkthrough",
  },
  {
    href: "/halloween-the-game/the-babysitters-walkthrough",
    label: "The Babysitters Walkthrough",
  },
  {
    href: "/halloween-the-game",
    label: "Halloween: The Game Guide",
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
    title: "Halloween: The Game Main Street Walkthrough — All 6 Challenges",
    description:
      "Follow the Chapter 2 route through the hardware store, Tanya, Slab, Rachel and her friends, body cleanup, and Judith Myers' gravestone.",
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
    title: "Halloween: The Game Main Street Walkthrough",
    description:
      "Complete all six Main Street challenges without losing Eric, Slab, Rachel, or the chapter's late cleanup states.",
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
          name: "Main Street Walkthrough",
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
        "Halloween: The Game Main Street Walkthrough and All 6 Chapter 2 Challenges",
      description:
        "A complete Main Street walkthrough for Halloween: The Game covering all six Chapter 2 challenges. It explains the hardware-store opening and Shape Jump lighting restriction, Eric's required stockroom shelf execution, Tanya's cash-register kill, the Dead-End Job no-alert condition, Slab's peeing timing window, Rachel's environmental execution, how to track all three of Rachel's friends, the required Rachel body-hiding objective, optional Tanya cleanup, and the final route from Judith Myers' gravestone back to the car.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-04",
      dateModified: "2026-09-04",
      articleSection: "Halloween: The Game Walkthroughs",
      about: [
        {
          "@type": "VideoGame",
          name: "Halloween: The Game",
          url: hubUrl,
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
          name: "Stockroom Stalker",
        },
        {
          "@type": "Thing",
          name: "Broken Record",
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
          title="Clear Main Street Without Losing the Challenge Setups"
          description="Eric, Tanya, Slab, Rachel, and her friends all depend on different states. Keep the right targets alive long enough, then finish the body cleanup and Judith Myers cemetery route."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
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