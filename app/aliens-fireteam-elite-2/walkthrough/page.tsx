import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import WalkthroughContent from "@/data/aliens-fireteam-elite-2/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Walkthrough & Mission Order";

const metadataDescription =
  "Follow all 14 campaign missions in order, learn what unlocks each stage, fix locked mission cards, and continue from Prologue through Final Endeavor.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-walkthrough-rescue-and-recovery-mission-order.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-walkthrough-boarding-party-launch.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-walkthrough-rock-bottom-launch.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-walkthrough-final-endeavor-launch.webp`,
];

const toc = [
  {
    id: "complete-campaign-order",
    label: "All 14 missions",
  },
  {
    id: "prologue-banshee-down",
    label: "Prologue",
  },
  {
    id: "rescue-and-recovery",
    label: "Rescue and Recovery",
  },
  {
    id: "boarding-party",
    label: "Boarding Party",
  },
  {
    id: "rock-bottom",
    label: "Rock Bottom",
  },
  {
    id: "ancient-anomaly",
    label: "Ancient Anomaly",
  },
  {
    id: "final-endeavor",
    label: "Final Endeavor",
  },
  {
    id: "next-mission-not-unlocking",
    label: "Next mission locked?",
  },
  {
    id: "what-to-do-after-finishing-the-campaign",
    label: "After the campaign",
  },
];

const relatedLinks = [
  {
    href: "/aliens-fireteam-elite-2",
    label: "Aliens: Fireteam Elite 2 Guide Hub",
  },
  {
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough",
    label: "Rescue and Recovery Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/boarding-party-walkthrough",
    label: "Boarding Party Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/rock-bottom-walkthrough",
    label: "Rock Bottom Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/ancient-anomaly-walkthrough",
    label: "Ancient Anomaly Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/final-endeavor-walkthrough",
    label: "Final Endeavor Walkthrough",
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
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Aliens Fireteam Elite 2 campaign mission order",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
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
          name: "Aliens: Fireteam Elite 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Walkthrough and Mission Order",
      description:
        "A complete Aliens: Fireteam Elite 2 campaign walkthrough covering all 14 missions across Prologue, Rescue and Recovery, Boarding Party, Rock Bottom, Ancient Anomaly, and Final Endeavor, including Combat Rating milestones, Endeavor debrief requirements, locked mission troubleshooting, and what to do after completing the campaign.",
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

export default function WalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Aliens Fireteam Elite 2 Walkthrough: All 14 Missions in Order"
          description="The full campaign order from Banshee Down to Reckoning, including when to return to the Endeavor, why the next mission can stay locked, and which detailed walkthrough to use when a specific campaign becomes the blocker."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <WalkthroughContent />
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