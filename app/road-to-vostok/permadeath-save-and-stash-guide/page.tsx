import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RoadToVostokPermadeathSaveAndStashGuideContent from "@/data/road-to-vostok/permadeath-save-and-stash-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/road-to-vostok/permadeath-save-and-stash-guide`;

export const metadata: Metadata = {
    title: "Road to Vostok Save & Stash Guide: Death Penalties Explained",
    description:
      "Learn how saving works in Road to Vostok. Discover what you lose on death across different zones, how Shelter stash protection works, and when to bank loot.",
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
          name: "Road to Vostok Permadeath, Save, and Stash Guide",
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
      headline: "Road to Vostok Permadeath, Save, and Stash Guide",
      description:
        "A practical guide to Road to Vostok save mechanics, Shelter persistence, quit and crash risk, death penalties by zone, and the safest way to bank loot before longer pushes.",
      image: [
        `${siteUrl}/images/road-to-vostok/road-to-vostok-zone-progression-map.webp`,
        `${siteUrl}/images/road-to-vostok/cabin-stash-shelf-food.webp`,
        `${siteUrl}/images/road-to-vostok/death-screen-vostok-permadeath.webp`,
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
          name: "Permadeath",
        },
        {
          "@type": "Thing",
          name: "Save system",
        },
        {
          "@type": "Thing",
          name: "Shelter stash",
        },
        {
          "@type": "Thing",
          name: "Vostok",
        },
        {
          "@type": "Thing",
          name: "Border Zone",
        },
        {
          "@type": "Thing",
          name: "Area 05",
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
          title="Road to Vostok Permadeath, Save, and Stash Guide"
          description="Learn how saving really works, what counts as safe stash, what you lose on death in each zone, and when to bank loot before a longer or more dangerous push."
          gameTitle="Road to Vostok"
          gameHref="/road-to-vostok"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 16, 2026"
          toc={[
            {
              id: "build-and-certainty-note",
              label: "Build and certainty note",
            },
            {
              id: "save-mechanics-snapshot",
              label: "Save mechanics snapshot",
            },
            {
              id: "how-saving-works",
              label: "How saving works",
            },
            {
              id: "save-cadence-matters",
              label: "Why save cadence matters",
            },
            {
              id: "quit-crash-and-altf4",
              label: "Quit, crash, and Alt+F4 risk",
            },
            {
              id: "what-gets-saved",
              label: "What gets saved and what does not",
            },
            {
              id: "what-you-lose-on-death",
              label: "What you lose on death in each zone",
            },
            {
              id: "how-stash-protection-works",
              label: "How stash protection works",
            },
            {
              id: "shelter-is-not-a-pause-menu",
              label: "Shelter is not a pause menu",
            },
            {
              id: "manual-backup-workaround",
              label: "Manual backup workaround",
            },
            {
              id: "why-stable-loops-win",
              label: "Why stable loops beat greedy clears",
            },
            {
              id: "when-to-bank-loot",
              label: "When to bank loot",
            },
            {
              id: "vostok-prep-and-rebuild-kits",
              label: "Vostok prep and rebuild kits",
            },
            {
              id: "ironman-note",
              label: "Ironman note",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/road-to-vostok/area-05-guide",
              label: "Road to Vostok Area 05 Guide",
            },
            {
              href: "/road-to-vostok/generalist-and-doctor-locations",
              label: "Generalist and Doctor Locations in Road to Vostok",
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
          <RoadToVostokPermadeathSaveAndStashGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}