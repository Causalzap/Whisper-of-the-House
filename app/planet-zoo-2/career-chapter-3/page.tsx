
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import CareerChapter3Content from "@/data/planet-zoo-2/career-chapter-3.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/career-chapter-3`;

const metadataTitle =
  "Planet Zoo 2 Career Chapter 3 Walkthrough: Sumatra to Sweden";

const metadataDescription =
  "Complete Planet Zoo 2 Career Chapter 3 across Sumatra, Java, Rural France, Mountain Forests and Sweden, including Sumatra Silver and the Sweden unlock.";

const articleTitle =
  "Planet Zoo 2 Chapter 3 Walkthrough: All 5 Scenarios";

const articleDescription =
  "Complete the five Career Chapter 3 scenarios, from restoring Sumatra and rehabilitating rescued animals to earning Sumatra Silver and unlocking Sweden Reserve.";

const pageDescription =
  "Follow Sumatra, Java, Rural France, Mountain Forests, and Sweden in the right order. Earn the required Bronze medals, return for Sumatra Silver, and finish the Sweden conservation objectives.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-chapter-3-sumatra-envalza-evidence.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-3-java-four-habitats.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-3-animal-talk-seating.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-3-twenty-parakeets.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "quick-answer",
    label: "How to Finish Chapter 3",
  },
  {
    id: "unlock-chapter-3",
    label: "How to Unlock Chapter 3",
  },
  {
    id: "sumatra-reserve",
    label: "Sumatra: Mine Your Business",
  },
  {
    id: "java",
    label: "Java: Creature Comforts",
  },
  {
    id: "rural-france",
    label: "Rural France: Trot To Go",
  },
  {
    id: "mountain-forests",
    label: "Mountain Forests: Parakeet Paradise",
  },
  {
    id: "sumatra-silver",
    label: "Unlock Sweden With Sumatra Silver",
  },
  {
    id: "sweden-reserve",
    label: "Sweden: Howls It Going?",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2: Career & Franchise Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-1",
    label: "Career Chapter 1: Great Rift Valley & East Africa",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Career Chapter 2: All 5 Scenarios",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Wildlife Reserves: Releases & Ecosystems",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements Checklist",
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
    title: metadataTitle,
    description: metadataDescription,
    url: pageUrl,
    siteName: "Whisper of the House",
    images: imageUrls,
    publishedTime: "2026-10-17",
    modifiedTime: "2026-10-17",
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
          name: "Planet Zoo 2",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Career Chapter 3",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": pageUrl,
      },
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-10-17",
      dateModified: "2026-10-17",
      articleSection: "Planet Zoo 2 Career Chapter 3",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@type": "VideoGame",
        name: "Planet Zoo 2",
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
      inLanguage: "en",
    },
  ],
};

export default function PlanetZoo2CareerChapter3Page() {
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
          description={pageDescription}
          gameTitle="Planet Zoo 2"
          gameHref="/planet-zoo-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="October 17, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CareerChapter3Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}





