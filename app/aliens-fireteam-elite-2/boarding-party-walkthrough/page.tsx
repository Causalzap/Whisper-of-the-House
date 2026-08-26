import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BoardingPartyWalkthroughContent from "@/data/aliens-fireteam-elite-2/boarding-party-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/aliens-fireteam-elite-2`;
const pageUrl = `${hubUrl}/boarding-party-walkthrough`;

const metadataTitle =
  "Aliens Fireteam Elite 2 Boarding Party Walkthrough";

const metadataDescription =
  "Clear all three Boarding Party missions with the warhead terminals, Cargo Bay upload, cryopods, Engine Bay route, and final holdout explained.";

const imageUrls = [
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-bomb-squad-warheads.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-bomb-squad-third-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-dumpster-diving-cargo-terminal.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-mission-3-3-cryopods.webp`,
  `${siteUrl}/images/aliens-fireteam-elite-2/aliens-fireteam-elite-2-boarding-party-engine-bay.webp`,
];

const toc = [
  {
    id: "boarding-party-walkthrough-for-all-three-missions",
    label: "Boarding Party overview",
  },
  {
    id: "bomb-squad",
    label: "Bomb Squad",
  },
  {
    id: "dumpster-diving",
    label: "Dumpster Diving",
  },
  {
    id: "mission-3-3",
    label: "Mission 3.3",
  },
  {
    id: "what-to-do-after-boarding-party",
    label: "After Boarding Party",
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
    href: "/aliens-fireteam-elite-2/rescue-and-recovery-walkthrough",
    label: "Rescue and Recovery Walkthrough",
  },
  {
    href: "/aliens-fireteam-elite-2/rock-bottom-walkthrough",
    label: "Rock Bottom Walkthrough",
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
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Warheads aboard the Demetrius during the Boarding Party campaign in Aliens Fireteam Elite 2",
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
          name: "Boarding Party Walkthrough",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline:
        "Aliens: Fireteam Elite 2 Boarding Party Walkthrough",
      description:
        "A complete Boarding Party campaign guide covering Bomb Squad, Dumpster Diving, and Mission 3.3 aboard the Demetrius, including the three warhead terminals, Maintenance and Life Support route, Cargo Bay upload defense, empty cryopods, Electrical intel, Engine Bay objective, and final extraction holdout.",
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

export default function BoardingPartyWalkthroughPage() {
  return (
    <>
      <Header />

      <main>
        <GuideArticlePage
          title="Boarding Party Walkthrough: Bomb Squad, Dumpster Diving & Mission 3.3"
          description="My full route through all three Demetrius missions, including the warhead controls, Cargo Bay upload, cryopods, Engine Bay, and the places where the objective can look finished before it really is."
          gameTitle="Aliens: Fireteam Elite 2"
          gameHref="/aliens-fireteam-elite-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BoardingPartyWalkthroughContent />
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