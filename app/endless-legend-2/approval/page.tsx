import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndlessLegend2ApprovalContent from "@/data/endless-legend-2/approval.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/endless-legend-2`;
const pageUrl = `${hubUrl}/approval`;

const metadataTitle =
  "ENDLESS Legend 2 Approval Guide – Shanties & Rebellions";

const metadataDescription =
  "Fix low Approval, Destitute population, Shanties and rebellions in ENDLESS Legend 2 with vocation-slot checks, overexpansion fixes and recovery steps.";

const articleDescription =
  "Find what is lowering Approval, fix Destitute population and Shanties, recover Food and Industry, handle overexpansion, and prevent Rebel Armies from disrupting your Cities.";

const imageUrls = [
  `${siteUrl}/images/endless-legend-2/endless-legend-2-approval-mutinous-penalty.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-overexpansion-counselor.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-shanty-destitute-population.webp`,
  `${siteUrl}/images/endless-legend-2/endless-legend-2-low-approval-rebellion.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "approval-effects",
    label: "What Approval does",
  },
  {
    id: "destitute",
    label: "Destitute population",
  },
  {
    id: "shanty",
    label: "Shanties & removal",
  },
  {
    id: "communal-habitation",
    label: "Communal Habitation",
  },
  {
    id: "approval-causes",
    label: "What lowers Approval",
  },
  {
    id: "overexpansion",
    label: "Overexpansion",
  },
  {
    id: "recovery",
    label: "Recover low Approval",
  },
  {
    id: "rebellion",
    label: "Rebellions",
  },
];

const relatedLinks = [
  {
    href: "/endless-legend-2",
    label: "ENDLESS Legend 2 Guide",
  },
  {
    href: "/endless-legend-2/beginner-guide",
    label: "First 30 Turns",
  },
  {
    href: "/endless-legend-2/minor-factions",
    label: "Minor Factions",
  },
  {
    href: "/endless-legend-2/severed-claws",
    label: "Severed Claws",
  },
  {
    href: "/endless-legend-2/last-lords",
    label: "Last Lords",
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
      "ENDLESS Legend 2 Approval Guide – How to Fix Shanties & Rebellions",
    description: articleDescription,
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "ENDLESS Legend 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Approval",
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
        "ENDLESS Legend 2 Approval Guide – How to Fix Shanties & Rebellions",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-21",
      dateModified: "2026-09-21",
      about: [
        {
          "@type": "VideoGame",
          name: "ENDLESS Legend 2",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Approval",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Destitute population",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Shanties",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 vocation slots",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 overexpansion",
        },
        {
          "@type": "Thing",
          name: "ENDLESS Legend 2 Rebel Armies",
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
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Whisper of the House",
      url: siteUrl,
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
          title="ENDLESS Legend 2 Approval Guide – How to Fix Shanties & Rebellions"
          description={articleDescription}
          gameTitle="ENDLESS Legend 2"
          gameHref="/endless-legend-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndlessLegend2ApprovalContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}