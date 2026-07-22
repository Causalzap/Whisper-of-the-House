import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HardestLevelsRankedContent from "@/data/hozy/hardest-levels-ranked.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/guides/hozy/hardest-levels-ranked`;

export const metadata: Metadata = {
  title: "Hozy Hardest Levels Ranked: Which Rooms Feel Toughest to Finish Well",
  description:
    "Which Hozy levels feel hardest to decorate well? This guide ranks the toughest rooms by layout pressure, visual confusion, and how easy they are to over-decorate.",
  alternates: {
    canonical: pageUrl,
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
          name: "Guides",
          item: `${siteUrl}/guides`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hozy",
          item: `${siteUrl}/guides/hozy`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hozy Hardest Levels Ranked",
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
        "Hozy Hardest Levels Ranked: Which Rooms Feel Toughest to Finish Well",
      description:
        "Not every Hozy level is difficult in the same way. Some rooms are harder because they feel visually unstable, while others are harder because they get cluttered fast or are difficult to balance well. This guide ranks the toughest Hozy levels and explains why each one feels challenging.",
        image: [
            `${siteUrl}/images/hozy/penthouse/penthouse-overview.webp`,
            `${siteUrl}/images/hozy/dreams/dreams-overview.webp`,
            `${siteUrl}/images/hozy/cafe/cafe-overview.webp`,
          ],
        inLanguage: "en",
      dateModified: "2026-04-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Hozy",
        },
        {
          "@type": "Thing",
          name: "Hardest Hozy levels",
        },
        {
          "@type": "Thing",
          name: "Hozy level ranking",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GuideArticlePage
          title="Hozy Hardest Levels Ranked: Which Rooms Feel Toughest to Finish Well"
          description="Not every Hozy level is difficult in the same way. Some rooms are harder because they feel visually unstable, while others are harder because they get cluttered fast or are difficult to balance well. This guide ranks the toughest Hozy levels and explains why each one feels challenging."
          gameTitle="Hozy"
          gameHref="/guides/hozy"
          breadcrumbBaseHref="/guides"
          breadcrumbBaseLabel="Guides"
          updatedAt="April 2, 2026"
          toc={[
            {
              id: "how-this-ranking-works",
              label: "How this ranking works",
            },
            {
              id: "the-hardest-hozy-levels-ranked",
              label: "Hardest levels ranked",
            },
            {
              id: "why-penthouse-feels-harder-than-dreams-for-most-players",
              label: "Penthouse vs Dreams",
            },
            {
              id: "which-levels-feel-easier-by-comparison",
              label: "Which levels feel easier",
            },
            {
              id: "what-makes-a-hozy-level-feel-difficult-at-all",
              label: "What makes a level feel difficult",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/guides/hozy/dreams-explained",
              label: "Hozy Dreams Explained",
            },
            {
              href: "/guides/hozy/penthouse-layout-guide",
              label: "Hozy Penthouse Layout Guide",
            },
            {
              href: "/guides/hozy/cafe-layout-tips",
              label: "Hozy Cafe Layout Tips",
            },
            {
              href: "/guides/hozy",
              label: "Hozy Guide Hub",
            },
          ]}
        >
          <HardestLevelsRankedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}