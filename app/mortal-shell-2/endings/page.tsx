import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EndingsContent from "@/data/mortal-shell-2/endings.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/mortal-shell-2`;
const pageUrl = `${hubUrl}/endings`;

const metadataTitle =
  "Mortal Shell 2 All Endings Guide: Main & Baghead Secret";

const metadataDescription =
  "Find both Mortal Shell 2 endings, what the true ending means, how to get Baghead's secret ending, and why Send Ova is the point of no return.";

const articleDescription =
  "All Mortal Shell 2 endings, including the Baghead secret ending, the 168 Ova main route, Walk the Unfound Path, Zmey the Unbidden, the Send Ova point of no return, the true ending question, and New Game Plus.";

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
    id: "true-ending",
    label: "Is there a true ending?",
  },
  {
    id: "baghead-secret-ending",
    label: "Baghead secret ending",
  },
  {
    id: "baghead-ending-result",
    label: "After the Baghead ending",
  },
  {
    id: "main-ending",
    label: "Main ending",
  },
  {
    id: "point-of-no-return",
    label: "Send Ova point of no return",
  },
  {
    id: "main-ending-result",
    label: "Main ending result",
  },
  {
    id: "ending-explained",
    label: "Ending explained",
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
    href: "/mortal-shell-2/achievements",
    label: "Achievements Guide",
  },
  {
    href: "/mortal-shell-2/all-shells-locations",
    label: "All Shell Locations",
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
      "Get both Mortal Shell 2 endings in one run, solve Baghead's secret ending, defeat Zmey, and use Send Ova only when you are ready for New Game Plus.",
    siteName: "Whisper of the House",
    publishedTime: "2026-08-18",
    modifiedTime: "2026-08-27",
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
      "All Mortal Shell 2 endings, Baghead's secret ending, the main ending, Send Ova, the true ending question, and New Game Plus.",
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
          name: "All Endings Guide",
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
        "All Mortal Shell 2 Endings: Main Story & Baghead Secret Ending",
      description: articleDescription,
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-18",
      dateModified: "2026-08-27",
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
          name: "Main story ending",
        },
        {
          "@type": "Thing",
          name: "Baghead secret ending",
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
          title="All Mortal Shell 2 Endings: Main Story & Baghead Secret Ending"
          description="There are two ending sequences I can see in one playthrough: Baghead's secret ending and the main Send Ova finale. Baghead lets me continue the same save, while Send Ova commits the current cycle and starts New Game Plus."
          gameTitle="Mortal Shell 2"
          gameHref="/mortal-shell-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 27, 2026"
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