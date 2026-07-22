import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RoadToVostokArea05GuideContent from "@/data/road-to-vostok/road-to-vostok-area-05-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/road-to-vostok/area-05-guide`;

export const metadata: Metadata = {
  title: "Road to Vostok Area 05 Guide: Best Early Routes & Loot Loop",
  description:
    "Master the early game in Road to Vostok Area 05. Learn the yellow house opener, the Village reset loop, Generalist trades, and when to push School or Highway.",
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
          name: "Road to Vostok",
          item: `${siteUrl}/road-to-vostok`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Road to Vostok Area 05 Guide",
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
      headline: "Road to Vostok Area 05 Guide",
      description:
        "A practical early-game guide for Road to Vostok Area 05, covering the best first-run route, the yellow house loot opener, Generalist timing, Village reset farming, School risk, and Highway timing.",
      image: [
        `${siteUrl}/images/road-to-vostok/area-05-route-map-annotated.webp`,
        `${siteUrl}/images/road-to-vostok/village-map-with-attic-shelter.webp`,
        `${siteUrl}/images/road-to-vostok/school-map-classroom-shelter.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-16",
      about: [
        {
          "@type": "VideoGame",
          name: "Road to Vostok",
        },
        {
          "@type": "Thing",
          name: "Area 05",
        },
        {
          "@type": "Thing",
          name: "Village",
        },
        {
          "@type": "Thing",
          name: "Generalist",
        },
        {
          "@type": "Thing",
          name: "School",
        },
        {
          "@type": "Thing",
          name: "Highway",
        },
        {
          "@type": "Thing",
          name: "Village reset loop",
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
          title="Road to Vostok Area 05 Guide"
          description="Learn the best first-run route in Area 05, when to loot the yellow house, when to visit the Generalist, how the Village reset loop works, and when School or Highway are actually worth pushing."
          gameTitle="Road to Vostok"
          gameHref="/road-to-vostok"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 16, 2026"
          toc={[
            {
              id: "area-05-route-map",
              label: "Area 05 first-run route map",
            },
            {
              id: "best-area-05-route",
              label: "Best early-game route",
            },
            {
              id: "which-buildings-to-loot-first",
              label: "Which buildings to loot first",
            },
            {
              id: "when-to-visit-the-generalist",
              label: "When to visit the Generalist",
            },
            {
              id: "how-the-village-reset-loop-works",
              label: "How the Village reset loop works",
            },
            {
              id: "current-area-05-branches",
              label: "School and Highway timing",
            },
            {
              id: "where-bandits-cause-the-most-trouble",
              label: "Where bad fights usually begin",
            },
            {
              id: "is-the-school-worth-it",
              label: "Is the School worth it early?",
            },
            {
              id: "combat-and-system-mistakes-that-end-runs",
              label: "Common mistakes",
            },
            {
              id: "best-settings-for-new-players",
              label: "Best settings for new players",
            },
            {
              id: "when-to-leave-area-05",
              label: "When to leave Area 05",
            },
            {
              id: "area-05-priority-table",
              label: "Area 05 quick priority table",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/road-to-vostok/generalist-and-doctor-locations",
              label: "Generalist and Doctor Locations in Road to Vostok",
            },
            {
              href: "/road-to-vostok/permadeath-save-and-stash-guide",
              label: "Road to Vostok Permadeath, Save, and Stash Guide",
            },
            {
              href: "/road-to-vostok/all-shelter-locations",
              label: "All Shelter Locations in Road to Vostok",
            },
            {
              href: "/road-to-vostok",
              label: "Road to Vostok Beginner Hub",
            },
          ]}
        >
          <RoadToVostokArea05GuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}