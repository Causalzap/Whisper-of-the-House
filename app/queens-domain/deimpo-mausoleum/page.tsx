
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DeimpoMausoleumContent from "@/data/queens-domain/deimpo-mausoleum.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/deimpo-mausoleum`;

const metadataTitle =
  "Queen's Domain Deimpo Mausoleum: Mask & Six Sigils";

const metadataDescription =
  "Find Puwema's Lens and the Mask of Second Sight, clear six sigils, defeat Poenir and Duenir, meet King Gius Abraon, and collect Unok's Remains.";

const articleTitle =
  "How Do You Complete Deimpo Mausoleum in Queen's Domain?";

const articleDescription =
  "Enter Deimpo Mausoleum, navigate moving pillars, find the fourth Wind Gem, use the Mask of Second Sight to clear six Puwema sigils, defeat Poenir and Duenir, and recover Unok's Remains.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/mausoleum-puwema-lens.webp`,
  `${siteUrl}/images/queens-domain/mausoleum-mask-second-sight.webp`,
  `${siteUrl}/images/queens-domain/mausoleum-blue-flame-sarcophagus-room.webp`,
  `${siteUrl}/images/queens-domain/mausoleum-sigil-candlelit-sarcophagus.webp`,
  `${siteUrl}/images/queens-domain/mausoleum-king-gius-unok-request.webp`,
  `${siteUrl}/images/queens-domain/mausoleum-unoks-remains.webp`,
];

const heroImage = imageUrls[1];

const toc = [
  {
    id: "enter-mausoleum",
    label: "How to Enter Deimpo Mausoleum",
  },
  {
    id: "moving-pillars",
    label: "Moving Stone Pillars",
  },
  {
    id: "fourth-wind-gem",
    label: "Fourth Wind Gem Location",
  },
  {
    id: "puwemas-lens",
    label: "Puwema's Lens",
  },
  {
    id: "mask-second-sight",
    label: "Mask of Second Sight",
  },
  {
    id: "six-sigils",
    label: "All Six Puwema Sigils",
  },
  {
    id: "boss-door",
    label: "Open the Sealed Boss Passage",
  },
  {
    id: "poenir-duenir",
    label: "Poenir and Duenir Boss Fight",
  },
  {
    id: "king-gius",
    label: "Find King Gius Abraon",
  },
  {
    id: "unoks-remains",
    label: "Unok's Remains",
  },
  {
    id: "ancient-world",
    label: "Reach the Ancient World",
  },
  {
    id: "stuck",
    label: "Common Progression Problems",
  },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Progression & Unlock Requirements",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge & Acid Vial",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu & Wind Gems",
  },
  {
    href: "/queens-domain/achievements",
    label: "All 53 Achievements & Checklist",
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
    description: metadataDescription,
    siteName: "Whisper of the House",
    publishedTime: "2026-11-02",
    modifiedTime: "2026-11-02",
    images: [
      {
        url: heroImage,
        alt: "Mask of Second Sight used to reveal Puwema sigils in Queen's Domain Deimpo Mausoleum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [heroImage],
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
          name: "Queen's Domain",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Deimpo Mausoleum",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Whisper of the House",
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Whisper of the House",
      url: siteUrl,
    },
  ],
};

export default function DeimpoMausoleumPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Queen's Domain"
          gameHref="/queens-domain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="November 2, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DeimpoMausoleumContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
