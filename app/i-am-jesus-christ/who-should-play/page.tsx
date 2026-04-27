import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IAmJesusChristWhoShouldPlayContent from "@/data/i-am-jesus-christ/who-should-play.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/i-am-jesus-christ/who-should-play`;

export const metadata: Metadata = {
  title: "Who Should Play I Am Jesus Christ? [Christians, Story Fans & More]",
  description:
    "Wondering if I Am Jesus Christ is for you? This guide explains who should play it, whether it suits Christians or non-Christians, what kind of game it actually is, and who may want to skip it.",

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
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "I Am Jesus Christ",
          item: `${siteUrl}/i-am-jesus-christ`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Who Should Play",
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
        "Who Should Play I Am Jesus Christ? Christians, Story Fans, and Curious Players",
      description:
        "This guide explains who I Am Jesus Christ is best for, including Christians, story-first players, and curious non-Christians, plus who may want to skip it.",
      image: [
        `${siteUrl}/images/i-am-jesus-christ/wedding-at-cana.webp`,
        `${siteUrl}/images/i-am-jesus-christ/wilderness-satan.webp`,
        `${siteUrl}/images/i-am-jesus-christ/last-supper.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-07",
      about: [
        {
          "@type": "VideoGame",
          name: "I Am Jesus Christ",
        },
        {
          "@type": "Thing",
          name: "Christian audience",
        },
        {
          "@type": "Thing",
          name: "Story-first players",
        },
        {
          "@type": "Thing",
          name: "Non-Christian players",
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
          title="Who Should Play I Am Jesus Christ? Christians, Story Fans, and Curious Players"
          description="Wondering if I Am Jesus Christ is for you? This guide explains who should play it, whether it suits Christians or non-Christians, what kind of game it actually is, and who may want to skip it."
          gameTitle="I Am Jesus Christ"
          gameHref="/i-am-jesus-christ"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 7, 2026"
          toc={[
            {
              id: "quick-verdict",
              label: "Quick verdict",
            },
            {
              id: "what-kind-of-game-is-it",
              label: "What kind of game is it?",
            },
            {
              id: "who-this-game-is-best-for",
              label: "Who this game is best for",
            },
            {
              id: "best-fit-for-christians",
              label: "Best fit for Christians",
            },
            {
              id: "best-fit-for-non-christians",
              label: "Best fit for non-Christians",
            },
            {
              id: "best-fit-for-story-first-players",
              label: "Best fit for story-first players",
            },
            {
              id: "who-may-want-to-skip-it",
              label: "Who may want to skip it",
            },
            {
              id: "buying-recommendation",
              label: "Buying recommendation",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/i-am-jesus-christ",
              label: "I Am Jesus Christ Guide Hub",
            },
            {
              href: "/i-am-jesus-christ/walkthrough",
              label: "I Am Jesus Christ full walkthrough: story route and ending guide",
            },
            {
              href: "/i-am-jesus-christ/miracles-list",
              label: "I Am Jesus Christ miracles list: categories, uses, and system guide",
            },
            {
              href: "/i-am-jesus-christ/apostles-locations",
              label: "I Am Jesus Christ 12 apostles locations: recruitment order and triggers",
            },
          ]}
        >
          <IAmJesusChristWhoShouldPlayContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}