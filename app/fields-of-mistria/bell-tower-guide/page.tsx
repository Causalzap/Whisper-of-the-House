import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaBellTowerGuideContent from "@/data/fields-of-mistria/bell-tower-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/bell-tower-guide`;

const metadataTitle =
  "Fields of Mistria Bell Tower Guide: Materials & Sounds";

const metadataDescription =
  "Repair the Bell Tower with all four materials, Dragon-Forged Core and Fang recipes, Adeline hand-in, Ringing Ovation, and Bell Sound selection.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-repaired.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-letter.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-meeting.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-materials.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-dragon-forged-core-recipe.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-dragon-forged-fang-recipe.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-tower-donation-box.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-bell-sound-menu.webp`,
];

const toc = [
  {
    id: "unlock-bell-tower",
    label: "Unlock the Bell Tower quest",
  },
  {
    id: "bell-tower-meeting",
    label: "Bell Tower meeting",
  },
  {
    id: "bell-tower-materials",
    label: "All repair materials",
  },
  {
    id: "dragon-forged-core",
    label: "Dragon-Forged Core",
  },
  {
    id: "dragon-forged-fang",
    label: "Dragon-Forged Fang",
  },
  {
    id: "material-priority",
    label: "Combined material checklist",
  },
  {
    id: "donation-box",
    label: "Donation Box",
  },
  {
    id: "report-to-adeline",
    label: "Report to Adeline",
  },
  {
    id: "bell-tower-complete",
    label: "Complete the repair",
  },
  {
    id: "bell-sounds",
    label: "Change the Bell Sound",
  },
  {
    id: "bell-tower-problems",
    label: "Bell Tower fixes",
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
      "How do I unlock the Bell Tower quest in Fields of Mistria?",
    answer:
      "Complete the Saturday Market Plaza project, wait for Stillwell and Zorel to appear at the expanded Saturday Market, introduce yourself to Zorel, and then read her later letter asking you to meet at the Bell Tower.",
  },
  {
    question:
      "What materials are required to repair the Bell Tower?",
    answer:
      "The Bell Tower requires 20 Refined Stone, 30 Hardwood, one Dragon-Forged Fang, and one Dragon-Forged Core.",
  },
  {
    question:
      "What materials are required for the Dragon-Forged Core?",
    answer:
      "The Dragon-Forged Core requires five Monster Cores, five Mistril Ore, one Perfect Diamond, one Ancient Firefly, and one Medium Essence Stone.",
  },
  {
    question:
      "What materials are required for the Dragon-Forged Fang?",
    answer:
      "The Dragon-Forged Fang requires five Void Stones, five Void Herbs, and one Medium Essence Stone.",
  },
  {
    question:
      "Where can I find the Ancient Firefly?",
    answer:
      "Search the Ancient Ruins section of the Mines. The Ancient Firefly is not an ordinary seasonal outdoor insect.",
  },
  {
    question:
      "Why is the Bell Tower still sealed after filling the Donation Box?",
    answer:
      "Filling the Donation Box does not automatically begin the repair. Find Adeline and tell her that all Bell Tower materials are ready.",
  },
  {
    question:
      "Do I need to wait until Saturday to finish the Bell Tower repair?",
    answer:
      "No. After filling the Donation Box, the final repair is triggered by speaking to Adeline and is not tied to the Saturday Market schedule.",
  },
  {
    question:
      "How do I change the Bell Sound in Fields of Mistria?",
    answer:
      "Enter the repaired Bell Tower and interact with the Crystal Resonator. Preview a Bell Sound and select the one you want to hear when the town bell rings around nightfall.",
  },
  {
    question:
      "Does changing the Bell Sound change the tower's appearance?",
    answer:
      "The tested selection changed the daily bell audio. It did not visibly change the Bell Tower exterior.",
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
      "Fields of Mistria Bell Tower Guide: Repair Materials and Bell Sounds",
    description:
      "Unlock Zorel's Bell Tower quest, craft the Dragon-Forged Core and Fang, finish the Donation Box, report to Adeline, and change the daily town bell.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "The repaired Bell Tower interior and Crystal Resonator in Fields of Mistria",
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
          name: "Bell Tower Guide",
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
        "Fields of Mistria Bell Tower Guide: Materials, Dragon-Forged Recipes and Bell Sounds",
      description:
        "A complete Fields of Mistria Bell Tower repair guide covering the Saturday Market Plaza prerequisite, Zorel's letter, the meeting with Adeline and Landen, all four construction requirements, the Dragon-Forged Core and Dragon-Forged Fang recipes, Monster Core and Void material routes, the Donation Box, the final Adeline hand-in, Ringing Ovation, and the Crystal Resonator Bell Sound menu.",
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
          name: "Fields of Mistria Bell Tower",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Bell Tower materials",
        },
        {
          "@type": "Thing",
          name: "Dragon-Forged Core recipe",
        },
        {
          "@type": "Thing",
          name: "Dragon-Forged Fang recipe",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Ancient Firefly",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Void Herbs",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Ringing Ovation achievement",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Bell Sounds",
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
          title="Fields of Mistria Bell Tower Guide"
          description="Unlock Zorel's Bell Tower project, gather all four repair materials, craft the Dragon-Forged Core and Fang, report the completed Donation Box to Adeline, and choose a new daily Bell Sound."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaBellTowerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}