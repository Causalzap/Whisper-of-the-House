import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FinalEndeavorWalkthroughContent from "@/data/aliens-fireteam-elite-2/final-endeavor-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/final-endeavor-walkthrough`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Final Endeavor Walkthrough";

const metadataDescription =
  "Clear Final Endeavor, escape the first Queen encounter, and beat the Xenomorph Queen with the lockdown, lab route, arena strategy, and ending explained.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-override-lockdown.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-control-intel.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-first-encounter.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-boss-fight.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-final-endeavor-queen-defeated.webp`,
];

const toc = [
  {
    id: "final-endeavor-walkthrough",
    label: "Final Endeavor overview",
  },
  {
    id: "follow-dr-pierce-through-the-mines",
    label: "Follow Dr. Pierce",
  },
  {
    id: "search-dr-pierces-final-lab",
    label: "Dr. Pierce's final lab",
  },
  {
    id: "escape-the-first-xenomorph-queen-encounter",
    label: "First Queen encounter",
  },
  {
    id: "how-to-beat-the-xenomorph-queen",
    label: "Xenomorph Queen fight",
  },
  {
    id: "what-happens-after-defeating-the-queen",
    label: "After the Queen",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2",
    label: "Aliens: Fireteam Elite 2 Guide Hub",
  },
  {
    href: "/aliens-fireteam-elite-2/walkthrough",
    label: "Complete Campaign Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
    label: "Ancient Anomaly Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/achievements",
    label: "All 30 Achievements",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Final Xenomorph Queen boss fight in Aliens Fireteam Elite 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[3]],
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
          name: "Aliens: Fireteam Elite 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Final Endeavor Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Final Endeavor Walkthrough",
      description:
        "A complete Final Endeavor walkthrough covering the pursuit of Dr. Pierce through the mines, lockdown override, final laboratory intel, the first Xenomorph Queen escape sequence, the real Queen boss fight, ammunition and add management, arena positioning, and the final campaign report.",
      url: pageUrl,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      dateModified: "2026-08-26",
      author: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
      isPartOf: {
        "@type": "WebSite",
        name: "Whisper of the House",
        url: siteUrl,
      },
      about: {
        "@type": "VideoGame",
        name: "Aliens: Fireteam Elite 2",
      },
    },
  ],
};

export default function FinalEndeavorWalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Final Endeavor Walkthrough & Xenomorph Queen Boss Guide"
          description="My route through the final mission, including the mine lockdown, Dr. Pierce's lab, why the first Queen encounter is an escape, and how I handle the real Queen fight."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FinalEndeavorWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}