import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaWaterSealGuideContent from "@/data/fields-of-mistria/water-seal-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/water-seal-guide`;

const metadataTitle =
  "Fields of Mistria Water Seal Guide: All Offerings";

const metadataDescription =
  "Find the Floor 20 Water Tablet, translate it with Eiland and Juniper, collect all four offerings, open the Water Seal, and unlock Summon Rain.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-tablet.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-tablet-eiland.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-four-offerings.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stone-loach-upper-mines.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-offerings.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-summon-rain-spell.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-opened.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-five-seals.webp`,
];

const toc = [
  {
    id: "reach-floor-20",
    label: "Reach Floor 20",
  },
  {
    id: "take-tablet-rubbing",
    label: "Take the tablet rubbing",
  },
  {
    id: "speak-to-eiland",
    label: "Speak to Eiland",
  },
  {
    id: "translate-water-tablet",
    label: "Translate the tablet",
  },
  {
    id: "collect-offerings",
    label: "Collect all four offerings",
  },
  {
    id: "find-ruby",
    label: "Find a Ruby",
  },
  {
    id: "find-stone-loach",
    label: "Catch the Stone Loach",
  },
  {
    id: "find-lantern-moth",
    label: "Catch the Lantern Moth",
  },
  {
    id: "find-upper-mines-mushroom",
    label: "Find the Mine Mushroom",
  },
  {
    id: "prepare-return",
    label: "Prepare the return trip",
  },
  {
    id: "place-offerings",
    label: "Place the offerings",
  },
  {
    id: "after-water-seal",
    label: "Summon Rain reward",
  },
  {
    id: "five-seals",
    label: "The five seals",
  },
  {
    id: "water-seal-problems",
    label: "Water Seal fixes",
  },
];

const relatedLinks = [
  {
    href: "/fields-of-mistria",
    label: "Fields of Mistria Guide Hub",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-mines",
    label: "How to Unlock the Mines",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-deep-woods",
    label: "How to Unlock the Deep Woods",
  },
  {
    href: "/fields-of-mistria/saturday-market-plaza",
    label: "Saturday Market Plaza Guide",
  },
  {
    href: "/fields-of-mistria/bell-tower-guide",
    label: "Bell Tower Guide",
  },
  {
    href: "/fields-of-mistria/marriage-guide",
    label: "Marriage Guide",
  },
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Achievements Guide",
  },
];

const faqEntities = [
  {
    question:
      "Where is the Water Seal in Fields of Mistria?",
    answer:
      "The Water Seal chamber is on Floor 20 of the Mines. Activate the elevator checkpoints while descending so that Floor 20 becomes easy to revisit.",
  },
  {
    question:
      "How do I start the Water Seal quest?",
    answer:
      "Reach Floor 20, interact with the Water Tablet, take the Water Tablet Rubbing, show it to Eiland, and then follow the translation route to Juniper at the Bathhouse.",
  },
  {
    question:
      "What are the four Water Seal offerings?",
    answer:
      "The Water Seal requires one Ruby, one Stone Loach, one Lantern Moth, and one Upper Mines Mushroom.",
  },
  {
    question:
      "Where can I catch the Stone Loach?",
    answer:
      "Catch the Stone Loach from fishing pools generated inside the Upper Mines. Move between elevator checkpoints or reset the layout when the current rooms contain no water.",
  },
  {
    question:
      "Where can I find the Lantern Moth?",
    answer:
      "The Lantern Moth is an Upper Mines insect caught with the Bug Net. It is not obtained by defeating lantern enemies or crafting a lantern.",
  },
  {
    question:
      "Can I use a Perfect Ruby for the Water Seal?",
    answer:
      "Bring the standard item named Ruby. Do not rely on a Perfect Ruby or another red gemstone as a substitute for the required offering.",
  },
  {
    question:
      "Why will the Water Seal not accept an item I already own?",
    answer:
      "All four offerings must be physically carried in the active inventory. Items left inside farmhouse storage are not available to the Floor 20 altar.",
  },
  {
    question:
      "What do I unlock after opening the Water Seal?",
    answer:
      "Opening the Water Seal opens the route beyond Floor 20, awards the Opened The Water Seal achievement, advances the seal storyline, and unlocks Summon Rain through Caldarus.",
  },
  {
    question:
      "Can I leave after opening the Water Seal?",
    answer:
      "Yes. The opened seal remains complete. Leave and return later when health, energy, inventory space, food, or time is too low to explore the next Mine region safely.",
  },
  {
    question:
      "How many seals are in Fields of Mistria?",
    answer:
      "Caldarus explains that there are five seals in total. The Water Seal is the first seal completed during the main Mine progression.",
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
      "Fields of Mistria Water Seal Guide: Tablet and Four Offerings",
    description:
      "Reach Floor 20, translate the Water Tablet, find the Ruby, Stone Loach, Lantern Moth and Upper Mines Mushroom, and unlock Summon Rain.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The Water Seal tablet on Floor 20 of the Fields of Mistria Mines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Fields of Mistria Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Water Seal Guide",
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
        "Fields of Mistria Water Seal Guide: Floor 20 Tablet, Four Offerings and Summon Rain",
      description:
        "A complete Fields of Mistria Water Seal walkthrough covering the Floor 20 chamber, Water Tablet Rubbing, Eiland and Juniper translation route, Ruby, Stone Loach, Lantern Moth, Upper Mines Mushroom, active-inventory requirement, offering altar, Opened The Water Seal achievement, Summon Rain spell and the five-seal storyline.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-06",
      about: [
        {
          "@type": "VideoGame",
          name: "Fields of Mistria",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Water Seal",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Water Tablet",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Floor 20",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Water Seal offerings",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Stone Loach",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Lantern Moth",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Upper Mines Mushroom",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Summon Rain",
        },
        {
          "@type": "Thing",
          name: "Opened The Water Seal achievement",
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
          title="Fields of Mistria Water Seal Guide"
          description="Reach the Water Tablet on Floor 20, complete Eiland and Juniper's translation route, carry all four offerings back to the seal, and unlock Summon Rain."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaWaterSealGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}