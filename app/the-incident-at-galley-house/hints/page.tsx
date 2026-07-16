import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHouseHintsContent from "@/data/the-incident-at-galley-house/hints.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-incident-at-galley-house`;
const pageUrl = `${hubUrl}/hints`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-code-machine.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-machine-generator.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-people-calibration.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-timeline-evidence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-time-31-missing-person.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-time-31-reya-lawrence.webp`,
];

const toc = [
  {
    id: "how-to-use",
    label: "How to use the hints",
  },
  {
    id: "machine-setup",
    label: "Machine setup",
  },
  {
    id: "scene-code-format",
    label: "How scene codes work",
  },
  {
    id: "room-codes",
    label: "All room codes",
  },
  {
    id: "code-not-working",
    label: "Why a code does not work",
  },
  {
    id: "early-route",
    label: "Early-game route",
  },
  {
    id: "death-order",
    label: "Deaths and thunderclaps",
  },
  {
    id: "time-31",
    label: "Time 31 solution",
  },
  {
    id: "hidden-profiles",
    label: "Person 12 and Person K",
  },
  {
    id: "built-in-hints",
    label: "When to use built-in hints",
  },
  {
    id: "next-action",
    label: "What to do next",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "Hints FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-incident-at-galley-house/all-scene-codes",
    label: "All Scene Codes and Walkthrough",
  },
  {
    href: "/the-incident-at-galley-house/person-12-person-k",
    label: "Person 12 and Person K Guide",
  },
  {
    href: "/the-incident-at-galley-house/ending-explained",
    label: "Ending Explained",
  },
  {
    href: "/the-incident-at-galley-house/achievements-guide",
    label: "All Achievements Guide",
  },
  {
    href: "/the-incident-at-galley-house",
    label: "The Incident at Galley House Guide Hub",
  },
];

export const metadata: Metadata = {
  title: "The Incident at Galley House Hints & Scene Solutions",
  description:
    "Use progressive hints, fix rejected scene codes, decode every room abbreviation, solve Time 31, and find hidden Person 12 and Person K without full spoilers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House Hints & Scene Solutions",
    description:
      "Fix rejected reconstructions with progressive hints, room codes, Time 31 help, hidden-profile guidance, and spoiler-controlled scene solutions.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Incident at Galley House scene-code reconstruction machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House Hints & Scene Solutions",
    description:
      "Stuck on a rejected reconstruction? Check room codes, missing participants, Time 31, Person 12, Person K, and when to use the machine's hints.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Is there a penalty for using the built-in hints?",
    answer:
      "No. The opening notebook states that there is no penalty for using hints. The active reconstruction also pauses while the hint panel is open, so dialogue and character movement are not missed.",
  },
  {
    question: "What happens if I enter the same wrong code twice?",
    answer:
      "The second identical failure unlocks the Persistence achievement. It does not reveal the correct solution, so the next step is to recheck the time, room, and participant fields separately.",
  },
  {
    question: "Can evidence from one scene solve a different scene?",
    answer:
      "Yes. The machine manual notes that a scene code can be constructed from clues found in other reconstructions. Earlier dialogue may reveal a later arrival time, destination, relationship, or participant.",
  },
  {
    question: "What does Replay do after a scene is solved?",
    answer:
      "Replay reopens a successful reconstruction without requiring its code to be rebuilt. It is useful for checking silent participants, entrances and exits, and the final destination named before the scene ends.",
  },
  {
    question: "Why can I know a room name but still not select it?",
    answer:
      "Discovering a room and registering it in the machine are separate steps. The location must first be added through the Locations menu before it can be selected in a reconstruction.",
  },
  {
    question: "How far can the machine trace one person?",
    answer:
      "The machine follows a person from the beginning of the available Timeline until they leave the antenna detection radius, the Timeline range ends, or the person dies. Some profiles therefore have longer routes than others.",
  },
  {
    question: "Why is Wintercote available if it is outside Galley House?",
    answer:
      "Katherine dies during the active Timeline but outside the machine's normal local range. Wintercote is available for that limited remote-death reconstruction even though Katherine has no room-to-room route through the house.",
  },
  {
    question: "Is 00-HE-L-P the normal hint command?",
    answer:
      "No. It is an optional achievement input using Time 00, Helen's Room, and temporary profiles L and P. The ordinary hint system is opened through the machine interface.",
  },
  {
    question: "Does renaming a profile solve or change its scene code?",
    answer:
      "No. Renaming is only a note-taking aid. The machine continues to identify the profile by its number or letter, and a guessed name cannot fix an incorrect time, location, or participant list.",
  },
];

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
          name: "The Incident at Galley House Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hints and Scene Solutions",
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
        "The Incident at Galley House Hints, Room Codes, and Scene Solutions",
      description:
        "A progressive, spoiler-controlled guide to The Incident at Galley House reconstruction puzzles, including machine setup, the scene-code format, all room abbreviations, rejected-code diagnosis, early-game routing, thunderclap and death-order deductions, the exact Time 31 solution, hidden Person 12 and Person K guidance, built-in hint behavior, and common reconstruction mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-16",
      dateModified: "2026-07-16",
      about: [
        {
          "@type": "VideoGame",
          name: "The Incident at Galley House",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House hints",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House scene solutions",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House room codes",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Time 31",
        },
        {
          "@type": "Thing",
          name: "Person 12",
        },
        {
          "@type": "Thing",
          name: "Person K",
        },
        {
          "@type": "Thing",
          name: "Reconstruction machine",
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqEntities.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
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
          title="The Incident at Galley House Hints & Scene Solutions"
          description="Stuck on a reconstruction but not ready to reveal every answer? Use progressive hints to check the room, time, missing participants, thunderclap order, and hidden profiles before opening the exact solution."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHouseHintsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}