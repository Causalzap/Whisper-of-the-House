import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import ManagerContent from "@/data/nivalis-nights/manager.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/nivalis-nights`;
const pageUrl = `${hubUrl}/manager`;

const metadataTitle =
  "Nivalis Nights Manager Guide: How to Unlock, Hire & Automate Ramen Noir";

const metadataDescription =
  "Unlock the Manager at Ramen Noir, reach Venue Level 3, assign the right worker, automate ingredient restocks, and fix cash drain or unpaid staff.";

const articleDescription =
  "A practical Nivalis Nights Manager guide covering how Ramen Noir reaches Venue Level 3, how the Manager role unlocks, which worker to assign, what Manager automation actually handles, why automatic restocking can leave staff unpaid, and how to tell when the restaurant is ready to run without you.";

const imageUrls = [
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-3-manager.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-manager-hiring-screen.webp`,
  `${siteUrl}/images/nivalis-nights/nivalis-nights-manager-ingredients-restocked.webp`,
];

const heroImage =
  `${siteUrl}/images/nivalis-nights/nivalis-nights-ramen-noir-level-3-manager.webp`;

const toc = [
  {
    id: "unlock-manager",
    label: "How to Reach Level 3 and Unlock the Manager",
  },
  {
    id: "hire-manager",
    label: "How to Hire or Assign a Manager",
  },
  {
    id: "manager-automation",
    label: "What Does a Manager Actually Automate?",
  },
  {
    id: "manager-cash-drain",
    label: "Why Can a Manager Leave Staff Unpaid?",
  },
  {
    id: "when-to-leave",
    label: "When Is Ramen Noir Ready to Be Left Alone?",
  },
  {
    id: "manager-not-restocking",
    label: "What to Check if the Manager Is Not Restocking",
  },
  {
    id: "recover-manager-cash",
    label: "How to Recover From Manager Cash Drain",
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
        alt: "Nivalis Nights Ramen Noir reaching Venue Level 3 and unlocking the Manager role",
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
      headline: metadataTitle,
      description: articleDescription,
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-10-01",
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
          title="Nivalis Nights Manager Guide: How to Unlock and Use a Manager"
          description="Reach Ramen Noir Level 3, assign the right worker, confirm automatic restocking is working, and avoid the cash drain that can leave staff unpaid."
          gameTitle="Nivalis Nights"
          gameHref="/nivalis-nights"
          breadcrumbBaseHref="/nivalis-nights"
          breadcrumbBaseLabel="Nivalis Nights"
          updatedAt="October 1, 2026"
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