import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CharactersCompanionUnlocksContent from "@/data/tears-of-metal/characters-companion-unlocks.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/characters-companion-unlocks`;

const metadataTitle =
  "Tears of Metal Characters: Brienne, Ruadh & Companions";

const metadataDescription =
  "Unlock Brienne through The Fallen Star, unlock Ruadh after the Banshee, compare all three Heroes, and learn Companion slots and event rules.";

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-ruadh-village-buildings.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-fallen-star-unlock.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-direct-hit-passive.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-ruadh-life-steal-special.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-brienne-weapon-screen.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-companion-slots.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-caolan-wayward-companion-unlock.webp`,
];

const toc = [
  {
    id: "playable-heroes",
    label: "Playable Heroes",
  },
  {
    id: "wallace",
    label: "William Wallace",
  },
  {
    id: "unlock-brienne",
    label: "Unlock Brienne",
  },
  {
    id: "brienne-playstyle",
    label: "How Brienne plays",
  },
  {
    id: "unlock-ruadh",
    label: "Unlock Ruadh",
  },
  {
    id: "ruadh-playstyle",
    label: "How Ruadh plays",
  },
  {
    id: "choose-a-hero",
    label: "Choose a Hero",
  },
  {
    id: "hero-weapons",
    label: "Hero weapons",
  },
  {
    id: "companion-slots",
    label: "Companion slots",
  },
  {
    id: "companion-unlocks",
    label: "Companion events",
  },
  {
    id: "stuck",
    label: "Unlock fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tears-of-metal",
    label: "Tears of Metal Guide Hub",
  },
  {
    href: "/tears-of-metal/beginner-guide",
    label: "Beginner Guide and Act 1 Route",
  },
  {
    href: "/tears-of-metal/best-builds",
    label: "Wallace and Brienne Build Guide",
  },
  {
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades and Upgrade Order",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles and Iseult Boss Guide",
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
        url: imageUrls[2],
        alt: "Tears of Metal Brienne Ironleg Hero description and Direct Hit passive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question: "Are Hero weapon unlocks the same as Hero unlocks?",
    answer:
      "No. Unlocking Brienne or Ruadh makes the Hero available, but their additional weapons, equipment, and skills remain separate progression.",
  },
  {
    question: "Can I bring three Companions?",
    answer:
      "The tested War Preparations screen shows three available Companion slot positions with two currently filled. The number available depends on the permanent progression unlocked in that save.",
  },
  {
    question: "Should I replace Wallace immediately after unlocking Brienne?",
    answer:
      "No. Keep Wallace when his permanent upgrades and safer Block rhythm are carrying the Campaign. Switch when Brienne's Direct Hit loop solves a real clear-speed problem.",
  },
  {
    question: "Are Hero and Companion choices shared in co-op?",
    answer:
      "The tested co-op progression mixes Host-owned Village systems with separate player resources. Check the active Host and current save progression before spending permanent currency.",
  },
];

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
          name: "Tears of Metal Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Characters and Companion Unlocks",
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
        "Tears of Metal Characters and Companion Unlocks: Brienne, Ruadh, Weapons, Slots, and Events",
      description:
        "A practical Tears of Metal character guide explaining the three current playable Heroes, how to unlock Brienne through The Fallen Star, how to unlock Ruadh after defeating the Banshee, when to keep William Wallace, how Hero weapons change attack strings, how Companion slots differ from Commander capacity, and how to verify permanent Companion event rewards.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-04",
      dateModified: "2026-08-04",
      about: [
        {
          "@type": "VideoGame",
          name: "Tears of Metal",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Tears of Metal characters",
        },
        {
          "@type": "Thing",
          name: "William Wallace",
        },
        {
          "@type": "Thing",
          name: "Brienne Ironleg",
        },
        {
          "@type": "Thing",
          name: "The Fallen Star",
        },
        {
          "@type": "Thing",
          name: "Ruadh Stonecrusher",
        },
        {
          "@type": "Thing",
          name: "The Banshee",
        },
        {
          "@type": "Thing",
          name: "Hero weapons",
        },
        {
          "@type": "Thing",
          name: "Dragonstone Shards",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Companions",
        },
        {
          "@type": "Thing",
          name: "Companion slots",
        },
        {
          "@type": "Thing",
          name: "Commanders",
        },
        {
          "@type": "Thing",
          name: "Caolan, The Wayward",
        },
        {
          "@type": "Thing",
          name: "Feast and Sacrifice",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="Tears of Metal Characters and Companion Unlocks"
          description="Follow the routes I use to unlock Brienne and Ruadh, choose the Hero that fixes the current Campaign, decide when a weapon is worth its Shards, and confirm which events award permanent Companions."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 4, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CharactersCompanionUnlocksContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}