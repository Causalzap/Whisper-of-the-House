import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheOccultistGuideHubContent from "@/data/the-occultist/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-occultist`;

export const metadata: Metadata = {
  title: "The Occultist Guide Hub: Collectibles, Redler Manor, Codex, and Ending",
  description:
    "The main The Occultist guide hub. Find all Medallions, all Altars, Codex Lumina fragments, Redler Manor help, and ending explained pages in one place.",
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
        "The Occultist Guide Hub: Collectibles, Redler Manor, Codex, and Ending",
      description:
        "This is the main The Occultist guide hub, covering Medallions, Altars, Codex Lumina fragments, Redler Manor progression, and ending explained.",
      image: [
        `${siteUrl}/images/the-occultist/redler-manor/codex-fragment-clock-room.webp`,
        `${siteUrl}/images/the-occultist/medallions/medallion-08-circus-wire.webp`,
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
          name: "Redler Manor",
        },
        {
          "@type": "Thing",
          name: "Codex Lumina",
        },
        {
          "@type": "Thing",
          name: "Medallions",
        },
        {
          "@type": "Thing",
          name: "Altars",
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
          title="The Occultist Guide Hub: Collectibles, Redler Manor, Codex, and Ending"
          description="Need the best The Occultist guides in one place? Use this hub for all 15 Medallions, all 7 Altars, Codex Lumina fragments, Redler Manor help, and ending explained."
          gameTitle="The Occultist"
          gameHref="/the-occultist"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 10, 2026"
          toc={[
            {
              id: "best-the-occultist-guides-to-start-with",
              label: "Best guides to start with",
            },
            {
              id: "the-occultist-collectibles-guides",
              label: "Collectibles guides",
            },
            {
              id: "the-occultist-redler-manor-guides",
              label: "Redler Manor guides",
            },
            {
              id: "the-occultist-story-and-ending-guides",
              label: "Story and ending guides",
            },
            {
              id: "all-current-the-occultist-guides",
              label: "All current guides",
            },
            {
              id: "what-to-read-next",
              label: "What to read next",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-occultist/all-medallion-locations/",
              label: "All 15 Medallion Locations",
            },
            {
              href: "/the-occultist/all-altar-locations/",
              label: "All 7 Altar Locations",
            },
            {
              href: "/the-occultist/codex-lumina-fragments/",
              label: "Codex Lumina Fragments",
            },
            {
              href: "/the-occultist/redler-manor-walkthrough/",
              label: "Redler Manor Walkthrough",
            },
            {
              href: "/the-occultist/ending-explained/",
              label: "Ending Explained",
            },
          ]}
        >
          <TheOccultistGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}