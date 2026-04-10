import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllMedallionLocationsContent from "@/data/the-occultist/all-medallion-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/all-medallion-locations`;

export const metadata: Metadata = {
  title: "The Occultist All 15 Medallion Locations: Full Collector Guide",
  description:
    "Need every Medallion in The Occultist? This full collector guide shows all 15 Medallion locations, the exact area for each one, and the easiest late-game spots to miss.",
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
          name: "The Occultist",
          item: `${siteUrl}/the-occultist`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "All Medallion Locations",
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
        "The Occultist All Medallion Locations: Where to Find All 15 Medallions",
      description:
        "This guide explains where to find all 15 Medallions in The Occultist, including every major area from the Farm to the Temple, plus how to track your count and find the last missing collectible.",
      image: [
        `${siteUrl}/images/the-occultist/medallions/medallion-01-farm-cave.webp`,
        `${siteUrl}/images/the-occultist/medallions/medallion-08-circus-wire.webp`,
        `${siteUrl}/images/the-occultist/medallions/medallion-15-temple-lantern.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-10",
      about: [
        {
          "@type": "VideoGame",
          name: "The Occultist",
        },
        {
          "@type": "Thing",
          name: "Medallions",
        },
        {
          "@type": "Thing",
          name: "The Collector achievement",
        },
        {
          "@type": "Thing",
          name: "Caecus Corvus",
        },
        {
          "@type": "Thing",
          name: "Vera Visio",
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
          title="The Occultist All Medallion Locations: Where to Find All 15 Medallions"
          description="Looking for every Medallion in The Occultist? This guide covers all 15 Medallion locations across the Farm, Hospital, Orphanage, Circus, Cemetery, Redler Manor, and Temple."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "how-many-medallions-are-there-in-the-occultist",
              label: "How many Medallions there are",
            },
            {
              id: "what-you-need-before-hunting-medallions",
              label: "What you need first",
            },
            {
              id: "all-medallion-locations-by-area",
              label: "All Medallion locations by area",
            },
            {
              id: "farm-medallions",
              label: "Farm Medallions",
            },
            {
              id: "hospital-medallions",
              label: "Hospital Medallions",
            },
            {
              id: "orphanage-medallions",
              label: "Orphanage Medallions",
            },
            {
              id: "circus-medallions",
              label: "Circus Medallions",
            },
            {
              id: "cemetery-medallions",
              label: "Cemetery Medallions",
            },
            {
              id: "redler-manor-medallions",
              label: "Redler Manor Medallions",
            },
            {
              id: "temple-medallions",
              label: "Temple Medallions",
            },
            {
              id: "all-15-medallions-at-a-glance",
              label: "All 15 at a glance",
            },
            {
              id: "how-to-find-the-last-missing-medallion",
              label: "How to find the last one",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-occultist/",
              label: "The Occultist Guide Hub",
            },
            {
              href: "/the-occultist/all-altar-locations/",
              label: "All Altar Locations",
            },
            {
              href: "/the-occultist/codex-lumina-fragments/",
              label: "Codex Lumina Fragments",
            },
          ]}
        >
          <AllMedallionLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}