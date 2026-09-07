import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerTransposiumRoom998Content from "@/data/the-last-caretaker/transposium-room-998-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/transposium-room-998-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-transposium-camera-room-998.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-transposium-room-051-door.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker Room 998 & Transposium Security Guide",
  description:
    "Check Room 998 through Transposium Security, compare the camera feed with physical room numbers, and see what is and is not currently verified in Update 5.5.",
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
          name: "Room 998 & Transposium Security Guide",
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
        "The Last Caretaker Room 998 and Transposium Security Guide",
      description:
        "A player-focused look at the Room 998 mystery in The Last Caretaker, covering the Transposium Security camera feeds, the visible 998 room, physical numbered rooms such as Room 051, the reported Room 72 and keypad route, and the point where the current Update 5.5 evidence stops supporting a complete puzzle solution.",
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
          name: "Transposium",
        },
        {
          "@type": "Thing",
          name: "Room 998",
        },
        {
          "@type": "Thing",
          name: "Transposium Security",
        },
        {
          "@type": "Thing",
          name: "Security Camera Feed",
        },
        {
          "@type": "Thing",
          name: "Room 051",
        },
        {
          "@type": "Thing",
          name: "Room 72",
        },
        {
          "@type": "Thing",
          name: "99X Rooms",
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
          title="The Last Caretaker Room 998 & Transposium Security Guide"
          description="Room 998 is visible through Transposium Security, but seeing the room is not the same as having a verified physical route. Use the camera feeds and numbered doors to separate the clues that work from the steps that still do not reproduce."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "start-with-transposium-security",
              label: "Start with Transposium Security",
            },
            {
              id: "find-room-998-camera",
              label: "Find Room 998 in Security",
            },
            {
              id: "room-72",
              label: "The Room 72 problem",
            },
            {
              id: "room-998-status",
              label: "Room 998 status in Update 5.5",
            },
            {
              id: "other-99x-rooms",
              label: "Other 99X rooms",
            },
            {
              id: "security-camera-code",
              label: "Security camera code",
            },
            {
              id: "old-transposium-secrets",
              label: "Older Transposium secrets",
            },
            {
              id: "rising-tide",
              label: "Rising Tide",
            },
            {
              id: "when-to-stop-searching",
              label: "When to stop searching",
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
              href: "/the-last-caretaker/memory-for-aaron-guide",
              label: "Memory for Aaron Guide",
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
          <TheLastCaretakerTransposiumRoom998Content />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}