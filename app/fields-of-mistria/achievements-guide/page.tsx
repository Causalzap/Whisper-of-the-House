import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaAchievementsGuideContent from "@/data/fields-of-mistria/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/achievements-guide`;

const metadataTitle =
  "Fields of Mistria Achievements Guide: All 69 Unlocks";

const metadataDescription =
  "Track all 69 Fields of Mistria achievements with a one-save roadmap for ranks, seals, repairs, relationships, skills, Museum sets and family goals.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-repaired.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stone-star-rank.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-water-seal-opened.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-marriage-ceremony.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-deep-woods-forage-set.webp`,
];

const toc = [
  {
    id: "old-save-achievements",
    label: "Old save achievements",
  },
  {
    id: "plan-long-achievements",
    label: "Plan long-term goals",
  },
  {
    id: "story-town-achievements",
    label: "Story & town achievements",
  },
  {
    id: "town-rank-achievements",
    label: "All Town Ranks",
  },
  {
    id: "mine-seal-achievements",
    label: "Mine seals & Magic Key",
  },
  {
    id: "relationship-achievements",
    label: "Relationships & family",
  },
  {
    id: "skill-economy-achievements",
    label: "Skills, money & ranching",
  },
  {
    id: "museum-stillwell-achievements",
    label: "Museum & Stillwell",
  },
  {
    id: "final-cleanup",
    label: "Final achievement cleanup",
  },
  {
    id: "achievement-faq",
    label: "Achievements FAQ",
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
    href: "/fields-of-mistria/water-seal-guide",
    label: "Water Seal Guide",
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
];

const faqEntities = [
  {
    question: "How many achievements are in Fields of Mistria?",
    answer:
      "The current Fields of Mistria achievement list contains 69 achievements covering story progression, Town Ranks, Mine seals, repairs, relationships, skills, ranching, festivals, the Museum, marriage, children and Stillwell missions.",
  },
  {
    question:
      "Do I need a new save to unlock the Fields of Mistria 1.0 achievements?",
    answer:
      "No. An established save can receive credit for previously completed conditions. Load the save fully, revisit the relevant menus or systems and complete another day before assuming an achievement cannot register.",
  },
  {
    question:
      "Can Romantic and Best Friend unlock on the same Fields of Mistria save?",
    answer:
      "Yes. Choose Dating with one eligible villager and choose Best Friend with another. Using different villagers preserves the relationship route intended for marriage.",
  },
  {
    question:
      "Does reaching 10 Hearts unlock the I do achievement?",
    answer:
      "No. Reaching 10 Hearts while dating unlocks True Love. I do requires completing the proposal, scheduling the wedding and finishing the wedding ceremony.",
  },
  {
    question:
      "What is the difference between Parent and Time Flies?",
    answer:
      "Parent unlocks when a child joins the household. Time Flies unlocks later when that child reaches the first birthday.",
  },
  {
    question:
      "Do I need one million Tesserae in my wallet for Bread Winner?",
    answer:
      "Bread Winner tracks cumulative earnings. Useful upgrades can still be purchased while progressing toward the total.",
  },
  {
    question:
      "Does finding the Magic Key unlock Used The Magic Key?",
    answer:
      "No. The key must be taken to the Priestess Quarters and used for the intended interaction.",
  },
  {
    question:
      "Why did the Bell Tower Donation Box not unlock Ringing Ovation?",
    answer:
      "Filling the Donation Box is not the final step. Speak to Adeline and complete the Bell Tower repair scene to unlock Ringing Ovation.",
  },
  {
    question:
      "What should I do when only Museum achievements remain?",
    answer:
      "Inspect every Museum wing, identify the exact incomplete sets, check storage and then match each missing item to its season, weather, location, Mine biome or collection method.",
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
      "Fields of Mistria Achievements Guide: All 69 Achievements",
    description:
      "Follow a one-save completion route for all 69 achievements, including Town Ranks, Mine seals, repairs, relationships, skills, ranching, Museum sets, Stillwell missions and family milestones.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The completed Saturday Market Plaza in Fields of Mistria",
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
          name: "Achievements Guide",
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
        "Fields of Mistria Achievements Guide: All 69 Achievements and 100% Roadmap",
      description:
        "A complete Fields of Mistria achievement checklist and one-save completion roadmap covering all 69 achievements. It organizes story and town development, all ten Town Ranks, five Mine seals, the Magic Key, relationships, marriage, child milestones, Level 60 skills, cumulative Essence and Tesserae, Tier 5 ranching and perks, festivals, Legendary collections, Museum completion and Stillwell Mission Quests.",
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
          name: "Fields of Mistria achievements",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria 100 percent completion",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Town Rank achievements",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mine Seal achievements",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria relationship achievements",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Museum achievements",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Stillwell Mission Quests",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Parent and Time Flies achievements",
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
          title="Fields of Mistria Achievements Guide"
          description="Track all 69 achievements in a practical one-save order, start the calendar-dependent goals early, and combine Town Ranks, seals, relationships, skills, Museum sets, Stillwell missions and family milestones."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
