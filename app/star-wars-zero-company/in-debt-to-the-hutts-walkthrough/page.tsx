import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import InDebtToTheHuttsContent from "@/data/star-wars-zero-company/in-debt-to-the-hutts-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/in-debt-to-the-hutts-walkthrough`;

const metadataTitle =
  "In Debt to the Hutts Walkthrough: 80,000 Credits Guide";

const metadataDescription =
  "Do not grind 80,000 Credits in Zero Company. Follow Brookner, Lothal and Gorga's Critical jobs until Republic Intelligence pays the debt.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-in-debt-80000-nine-cycles.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-brookner-choice.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-lothal-pirates-mission.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-republic-intelligence-debt-payment.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-payback-operation.webp`,
];

const toc = [
  {
    id: "how-to-pay-80000-credit-debt",
    label: "Pay the 80,000-Credit debt",
  },
  {
    id: "brookner-operation",
    label: "Brookner Operations",
  },
  {
    id: "brookner-choice",
    label: "Brookner choice",
  },
  {
    id: "lothal-pirates",
    label: "Lothal pirates",
  },
  {
    id: "kaller-or-dantooine",
    label: "Kaller or Dantooine",
  },
  {
    id: "republic-intelligence-contract",
    label: "Republic Intelligence",
  },
  {
    id: "launch-payback",
    label: "Payback",
  },
];

const relatedLinks = [
  {
    href: "/star-wars-zero-company",
    label: "STAR WARS Zero Company Guide Hub",
  },
  {
    href: "/star-wars-zero-company/walkthrough",
    label: "Complete Walkthrough & Mission Order",
  },
  {
    href: "/star-wars-zero-company/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/star-wars-zero-company/dark-waters-walkthrough",
    label: "Dark Waters Walkthrough",
  },
  {
    href: "/star-wars-zero-company/classes-specializations",
    label: "Classes & Specializations Guide",
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
    title: "In Debt to the Hutts Walkthrough: 80,000 Credits",
    description:
      "Follow the Gorga debt route through Brookner, Lothal, Kaller or Dantooine, the Republic Intelligence payment, and Payback without grinding 80,000 Credits.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "STAR WARS Zero Company showing an 80,000-Credit debt to Gorga with nine Cycles remaining",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In Debt to the Hutts Walkthrough: 80,000 Credits",
    description:
      "Do not farm the full debt. Follow Gorga's Critical chain until Republic Intelligence gives Zero Company enough money to repay him.",
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
          name: "STAR WARS Zero Company Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "In Debt to the Hutts",
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
        "In Debt to the Hutts Walkthrough: How to Pay the 80,000-Credit Debt in STAR WARS Zero Company",
      description:
        "A player-focused STAR WARS Zero Company walkthrough for In Debt to the Hutts explaining why I do not grind the displayed 80,000-Credit debt, how the nine-Cycle deadline works, why I reserve Intel for Brookner's Critical Operations, what changes between letting Brookner disappear and handing him to Gorga, how Lothal and the Kaller or Dantooine choice advance the chain, when Republic Intelligence provides enough money to cover the debt, and why I resolve Payback before advancing another Tactical Mission.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-28",
      dateModified: "2026-08-28",
      articleSection: "STAR WARS Zero Company Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "STAR WARS Zero Company",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company In Debt to the Hutts",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company 80,000 Credits",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Gorga debt",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Brookner",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Brookner choice",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Lothal",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Kaller",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Dantooine",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Republic Intelligence",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Payback",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Do Not Grind the 80,000-Credit Debt"
          description="I treat Gorga's debt as a Critical progression problem, keep enough Intel for Brookner, move through Lothal and the next contract, then use the Republic Intelligence payment to clear the debt through Payback."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <InDebtToTheHuttsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}