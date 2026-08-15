import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FieldsOfMistriaBellTowerGuideContent from "@/data/fields-of-mistria/bell-tower-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/fields-of-mistria`;
const pageUrl = `${hubUrl}/bell-tower-guide`;

const metadataTitle =
  "Fields of Mistria Bell Tower: Repair Guide & Materials";

const metadataDescription =
  "Repair the Fields of Mistria Bell Tower with 20 Refined Stone, 30 Hardwood, a Dragon-Forged Core and Fang, then report the full Donation Box to Adeline.";

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

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Fields of Mistria Bell Tower Repair Guide",
    description:
      "Unlock Zorel's Bell Tower quest, gather all four repair materials, craft the Dragon-Forged Core and Fang, then report the completed Donation Box to Adeline.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Repaired Bell Tower interior and Crystal Resonator in Fields of Mistria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fields of Mistria Bell Tower Repair Guide",
    description:
      "Repair the Bell Tower with 20 Refined Stone, 30 Hardwood, a Dragon-Forged Core and Fang, then find Adeline to finish the quest.",
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
          name: "Bell Tower Repair Guide",
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
        "Fields of Mistria Bell Tower Repair Guide: Materials, Dragon-Forged Recipes and Quest Fixes",
      description:
        "A complete Fields of Mistria Bell Tower repair guide covering the Saturday Market Plaza prerequisite, Zorel's letter, the meeting with Adeline and Landen, 20 Refined Stone, 30 Hardwood, the Dragon-Forged Core and Dragon-Forged Fang recipes, efficient Mine material routes, the Donation Box, the final Adeline hand-in, Ringing Ovation, and the Bell Sound Crystal Resonator.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-06",
      dateModified: "2026-08-15",
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
          name: "Bell Tower repair materials",
        },
        {
          "@type": "Thing",
          name: "Dragon-Forged Core",
        },
        {
          "@type": "Thing",
          name: "Dragon-Forged Fang",
        },
        {
          "@type": "Thing",
          name: "Ringing Ovation achievement",
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
  ],
};

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
    label: "Repair materials",
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
    label: "Material priority",
  },
  {
    id: "donation-box",
    label: "Deposit the materials",
  },
  {
    id: "report-to-adeline",
    label: "Find Adeline",
  },
  {
    id: "bell-tower-complete",
    label: "Bell Tower rewards",
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
    href: "/fields-of-mistria/saturday-market-plaza",
    label: "Saturday Market Plaza Guide",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-deep-woods",
    label: "How to Unlock the Deep Woods",
  },
  {
    href: "/fields-of-mistria/how-to-unlock-mines",
    label: "How to Unlock the Mines",
  },
  {
    href: "/fields-of-mistria/achievements-guide",
    label: "Fields of Mistria Achievements Guide",
  },
];

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
          title="How I Repair the Bell Tower in Fields of Mistria"
          description="I unlock Zorel's Bell Tower quest, gather the four repair materials, craft the Core and Fang, then find Adeline after filling the Donation Box."
          gameTitle="Fields of Mistria"
          gameHref="/fields-of-mistria"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 15, 2026"
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