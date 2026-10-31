import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EnduHolySwordContent from "@/data/queens-domain/endu-holy-sword.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/endu-holy-sword`;

const metadataTitle =
  "Queen's Domain Holy Sword Endu: Wind Gems & Upgrades";

const metadataDescription =
  "Get Holy Sword Endu, find Wind Gems, use Wind Dash, evolve into Soul Bound Endu at Level 10, and unlock the Storm Gem attack.";

const articleTitle =
  "How Do You Get and Use the Holy Sword Endu in Queen's Domain?";

const articleDescription =
  "Find Endu, unlock more Wind Dashes, collect early Wind Gems, and evolve the sword at Level 10 into Soul Bound Endu with 13 Power and a holy energy arc.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/endu-wind-gem-sockets.webp`,
  `${siteUrl}/images/queens-domain/endu-second-wind-gem-location.webp`,
  `${siteUrl}/images/queens-domain/endu-two-wind-dashes.webp`,
  `${siteUrl}/images/queens-domain/endu-weapon-level-3.webp`,
  `${siteUrl}/images/queens-domain/endu-soulbound-level-10.webp`,
];
  
const heroImage = imageUrls[2];

const toc = [
  { id: "how-to-get-endu", label: "Get the Holy Sword Endu" },
  { id: "wind-dash", label: "How Wind Dash works" },
  { id: "second-wind-gem", label: "Second Wind Gem location" },
  { id: "third-wind-gem", label: "Third Wind Gem location" },
  { id: "remaining-wind-gems", label: "All five Wind Gems" },
  { id: "weapon-levels", label: "Level up and evolve Endu" },
  { id: "storm-gem", label: "Storm Gem effects" },
  { id: "akunra", label: "True Holy Sword Akunra" },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/isle-of-neasied-walkthrough",
    label: "Where to Get Endu & Beat the Shrine Guardian",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Progression & Wind Dash Requirements",
  },
  {
    href: "/queens-domain/obmuer-temple-walkthrough",
    label: "Obmuer Temple & Third Wind Gem",
  },
  {
    href: "/queens-domain/tower-of-knowledge-walkthrough",
    label: "Tower of Knowledge & Storm Gem",
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
    publishedTime: "2026-10-31",
    modifiedTime: "2026-10-31",
    images: [
      {
        url: heroImage,
        alt: "Holy Sword Endu with two Wind Gems installed",
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
          name: "Holy Sword Endu",
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
      datePublished: "2026-10-31",
      dateModified: "2026-10-31",
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

export default function EnduHolySwordPage() {
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
          updatedAt="October 31, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EnduHolySwordContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}