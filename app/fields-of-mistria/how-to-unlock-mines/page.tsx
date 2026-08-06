import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaUnlockMinesContent from "@/data/fields-of-mistria/how-to-unlock-mines.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/how-to-unlock-mines`;

const metadataTitle =
  "Fields of Mistria Mines Guide: How to Unlock Them";

const metadataDescription =
  "Reach Stone Star, trigger the Mine reopening scene, prepare your first descent, use the ladder, and unlock the Floor 5 elevator checkpoint.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-reopening.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-stone-star-requirement.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-renown-sources.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stone-star-rank.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-west-entrance-letter.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-first-bag-upgrade.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-collapsed-shaft.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-mines-elevator-five-floors.webp`,
];

const toc = [
  {
    id: "start-mines-quest",
    label: "Start the Mines quest",
  },
  {
    id: "raise-renown",
    label: "Raise Renown",
  },
  {
    id: "museum-set",
    label: "Use Museum sets",
  },
  {
    id: "complete-requests",
    label: "Complete easy requests",
  },
  {
    id: "reach-stone-star",
    label: "Reach Stone Star",
  },
  {
    id: "find-mines-entrance",
    label: "Find the Mine entrance",
  },
  {
    id: "reopen-mines",
    label: "Reopen the Mines",
  },
  {
    id: "prepare-first-mine-run",
    label: "Prepare the first run",
  },
  {
    id: "enter-by-ladder",
    label: "Enter by ladder",
  },
  {
    id: "reach-floor-five",
    label: "Reach Floor 5",
  },
  {
    id: "mines-not-opening",
    label: "Mines not opening fixes",
  },
  {
    id: "after-unlocking-mines",
    label: "What to do next",
  },
];

const relatedLinks = [
  {
    href: "/fields-of-mistria",
    label: "Fields of Mistria Guide Hub",
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
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Achievements Guide",
  },
];

const faqEntities = [
  {
    question:
      "What Town Rank is required to unlock the Mines in Fields of Mistria?",
    answer:
      "Mistria must reach Stone Star Town Rank. After reaching Stone Star, read the new message and meet Eiland and Errol at the Mine entrance west of town.",
  },
  {
    question:
      "How do I raise Renown to Stone Star in Fields of Mistria?",
    answer:
      "Complete Request Board quests, finish Museum sets, and ship useful duplicate items. Combining all three sources is faster than relying on one activity.",
  },
  {
    question:
      "Why is nobody waiting at the Mine entrance after reaching Stone Star?",
    answer:
      "Check the mailbox and active quest list for the message asking you to meet Eiland and Errol. Follow the active Mines marker rather than entering the Western Ruins or Narrows.",
  },
  {
    question:
      "Do I need the Bag Upgrade before entering the Mines?",
    answer:
      "No. The first Bag Upgrade is optional. It costs 1,000 Tesserae and adds 10 inventory slots, which makes longer Mine runs easier.",
  },
  {
    question:
      "Why does the Mine elevator not work after the Mines reopen?",
    answer:
      "The entrance elevator has no recovered destinations at first. Enter using the ladder and activate elevator checkpoints every five floors.",
  },
  {
    question:
      "How do I reach Floor 5 without running out of energy?",
    answer:
      "Stop breaking ordinary rocks once the ladder appears, collect only obvious Copper Ore and new Museum items, avoid unnecessary fights, bring food, and make Floor 5 the only progression target.",
  },
  {
    question:
      "What should I do after reaching Floor 5 in the Mines?",
    answer:
      "Use the Floor 5 elevator checkpoint for future runs, continue activating checkpoints every five floors, and prepare for the Water Tablet and Water Seal route near Floor 20.",
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
      "How to Unlock the Mines in Fields of Mistria",
    description:
      "Reach Stone Star, follow the Mine reopening quest, prepare the first descent, use the ladder, and secure the Floor 5 elevator checkpoint.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Eiland and Errol reopening the Mines in Fields of Mistria",
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
          name: "How to Unlock the Mines",
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
        "How to Unlock the Mines in Fields of Mistria and Reach Floor 5",
      description:
        "A complete Fields of Mistria Mines unlocking guide covering the Museum meeting, Stone Star Town Rank requirement, Renown from Museum sets, requests and shipping, the message from Errol, the Mine entrance west of town, the reopening scene, the optional 1,000-Tesserae Bag Upgrade, the collapsed main shaft, ladder access, and the first elevator checkpoint on Floor 5.",
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
          name: "Fields of Mistria Mines",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Stone Star Town Rank",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Renown",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mine entrance",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Mine elevator",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Floor 5",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Bag Upgrade",
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
          title="How to Unlock the Mines in Fields of Mistria"
          description="Reach Stone Star Town Rank, trigger the reopening meeting, prepare the first descent, use the ladder while the main shaft is collapsed, and secure the Floor 5 elevator checkpoint."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaUnlockMinesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}