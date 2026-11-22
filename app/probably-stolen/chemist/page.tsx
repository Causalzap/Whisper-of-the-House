
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ChemistContent from "@/data/probably-stolen/chemist.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/chemist`;

const metadataTitle =
  "Probably Stolen Chemist Guide: Recipes, Lab Pure & Cartel Quotas";

const metadataDescription =
  "Make Dream Dust, Nightmare Dust, Caffeine and Phanta in Probably Stolen. Check Chem Finisher recipes, reach Lab Pure and meet weekly Cartel quotas.";

const articleTitle =
  "How Do You Make Dream Dust, Phanta, and Lab Pure in Probably Stolen?";

const articleDescription =
  "Find all seven Chem Finisher recipes, make Dream Dust, Nightmare Dust, Caffeine Pills and Phanta Pills, remove contaminants, improve chemical purity, and meet weekly Cartel quotas.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/chemist-dream-dust-4695-purity.webp`,
  `${siteUrl}/images/probably-stolen/chemist-phanta-finished-pills.webp`,
];

const heroImage = imageUrls[0];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Probably Stolen Dream Dust vial showing 46.95 percent purity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
  },
};

const toc = [
  {
    id: "chemist-start",
    label: "Start as a Chemist",
  },
  {
    id: "chemistry-recipes",
    label: "All Chem Finisher Recipes",
  },
  {
    id: "dream-dust-recipe",
    label: "How to Make Dream Dust",
  },
  {
    id: "dream-dust-purity",
    label: "Increase Dream Dust Purity",
  },
  {
    id: "lab-pure-chemistry",
    label: "Lab Pure & Remove Contaminants",
  },
  {
    id: "chemist-errors",
    label: "Chem Finisher Errors & Fixes",
  },
  {
    id: "nightmare-dust",
    label: "How to Make Nightmare Dust",
  },
  {
    id: "caffeine-pills",
    label: "How to Make Caffeine Pills",
  },
  {
    id: "phanta-pills",
    label: "How to Make Phanta Pills",
  },
  {
    id: "cartel-first-delivery",
    label: "First Cartel Delivery",
  },
  {
    id: "chemist-resources",
    label: "Materials & Equipment Upgrades",
  },
  {
    id: "chemist-selling",
    label: "Sell or Save Dream Dust?",
  },
  {
    id: "chemist-profit",
    label: "Which Chemical Should You Make?",
  },
  {
    id: "chemist-next-week",
    label: "Later Cartel Quotas",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/factions",
    label: "Factions & Cartel Reputation",
  },
  {
    href: "/probably-stolen/achievements",
    label: "Lab Pure & Other Achievements",
  },
  {
    href: "/probably-stolen/security-investigation",
    label: "Security Investigation & Fixers",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner",
  },
];

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
          name: "Probably Stolen",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chemist Guide",
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
      headline: articleTitle,
      description: articleDescription,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-29",
      dateModified: "2026-11-22",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Chemist starting scenario",
        },
        {
          "@type": "Thing",
          name: "Chem Finisher recipes",
        },
        {
          "@type": "Thing",
          name: "Dream Dust and Nightmare Dust",
        },
        {
          "@type": "Thing",
          name: "Caffeine Pills and Phanta Pills",
        },
        {
          "@type": "Thing",
          name: "Lab Pure chemical grades",
        },
        {
          "@type": "Thing",
          name: "Chemical contaminants and purification",
        },
        {
          "@type": "Thing",
          name: "Chemical Equipment Modules",
        },
        {
          "@type": "Thing",
          name: "Cartel Dream Dust quotas",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ChemistContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
