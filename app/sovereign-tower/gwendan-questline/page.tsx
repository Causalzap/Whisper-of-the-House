import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GwendanQuestlineContent from "@/data/sovereign-tower/gwendan-questline.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/sovereign-tower`;
const pageUrl = `${hubUrl}/gwendan-questline`;

const metadataTitle =
  "Sovereign Tower Gwendan Guide: Murder, Debt & True Noble Soul";

const metadataDescription =
  "Solve Gwendan's debt and Tower murder route, dismiss him before the murder, save the victim, and continue toward the True Noble Soul achievement.";

const imageUrls = [
  `${siteUrl}/images/sovereign-tower/sovereign-tower-gwendan-inconsistent-evidence.webp`,
  `${siteUrl}/images/sovereign-tower/sovereign-tower-gwendan-dismiss-before-murder.webp`,
];

const toc = [
  {
    id: "gwendan-route",
    label: "Gwendan route",
  },
  {
    id: "gwendan-debt",
    label: "350 Gold debt",
  },
  {
    id: "tower-murder",
    label: "Tower murder",
  },
  {
    id: "investigate-gwendan",
    label: "Investigate Gwendan",
  },
  {
    id: "confront-gwendan",
    label: "Confront Gwendan",
  },
  {
    id: "murder-intervention",
    label: "Murder intervention",
  },
  {
    id: "dismiss-gwendan",
    label: "Dismiss Gwendan",
  },
  {
    id: "verify-murder",
    label: "Verify the murder is stopped",
  },
  {
    id: "recall-gwendan",
    label: "Recall Gwendan",
  },
  {
    id: "gwendan-debt-afterward",
    label: "Debt aftermath",
  },
  {
    id: "true-noble-soul",
    label: "True Noble Soul",
  },
  {
    id: "gwendan-stuck",
    label: "Gwendan troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/sovereign-tower",
    label: "Sovereign Tower Guide Hub",
  },
  {
    href: "/sovereign-tower/demon-power",
    label: "Demon Power & Rewind Guide",
  },
  {
    href: "/sovereign-tower/act-2-walkthrough",
    label: "Act 2 Walkthrough",
  },
  {
    href: "/sovereign-tower/king-slayer",
    label: "King Slayer Guide",
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
    title: "Sovereign Tower Gwendan Questline Guide",
    description:
      "Investigate Gwendan's role in the Tower murder, learn what his debt does and does not change, dismiss him before the murder, and continue his personal route.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Gwendan presenting inconsistent evidence during the Tower murder investigation in Sovereign Tower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovereign Tower Gwendan Guide",
    description:
      "Follow Gwendan's debt, murder investigation, dismissal route, and True Noble Soul objective.",
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
          name: "Sovereign Tower Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gwendan Questline Guide",
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
        "Sovereign Tower Gwendan Questline Guide: Debt, Tower Murder, Dismissal, and True Noble Soul",
      description:
        "A player-focused Sovereign Tower Gwendan guide covering his 350 Gold debt, why paying it does not prevent the Tower murder, how assigning Gwendan to the investigation can reveal suspicious and inconsistent evidence, what his confrontation reveals about the strange whispers and occult influence, how I returned to a Before murder point and temporarily dismissed him from Tower View, why dismissal is reversible through the Map Room, how I verified that the murder did not happen in the new timeline, and how Gwendan's later personal problems connect to the True Noble Soul achievement.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-09",
      dateModified: "2026-08-09",
      articleSection: "Sovereign Tower Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Sovereign Tower",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gwendan",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gwendan questline",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Gwendan debt",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower 350 Gold debt",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower Tower murder",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower murder investigation",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower inconsistent evidence",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower dismiss Gwendan",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower save murder victim",
        },
        {
          "@type": "Thing",
          name: "Sovereign Tower True Noble Soul",
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
          title="Solve Gwendan's Murder Route Without Losing Him Forever"
          description="Separate the 350 Gold debt from the real murder solution, investigate Gwendan until the occult influence becomes clear, then remove him before the murder and verify the new timeline."
          gameTitle="Sovereign Tower"
          gameHref="/sovereign-tower"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 9, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GwendanQuestlineContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}