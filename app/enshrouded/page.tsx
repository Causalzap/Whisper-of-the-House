
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EnshroudedContent from "@/data/enshrouded/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/enshrouded`;

const metadataTitle =
  "Enshrouded 1.0 Guide: Walkthrough & Progression";

const metadataDescription =
  "Follow Enshrouded 1.0 progression, reach Cinder's Cradle, activate six Beacon Dungeons, unlock the Flying Isles, and prepare for Vorgoth.";

const articleTitle =
  "Enshrouded 1.0 Guide: Walkthrough & What to Do Next";

const articleDescription =
  "Find your next objective in Enshrouded 1.0, from rescuing survivors to Cinder's Cradle, the six Beacon Dungeons, the Flying Isles, and Vorgoth.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-floating-isles-unlocked.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-flame-level-10.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-first-beacon-activated.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-blacksmith-vault-approach.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "what-to-do-first",
    label: "What to Do First",
  },
  {
    id: "progression",
    label: "Walkthrough & Progression",
  },
  {
    id: "returning-players",
    label: "Returning Players & Saves",
  },
  {
    id: "cinders-cradle",
    label: "How to Reach Cinder's Cradle",
  },
  {
    id: "six-beacons",
    label: "Six Beacon Dungeons",
  },
  {
    id: "flying-isles",
    label: "Unlock the Flying Isles",
  },
  {
    id: "ancient-capital",
    label: "Ancient Capital Barrier",
  },
  {
    id: "final-boss",
    label: "Vorgoth Final Boss",
  },
  {
    id: "hollow-halls",
    label: "New Hollow Halls",
  },
  {
    id: "mage-skills",
    label: "Best Mage Skills & Build",
  },
  {
    id: "achievements",
    label: "All 58 Achievements",
  },
  {
    id: "after-ending",
    label: "What to Do After the Ending",
  },
];

const relatedLinks = [
  {
    href: "/enshrouded/albaneve-summits-hollow-halls",
    label: "Albaneve Summits Hollow Halls Walkthrough",
  },
  {
    href: "/enshrouded/achievements",
    label: "All 58 Achievements & 100% Roadmap",
  },
  {
    href: "/enshrouded/vorgoth-final-boss",
    label: "How to Beat Vorgoth Final Boss",
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
    description: articleDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: heroImage,
        alt: "Enshrouded 1.0 Floating Isles unlocked after completing the six Beacon Dungeons",
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
          name: "Enshrouded",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: articleTitle,
      description: articleDescription,
      url: pageUrl,
      inLanguage: "en",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      datePublished: "2026-10-15",
      dateModified: "2026-10-16",
      author: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Whisper of the House",
        url: siteUrl,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      about: [
        {
          "@type": "VideoGame",
          name: "Enshrouded",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Enshrouded 1.0 progression",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Cinder's Cradle",
        },
        {
          "@type": "Thing",
          name: "Enshrouded six Beacon Dungeons",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Flying Isles",
        },
        {
          "@type": "Thing",
          name: "Enshrouded Ancient Capital",
        },
      ],
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
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
      url: siteUrl,
      name: "Whisper of the House",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function EnshroudedPage() {
  return (
    <>
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title={articleTitle}
          description={articleDescription}
          gameTitle="Enshrouded"
          gameHref="/enshrouded"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EnshroudedContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
