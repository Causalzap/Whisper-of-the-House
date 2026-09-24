import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TrueEndingContent from "@/data/well-dweller/true-ending.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/well-dweller`;
const pageUrl = `${hubUrl}/true-ending`;

const metadataTitle =
  "Well Dweller True Ending: Soar & 5 Spirit Fragments";

const metadataDescription =
  "Beat the Queen, unlock Soar, find all 5 Spirit Fragments, and return to Night Garden for Reunite the Flock in Well Dweller.";

const imageUrls = [
  `${siteUrl}/images/well-dweller/well-dweller-soar-unlock.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-spirit-fragments-map.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-spirit-fragment.webp`,
  `${siteUrl}/images/well-dweller/well-dweller-reunite-the-flock.webp`,
];

const toc = [
  {
    id: "after-the-queen",
    label: "What to Do After the Queen",
  },
  {
    id: "soar",
    label: "Unlock and Use Soar",
  },
  {
    id: "five-locations",
    label: "Find the Five Marked Locations",
  },
  {
    id: "spirit-fragments",
    label: "How the Spirit Fragment Routes Work",
  },
  {
    id: "fragment-not-there",
    label: "Why a Fragment Looks Unreachable",
  },
  {
    id: "ordinary-spirits",
    label: "Ordinary Spirits vs Spirit Fragments",
  },
  {
    id: "reunite-the-flock",
    label: "Reunite the Flock",
  },
  {
    id: "continue-after-ending",
    label: "Keep Playing After the Ending",
  },
];

const relatedLinks = [
  {
    href: "/well-dweller",
    label: "Well Dweller Guide",
  },
  {
    href: "/well-dweller/walkthrough",
    label: "Well Dweller Walkthrough",
  },
  {
    href: "/well-dweller/golden-feathers-locations",
    label: "All 7 Golden Feather Locations",
  },
  {
    href: "/well-dweller/100-percent-completion",
    label: "Well Dweller 100% Completion Checklist",
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
    title: "Well Dweller True Ending: Soar & Spirit Fragments",
    description:
      "Continue after the Queen, unlock Soar, follow the five marked Spirit Fragment locations, and return to Night Garden for Reunite the Flock.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        width: 1600,
        height: 900,
        alt: "Well Dweller map showing five marked Spirit Fragment locations after the Queen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Well Dweller True Ending: Soar & 5 Spirit Fragments",
    description:
      "Unlock Soar after the Queen, collect all five Spirit Fragments, and return to Night Garden for Reunite the Flock.",
    images: [imageUrls[1]],
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
          name: "Well Dweller Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "True Ending",
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
        "Well Dweller True Ending: Soar, 5 Spirit Fragments, and Reunite the Flock",
      description:
        "A Well Dweller post-Queen walkthrough explaining how to continue after the first credits, open the sealed castle room, unlock and use Soar, read the five marked locations on the kingdom map, complete the post-game Spirit Fragment routes, distinguish Spirit Fragments from ordinary Spirits, return to Night Garden for Reunite the Flock, and continue playing afterward.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-24",
      dateModified: "2026-09-24",
      articleSection: "Well Dweller Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Well Dweller",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Well Dweller true ending",
        },
        {
          "@type": "Thing",
          name: "Well Dweller post-Queen route",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Soar",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Spirit Fragments",
        },
        {
          "@type": "Thing",
          name: "Well Dweller five marked locations",
        },
        {
          "@type": "Thing",
          name: "Well Dweller ordinary Spirits",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Reunite the Flock",
        },
        {
          "@type": "Thing",
          name: "Well Dweller Together at Last",
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
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="Well Dweller True Ending: Soar & 5 Spirit Fragments"
          description="Continue after the Queen, unlock Soar, follow the five hidden Spirit Fragment routes, and return to Night Garden for Reunite the Flock."
          gameTitle="Well Dweller"
          gameHref="/well-dweller"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TrueEndingContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}