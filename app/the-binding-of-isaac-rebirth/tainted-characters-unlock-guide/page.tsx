import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TaintedCharactersUnlockGuideContent from "@/data/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide/`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-strange-door-polaroid.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dross-alt-path.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-drop-trinket-cracked-key.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dads-note-ascent-start.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-home-red-door-tainted-character.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dogma-tv-fight.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-soul-stone-unlocks.webp`,
];

const toc = [
  {
    id: "tainted-characters-unlock-guide",
    label: "Tainted unlock guide",
  },
  {
    id: "full-prerequisite-chain",
    label: "Prerequisites",
  },
  {
    id: "blue-womb-hush",
    label: "Blue Womb & Hush",
  },
  {
    id: "mother-route",
    label: "Mother route",
  },
  {
    id: "home-route",
    label: "Home route",
  },
  {
    id: "no-teleport-marked-skull",
    label: "No teleport?",
  },
  {
    id: "red-key-vs-cracked-key",
    label: "Red Key vs Cracked Key",
  },
  {
    id: "dads-note-ascent",
    label: "Dad's Note",
  },
  {
    id: "home-closet",
    label: "Home closet",
  },
  {
    id: "dogma-beast",
    label: "Dogma & Beast",
  },
  {
    id: "which-character-first",
    label: "First target",
  },
  {
    id: "soul-stones-later",
    label: "Soul Stones",
  },
  {
    id: "common-failures",
    label: "Common failures",
  },
  {
    id: "when-to-switch-guides",
    label: "Next guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-binding-of-isaac-rebirth/",
    label: "The Binding of Isaac: Rebirth Guide Hub",
  },
  {
    href: "/the-binding-of-isaac-rebirth/beginner-guide/",
    label: "Beginner Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/unlock-order/",
    label: "Unlock Order Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/best-beginner-characters/",
    label: "Best Beginner Characters",
  },
  {
    href: "/the-binding-of-isaac-rebirth/dlc-buying-guide/",
    label: "DLC Buying Guide",
  },
];

export const metadata: Metadata = {
  title: "Isaac Tainted Characters Unlock Guide & Home Route",
  description:
    "Unlock all Tainted characters in The Binding of Isaac! Master the exact route from Hush and Mother to the Strange Door, Ascent, and the Home red closet.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac Tainted Characters Unlock Guide, Home Route and Cracked Key",
    description:
      "Follow the full Tainted character route in The Binding of Isaac: Rebirth and Repentance, from Hush and Mother prerequisites to Strange Door, marked skull, The Fool, Dad's Note, Red Key, Cracked Key, Home, Dogma and Beast.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Repentance Strange Door opened with the Polaroid or Negative.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Tainted Characters Unlock Guide & Home Route",
    description:
      "Use the full Hush, Mother, Strange Door, Dad's Note, Red Key, Cracked Key and Home route to unlock Tainted characters.",
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
          name: "The Binding of Isaac: Rebirth Guide",
          item: `${siteUrl}/the-binding-of-isaac-rebirth/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tainted Characters Unlock Guide",
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
        "The Binding of Isaac: Rebirth Tainted Characters Unlock Guide: Hush, Mother, Strange Door, Dad's Note, The Fool, Red Key, Cracked Key, Home, Dogma, and Beast Route",
      description:
        "A practical The Binding of Isaac: Rebirth and Repentance Tainted characters unlock guide explaining the complete prerequisite chain and Home route. The guide covers Blue Womb access after 10 Mom's Heart kills, entering Blue Womb before the 30-minute timer to fight Hush, defeating Hush 3 times to unlock the Repentance alternate path, getting Knife Piece 1 in Downpour II or Dross II, getting Knife Piece 2 in Mines II or Ashpit II, using the completed knife on the Mausoleum II or Gehenna II red door, defeating Mother in Corpse II to unlock the Strange Door, using the marked skull for The Fool when no teleport item is available, opening the Strange Door with the Polaroid or Negative, picking up Dad's Note, climbing the Ascent, using Red Key for the first Home unlock, preparing Cracked Key for repeat Tainted character unlocks, opening the hidden closet at Home, and deciding whether to continue through Dogma and Beast.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-03",
      dateModified: "2026-07-03",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Binding of Isaac: Rebirth",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac Tainted characters",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac Repentance",
        },
        {
          "@type": "Thing",
          name: "Blue Womb",
        },
        {
          "@type": "Thing",
          name: "Hush",
        },
        {
          "@type": "Thing",
          name: "Downpour",
        },
        {
          "@type": "Thing",
          name: "Dross",
        },
        {
          "@type": "Thing",
          name: "Mines",
        },
        {
          "@type": "Thing",
          name: "Ashpit",
        },
        {
          "@type": "Thing",
          name: "Mausoleum",
        },
        {
          "@type": "Thing",
          name: "Gehenna",
        },
        {
          "@type": "Thing",
          name: "Corpse",
        },
        {
          "@type": "Thing",
          name: "Mother",
        },
        {
          "@type": "Thing",
          name: "Strange Door",
        },
        {
          "@type": "Thing",
          name: "Polaroid",
        },
        {
          "@type": "Thing",
          name: "Negative",
        },
        {
          "@type": "Thing",
          name: "The Fool",
        },
        {
          "@type": "Thing",
          name: "marked skull",
        },
        {
          "@type": "Thing",
          name: "Dad's Note",
        },
        {
          "@type": "Thing",
          name: "Ascent",
        },
        {
          "@type": "Thing",
          name: "Home",
        },
        {
          "@type": "Thing",
          name: "Red Key",
        },
        {
          "@type": "Thing",
          name: "Cracked Key",
        },
        {
          "@type": "Thing",
          name: "Dogma",
        },
        {
          "@type": "Thing",
          name: "Beast",
        },
        {
          "@type": "Thing",
          name: "Soul Stones",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Why are the alternate path doors not showing up in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Repentance alternate path doors require 3 Hush kills. If Downpour, Mines, Mausoleum, or Corpse access is missing, check Hush progress first.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the Strange Door not showing up in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Strange Door appears only after Mother has been defeated once on the file. Hush unlocks the alternate path, and Mother unlocks the Strange Door.",
          },
        },
        {
          "@type": "Question",
          name: "How do I leave Mom's boss room for the Strange Door?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use The Fool or another teleport. On Depths II, Necropolis II, or Dank Depths II, find the marked skull before Mom, bomb it, and keep The Fool card for after the fight.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Cracked Key for the first Tainted unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The first Home route gives Red Key from Mom's bedroom chest. Use that Red Key on the hidden closet door.",
          },
        },
        {
          "@type": "Question",
          name: "When do I need Cracked Key?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Cracked Key for second and later Tainted unlocks. Drop a trinket in a boss room or treasure room before Dad's Note so it can turn into Cracked Key during Ascent.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dogma unlock Tainted characters?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The Tainted unlock comes from opening the hidden closet at Home. Dogma and Beast are for the final route and completion mark.",
          },
        },
        {
          "@type": "Question",
          name: "Which Tainted character should I unlock first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Choose the regular character you can bring to Home most consistently. The first unlock should prove the route, not force the hardest target.",
          },
        },
        {
          "@type": "Question",
          name: "Are Soul Stones part of the first Tainted unlock?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Soul Stones are later Tainted character goals tied to Boss Rush and Hush progress. They are better treated as later pool planning.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Unlock Tainted Characters Without Missing a Gate"
          description="Follow the full route from Blue Womb and Hush to Mother, Strange Door, The Fool, Dad's Note, Red Key, Cracked Key, Home, Dogma and Beast."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TaintedCharactersUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}