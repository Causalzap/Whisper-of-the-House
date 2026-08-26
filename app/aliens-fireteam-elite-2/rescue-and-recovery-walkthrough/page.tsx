import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RescueAndRecoveryWalkthroughContent from "@/data/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/rescue-and-recovery-walkthrough`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Rescue & Recovery Walkthrough";

const metadataDescription =
  "Clear Piping Hot, Breaking and Entering, and Synth Headache with the jammer, intel terminals, Esther route, turrets, and extraction explained.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-piping-hot-crash-site.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-piping-hot-signal-jammer.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-breaking-and-entering-intel-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-breaking-and-entering-holdout.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-synth-headache-find-esther.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-synth-headache-landing-protocol.webp`,
];

const toc = [
  {
    id: "rescue-and-recovery-walkthrough-for-all-three-missions",
    label: "Rescue and Recovery overview",
  },
  {
    id: "piping-hot",
    label: "Piping Hot",
  },
  {
    id: "breaking-and-entering",
    label: "Breaking and Entering",
  },
  {
    id: "synth-headache",
    label: "Synth Headache",
  },
  {
    id: "what-to-do-after-rescue-and-recovery",
    label: "After Rescue and Recovery",
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
    href: "/aliens-fireteam-elite-2/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/aliens-fireteam-elite-2/boarding-party-walkthrough",
    label: "Boarding Party Walkthrough",
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
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Signal jammer controls in Data Storage during Piping Hot in Aliens Fireteam Elite 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[1]],
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
          name: "Rescue and Recovery Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Rescue and Recovery Walkthrough",
      description:
        "A complete walkthrough for the Rescue and Recovery campaign, covering Piping Hot, Breaking and Entering, and Synth Headache. The guide explains the Storr's Boon crash-site route, Data Storage signal jammer, Ventilation Room rescue, corrupted high-rise intel terminals, three security resets, Esther's location, two live turrets, landing protocol, and final extraction holdout.",
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

export default function RescueAndRecoveryWalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Rescue and Recovery Walkthrough: Piping Hot, Breaking and Entering & Synth Headache"
          description="My route through all three Rescue and Recovery missions, from finding Piper and disabling the jammer to recovering Esther and surviving the final landing-pad holdout."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RescueAndRecoveryWalkthroughContent />
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