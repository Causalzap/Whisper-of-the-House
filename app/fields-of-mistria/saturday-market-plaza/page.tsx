import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaSaturdayMarketPlazaContent from "@/data/fields-of-mistria/saturday-market-plaza.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/saturday-market-plaza`;

const metadataTitle =
  "Fields of Mistria Saturday Market Plaza Guide";

const metadataDescription =
  "Unlock the Saturday Market Plaza, gather all five materials, finish the Adeline hand-in, and access Stillwell missions and Zorel's music shop.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-complete.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-letter.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-location.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-saturday-market-plaza-materials.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-plaza-voidite.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-plaza-monster-block.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-plaza-monster-core-floor-15.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-plaza-quest-complete.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-stillwell-mission-board.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-zorel-crystal-resonators.webp`,
];

const toc = [
  {
    id: "unlock-plaza",
    label: "Unlock the Plaza quest",
  },
  {
    id: "plaza-meeting",
    label: "Manor House meeting",
  },
  {
    id: "plaza-materials",
    label: "All Plaza materials",
  },
  {
    id: "check-storage",
    label: "Check storage first",
  },
  {
    id: "voidite-route",
    label: "Voidite farming route",
  },
  {
    id: "monster-block-route",
    label: "Monster Block route",
  },
  {
    id: "monster-core-route",
    label: "Monster Core route",
  },
  {
    id: "stone-and-ingots",
    label: "Stone & Mistril Ingots",
  },
  {
    id: "donation-box",
    label: "Fill the Donation Box",
  },
  {
    id: "report-to-adeline",
    label: "Report to Adeline",
  },
  {
    id: "new-vendors",
    label: "Stillwell & Zorel",
  },
  {
    id: "stillwell-missions",
    label: "Stillwell missions",
  },
  {
    id: "zorel-music",
    label: "Zorel music items",
  },
  {
    id: "plaza-problems",
    label: "Plaza quest fixes",
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
      "How do I unlock the Saturday Market Plaza in Fields of Mistria?",
    answer:
      "Reach Gold Star Town Rank, read Nora's letter, attend the Manor House meeting, and then use the Donation Box at the construction site west of the Blacksmith.",
  },
  {
    question:
      "What materials are required for the Saturday Market Plaza?",
    answer:
      "The Plaza requires 50 Voidite, 20 Refined Stone, five Mistril Ingots, 10 Monster Cores, and five Monster Blocks.",
  },
  {
    question:
      "Where is the Saturday Market Plaza construction site?",
    answer:
      "The construction site is on the raised ground west of the Blacksmith. It is separate from the original central Saturday Market stalls.",
  },
  {
    question:
      "Where can I farm Voidite for the Saturday Market Plaza?",
    answer:
      "Floors 90 and 95 provide a practical late-Mine reset route. Scan each room for visible Voidite, collect it, and move between the two elevator checkpoints. The nodes remain random and are not guaranteed on every reset.",
  },
  {
    question:
      "Where can I get Monster Blocks in Fields of Mistria?",
    answer:
      "Monster Blocks can drop from block-shaped enemies in the late Mines. The Floor 85 checkpoint provides a practical enemy-reset route, but the drop is not guaranteed.",
  },
  {
    question:
      "Where can I farm Monster Cores for the Plaza?",
    answer:
      "Lantern enemies near the Floor 15 checkpoint provide a practical repeatable Monster Core route. Some lanterns drop Glass, pet skins, or other items instead of a Core.",
  },
  {
    question:
      "Why is the Plaza not complete after filling the Donation Box?",
    answer:
      "Filling the Donation Box is not the final trigger. Find Adeline on the map and tell her that all Plaza materials are ready.",
  },
  {
    question:
      "When do Stillwell and Zorel appear at the Saturday Market?",
    answer:
      "Stillwell and Zorel appear at the following Saturday Market after the Plaza construction and final Adeline conversation are complete.",
  },
  {
    question:
      "Should I buy a Crystal Resonator or Song Crystals first?",
    answer:
      "Buy one Crystal Resonator first. Song Crystals unlock music, but a placed Resonator is required to play the unlocked songs.",
  },
  {
    question:
      "Does the Saturday Market Plaza immediately unlock the Bell Tower?",
    answer:
      "No. The Plaza allows Zorel to join the Saturday Market. Introduce yourself to Zorel and then wait for her later letter beginning the Bell Tower repair quest.",
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
      "Fields of Mistria Saturday Market Plaza Guide",
    description:
      "Reach Gold Star, gather the five Plaza materials, farm Voidite and monster drops, report to Adeline, and unlock Stillwell and Zorel.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The completed Saturday Market Plaza with Stillwell and Zorel in Fields of Mistria",
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
          name: "Saturday Market Plaza Guide",
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
        "Fields of Mistria Saturday Market Plaza Guide: Materials, Stillwell and Zorel",
      description:
        "A complete Fields of Mistria Saturday Market Plaza walkthrough covering the Gold Star prerequisite, Nora's letter, the Manor House meeting, the construction site west of the Blacksmith, all five required materials, the Floor 90 and 95 Voidite reset route, Monster Blocks near Floor 85, Monster Cores near Floor 15, the Donation Box, the final Adeline hand-in, Hold Your A Plaza, Stillwell's Mission Board, and Zorel's Crystal Resonators and Song Crystals.",
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
          name: "Fields of Mistria Saturday Market Plaza",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Plaza materials",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Voidite",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Monster Blocks",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Monster Cores",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Stillwell missions",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Zorel",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Crystal Resonator",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Hold Your A Plaza achievement",
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
          title="Fields of Mistria Saturday Market Plaza Guide"
          description="Reach Gold Star, gather all five Plaza materials, farm Voidite and monster drops efficiently, complete the Adeline hand-in, and unlock Stillwell's missions and Zorel's music shop."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaSaturdayMarketPlazaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}