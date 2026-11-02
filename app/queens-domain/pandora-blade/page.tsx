
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import PandoraBladeContent from "@/data/queens-domain/pandora-blade.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/queens-domain`;
const pageUrl = `${hubUrl}/pandora-blade`;

const metadataTitle =
  "Queen's Domain Pandora Blade: Location, Secret Jump & Level 100";

const metadataDescription =
  "Find Pandora Blade's hidden Crypt wall, perform its secret dash jump, see Level 100 MAX stats with +300% Power, and decide whether leveling it is worth it.";

const articleTitle =
  "Where Do You Find the Pandora Blade and How Does Its Secret Jump Work?";

const articleDescription =
  "Find the Pandora Blade behind a hidden wall near the Endu Shrine Gate Key, learn its extended jump and Wind Dash combination, check the Level 100 MAX results, and decide whether the weapon is worth upgrading.";

const imageUrls = [
  `${siteUrl}/images/queens-domain/crypt-hidden-wall.webp`,
  `${siteUrl}/images/queens-domain/pandora-blade-forward-dash-effect.webp`,
  `${siteUrl}/images/queens-domain/pandora-blade-level-max.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "pandora-location",
    label: "Where to Find Pandora Blade",
  },
  {
    id: "hidden-wall",
    label: "How to Open the Hidden Wall",
  },
  {
    id: "secret-jump",
    label: "Pandora Blade's Secret Dash Jump",
  },
  {
    id: "midair-lunge",
    label: "Airborne Dash and Endu Combination",
  },
  {
    id: "max-level",
    label: "Level 100 MAX Stats & Evolution",
  },
  {
    id: "leveling",
    label: "How to Level Up Pandora Blade",
  },
  {
    id: "worth-it",
    label: "Is Pandora Blade Worth Leveling?",
  },
];

const relatedLinks = [
  {
    href: "/queens-domain",
    label: "Queen's Domain Guide",
  },
  {
    href: "/queens-domain/isle-of-neasied-walkthrough",
    label: "Isle of Neasied: Crypt & Shrine Gate Key",
  },
  {
    href: "/queens-domain/endu-holy-sword",
    label: "Holy Sword Endu & Wind Gems",
  },
  {
    href: "/queens-domain/progression-guide",
    label: "Area Progression & Unlock Requirements",
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
        alt: "Hidden Crypt wall leading to the Pandora Blade in Queen's Domain",
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
          name: "Pandora Blade",
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
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
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

export default function PandoraBladePage() {
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
          <PandoraBladeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
