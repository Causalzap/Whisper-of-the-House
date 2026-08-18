import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndingsContent from "@/data/mortal-shell-2/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Mortal Shell 2 Endings Guide: Send Ova & Baghead Ending";

const metadataDescription =
  "See the Mortal Shell 2 main ending, what happens after Zmey, when Send Ova becomes the point of no return, and how the Baghead joke ending works.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-walk-the-unfound-path.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-zmey-the-unbidden-final-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-foul-passenger-defeated.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-ending-send-kin-to-heavens.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-ending-harbinger-stays-behind.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-baghead-joke-ending.webp`,
];

const toc = [
  {
    id: "when-endgame-starts",
    label: "When the endgame starts",
  },
  {
    id: "unfound-path-point-of-no-return",
    label: "Is Unfound Path a point of no return?",
  },
  {
    id: "what-unfound-path-means",
    label: "What the Unfound Path means",
  },
  {
    id: "before-zmey",
    label: "Before Zmey",
  },
  {
    id: "zmey",
    label: "Zmey, the Unbidden",
  },
  {
    id: "after-zmey",
    label: "What happens after Zmey",
  },
  {
    id: "send-ova",
    label: "Send Ova point of no return",
  },
  {
    id: "main-ending",
    label: "Main ending",
  },
  {
    id: "ending-explained",
    label: "Ending explained",
  },
  {
    id: "opening-connection",
    label: "Connection to the opening",
  },
  {
    id: "ending-choice",
    label: "Is there an ending choice?",
  },
  {
    id: "baghead-ending",
    label: "Baghead joke ending",
  },
  {
    id: "baghead-after-credits",
    label: "After Baghead's credits",
  },
  {
    id: "which-ending-is-main",
    label: "Which ending is the main ending?",
  },
  {
    id: "before-send-ova",
    label: "Before I choose Send Ova",
  },
];

const relatedLinks = [
  {
    href: "/mortal-shell-2",
    label: "Mortal Shell 2 Guide Hub",
  },
  {
    href: "/mortal-shell-2/progression-guide",
    label: "Progression Guide",
  },
  {
    href: "/mortal-shell-2/ova-gloom-siphon",
    label: "Ova, Gloom Siphon & Mether's Breath",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
  },
  {
    href: "/mortal-shell-2/weapons-guide",
    label: "Weapons Guide",
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
    title: "Mortal Shell 2 Endings: Send Ova & Baghead Explained",
    description:
      "See what happens after Zmey, why Send Ova is the real commitment point, what the main ending means, and how Baghead's joke ending works.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-18",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Walk the Unfound Path endgame objective in Mortal Shell 2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortal Shell 2 Endings: Send Ova & Baghead Explained",
    description:
      "What happens after Zmey, when the real point of no return occurs, the main ending explained, and how to trigger the Baghead joke ending.",
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
          name: "Mortal Shell 2 Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Endings Guide",
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
        "Mortal Shell 2 Endings Guide: Main Ending, Send Ova and Baghead Ending",
      description:
        "A complete Mortal Shell 2 endings guide covering the Walk the Unfound Path objective, Zmey the Unbidden, what happens after the final boss, the cleanup window at Marrow Keep, why Send Ova is the actual end-of-playthrough commitment, the main ending and Harbinger's fate, and the separate Baghead joke ending.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-18",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 ending",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 endings",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 ending explained",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 point of no return",
        },
        {
          "@type": "Thing",
          name: "Send Ova",
        },
        {
          "@type": "Thing",
          name: "Baghead ending",
        },
        {
          "@type": "Thing",
          name: "Walk the Unfound Path",
        },
        {
          "@type": "Thing",
          name: "Zmey, the Unbidden",
        },
        {
          "@type": "Thing",
          name: "Foul Passenger",
        },
        {
          "@type": "Thing",
          name: "Harbinger",
        },
        {
          "@type": "Thing",
          name: "Undermether",
        },
        {
          "@type": "Thing",
          name: "Ova Siphon",
        },
        {
          "@type": "Thing",
          name: "Marrow Keep",
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
          title="Mortal Shell 2 Endings and the Point I Actually Commit"
          description="I finish the Unfound Path and Zmey first, use the post-boss cleanup window, then choose Send Ova when I am ready for the main ending. Baghead has a separate joke ending."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 18, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EndingsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}