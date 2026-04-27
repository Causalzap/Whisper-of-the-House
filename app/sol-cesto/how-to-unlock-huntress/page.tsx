import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import HuntressUnlockGuideContent from "@/data/sol-cesto/how-to-unlock-huntress.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sol-cesto/how-to-unlock-huntress`;

export const metadata: Metadata = {
  title: "How to Unlock Huntress in Sol Cesto",
  description:
    "Unlock Huntress in Sol Cesto by beating the game once. No upgrades, hidden items, or puzzle steps required.",
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
          name: "How to Unlock Huntress",
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
      headline: "How to Unlock Huntress in Sol Cesto",
      description:
        "This guide explains how to unlock Huntress in Sol Cesto, what counts as finishing the game, why the unlock may not trigger, and what Huntress does once unlocked.",
      inLanguage: "en",
      dateModified: "2026-04-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Sol Cesto",
        },
        {
          "@type": "Thing",
          name: "Huntress",
        },
        {
          "@type": "Thing",
          name: "Character Unlocks",
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
          title="How to Unlock Huntress in Sol Cesto"
          description="Need the fastest Huntress unlock answer in Sol Cesto? Beat the game once. This guide explains what counts as finishing the game, why the unlock may not trigger, and what Huntress does after unlocking."
          gameTitle="Sol Cesto"
          gameHref="/sol-cesto"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "how-to-unlock-huntress",
              label: "How to unlock Huntress",
            },
            {
              id: "what-counts-as-finishing-the-game",
              label: "What counts as finishing the game",
            },
            {
              id: "why-huntress-may-not-be-unlocking",
              label: "Why Huntress may not be unlocking",
            },
            {
              id: "what-huntress-does",
              label: "What Huntress does",
            },
            {
              id: "huntress-unlock-at-a-glance",
              label: "Huntress unlock at a glance",
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
              href: "/sol-cesto/flute-guide",
              label: "Flute Guide",
            },
            {
              href: "/sol-cesto/all-characters-unlock-guide",
              label: "All Characters Unlock Guide",
            },
          ]}
        >
          <HuntressUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}