
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
  "Follow Enshrouded 1.0 progression, reach Cinder's Cradle, activate six beacons, unlock the Flying Isles, and defeat Vorgoth.";

const articleTitle =
  "Enshrouded 1.0 Guide: Walkthrough & What to Do Next";

const articleDescription =
  "Find your next objective in Enshrouded 1.0, from the first survivors to Cinder's Cradle, six Beacon Dungeons, the Flying Isles, and the final boss.";

const imageUrls = [
  `${siteUrl}/images/enshrouded/enshrouded-floating-isles-unlocked.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-flame-level-10.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-first-beacon-activated.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-citadel-barrier-unlocked.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-lord-vorgoth-boss-fight.webp`,
  `${siteUrl}/images/enshrouded/enshrouded-blacksmith-vault-approach.webp`,
];

const heroImage =
  "/images/enshrouded/enshrouded-floating-isles-unlocked.webp";

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

const relatedLinks: {
  href: string;
  label: string;
}[] = [];

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
    images: imageUrls.map((url) => ({
      url,
    })),
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
  },
};

export default function EnshroudedPage() {
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
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: imageUrls,
        datePublished: "2026-10-15",
        dateModified: "2026-10-15",
        author: {
          "@type": "Organization",
          name: "Whisper of the House",
          url: siteUrl,
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
        url: siteUrl,
        name: "Whisper of the House",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          updatedAt="October 15, 2026"
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
