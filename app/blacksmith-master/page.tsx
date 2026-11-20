
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BlacksmithMasterContent from "@/data/blacksmith-master/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/blacksmith-master`;

const metadataTitle =
  "Blacksmith Master Guide & Walkthrough: Start & Progress";

const metadataDescription =
  "Start Blacksmith Master 1.0, earn Gold from Merchant Offers, hire workers, unlock Masteries, open your Store, and improve workshop production.";

const articleTitle =
  "Blacksmith Master Guide & Walkthrough: How Do You Start and Progress?";

const articleDescription =
  "Complete your first Mace order, manage workers and wages, unlock new systems, open your Store, and solve the problems holding back your workshop.";

const imageUrls = [
  `${siteUrl}/images/blacksmith-master/blacksmith-master-first-mace-merchant-offer.webp`,
  `${siteUrl}/images/blacksmith-master/blacksmith-master-first-blacksmith-hiring.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "first-day",
    label: "What to Do on Day One",
  },
  {
    id: "hire-first-workers",
    label: "Choose Your First Workers",
  },
  {
    id: "staff-types",
    label: "Basic Worker Types",
  },
  {
    id: "make-money",
    label: "How to Make Money",
  },
  {
    id: "avoid-losing-money",
    label: "Avoid Losing Money",
  },
  {
    id: "first-upgrades",
    label: "Best First Upgrades",
  },
  {
    id: "open-store",
    label: "How to Open Your Store",
  },
  {
    id: "pricing",
    label: "Set Item Prices",
  },
  {
    id: "customers",
    label: "Attract More Customers",
  },
  {
    id: "happiness",
    label: "Keep Workers Happy",
  },
  {
    id: "direct-control",
    label: "Direct Control Crafting",
  },
  {
    id: "beginner-problems",
    label: "Common Beginner Problems",
  },
  {
    id: "next-goal",
    label: "What to Do Next",
  },
];

const relatedLinks = [
  {
    href: "/blacksmith-master/mastery-tree",
    label: "Mastery Tree & Best Unlock Order",
  },
  {
    href: "/blacksmith-master/workshop-layout",
    label: "Workshop Layout & Production Bottlenecks",
  },
  {
    href: "/blacksmith-master/master-workers",
    label: "Master Workers & Siege Machines",
  },
  {
    href: "/blacksmith-master/achievements",
    label: "All 72 Achievements & Checklist",
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
    siteName: "Whisper of the House",
    title: metadataTitle,
    description: metadataDescription,
    images: [
      {
        url: heroImage,
        width: 1036,
        height: 672,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
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
          name: "Blacksmith Master",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      dateModified: "2026-11-20",
      image: imageUrls,
    },
  ],
};

export default function BlacksmithMasterPage() {
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
          gameTitle="Blacksmith Master"
          gameHref="/blacksmith-master"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BlacksmithMasterContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
