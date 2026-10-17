
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FranchiseGuideContent from "@/data/planet-zoo-2/franchise-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/franchise-guide`;

const metadataTitle =
  "Planet Zoo 2 Franchise Guide: Start a Zoo & Make Money";

const metadataDescription =
  "Build your first Planet Zoo 2 Franchise zoo, fix Trade Center paths and keeper access, set ticket prices, manage costs, and choose your first animals.";

const articleTitle =
  "Planet Zoo 2 Franchise Guide: How to Start a Zoo & Make Money";

const articleDescription =
  "Start your first Franchise Zoo, connect animal transport routes, manage staff and finances, choose affordable animals, and expand without running out of money.";

const pageDescription =
  "Build your first Franchise Zoo, fix animal delivery and keeper problems, earn money from tickets and donations, and decide when to expand.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/franchise-guide-trade-center-path.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-guide-income-expenses.webp`,
  `${siteUrl}/images/planet-zoo-2/franchise-guide-ticket-price-feedback.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "How to Start a Franchise Zoo",
  },
  {
    id: "start-franchise",
    label: "Start Your First Franchise Zoo",
  },
  {
    id: "trade-center-paths",
    label: "Fix Trade Center Path Problems",
  },
  {
    id: "make-money",
    label: "How to Make Money",
  },
  {
    id: "early-animal-choices",
    label: "Which Animals to Buy First",
  },
  {
    id: "staff-not-working",
    label: "Why Keepers Aren't Feeding Animals",
  },
  {
    id: "breeding-population",
    label: "Prevent Habitat Overcrowding",
  },
  {
    id: "when-to-expand",
    label: "When to Expand Your Franchise",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2: Career & Franchise Guide",
  },
  {
    href: "/planet-zoo-2/franchise-accreditation",
    label: "Franchise Accreditation: All 5 Tiers",
  },
  {
    href: "/planet-zoo-2/franchise-breeding",
    label: "How to Stop Inbreeding & Overcrowding",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves: Releases & Ecosystems",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    images: imageUrls,
    publishedTime: "2026-10-17",
    modifiedTime: "2026-10-17",
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
          name: "Planet Zoo 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Franchise Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-17",
      dateModified: "2026-10-17",
      articleSection: "Planet Zoo 2 Franchise Mode",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "VideoGame",
        name: "Planet Zoo 2",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
      inLanguage: "en",
    },
  ],
};

export default function PlanetZoo2FranchiseGuidePage() {
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
          description={pageDescription}
          gameTitle="Planet Zoo 2"
          gameHref="/planet-zoo-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FranchiseGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
