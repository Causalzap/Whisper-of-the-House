import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import BigWalkBlackTowerContent from "@/data/big-walk/black-tower.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-walk`;
const pageUrl = `${hubUrl}/black-tower`;

const imageUrls = [
  `${siteUrl}/images/big-walk/big-walk-black-tower-monolith-location.webp`,
  `${siteUrl}/images/big-walk/big-walk-black-tower-simultaneous-trigger.webp`,
  `${siteUrl}/images/big-walk/big-walk-black-tower-vision-eye.webp`,
  `${siteUrl}/images/big-walk/big-walk-black-key-reward.webp`,
  `${siteUrl}/images/big-walk/big-walk-black-key-wall-slot.webp`,
  `${siteUrl}/images/big-walk/big-walk-black-wall-open.webp`,
];

export const metadata: Metadata = {
  title: "Big Walk Black Tower Guide: Black Key, Vision & Wall",
  description:
    "Find the Black Tower, trigger the vision, get the Black Key, carry it to the Wall, and open the gate toward the black sphere.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Big Walk Black Tower and Black Key Guide",
    description:
      "Reach the Black Tower, complete its progression requirement, get the Black Key, and use it at the Wall before the final sphere route.",
    siteName: "Whisper of the House",
    images: [
      {
        url: `${siteUrl}/images/big-walk/big-walk-black-key-wall-slot.webp`,
        alt: "Big Walk Black Key being used at the Wall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Walk Black Tower and Black Key Guide",
    description:
      "Complete the Black Tower, get the Black Key, and open the Wall leading toward the black sphere.",
    images: [
      `${siteUrl}/images/big-walk/big-walk-black-key-wall-slot.webp`,
    ],
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
          name: "Big Walk Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Black Tower Guide",
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
        "Big Walk Black Tower Guide: Black Key, Vision, Wall and Gate",
      description:
        "A Big Walk Black Tower guide covering the monolith location, synchronized trigger, vision sequence, completion requirement, Black Key, Wall gate, and transition toward the black sphere.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-10",
      dateModified: "2026-08-10",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Walk",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Tower",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Key",
        },
        {
          "@type": "Thing",
          name: "Big Walk Black Tower vision",
        },
        {
          "@type": "Thing",
          name: "Big Walk Wall",
        },
        {
          "@type": "Thing",
          name: "Big Walk black gate",
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

const toc = [
  {
    id: "where-is-black-tower",
    label: "Find the Black Tower",
  },
  {
    id: "trigger-black-tower",
    label: "Trigger the tower",
  },
  {
    id: "black-tower-vision",
    label: "Black Tower vision",
  },
  {
    id: "black-tower-completion-requirement",
    label: "Completion requirement",
  },
  {
    id: "how-to-get-black-key",
    label: "Get the Black Key",
  },
  {
    id: "where-black-key-goes",
    label: "Where the Black Key goes",
  },
  {
    id: "use-black-key-wall",
    label: "Open the Wall",
  },
  {
    id: "after-black-wall-opens",
    label: "After the Wall opens",
  },
  {
    id: "black-tower-stuck",
    label: "Black Tower fixes",
  },
  {
    id: "black-tower-faq",
    label: "FAQ",
  },
  {
    id: "black-tower-takeaway",
    label: "Final route",
  },
];

const relatedLinks = [
  {
    href: "/big-walk",
    label: "Big Walk Guide Hub",
  },
  {
    href: "/big-walk/how-to-unlock-map",
    label: "Red Tower and Map Room Guide",
  },
  {
    href: "/big-walk/green-tower-walkthrough",
    label: "Green Tower and Chairlift Guide",
  },
  {
    href: "/big-walk/yellow-tower-tunnel",
    label: "Yellow Tower and Tunnel Guide",
  },
  {
    href: "/big-walk/blue-tower-train",
    label: "Blue Tower and Train Guide",
  },
  {
    href: "/big-walk/ending-guide",
    label: "Big Walk Endings and Black Sphere Guide",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Big Walk Black Tower Guide"
          description="Find the Black Tower, trigger its vision, satisfy the current requirement, get the Black Key, and open the Wall toward the final sphere."
          gameTitle="Big Walk"
          gameHref="/big-walk"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 10, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BigWalkBlackTowerContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}