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
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-pishon-eden-frame-platform.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-oil-whale-parked-next-to-boat.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-wall-outlets-skill-unlocks.webp`,
  `${siteUrl}/images/the-last-caretaker/the-last-caretaker-theta-9-ventilation-authorization.webp`,
];

export const metadata: Metadata = {
  title: "The Last Caretaker New Horizons Guide - Update 5",
  description:
    "Start Update 5 with Project Eden, Project Jonah, Oil Whale, Theta 9, wall outlets, Samples, Holo Memories and water jet tools in the right order.",
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
        "The Last Caretaker New Horizons Guide: Update 5 Route, Project Eden, Project Jonah, Oil Whale, Theta 9, Wall Outlets, Samples, and Water Jet Tools",
      description:
        "This The Last Caretaker New Horizons guide explains what to do first in Update 5, including how to prioritize boat power, Project Eden at Pishon, Project Jonah and the Oil Whale, Research Outpost Theta 9, wall outlets, Grid Scan, Samples, Holo Memories, music cartridges, Water Jet / Tide Ripper tools, and which systems can wait until the boat is stable.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-26",
      dateModified: "2026-06-26",
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
          name: "Omega Nursery",
        },
        {
          "@type": "Thing",
          name: "Research Outpost Theta 9",
        },
        {
          "@type": "Thing",
          name: "Ventilation 3.3 Authorization",
        },
        {
          "@type": "Thing",
          name: "Wall Outlets",
        },
        {
          "@type": "Thing",
          name: "Grid Scan",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What should I do first after Update 5?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Check your boat power, storage, and routing first. Then choose one route: Project Eden at Pishon, Project Jonah and the Oil Whale, Research Outpost Theta 9, or wall outlet cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Is New Horizons a fresh-start update?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. New players can start normally, but returning players get the most value by using an old stable boat and choosing which New Horizons route to handle first.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Project Eden start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Project Eden starts at Pishon. Find the platform, place the Eden Frame, then prepare stainless steel, connection ports, pump parts, gas tank parts, and later water, power, and oxygen inputs.",
          },
        },
        {
          "@type": "Question",
          name: "How do I start the Whale route?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Project Jonah route around Omega Nursery or Platform Omega and bring a human, not just a seed. On the map, look for the shark icon, then approach the Whale carefully and prepare power plus oil storage before collecting.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Oil Whale better than a refinery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only in the right situation. The Oil Whale is useful when you are nearby and prepared, but it can drain power and take setup time. Refineries or oil stations can still be easier for calm long refills.",
          },
        },
        {
          "@type": "Question",
          name: "What are wall outlets for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wall outlets clean up power, fuel, and gas routing. They help with oil, diesel, petrol, oxygen-style systems, Project Eden inputs, and Oil Whale setups.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Ventilation 3.3 locked in Theta 9?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ventilation 3.3 needs Research Outpost Theta authorization. Find the terminal route first, then return to the Ventilation 3.3 door.",
          },
        },
        {
          "@type": "Question",
          name: "Are Samples required before Project Eden?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Samples are an exploration system. Collect and send discoveries when you find them, but do not delay Project Eden or Whale prep just to chase every sample first.",
          },
        },
        {
          "@type": "Question",
          name: "Is Tide Ripper required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not always, but it makes underwater routes much more comfortable. Bring Tide Ripper before Research Outpost Theta 9 or any long underwater objective.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read next?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Project Eden Guide for Pishon, the Oil Whale Guide for Project Jonah oil setup, or the Research Outpost Theta 9 Guide if you are stuck on authorization.",
          },
        },
      ],
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
          title="The Last Caretaker New Horizons Guide"
          description="Use this Update 5 route to decide what to do first: stabilize the boat, start Project Eden at Pishon, prepare for Project Jonah and the Oil Whale, enter Theta 9 safely, and clean up wall outlet routing before adding more systems."
          gameTitle="The Last Caretaker"
          gameHref="/the-last-caretaker"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 26, 2026"
          toc={[
            {
              id: "what-to-do-first",
              label: "What to do first",
            },
            {
              id: "project-eden-pishon",
              label: "Project Eden / Pishon",
            },
            {
              id: "project-jonah-oil-whale",
              label: "Project Jonah / Oil Whale",
            },
            {
              id: "wall-outlets-grid-scan",
              label: "Wall outlets",
            },
            {
              id: "research-outpost-theta-9",
              label: "Theta 9",
            },
            {
              id: "samples-memories-music",
              label: "Samples & memories",
            },
            {
              id: "water-jet-tide-ripper",
              label: "Water Jet / Tide Ripper",
            },
            {
              id: "what-can-wait",
              label: "What can wait",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-last-caretaker",
              label: "The Last Caretaker Guide Hub",
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
              label: "Power & Fuel Wall Outlets Guide",
            },
            {
              href: "/#all-game-guides",
              label: "All Game Guides",
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