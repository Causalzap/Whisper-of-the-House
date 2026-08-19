import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import HuntingGuideContent from "@/data/crimson-desert/hunting-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/crimson-desert`;
const pageUrl = `${hubUrl}/hunting-guide`;

const metadataTitle =
  "Crimson Desert Hunting Guide: White Crow's Gaze & Animals";

const metadataDescription =
  "Use this Crimson Desert hunting guide for animal spawns, White Crow's Gaze challenges, Kiwi catching, Wild Showdown, legendary hunts, and more.";

const imageUrls = [
  `${siteUrl}/images/crimson-desert/crimson-desert-hunting-wolf-spawn-west-of-camp.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-feather-of-the-earth-kiwi.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-hunting-wolf-spawn-west-of-camp.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-pine-broom-hunting-challenge.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-white-wolf-tame-prompt.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-goat-knowledge.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-end-of-myth-legendary-hunt.webp`,
  `${siteUrl}/images/crimson-desert/crimson-desert-white-bear-hunting-challenge.webp`,
];

const toc = [
  {
    id: "how-i-hunt",
    label: "How Hunting Spawns Work",
  },
  {
    id: "wolf-spawn",
    label: "Wolf Spawn",
  },
  {
    id: "when-animal-does-not-spawn",
    label: "Animal Not Spawning",
  },
  {
    id: "feather-of-the-earth",
    label: "Feather of the Earth",
  },
  {
    id: "shadow-leaf-armor",
    label: "Shadow Leaf Armor",
  },
  {
    id: "white-crows-gaze",
    label: "White Crow's Gaze",
  },
  {
    id: "pine-broom",
    label: "Pine Broom",
  },
  {
    id: "kill-catch-or-tame",
    label: "Kill, Catch or Tame",
  },
  {
    id: "hunting-resources",
    label: "Hunting Resources",
  },
  {
    id: "predator-challenges",
    label: "Predator Challenges",
  },
  {
    id: "end-of-myth",
    label: "The End of Myth",
  },
  {
    id: "white-bear",
    label: "White Bear",
  },
  {
    id: "when-i-move-on",
    label: "When I Move On",
  },
];

const relatedLinks = [
  {
    href: "/crimson-desert",
    label: "Crimson Desert Guide Hub",
  },
  {
    href: "/crimson-desert/farming-ranching-guide",
    label: "Farming & Ranching Guide",
  },
  {
    href: "/crimson-desert/trading-guide",
    label: "Trading Guide",
  },
  {
    href: "/crimson-desert/side-quests-guide",
    label: "Side Quests Guide",
  },
  {
    href: "/crimson-desert/abyss-artifacts-guide",
    label: "Abyss Artifacts Guide",
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
    title: "Crimson Desert Hunting Guide: White Crow's Gaze & Animals",
    description:
      "See how I handle random animal spawns, White Crow's Gaze challenges, Kiwi catching, special kill conditions, rare wolves, and legendary hunts.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-08-19",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Kiwi used for the Feather of the Earth hunting challenge in Crimson Desert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crimson Desert Hunting Guide: White Crow's Gaze",
    description:
      "Animal spawns, Feather of the Earth, Wild Showdown, Pine Broom, rare wolves, and The End of Myth legendary hunts.",
    images: [imageUrls[1]],
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
          name: "Crimson Desert Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hunting Guide",
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
        "Crimson Desert Hunting Guide: Animal Spawns, White Crow's Gaze and Legendary Hunts",
      description:
        "A practical Crimson Desert hunting guide covering random animal spawn behavior, the wolf area west of camp, what to do when animals do not spawn, Feather of the Earth and Kiwi catching, Shadow Leaf Armor, Wild Showdown, Pine Broom, white wolf taming decisions, Goat Knowledge and materials, predator challenges, The End of Myth, and the White Bear legendary hunt.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-19",
      dateModified: "2026-08-19",
      articleSection: "Crimson Desert Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Crimson Desert",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Crimson Desert hunting",
        },
        {
          "@type": "Thing",
          name: "White Crow's Gaze",
        },
        {
          "@type": "Thing",
          name: "Feather of the Earth",
        },
        {
          "@type": "Thing",
          name: "Wild Showdown",
        },
        {
          "@type": "Thing",
          name: "Pine Broom",
        },
        {
          "@type": "Thing",
          name: "The End of Myth",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert animal spawns",
        },
        {
          "@type": "Thing",
          name: "Crimson Desert Kiwi",
        },
        {
          "@type": "Thing",
          name: "Shadow Leaf Armor",
        },
        {
          "@type": "Thing",
          name: "Silver Fang",
        },
        {
          "@type": "Thing",
          name: "White Bear",
        },
        {
          "@type": "Thing",
          name: "White-Scaled Crocodile",
        },
        {
          "@type": "Thing",
          name: "White Bison",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Handle Hunting and White Crow's Gaze in Crimson Desert"
          description="I stop camping random spawns, read each hunting condition before attacking, and change my approach completely once the legendary hunts begin."
          gameTitle="Crimson Desert"
          gameHref="/crimson-desert"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <HuntingGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}