import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CatLocationsContent from "@/data/the-adventures-of-elliot/cat-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-adventures-of-elliot/cat-locations`;

const imageUrls = [
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-golden-bell.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-traveler-quest-start.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-first-cats-caught.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-rewards-katzenmeister.webp`,
  `${siteUrl}/images/the-adventures-of-elliot/the-adventures-of-elliot-cat-paradise-rewards.webp`,
];

const toc = [
  { id: "cat-locations-guide", label: "Cat locations guide" },
  { id: "how-cat-collecting-starts", label: "How cat collecting starts" },
  { id: "cat-loving-traveler-location", label: "Traveler location" },
  { id: "cat-meow-clue", label: "Cat meow clue" },
  { id: "cat-needle", label: "Cat Needle" },
  { id: "cat-rewards", label: "Cat rewards" },
  { id: "cat-paradise-and-interactions", label: "Cat paradise" },
  { id: "cat-locations-by-age", label: "Cats by age" },
  { id: "early-confirmed-cat-route-notes", label: "Early confirmed cats" },
  { id: "cat-tracking-checklist", label: "Tracking checklist" },
  { id: "common-cat-mistakes", label: "Common mistakes" },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/the-adventures-of-elliot",
    label: "The Adventures of Elliot Guide Hub",
  },
  {
    href: "/the-adventures-of-elliot/walkthrough",
    label: "The Adventures of Elliot Walkthrough",
  },
  {
    href: "/the-adventures-of-elliot/beginner-guide",
    label: "The Adventures of Elliot Beginner Guide",
  },
  {
    href: "/the-adventures-of-elliot/shards-of-life-locations",
    label: "The Adventures of Elliot Shards of Life Locations",
  },
  {
    href: "/the-adventures-of-elliot/achievements-guide",
    label: "The Adventures of Elliot Achievements Guide",
  },
];

export const metadata: Metadata = {
  title: "The Adventures of Elliot Cat Locations: 50 Cats & Rewards",
  description:
    "Find all 50 cats in The Adventures of Elliot with Huther fountain turn-in, Cat Needle, meow clues, rewards, Katzenmeister, paradise and age route tracking.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Adventures of Elliot Cat Locations: 50 Cats, Cat Needle, Rewards and Katzenmeister",
    description:
      "Find cats in The Adventures of Elliot with the Kingdom of Huther fountain turn-in point, cat meow clues, Cat Needle cleanup, reward thresholds, cat paradise, cats across four ages, and early confirmed route notes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "A cat carries the Golden Bell in The Adventures of Elliot.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Adventures of Elliot Cat Locations",
    description:
      "Find 50 cats with Cat Needle, meow clues, Huther fountain turn-in, rewards, cat paradise and age tracking.",
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
          name: "The Adventures of Elliot Guide",
          item: `${siteUrl}/the-adventures-of-elliot`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Cat Locations",
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
        "The Adventures of Elliot Cat Locations: 50 Cats, Cat Needle, Cat Rewards, Katzenmeister, Cat Paradise and Age Tracking",
      description:
        "A player-focused cat locations guide for The Adventures of Elliot: The Millennium Tales covering the 50-cat collection route, the cat-loving traveler beside the Kingdom of Huther fountain, cat meow discovery clues, Cat Needle cleanup guidance, reward thresholds at 5, 10, 20, 35 and 50 cats, Cat Needle, Bomb Pouch, Quiver, Golden Egg, Medal of the Katzenmeister, cat paradise, cat interactions, cats across the four ages of Philabieldia, early confirmed cat route notes, and cleanup mistakes to avoid.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Adventures of Elliot: The Millennium Tales",
        },
        { "@type": "Thing", name: "The Adventures of Elliot cat locations" },
        { "@type": "Thing", name: "The Adventures of Elliot 50 cats" },
        { "@type": "Thing", name: "The Adventures of Elliot cats" },
        { "@type": "Thing", name: "The Adventures of Elliot Cat Needle" },
        { "@type": "Thing", name: "The Adventures of Elliot cat rewards" },
        { "@type": "Thing", name: "The Adventures of Elliot Katzenmeister" },
        { "@type": "Thing", name: "Medal of the Katzenmeister" },
        { "@type": "Thing", name: "Cat Needle" },
        { "@type": "Thing", name: "Bomb Pouch" },
        { "@type": "Thing", name: "Quiver" },
        { "@type": "Thing", name: "Golden Egg" },
        { "@type": "Thing", name: "Kingdom of Huther fountain" },
        { "@type": "Thing", name: "cat-loving traveler" },
        { "@type": "Thing", name: "cat meow clue" },
        { "@type": "Thing", name: "cat paradise" },
        { "@type": "Thing", name: "Age of Safekeeping" },
        { "@type": "Thing", name: "Age of Reconstruction" },
        { "@type": "Thing", name: "Age of Magic" },
        { "@type": "Thing", name: "Age of Budding" },
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
          name: "How many cats are in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "There are 50 cats in The Adventures of Elliot: The Millennium Tales.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I turn in cats in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bring found cats to the cat-loving traveler beside the fountain in the Kingdom of Huther.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start the cat quest in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Talk to the cat-loving traveler, catch the nearby cats, and bring them back. After the first turn-in, the traveler asks you to bring any more cats you find.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know a cat is nearby?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Listen for a cat meow while exploring. If you hear a meow, slow down and check nearby corners, rooftops, ledges, side paths, large trees, and hidden spaces.",
          },
        },
        {
          "@type": "Question",
          name: "What does Cat Needle do in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cat Needle unlocks at 5 cats. It helps with cleanup by showing how many cats remain in the current area and pointing toward their map position.",
          },
        },
        {
          "@type": "Question",
          name: "Can I turn Cat Needle off?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can leave Cat Needle guidance off if you want the search to feel more exploratory, then use it later for cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "What are the cat rewards in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The cat rewards are Cat Needle at 5 cats, Bomb Pouch at 10 cats, Quiver at 20 cats, Golden Egg at 35 cats, and Medal of the Katzenmeister at 50 cats.",
          },
        },
        {
          "@type": "Question",
          name: "Are cats spread across all ages in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cats are spread across the four ages of Philabieldia, so track each cat by age, area, and nearest landmark.",
          },
        },
        {
          "@type": "Question",
          name: "Can I feed or play with cats in The Adventures of Elliot?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Collected cats can be part of the cat paradise side activity, including feeding, interaction, and toys when those options are available.",
          },
        },
        {
          "@type": "Question",
          name: "Should I wait for Cat Needle before collecting cats?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Collect cats naturally when you hear or see them. Cat Needle is best used when an area still has missing cats and you need cleanup help.",
          },
        },
        {
          "@type": "Question",
          name: "Is this the full 50-cat list?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This page is currently an updating 50-cat guide with confirmed route notes, reward data, Cat Needle mechanics, and a by-age framework. The full checklist should be expanded as exact cat locations are verified.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next after this cat locations guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Walkthrough for story route progress, the Shards of Life Locations guide for health upgrades, or return to the Guide Hub for all guides.",
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
          title="Find The Adventures of Elliot Cats Without Losing Track"
          description="Track 50 cats with the Huther fountain traveler, meow clues, Cat Needle cleanup, reward milestones, cat paradise, age notes and early confirmed route clues."
          gameTitle="The Adventures of Elliot"
          gameHref="/the-adventures-of-elliot"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CatLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
