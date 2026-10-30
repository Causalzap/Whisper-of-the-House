
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SecurityInvestigationContent from "@/data/probably-stolen/security-investigation.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/probably-stolen`;
const pageUrl = `${hubUrl}/security-investigation`;

const metadataTitle =
  "Probably Stolen Security Guide & Investigation Calculator";

const metadataDescription =
  "Stop Security investigations in Probably Stolen. Calculate evidence progress, compare Wild's Fixers, and learn inspections, fines, arrest and VIP rules.";

const articleTitle =
  "How Do You Stop a Security Investigation in Probably Stolen?";

const articleDescription =
  "Check your Security Record, calculate how suspected crimes affect Investigation Progress, and compare Wild's Fixers I, II, and III. Understand natural evidence decay, Evidence Removal, Security reputation modifiers, VIP protection, inspections, and the conditions that can lead to fines, arrest, or execution.";

const imageUrls = [
  `${siteUrl}/images/probably-stolen/security-record-low-crime-example.webp`,
  `${siteUrl}/images/probably-stolen/security-record-mentor-document.webp`,
  `${siteUrl}/images/probably-stolen/security-joe-wild-evidence-removal.webp`,
  `${siteUrl}/images/probably-stolen/security-investigation-arrested-ending.webp`,
  `${siteUrl}/images/probably-stolen/security-inspection-confiscated-smoke-grenades.webp`,
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
    description:
      "Check your Security Record, predict investigation progress, compare Wild's Fixers, and understand arrest, execution, and VIP protection.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Probably Stolen Security Record showing suspected criminal activities, investigation progress and expected sentence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Predict investigation progress, compare Fixers costs, and understand Security penalties in Probably Stolen.",
    images: [imageUrls[0]],
  },
};

const toc = [
  {
    id: "investigation-calculator",
    label: "Investigation & Fixers Calculator",
  },
  {
    id: "security-record",
    label: "Find Your Security Record",
  },
  {
    id: "criminal-activities",
    label: "What Adds Criminal Evidence?",
  },
  {
    id: "investigation-progress",
    label: "Daily Investigation Progress",
  },
  {
    id: "wilds-fixers",
    label: "Wild's Fixers I, II & III",
  },
  {
    id: "evidence-removal",
    label: "Evidence Removal vs Fixers",
  },
  {
    id: "fine-arrest-execution",
    label: "Fine, Arrest & Execution",
  },
  {
    id: "inspection-vs-investigation",
    label: "Inspections vs Investigations",
  },
  {
    id: "vip-investigation",
    label: "Security VIP & Investigation",
  },
  {
    id: "what-to-do-now",
    label: "What to Do Before Morning",
  },
];

const relatedLinks = [
  {
    href: "/probably-stolen",
    label: "Probably Stolen Beginner Guide",
  },
  {
    href: "/probably-stolen/factions",
    label: "All Faction Reputation Perks & Penalties",
  },
  {
    href: "/probably-stolen/chemist",
    label: "Chemist: Dream Dust & Cartel Quotas",
  },
  {
    href: "/probably-stolen/augs",
    label: "Augs: Identification & Shotgun",
  },
  {
    href: "/probably-stolen/money-making",
    label: "Money-Making Planner & Profit Calculator",
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
          name: "Security Investigation & Fixers",
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
      datePublished: "2026-10-30",
      dateModified: "2026-10-30",
      about: [
        {
          "@type": "VideoGame",
          name: "Probably Stolen",
        },
        {
          "@type": "Thing",
          name: "Security investigations",
        },
        {
          "@type": "Thing",
          name: "Security Record and suspected criminal activities",
        },
        {
          "@type": "Thing",
          name: "Investigation progress and evidence decay",
        },
        {
          "@type": "Thing",
          name: "Wild's Fixers I, II and III",
        },
        {
          "@type": "Thing",
          name: "Joe Wild's Network and Evidence Removal",
        },
        {
          "@type": "Thing",
          name: "Security reputation and VIP protection",
        },
        {
          "@type": "Thing",
          name: "Security inspections and confiscation",
        },
        {
          "@type": "Thing",
          name: "Criminal fines, arrest and execution",
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description="Enter your Security Record to estimate investigation progress, compare Wild's Fixers costs, and decide how to reduce the risk of fines, arrest, or execution."
          gameTitle="Probably Stolen"
          gameHref="/probably-stolen"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SecurityInvestigationContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
