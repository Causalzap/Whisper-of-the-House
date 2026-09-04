
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheBabysittersContent from "@/data/halloween-the-game/the-babysitters-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/halloween-the-game`;
const pageUrl = `${hubUrl}/the-babysitters-walkthrough`;

const metadataTitle =
  "Halloween: The Game Babysitters Walkthrough & Challenges";

const metadataDescription =
  "Complete all 6 Babysitters challenges, including Annie's car kill, Bob and Lynda stalking, Bob's wall kill, Sheet disguise, telephone kill, and Laurie.";

const heroImage =
  `${siteUrl}/images/halloween-the-game/halloween-the-game-the-babysitters-challenges.webp`;

const imageUrls = [
  heroImage,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-the-babysitters-wallace-house.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-annie-car-kill.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-bob-lynda-stalk.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-michael-sheet-disguise.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-lynda-telephone-kill.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-babysitters-bedroom-setup.webp`,
  `${siteUrl}/images/halloween-the-game/halloween-the-game-babysitters-laurie-chase.webp`,
];

const toc = [
  {
    id: "babysitters-sequence",
    label: "The Babysitters challenge route",
  },
  {
    id: "annie",
    label: "Annie's car kill",
  },
  {
    id: "bob-lynda-stalk",
    label: "Stalk Bob and Lynda",
  },
  {
    id: "bloodthirsty",
    label: "Bloodthirsty execution",
  },
  {
    id: "bob-wall",
    label: "Bob's kitchen wall kill",
  },
  {
    id: "sheet",
    label: "Get the Sheet disguise",
  },
  {
    id: "lynda-telephone",
    label: "Lynda telephone kill",
  },
  {
    id: "stage-house",
    label: "Prepare the Wallace House",
  },
  {
    id: "laurie",
    label: "Laurie chase",
  },
  {
    id: "film-plot",
    label: "Match the film's plot",
  },
  {
    id: "replay",
    label: "What to fix on a replay",
  },
];

const relatedLinks = [
  {
    href: "/halloween-the-game/walkthrough",
    label: "Complete Story Walkthrough",
  },
  {
    href: "/halloween-the-game/main-street-walkthrough",
    label: "Main Street Walkthrough",
  },
  {
    href: "/halloween-the-game/endings",
    label: "All Endings: Railroad, Cornfield & Sewer",
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
    title:
      "Halloween: The Game The Babysitters Walkthrough — All 6 Challenges",
    description:
      "Follow the Wallace House sequence through Annie, Bob, Lynda, the Sheet disguise, the staged bedroom, and Laurie's final chase.",
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Halloween The Game The Babysitters challenge list showing all six Chapter 4 challenges",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Halloween: The Game Babysitters Walkthrough",
    description:
      "Complete Annie's car kill, Bob and Lynda stalking, Bob's wall challenge, the Sheet and telephone kill, and the Laurie sequence.",
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
          name: "The Babysitters Walkthrough",
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
        "Halloween: The Game The Babysitters Walkthrough and All 6 Chapter 4 Challenges",
      description:
        "A complete walkthrough for The Babysitters in Halloween: The Game, covering all six Chapter 4 challenges and the Wallace House event sequence. It explains when to wait for Annie's car kill, how to fully stalk Bob and Lynda while they are making out, when to use a spare resident for Bloodthirsty, how to preserve Bob for the kitchen wall execution, why Michael must keep the Sheet equipped for Lynda's telephone kill, how to prepare the upstairs house scene, and what changes when Laurie begins the final chase.",
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
          name: "The Babysitters",
        },
        {
          "@type": "Thing",
          name: "The Babysitters challenges",
        },
        {
          "@type": "Thing",
          name: "Wallace House",
        },
        {
          "@type": "Thing",
          name: "Annie Brackett",
        },
        {
          "@type": "Thing",
          name: "Bob Simms",
        },
        {
          "@type": "Thing",
          name: "Lynda van der Klok",
        },
        {
          "@type": "Thing",
          name: "Laurie Strode",
        },
        {
          "@type": "Thing",
          name: "Sheet disguise",
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
          title="Let the Wallace House Scenes Reach Their Challenge Windows"
          description="Annie, Bob, and Lynda all become easier when you stop rushing the scene. Follow the Chapter 4 timing from Annie's car through the Sheet, telephone kill, staged house, and Laurie chase."
          gameTitle="Halloween: The Game"
          gameHref="/halloween-the-game"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheBabysittersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}