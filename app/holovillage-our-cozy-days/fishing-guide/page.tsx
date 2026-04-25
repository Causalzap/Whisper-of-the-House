import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FishingGuideContent from "@/data/holovillage-our-cozy-days/fishing-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = `${gameUrl}/fishing-guide`;

export const metadata: Metadata = {
  title: "holoVillage Fishing Guide: Spots, Bait, Carp, Koi & Fisher Rank",
  description:
    "Learn how fishing works in holoVillage: Our Cozy Days, including where to fish, why you can't fish everywhere, how bait works, how to catch carp and koi, and what Fisher Rank 2 unlocks.",
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
          name: "holoVillage: Our Cozy Days",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "holoVillage Fishing Guide",
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
        "holoVillage Fishing Guide: Where to Fish, Bait, Carp, Koi, and Fisher Rank Explained",
      description:
        "This holoVillage: Our Cozy Days fishing guide explains how to unlock fishing, where fishing spots work, how to catch carp and koi, how bait and line snapping work, what Fisher Rank 2 unlocks, and how to progress toward Freshwater Crab.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/fishing-guide.png`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "holoVillage: Our Cozy Days",
        },
        {
          "@type": "Thing",
          name: "Fishing",
        },
        {
          "@type": "Thing",
          name: "Fishing Spots",
        },
        {
          "@type": "Thing",
          name: "Bait",
        },
        {
          "@type": "Thing",
          name: "Carp",
        },
        {
          "@type": "Thing",
          name: "Koi",
        },
        {
          "@type": "Thing",
          name: "Fisher Rank",
        },
        {
          "@type": "Thing",
          name: "Freshwater Crab",
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
          title="holoVillage Fishing Guide: Where to Fish, Bait, Carp, Koi, and Fisher Rank Explained"
          description="Learn how fishing works in holoVillage: Our Cozy Days, including where to fish, why you can't fish everywhere, how bait works, how to catch carp and koi, how to avoid snapping the line, and what Fisher Rank 2 unlocks."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "fishing-at-a-glance",
              label: "Fishing at a glance",
            },
            {
              id: "how-to-unlock-fishing",
              label: "How to unlock fishing",
            },
            {
              id: "where-to-fish",
              label: "Where to fish",
            },
            {
              id: "early-fishing-progression",
              label: "Early fishing progression",
            },
            {
              id: "how-to-catch-three-carp",
              label: "How to catch three carp",
            },
            {
              id: "how-bait-works",
              label: "How bait works",
            },
            {
              id: "how-to-catch-bigger-fish-without-snapping-the-line",
              label: "Bigger fish and line snapping",
            },
            {
              id: "how-to-catch-koi",
              label: "How to catch koi",
            },
            {
              id: "fisher-rank-2-and-job-abilities",
              label: "Fisher Rank 2",
            },
            {
              id: "freshwater-crab-and-the-blocked-bridge",
              label: "Freshwater Crab",
            },
            {
              id: "what-to-do-with-fish",
              label: "What to do with fish",
            },
            {
              id: "common-fishing-mistakes",
              label: "Common mistakes",
            },
            {
              id: "early-fishing-route",
              label: "Early fishing route",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/holovillage-our-cozy-days",
              label: "holoVillage: Our Cozy Days Guide Hub",
            },
            {
              href: "/holovillage-our-cozy-days/beginner-guide",
              label: "holoVillage Beginner Guide",
            },
            {
              href: "/holovillage-our-cozy-days/how-to-invite-villagers",
              label: "How to Invite Villagers in holoVillage",
            },
            {
              href: "/holovillage-our-cozy-days/shop-money-guide",
              label: "holoVillage Shop and Money Guide",
            },
            {
              href: "/holovillage-our-cozy-days/early-combat-guide",
              label: "holoVillage Early Combat Guide",
            },
          ]}
        >
          <FishingGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
