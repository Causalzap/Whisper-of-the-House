
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import Chapter1Content from "@/data/planet-zoo-2/career-chapter-1.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/planet-zoo-2`;
const pageUrl = `${hubUrl}/career-chapter-1`;

const metadataTitle =
  "Planet Zoo 2 Chapter 1: Great Rift Valley & East Africa";

const metadataDescription =
  "Complete Planet Zoo 2 Chapter 1, from zebra photos and Aardvark welfare to the Shoebill aviary and Masai Giraffe release.";

const articleTitle =
  "Planet Zoo 2 Chapter 1 Walkthrough: Great Rift Valley & East Africa";

const articleDescription =
  "Follow the first Career chapter through Earning Your Stripes and Spreading Your Wings, including wildlife photography, Aardvark care, Shoebill construction, and the Great Rift Valley giraffe release.";

const pageDescription =
  "Complete the first two Career scenarios, fix the Aardvark and Shoebill objectives, and return to Great Rift Valley for the Masai Giraffe release.";

const imageUrls = [
  `${siteUrl}/images/planet-zoo-2/career-chapter-1-zebra-photo-objective.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-1-aardvark-terrain-welfare.webp`,
  `${siteUrl}/images/planet-zoo-2/career-chapter-1-shoebill-aviary-roof.webp`,
];

const heroImage = imageUrls[0];

const toc = [
  {
    id: "great-rift-valley-bronze",
    label: "Great Rift Valley Bronze",
  },
  {
    id: "east-africa-opening",
    label: "East Africa: First Objectives",
  },
  {
    id: "aardvark-habitat",
    label: "Build the Aardvark Habitat",
  },
  {
    id: "aardvark-welfare",
    label: "Fix Aardvark Welfare",
  },
  {
    id: "shoebill-aviary",
    label: "Build the Shoebill Aviary",
  },
  {
    id: "giraffe-transfer",
    label: "Prepare the Masai Giraffes",
  },
  {
    id: "great-rift-valley-silver",
    label: "Great Rift Valley Silver",
  },
  {
    id: "return-for-gold",
    label: "When to Return for Gold",
  },
  {
    id: "chapter-one-next",
    label: "Where to Go Next",
  },
];

const relatedLinks = [
  {
    href: "/planet-zoo-2",
    label: "Planet Zoo 2 Career Guide",
  },
  {
    href: "/planet-zoo-2/career-chapter-2",
    label: "Chapter 2 Walkthrough",
  },
  {
    href: "/planet-zoo-2/wildlife-reserves",
    label: "Release Groups & Ecosystems",
  },
  {
    href: "/planet-zoo-2/aquariums",
    label: "Aquarium Building & Filtration",
  },
  {
    href: "/planet-zoo-2/achievements",
    label: "All 39 Achievements",
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
    publishedTime: "2026-10-15",
    modifiedTime: "2026-10-15",
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
          name: "Chapter 1",
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
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
      articleSection: "Planet Zoo 2 Career Chapter 1",
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

export default function PlanetZoo2Chapter1Page() {
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
          updatedAt="October 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <Chapter1Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}
