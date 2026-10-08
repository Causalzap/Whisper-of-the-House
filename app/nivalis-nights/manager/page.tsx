
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ManagerContent from "@/data/nivalis-nights/manager.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/manager`;

const metadataTitle =
  "Nivalis Nights Manager Guide: How to Unlock & Restock";

const metadataDescription =
  "Unlock Managers at Ramen Noir Level 3, automate ingredient restocking, understand delivery delays, and fix cash drain or unpaid staff.";

const articleTitle =
  "Nivalis Nights Manager: How to Hire, Restock & Fix Problems";

const articleDescription =
  "Unlock the Manager role at Ramen Noir Level 3, choose an employee and set their working hours. Learn when automatic restocking starts, how pending deliveries and Manager skill affect supplies, and what to do when orders stall or leave staff unpaid.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-3-manager.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-manager-hiring-screen.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-manager-ingredients-restocked.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "unlock-manager",
    label: "Unlock Manager at Level 3",
  },
  {
    id: "hire-manager",
    label: "Hire a Manager & Set Shifts",
  },
  {
    id: "manager-automation",
    label: "Restocking, Deliveries & Skill",
  },
  {
    id: "manager-cash-drain",
    label: "Why Staff Become Unpaid",
  },
  {
    id: "when-to-leave",
    label: "When You Can Leave Ramen Noir",
  },
  {
    id: "manager-not-restocking",
    label: "Manager Not Restocking",
  },
  {
    id: "recover-manager-cash",
    label: "Recover From Cash Drain",
  },
];

const relatedLinks = [
  {
    href: "/nivalis-nights/business-guide",
    label: "Ramen Noir Business & Profit Guide",
  },
  {
    href: "/nivalis-nights/beginner-guide",
    label: "Nivalis Nights Beginner Guide",
  },
  {
    href: "/nivalis-nights/fishing-guide",
    label: "Nivalis Nights Fishing Guide",
  },
  {
    href: "/nivalis-nights/farming-guide",
    label: "Nivalis Nights Farming Guide",
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
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Ramen Noir Level 3 unlocking the Manager role in Nivalis Nights",
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
          name: "Nivalis Nights",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Manager Guide",
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
      dateModified: "2026-10-08",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
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
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function NivalisNightsManagerPage() {
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
          title={articleTitle}
          description={articleDescription}
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 8, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ManagerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
