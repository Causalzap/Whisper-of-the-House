import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHouseGuideHubContent from "@/data/the-incident-at-galley-house/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-incident-at-galley-house`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-code-machine.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-timeline-evidence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-k-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-modern-four-thunderclaps.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-00-family-photo.webp`,
];

const toc = [
  {
    id: "about-the-game",
    label: "What is the game?",
  },
  {
    id: "choose-a-guide",
    label: "Choose the right guide",
  },
  {
    id: "recommended-order",
    label: "Recommended guide order",
  },
  {
    id: "machine-basics",
    label: "Machine basics",
  },
  {
    id: "original-case",
    label: "Original Galley House case",
  },
  {
    id: "hidden-people",
    label: "Person 12 and Person K",
  },
  {
    id: "modern-investigation",
    label: "Modern investigation",
  },
  {
    id: "achievements",
    label: "Achievements and cleanup",
  },
  {
    id: "ending-spoilers",
    label: "Ending explanation",
  },
  {
    id: "common-sticking-points",
    label: "Common sticking points",
  },
  {
    id: "faq",
    label: "Guide FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-incident-at-galley-house/hints",
    label: "Hints and Scene Solutions",
  },
  {
    href: "/the-incident-at-galley-house/all-scene-codes",
    label: "All Scene Codes and Walkthrough",
  },
  {
    href: "/the-incident-at-galley-house/person-12-person-k",
    label: "Person 12 and Person K Guide",
  },
  {
    href: "/the-incident-at-galley-house/achievements-guide",
    label: "All Achievements Guide",
  },
  {
    href: "/the-incident-at-galley-house/ending-explained",
    label: "Ending Explained",
  },
];

export const metadata: Metadata = {
  title: "The Incident at Galley House Guide & All Scene Codes",
  description:
    "Complete Galley House guide hub with spoiler-safe hints, all scene codes, Person 12 and K, achievements, modern puzzles, and ending help.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House Guide & Walkthrough",
    description:
      "Choose spoiler-safe hints, the complete scene-code walkthrough, hidden Person 12 and Person K help, achievements, or the full ending explanation.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Incident at Galley House reconstruction machine with Time Location and People controls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House Guide & Walkthrough",
    description:
      "Find progressive hints, all 106 scene codes, Person 12 and K, achievements, modern investigation help, and the ending explanation.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Which The Incident at Galley House guide has the fewest spoilers?",
    answer:
      "Start with the Hints and Scene Solutions Guide. It uses progressive reveals, allowing players to open a gentle hint before revealing the exact reconstruction.",
  },
  {
    question:
      "Should I use the Hints Guide or the All Scene Codes walkthrough?",
    answer:
      "Use Hints and Scene Solutions when you want to diagnose why a reconstruction fails. Use All Scene Codes and Walkthrough when you want the complete answer sheet without further deduction.",
  },
  {
    question:
      "Is there a complete The Incident at Galley House walkthrough with every scene code?",
    answer:
      "Yes. The All Scene Codes and Walkthrough page contains all 106 valid reconstructions, including Times 01 through 26, Person 12, Person K, every modern scene, and Scene 00.",
  },
  {
    question:
      "Where can I find the Person 1 through Person 11 names and portraits?",
    answer:
      "The All Scene Codes and Walkthrough page includes a Person 1 through Person 11 reference with each character's name, animal portrait, and strongest identifying clue.",
  },
  {
    question: "Are Person 12 and Person K required?",
    answer:
      "The story can progress before both are solved, but a complete original investigation and their related achievements require the hidden 01-ST-12 and 25-WI-K reconstructions.",
  },
  {
    question:
      "Which guide should I use for missing achievements?",
    answer:
      "Use the Achievements Guide after completing the story. It separates normal story unlocks, hidden profiles, intentionally invalid codes, Scene 00, and missing-scene cleanup.",
  },
  {
    question:
      "Can I return after the ending to finish missing content?",
    answer:
      "Yes. The completed save remains available for hidden profiles, missed reconstructions, locations, reminders, Scene 00, and achievement cleanup.",
  },
  {
    question:
      "When should I read The Incident at Galley House Ending Explained?",
    answer:
      "Read it after completing the modern investigation because it contains full spoilers for Amelia West, the memory chain, Ervin Dolskey's plan, Reya's survival, and Scene 00.",
  },
];

const guideItems = [
  {
    position: 1,
    name: "Hints and Scene Solutions",
    url: `${pageUrl}/hints`,
    description:
      "Progressive hints for rejected codes, room abbreviations, missing participants, thunderclaps, and Time 31.",
  },
  {
    position: 2,
    name: "All Scene Codes and Walkthrough",
    url: `${pageUrl}/all-scene-codes`,
    description:
      "All 106 valid original, hidden, modern, and Scene 00 reconstructions in one answer sheet.",
  },
  {
    position: 3,
    name: "Person 12 and Person K Guide",
    url: `${pageUrl}/person-12-person-k`,
    description:
      "Evidence and exact codes for Rupert Galley, Katherine Beaumont, Fox, Deer, 01-ST-12, and 25-WI-K.",
  },
  {
    position: 4,
    name: "Achievements Guide",
    url: `${pageUrl}/achievements-guide`,
    description:
      "All 15 Steam achievements, optional codes, Scene 00, Spectronoeticist, and completed-save cleanup.",
  },
  {
    position: 5,
    name: "Ending Explained",
    url: `${pageUrl}/ending-explained`,
    description:
      "Full story explanation covering Amelia West, the memory chain, Ervin's plan, Reya's survival, and Scene 00.",
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
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "VideoGame",
      "@id": `${pageUrl}#game`,
      name: "The Incident at Galley House",
      url: pageUrl,
      image: imageUrls[0],
      datePublished: "2026-07-14",
      genre: [
        "Narrative deduction",
        "Mystery",
        "Puzzle",
        "Adventure",
      ],
      creator: [
        {
          "@type": "Person",
          name: "William Rous",
        },
        {
          "@type": "Organization",
          name: "Evil Trout Inc.",
        },
      ],
      description:
        "A narrative deduction mystery based on the browser game Type Help. Players use a reconstruction machine to identify people, locations, movements, deaths, and erased relationships across the Galley House Timeline.",
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "The Incident at Galley House Guide and Walkthrough",
      headline:
        "The Incident at Galley House Guide, All Scene Codes, Achievements, and Ending Help",
      description:
        "A complete guide hub for The Incident at Galley House with spoiler-controlled hints, all 106 valid scene codes, Person 1 through 11 identities, Person 12 and Person K solutions, all 15 achievements, modern investigation help, and a full ending explanation.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-16",
      dateModified: "2026-07-16",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      about: {
        "@id": `${pageUrl}#game`,
      },
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
      mainEntity: {
        "@id": `${pageUrl}#guide-list`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#guide-list`,
      name: "The Incident at Galley House Guides",
      numberOfItems: guideItems.length,
      itemListElement: guideItems.map(
        ({ position, name, url, description }) => ({
          "@type": "ListItem",
          position,
          item: {
            "@type": "Article",
            name,
            url,
            description,
          },
        }),
      ),
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
          title="The Incident at Galley House Guide & Walkthrough"
          description="Choose the right level of help for your investigation: progressive hints, the complete scene-code answer sheet, hidden Person 12 and Person K evidence, all achievements, or the fully spoiled ending explanation."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHouseGuideHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}