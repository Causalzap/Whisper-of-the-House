import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DreamsExplainedContent from "@/data/hozy/dreams-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/guides/hozy/dreams-explained`;

export const metadata: Metadata = {
  title: "Hozy Dreams Explained: Why the Level Feels So Strange",
  description:
    "Confused by the Dreams level in Hozy? This guide explains why the room feels so different, why objects behave oddly, and why many players see it as the strangest level in the game.",
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
          name: "Hozy Dreams Explained",
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
      headline: "Hozy Dreams Explained: Why the Level Feels So Strange",
      description:
        "The Dreams level in Hozy stands out because its space, object behavior, and overall logic feel very different from the rest of the game. This page is not a full walkthrough. It explains what makes the room unusual, why it can feel confusing at first, and how to think about it without treating it like a normal level.",
        image: [
          `${siteUrl}/images/hozy/dreams/dreams-object-behavior.webp`,
          `${siteUrl}/images/hozy/dreams/dreams-overview.webp`,
          `${siteUrl}/images/hozy/dreams/dreams-upside-down-door.webp`,
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
          name: "Dreams level",
        },
        {
          "@type": "Thing",
          name: "Dreams level explanation",
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
          title="Hozy Dreams Explained: Why the Level Feels So Strange"
          description="The Dreams level in Hozy stands out because its space, object behavior, and overall logic feel very different from the rest of the game. This page is not a full walkthrough. It explains what makes the room unusual, why it can feel confusing at first, and how to think about it without treating it like a normal level."
          gameTitle="Hozy"
          gameHref="/guides/hozy"
          breadcrumbBaseHref="/guides"
          breadcrumbBaseLabel="Guides"
          updatedAt="April 2, 2026"
          toc={[
            {
              id: "why-the-dreams-level-feels-different",
              label: "Why Dreams feels different",
            },
            {
              id: "what-makes-the-room-work-in-unusual-ways",
              label: "What makes it unusual",
            },
            {
              id: "why-objects-seem-to-shrink-or-move-oddly",
              label: "Why objects behave oddly",
            },
            {
              id: "is-dreams-a-bugged-level-or-an-intentional-one",
              label: "Bug or intentional design?",
            },
            {
              id: "where-dreams-ranks-among-hozys-most-memorable-levels",
              label: "Where Dreams ranks",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/guides/hozy/penthouse-layout-guide",
              label: "Hozy Penthouse Layout Guide",
            },
            {
              href: "/guides/hozy/hardest-levels-ranked",
              label: "Hozy Hardest Levels Ranked",
            },
            {
              href: "/guides/hozy/cafe-layout-tips",
              label: "Hozy Cafe Layout Tips",
            },
            {
              href: "/guides/hozy",
              label: "Hozy Guides",
            },
          ]}
        >
          <DreamsExplainedContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}