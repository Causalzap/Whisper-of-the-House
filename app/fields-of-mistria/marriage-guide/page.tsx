import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaMarriageGuideContent from "@/data/fields-of-mistria/marriage-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/marriage-guide`;

const metadataTitle =
  "Fields of Mistria Marriage Guide: Ring & Wedding";

const metadataDescription =
  "Reach 10 Hearts, get Elsie's Engagement Ring recipe, propose, choose a wedding date, plan the ceremony, select an outfit, and get married.";

const imageUrls = [
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-marriage-ceremony.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-ten-heart-red-heart.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-elsie-engagement-ring-recipe.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-engagement-ring-forge-recipe.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-wedding-date-selection.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-wedding-flower-choice.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-wedding-cake-choice.webp`,
  `${siteUrl}/images/fields-of-mistria/fields-of-mistria-wedding-flower-clips.webp`,
];

const toc = [
  {
    id: "marriage-requirements",
    label: "Marriage requirements",
  },
  {
    id: "elsie-engagement-ring",
    label: "Get the Engagement Ring recipe",
  },
  {
    id: "craft-engagement-ring",
    label: "Craft the Engagement Ring",
  },
  {
    id: "use-engagement-ring",
    label: "Use the Engagement Ring",
  },
  {
    id: "confirm-proposal",
    label: "Confirm the proposal",
  },
  {
    id: "choose-wedding-date",
    label: "Choose a wedding date",
  },
  {
    id: "wedding-planning",
    label: "Plan the wedding",
  },
  {
    id: "choose-wedding-flowers",
    label: "Choose the flowers",
  },
  {
    id: "choose-wedding-cake",
    label: "Choose the cake",
  },
  {
    id: "choose-wedding-meal",
    label: "Choose the meal",
  },
  {
    id: "before-wedding",
    label: "Prepare for the wedding",
  },
  {
    id: "wedding-day",
    label: "Wedding day",
  },
  {
    id: "wedding-outfits",
    label: "Wedding outfits",
  },
  {
    id: "complete-wedding",
    label: "Complete the ceremony",
  },
  {
    id: "after-marriage",
    label: "After marriage",
  },
  {
    id: "marriage-problems",
    label: "Marriage fixes",
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
    href: "/fields-of-mistria/achievements-guide",
    label: "Achievements Guide",
  },
];

const faqEntities = [
  {
    question:
      "How many Hearts do I need to get married in Fields of Mistria?",
    answer:
      "You must choose Dating at Eight Hearts and then reach 10 Hearts with that romantic partner. Eight Hearts alone does not unlock the Engagement Ring route.",
  },
  {
    question:
      "Why did Elsie not give me the Engagement Ring Recipe?",
    answer:
      "Confirm that the character is marked as Dating, reach the full tenth heart, complete any unfinished relationship event, and sleep after reaching 10 Hearts. Elsie visits the farmhouse the following morning when the conditions are complete.",
  },
  {
    question:
      "Does Elsie give me a completed Engagement Ring?",
    answer:
      "No. Elsie gives the Engagement Ring Recipe. The ring must then be crafted at the Forge using the ingredients displayed in the current recipe panel.",
  },
  {
    question:
      "Does using the Engagement Ring immediately lock the marriage?",
    answer:
      "No. Using the ring starts the final relationship discussion. The scene provides opportunities to stop before the proposal is confirmed.",
  },
  {
    question:
      "What happens to other dating relationships after getting engaged?",
    answer:
      "Other Dating relationships can move toward Best Friend status and generate breakup letters after the engagement. Related breakup and relationship-status behavior can be adjusted in the gameplay settings.",
  },
  {
    question:
      "How many wedding dates can I choose from in Fields of Mistria?",
    answer:
      "The wedding calendar displays 10 available dates after the proposal is accepted. Leaving several preparation days makes it easier to complete every wedding-planning conversation.",
  },
  {
    question:
      "How do I choose the wedding flowers, cake and meal?",
    answer:
      "Speak to the engaged partner on the days before the wedding. The flower, cake and meal choices appear through separate planning conversations rather than one combined menu.",
  },
  {
    question:
      "Why did I not get to choose the wedding meal?",
    answer:
      "Skipping an available partner conversation can leave one wedding-planning choice unfinished. Speak to the engaged partner every day after choosing the wedding date.",
  },
  {
    question:
      "Do I need to buy a wedding dress or tuxedo?",
    answer:
      "No. The wedding event opens a preparation room at the Sleeping Dragon Inn with wedding dresses, tuxedos, shoes, veils, headwear, accessories and color options.",
  },
  {
    question:
      "Does reaching 10 Hearts unlock the I do achievement?",
    answer:
      "No. Reaching 10 Hearts while Dating is the True Love milestone. I do unlocks after the scheduled wedding ceremony is completed.",
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
      "Fields of Mistria Marriage Guide: Engagement Ring and Wedding",
    description:
      "Reach 10 Hearts, receive Elsie's recipe, craft the Engagement Ring, complete the proposal, choose a wedding date, plan the ceremony, select an outfit, and get married.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "A completed wedding ceremony in Fields of Mistria",
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
          name: "Marriage Guide",
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
        "Fields of Mistria Marriage Guide: 10 Hearts, Engagement Ring, Proposal and Wedding",
      description:
        "A complete Fields of Mistria marriage walkthrough covering the Dating requirement, reaching 10 Hearts, Elsie's Engagement Ring Recipe visit, Forge crafting, the final relationship discussion, proposal confirmation, changes to other dating relationships, the 10-date wedding calendar, daily flower, cake and meal planning conversations, the Inn wedding wardrobe, ceremony, reception and I do achievement.",
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
          name: "Fields of Mistria marriage",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria Engagement Ring",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria 10 Hearts",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria proposal",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria wedding date",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria wedding planning",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria wedding outfits",
        },
        {
          "@type": "Thing",
          name: "Fields of Mistria I do achievement",
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
          title="Fields of Mistria Marriage Guide"
          description="Reach 10 Hearts, receive Elsie's Engagement Ring Recipe, complete the final proposal event, choose a safe wedding date, finish every planning conversation, select an outfit, and complete the ceremony."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/fields-of-mistria"
          breadcrumbBaseLabel="Fields of Mistria Guide"
          updatedAt="August 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FieldsOfMistriaMarriageGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}