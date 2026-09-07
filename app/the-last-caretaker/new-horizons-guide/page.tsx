import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerNewHorizonsContent from "@/data/the-last-caretaker/new-horizons-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/new-horizons-guide`;

const imageUrls = [
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-new-horizons-update-notes.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-new-horizons-pishon-marker.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-parked-next-to-boat.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-wall-outlets-skill-unlocks.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker New Horizons Guide: What to Do First",
  description:
    "Returning for Update 5? Stabilize your boat, choose Project Eden, Oil Whale or Theta 9, and leave low-priority New Horizons work for later.",
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
          name: "New Horizons Guide",
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
        "The Last Caretaker New Horizons Guide: What Should You Do First in Update 5?",
      description:
        "A returning-player decision guide for The Last Caretaker Update 5 New Horizons, covering how to check an existing boat before leaving, when to prioritize Project Eden at Pishon, the Project Jonah and Oil Whale route, Research Outpost Theta 9, wall outlet cleanup, Samples, Holo Memories, music cartridges, Water Jet upgrades, and which activities can safely wait.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-26",
      dateModified: "2026-09-07",
      about: [
        {
          "@type": "VideoGame",
          name: "The Last Caretaker",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker New Horizons",
        },
        {
          "@type": "Thing",
          name: "The Last Caretaker Update 5",
        },
        {
          "@type": "Thing",
          name: "Project Eden",
        },
        {
          "@type": "Thing",
          name: "Pishon",
        },
        {
          "@type": "Thing",
          name: "Project Jonah",
        },
        {
          "@type": "Thing",
          name: "Oil Whale",
        },
        {
          "@type": "Thing",
          name: "Research Outpost Theta 9",
        },
        {
          "@type": "Thing",
          name: "Wall Outlets",
        },
        {
          "@type": "Thing",
          name: "Samples",
        },
        {
          "@type": "Thing",
          name: "Holo Memories",
        },
        {
          "@type": "Thing",
          name: "Water Jet",
        },
        {
          "@type": "Thing",
          name: "Tide Ripper",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="The Last Caretaker New Horizons Guide: What Should You Do First?"
          description="Loaded an old save and got hit by too many new routes? Check the boat once, pick the trip that solves your current bottleneck, and leave the rest until it has a reason to matter."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 7, 2026"
          toc={[
            {
              id: "start-with-the-boat",
              label: "Start with the boat",
            },
            {
              id: "project-eden",
              label: "Project Eden",
            },
            {
              id: "oil-whale",
              label: "Oil Whale",
            },
            {
              id: "theta-9",
              label: "Theta 9",
            },
            {
              id: "wall-outlets",
              label: "Wall outlets",
            },
            {
              id: "samples-memories",
              label: "Samples & Memories",
            },
            {
              id: "water-jet",
              label: "Water Jet",
            },
            {
              id: "what-can-wait",
              label: "What can wait",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
            },
            {
              href: "/the-last-caretaker/walkthrough",
              label: "The Last Caretaker Walkthrough",
            },
            {
              href: "/the-last-caretaker/project-eden-guide",
              label: "Project Eden Guide",
            },
            {
              href: "/the-last-caretaker/oil-whale-guide",
              label: "Oil Whale Guide",
            },
            {
              href: "/the-last-caretaker/research-outpost-theta-9-guide",
              label: "Research Outpost Theta 9 Guide",
            },
            {
              href: "/the-last-caretaker/power-fuel-wall-outlets",
              label: "Power, Fuel & Wall Outlets Guide",
            },
          ]}
        >
          <TheLastCaretakerNewHorizonsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}