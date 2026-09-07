import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerMemoryForAaronContent from "@/data/the-last-caretaker/memory-for-aaron-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/memory-for-aaron-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-memory-for-aaron-rising-tide-aaron-voss.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-memory-for-aaron-quest-north-deep-intake.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-north-deep-intake-station.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-aaron-voss-grave.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Memory for Aaron Guide & North Deep Intake",
  description:
    "Start Memory for Aaron with Rising Tide, reveal Aaron Voss, travel to North Deep Intake Station, find the grave, and finish the Update 5.5 quest.",
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
          name: "Memory for Aaron Guide",
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
        "The Last Caretaker Memory for Aaron Guide: Rising Tide and North Deep Intake",
      description:
        "A player-focused route for the Memory for Aaron quest in The Last Caretaker, covering the Rising Tide Pico cartridge, Aaron Voss coordinates and access information, the North Deep Intake Station objective, the station route, Aaron's grave, and the story revealed at the end of the Update 5.5 quest.",
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
          name: "Memory for Aaron",
        },
        {
          "@type": "Thing",
          name: "Aaron Voss",
        },
        {
          "@type": "Thing",
          name: "Alina Voss",
        },
        {
          "@type": "Thing",
          name: "Rising Tide",
        },
        {
          "@type": "Thing",
          name: "Pico Terminal",
        },
        {
          "@type": "Thing",
          name: "North Deep Intake Station",
        },
        {
          "@type": "Thing",
          name: "Aaron Voss Grave",
        },
        {
          "@type": "Thing",
          name: "Update 5.5 Deck Drop",
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
          title="The Last Caretaker Memory for Aaron Guide"
          description="Load Rising Tide into the Pico Terminal, expose the Aaron Voss clue, follow the new quest to North Deep Intake Station, and finish the route without confusing it with the separate 99X room mystery."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "start-memory-for-aaron",
              label: "Start Memory for Aaron",
            },
            {
              id: "get-memory-for-aaron-quest",
              label: "Get the Memory for Aaron quest",
            },
            {
              id: "prepare-for-north-deep-intake",
              label: "Prepare for North Deep Intake",
            },
            {
              id: "reach-north-deep-intake",
              label: "Reach North Deep Intake",
            },
            {
              id: "find-aaron-grave",
              label: "Find Aaron's grave",
            },
            {
              id: "north-deep-intake-access",
              label: "Explore beyond the grave",
            },
            {
              id: "complete-memory-for-aaron",
              label: "Complete Memory for Aaron",
            },
            {
              id: "memory-for-aaron-stuck",
              label: "Memory for Aaron stuck",
            },
            {
              id: "after-memory-for-aaron",
              label: "After Memory for Aaron",
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
              href: "/the-last-caretaker/transposium-room-998-guide",
              label: "Room 998 & Transposium Security Guide",
            },
            {
              href: "/the-last-caretaker/moses-warehouse-alpha-guide",
              label: "MOSES & Warehouse Alpha Guide",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
          ]}
        >
          <TheLastCaretakerMemoryForAaronContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}