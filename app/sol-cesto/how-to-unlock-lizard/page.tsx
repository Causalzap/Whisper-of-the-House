import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import LizardUnlockGuideContent from "@/data/sol-cesto/how-to-unlock-lizard.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/sol-cesto/how-to-unlock-lizard`;

export const metadata: Metadata = {
  title: "How to Unlock Lizard in Sol Cesto (Egg Guide + No Candle Needed)",
  description:
    "Unlock the Lizard in Sol Cesto: buy the Egg, reach Biome 3, and it hatches automatically. No Candle needed. Verified step-by-step guide.",
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
          name: "How to Unlock Lizard",
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
        "How to Unlock Lizard in Sol Cesto (Egg Guide + No Candle Needed)",
      description:
        "This guide explains how to unlock Lizard in Sol Cesto, where to find the Egg, why Biome 3 matters, why the Candle is not required, and what to do if your run fails.",
      image: [
        `${siteUrl}/images/sol-cesto/egg-in-shop.webp`,
        `${siteUrl}/images/sol-cesto/egg-cracked-in-biome-3.webp`,
        `${siteUrl}/images/sol-cesto/Lizard.webp`,
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
          name: "Lizard",
        },
        {
          "@type": "Thing",
          name: "Egg",
        },
        {
          "@type": "Thing",
          name: "Biome 3",
        },
        {
          "@type": "Thing",
          name: "Candle",
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
          title="How to Unlock Lizard in Sol Cesto (Egg Guide + No Candle Needed)"
          description="Need the real Lizard unlock route in Sol Cesto? This guide covers where to get the Egg, how to hatch it in Biome 3, why the Candle is not required, and what happens if the run fails."
          gameTitle="Sol Cesto"
          gameHref="/sol-cesto"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "how-to-get-the-egg",
              label: "How to get the Egg",
            },
            {
              id: "how-to-unlock-lizard",
              label: "How to unlock Lizard",
            },
            {
              id: "do-you-need-the-candle",
              label: "Do you need the Candle",
            },
            {
              id: "why-your-egg-is-not-hatching",
              label: "Why your Egg is not hatching",
            },
            {
              id: "what-if-the-run-fails",
              label: "What if the run fails",
            },
            {
              id: "why-biome-3-works",
              label: "Why Biome 3 works",
            },
            {
              id: "what-happens-after-the-egg-cracks",
              label: "What happens after the Egg cracks",
            },
            {
              id: "lizard-stats-and-ability-preview",
              label: "Lizard stats and ability preview",
            },
            {
              id: "lizard-unlock-at-a-glance",
              label: "Lizard unlock at a glance",
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
              href: "/sol-cesto/flute-guide/",
              label: "Flute Guide",
            },
            {
              href: "/sol-cesto/how-to-unlock-huntress/",
              label: "How to Unlock Huntress",
            },
            {
              href: "/sol-cesto/beginner-guide/",
              label: "Beginner Guide",
            },
          ]}
        >
          <LizardUnlockGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}