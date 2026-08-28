import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DarkWatersContent from "@/data/star-wars-zero-company/dark-waters-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/star-wars-zero-company`;
const pageUrl = `${hubUrl}/dark-waters-walkthrough`;

const metadataTitle =
  "Dark Waters Walkthrough: Takali Canal, Fathom & Tel-Rea";

const metadataDescription =
  "Drain Takali Canal, reach Fathom, learn why Hawks cannot take the shot, rescue the converts, and finish Dark Waters with Tel-Rea.";

const imageUrls = [
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-dark-waters-takali-canal-lock.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-dark-waters-enter-tunnels.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-dark-waters-fathom-initiation.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-dark-waters-jedi-rescue-converts.webp`,
  `${siteUrl}/images/star-wars-zero-company/star-wars-zero-company-dark-waters-tel-rea-first-meeting.webp`,
];

const toc = [
  {
    id: "dark-waters-route",
    label: "Dark Waters route",
  },
  {
    id: "reach-canal-lock",
    label: "Reach the canal lock",
  },
  {
    id: "drain-takali-canal",
    label: "Drain Takali Canal",
  },
  {
    id: "follow-tunnels",
    label: "Follow the tunnels",
  },
  {
    id: "find-fathom",
    label: "Why you cannot shoot Fathom",
  },
  {
    id: "free-converts",
    label: "Free the converts",
  },
  {
    id: "meet-tel-rea",
    label: "Meet Tel-Rea",
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
    href: "/star-wars-zero-company/smugglers-den-walkthrough",
    label: "Smuggler's Den & Tel-Rea Guide",
  },
  {
    href: "/star-wars-zero-company/achievements-trophies",
    label: "Achievements & Trophies Guide",
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
    title: "Dark Waters Walkthrough: Takali Canal, Fathom & Tel-Rea",
    description:
      "Follow the Dark Waters route through Takali Canal and the underground caverns, then handle Fathom's initiation and Tel-Rea's first appearance.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Takali Canal lock during Dark Waters in STAR WARS Zero Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Waters Walkthrough: Takali Canal, Fathom & Tel-Rea",
    description:
      "Drain the canal, find Fathom, learn why the shot is blocked, rescue the converts, and meet Tel-Rea.",
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
          name: "Dark Waters Walkthrough",
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
        "Dark Waters Walkthrough: Takali Canal, Fathom and Tel-Rea in STAR WARS Zero Company",
      description:
        "A player-focused STAR WARS Zero Company Dark Waters walkthrough covering the route to the distal Takali Canal lock, how to drain the canal and reveal the underground entrance, how to follow the caverns to Fathom's initiation, why Hawks cannot take the shot while civilians are present, how the convert rescue works, and why Tel-Rea does not join Zero Company after this first meeting.",
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
          name: "STAR WARS Zero Company Dark Waters",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Takali Canal",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company drain canal",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Fathom",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company cannot shoot Fathom",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Tel-Rea",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Shadow Plague",
        },
        {
          "@type": "Thing",
          name: "STAR WARS Zero Company Fathom Revealed",
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
          title="Drain Takali Canal and Follow Fathom Underground"
          description="I drain the canal to reveal the tunnel, follow the caverns to Fathom's initiation, wait when civilians block the shot, then hold the Coil while Tel-Rea gets the converts out."
          gameTitle="STAR WARS Zero Company"
          gameHref="/star-wars-zero-company"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DarkWatersContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}