import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerMosesWarehouseAlphaContent from "@/data/the-last-caretaker/moses-warehouse-alpha-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/moses-warehouse-alpha-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-moses-field-reserve-program-locked.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-moses-production-area-objective.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-warehouse-alpha-storage-prototypes.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-warehouse-alpha-shortcut-exit.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-moses-container-specifications-unlocked.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker MOSES & Warehouse Alpha Guide",
  description:
    "Find the MOSES Field Reserve Program in Warehouse Alpha, reach the production area, recover the container specifications, and unlock new storage.",
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
          name: "The Last Caretaker Guide",
          item: `${siteUrl}/the-last-caretaker`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "MOSES & Warehouse Alpha Guide",
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
        "The Last Caretaker MOSES Field Reserve Program and Central Warehouse Alpha Guide",
      description:
        "A player-focused guide to the MOSES Field Reserve Program in The Last Caretaker, covering Central Warehouse Alpha, the old field-logistics facility, how to reach the production area, why the large storage prototypes are not the scan target, where to recover the container specifications, how to confirm the new storage designs are unlocked, the internal shortcut back toward the boat, and when Warehouse Alpha should become a salvage run instead of a quest run.",
      image: imageUrls,
      inLanguage: "en",
      dateModified: "2026-09-07",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "MOSES Field Reserve Program",
        },
        {
          "@type": "Thing",
          name: "Central Warehouse Alpha",
        },
        {
          "@type": "Thing",
          name: "Field Logistics Facility",
        },
        {
          "@type": "Thing",
          name: "Production Area",
        },
        {
          "@type": "Thing",
          name: "Container Specifications",
        },
        {
          "@type": "Thing",
          name: "Storage Prototypes",
        },
        {
          "@type": "Thing",
          name: "Bulk Battery",
        },
        {
          "@type": "Thing",
          name: "Battery Barrel",
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
          title="The Last Caretaker MOSES: How Do You Unlock the New Storage?"
          description="Warehouse Alpha looks familiar until MOSES sends you into its field-logistics section. Find the production area, recover the container specifications, confirm the designs are available, then leave the actual storage setup for the ship."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "where-moses-starts",
              label: "Where MOSES starts",
            },
            {
              id: "prepare-warehouse-alpha",
              label: "Prepare for Warehouse Alpha",
            },
            {
              id: "find-field-logistics-facility",
              label: "Find field logistics",
            },
            {
              id: "reach-production-area",
              label: "Reach the production area",
            },
            {
              id: "find-moses-blueprint",
              label: "Find the MOSES blueprint",
            },
            {
              id: "unlock-moses-storage",
              label: "Unlock the storage designs",
            },
            {
              id: "warehouse-alpha-shortcut",
              label: "Open the shortcut",
            },
            {
              id: "loot-warehouse-alpha",
              label: "When to loot Warehouse Alpha",
            },
            {
              id: "moses-stuck",
              label: "MOSES stuck",
            },
            {
              id: "leave-warehouse-alpha",
              label: "When to leave",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
            },
            {
              href: "/the-last-caretaker/new-horizons-guide",
              label: "New Horizons Guide",
            },
            {
              href: "/the-last-caretaker/power-fuel-wall-outlets",
              label: "Power, Fuel & Wall Outlets Guide",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
            {
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
          ]}
        >
          <TheLastCaretakerMosesWarehouseAlphaContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}