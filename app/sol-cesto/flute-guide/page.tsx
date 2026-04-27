import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FluteGuideContent from "@/data/sol-cesto/flute-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sol-cesto/flute-guide`;

export const metadata: Metadata = {
  title: "Sol Cesto Flute Guide: Fragments, Melodies, and Bird Repair",
  description:
    "Learn how the Flute works in Sol Cesto: 4 Flute Fragments, melody inputs, effects, bird repair, and the currently confirmed melody list.",
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
          name: "Sol Cesto",
          item: `${siteUrl}/sol-cesto`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Flute Guide",
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
        "Sol Cesto Flute Guide: Fragments, Melodies, and Bird Repair",
      description:
        "This guide explains how the Flute works in Sol Cesto, including how many Flute Fragments you need, how melody notation works, what each confirmed melody does, and how the fountain bird repairs the Flute.",
      image: [
        `${siteUrl}/images/sol-cesto/flute-fragment.webp`,
        `${siteUrl}/images/sol-cesto/fountain-secret-melody.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Sol Cesto",
        },
        {
          "@type": "Thing",
          name: "Flute",
        },
        {
          "@type": "Thing",
          name: "Flute Fragments",
        },
        {
          "@type": "Thing",
          name: "Melodies",
        },
        {
          "@type": "Thing",
          name: "Fountain Bird",
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
          title="Sol Cesto Flute Guide: Fragments, Melodies, and Bird Repair"
          description="Need the actual Flute answers in Sol Cesto? This guide covers Flute Fragments, melody notation, what each confirmed melody does, and how bird repair works."
          gameTitle="Sol Cesto"
          gameHref="/sol-cesto"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "what-the-flute-actually-does",
              label: "What the Flute actually does",
            },
            {
              id: "how-many-flute-fragments-you-need",
              label: "How many Flute Fragments you need",
            },
            {
              id: "where-flute-fragments-come-from",
              label: "Where Flute Fragments come from",
            },
            {
              id: "how-flute-notation-works",
              label: "How Flute notation works",
            },
            {
              id: "full-flute-melody-list",
              label: "Full Flute melody list",
            },
            {
              id: "what-each-melody-does",
              label: "What each melody does",
            },
            {
              id: "best-melodies-to-prioritize",
              label: "Best melodies to prioritize",
            },
            {
              id: "does-the-flute-break-after-use",
              label: "Does the Flute break after use",
            },
            {
              id: "how-bird-repair-works",
              label: "How bird repair works",
            },
            {
              id: "common-flute-mistakes",
              label: "Common Flute mistakes",
            },
            {
              id: "flute-system-at-a-glance",
              label: "Flute system at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/sol-cesto",
              label: "Sol Cesto Guide Hub",
            },
            {
              href: "/sol-cesto/how-to-unlock-lizard",
              label: "How to Unlock Lizard",
            },
            {
              href: "/sol-cesto/how-to-unlock-huntress",
              label: "How to Unlock Huntress",
            },
            {
              href: "/sol-cesto/all-characters-unlock-guide",
              label: "All Characters Unlock Guide",
            },
          ]}
        >
          <FluteGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}