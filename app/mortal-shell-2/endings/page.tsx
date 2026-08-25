import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndingsContent from "@/data/mortal-shell-2/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Mortal Shell 2 Endings Guide: Main & Baghead Secret Ending";

const metadataDescription =
  "Mortal Shell 2 has two endings: Baghead's secret ending and the main ending. Get both in one run and know when Send Ova starts New Game Plus.";

const articleDescription =
  "A complete Mortal Shell 2 endings guide covering both ending sequences, Baghead's nothing quest and Special Moonshine solution, the Bag Holder achievement, the 168 Ova requirement, Walk the Unfound Path, Zmey the Unbidden, the real Send Ova point of no return, the main ending, and New Game Plus.";

const imageUrls = [
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-baghead-joke-ending.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-walk-the-unfound-path.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-zmey-the-unbidden-final-boss.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-foul-passenger-defeated.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-ending-send-kin-to-heavens.webp`,
  `${siteUrl}/images/mortal-shell-2/mortal-shell-2-ending-harbinger-stays-behind.webp`,
];

const toc = [
  {
    id: "how-many-endings",
    label: "How many endings?",
  },
  {
    id: "baghead-secret-ending",
    label: "Baghead secret ending",
  },
  {
    id: "what-happens-baghead-ending",
    label: "What happens after Baghead?",
  },
  {
    id: "bag-holder",
    label: "Bag Holder achievement",
  },
  {
    id: "main-ending",
    label: "Main ending requirements",
  },
  {
    id: "when-ending-starts",
    label: "When the final stretch starts",
  },
  {
    id: "unfound-path",
    label: "Unfound Path",
  },
  {
    id: "zmey-final-boss",
    label: "Zmey final boss",
  },
  {
    id: "after-zmey",
    label: "Can you play after Zmey?",
  },
  {
    id: "point-of-no-return",
    label: "Point of no return",
  },
  {
    id: "send-kin-to-heavens",
    label: "Main ending",
  },
  {
    id: "harbinger-stays-behind",
    label: "Why the Harbinger stays",
  },
  {
    id: "ending-meaning",
    label: "Ending explained",
  },
  {
    id: "ending-choice",
    label: "Good or bad ending?",
  },
  {
    id: "can-you-keep-playing",
    label: "Can you keep playing?",
  },
  {
    id: "best-ending-order",
    label: "Best order for both endings",
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
    label: "Best Weapons & Weapon Tier List",
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
    description:
      "Mortal Shell 2 has two ending sequences. Get Baghead's secret ending, finish the Unfound Path and Zmey, then use Send Ova when you are ready for New Game Plus.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-25",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Baghead secret ending in Mortal Shell 2",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Get both Mortal Shell 2 endings in one run, solve Baghead's nothing quest, beat Zmey, and know why Send Ova is the real point of no return.",
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
        "Mortal Shell 2 Endings Guide: Main & Baghead Secret Ending",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-25",
      articleSection: "Mortal Shell 2 Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Mortal Shell II",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 endings",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 ending",
        },
        {
          "@type": "Thing",
          name: "Mortal Shell 2 secret ending",
        },
        {
          "@type": "Thing",
          name: "Baghead ending",
        },
        {
          "@type": "Thing",
          name: "Baghead secret ending",
        },
        {
          "@type": "Thing",
          name: "Bag Holder",
        },
        {
          "@type": "Thing",
          name: "Special Moonshine",
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
          name: "Send Ova",
        },
        {
          "@type": "Thing",
          name: "New Game Plus",
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
          name: "Gloom Siphon",
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
          title="Mortal Shell 2 Endings Guide: Main & Baghead Secret Ending"
          description="There are two ending sequences I can get in one playthrough. I do Baghead's secret ending first, then finish the Unfound Path and Zmey before using Send Ova for the main ending and New Game Plus."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 25, 2026"
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