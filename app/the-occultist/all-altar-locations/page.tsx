import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AllAltarLocationsContent from "@/data/the-occultist/all-altar-locations.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist/all-altar-locations`;

export const metadata: Metadata = {
  title: "The Occultist All 7 Altar Locations: Full Guide to Every Altar",
  description:
    "Looking for all 7 Altars in The Occultist? This full altar guide shows every exact Altar location across the Farm, Godstone road, Orphanage, Circus, Lighthouse, Mausoleum, and Redler Manor.",
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
          name: "All Altar Locations",
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
        "The Occultist All 7 Altar Locations: Full Guide to Every Altar",
      description:
        "This guide explains where to find all 7 Altars in The Occultist, how to activate them, which chapters they appear in, and where to find the final altar in Redler Manor.",
      image: [
        `${siteUrl}/images/the-occultist/altars/altar-01-parker-basement.webp`,
        `${siteUrl}/images/the-occultist/altars/altar-04-circus-shooting-range-path.webp`,
        `${siteUrl}/images/the-occultist/altars/altar-07-redler-manor-music-room.webp`,
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
          name: "Altars",
        },
        {
          "@type": "Thing",
          name: "A Lasting Prayer",
        },
        {
          "@type": "Thing",
          name: "Still Praying",
        },
        {
          "@type": "Thing",
          name: "Chapter Select",
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
          title="The Occultist All 7 Altar Locations: Full Guide to Every Altar"
          description="Need every Altar in The Occultist? This full altar guide shows all 7 exact locations, how to activate them, and where to find the final altar in Redler Manor."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "how-many-altars-are-there-in-the-occultist",
              label: "How many Altars there are",
            },
            {
              id: "how-altars-work-in-the-occultist",
              label: "How Altars work",
            },
            {
              id: "all-altar-locations-by-area",
              label: "All Altar locations by area",
            },
            {
              id: "altar-1-parkers-basement",
              label: "Altar 1: Parker’s basement",
            },
            {
              id: "altar-2-godstone-road-cottage",
              label: "Altar 2: Godstone road cottage",
            },
            {
              id: "altar-3-orphanage-dining-balcony",
              label: "Altar 3: Orphanage balcony",
            },
            {
              id: "altar-4-circus-shooting-range-path",
              label: "Altar 4: Circus side path",
            },
            {
              id: "altar-5-lighthouse-bedroom",
              label: "Altar 5: Lighthouse bedroom",
            },
            {
              id: "altar-6-mausoleum-right-path",
              label: "Altar 6: Mausoleum right path",
            },
            {
              id: "altar-7-redler-manor-music-room",
              label: "Altar 7: Redler Manor Music Room",
            },
            {
              id: "all-7-altars-at-a-glance",
              label: "All 7 at a glance",
            },
            {
              id: "how-to-find-the-last-missing-altar",
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
              href: "/the-occultist/all-medallion-locations/",
              label: "All Medallion Locations",
            },
            {
              href: "/the-occultist/codex-lumina-fragments/",
              label: "Codex Lumina Fragments",
            },
          ]}
        >
          <AllAltarLocationsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}