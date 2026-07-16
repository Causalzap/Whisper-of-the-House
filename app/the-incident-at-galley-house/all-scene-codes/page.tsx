import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHouseAllSceneCodesContent from "@/data/the-incident-at-galley-house/all-scene-codes.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-incident-at-galley-house`;
const pageUrl = `${hubUrl}/all-scene-codes`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-first-scene-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-timeline-evidence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-k-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-modern-id-list.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-time-31-reya-lawrence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-modern-four-thunderclaps.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-hallucination-final-code.webp`,
];

const toc = [
  {
    id: "how-to-read",
    label: "How to read scene codes",
  },
  {
    id: "person-id-reference",
    label: "Person 1–11 names",
  },
  {
    id: "original-act-1",
    label: "Times 01–06",
  },
  {
    id: "original-act-2",
    label: "Times 07–13",
  },
  {
    id: "original-act-3",
    label: "Times 14–20",
  },
  {
    id: "original-act-4",
    label: "Times 21–26",
  },
  {
    id: "hidden-scenes",
    label: "Hidden scenes and Scene 00",
  },
  {
    id: "modern-scene-codes",
    label: "Modern Times 27–32",
  },
  {
    id: "achievement-only-codes",
    label: "Achievement-only codes",
  },
  {
    id: "code-not-working",
    label: "Why a code does not work",
  },
  {
    id: "faq",
    label: "Scene codes FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-incident-at-galley-house/hints",
    label: "Hints and Scene Solutions Guide",
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
  title: "The Incident at Galley House All Scene Codes & Walkthrough",
  description:
    "Find all 106 Galley House scene codes for Times 01–32, Person 12, Person K, modern IDs, Scene 00, achievements, and the full walkthrough order.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House All Scene Codes",
    description:
      "Use the complete code list for the original case, hidden victims, modern investigation, Scene 00, achievement inputs, and Person 1–11 identities.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Incident at Galley House opening scene code 01-QU-1-11",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House All Scene Codes",
    description:
      "Find every valid reconstruction for Times 01–32, hidden Person 12 and Person K, modern IDs, Scene 00, and achievement-only inputs.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Can I enter The Incident at Galley House scene codes out of story order?",
    answer:
      "Yes, once the required time, location, and profiles have been registered. A code cannot automatically unlock a missing room, hidden profile, modern Admin ID, or final photograph.",
  },
  {
    question: "Do character names matter when entering a scene code?",
    answer:
      "No. The reconstruction machine validates numeric and letter IDs. Renaming confirmed profiles makes the Timeline easier to read, but it does not change the underlying scene code.",
  },
  {
    question:
      "Do I need Person 12 and Person K before starting the modern scenario?",
    answer:
      "You can continue after the main Person 1–11 route, but the original investigation is not fully complete until Person 12 and Person K have both been manually calibrated and reconstructed.",
  },
  {
    question:
      "How many valid scene reconstructions are in The Incident at Galley House?",
    answer:
      "This guide lists 106 valid reconstructions: 88 ordinary original scenes, two hidden-victim scenes, 15 valid modern scenes, and the final Scene 00 reconstruction. Achievement-only failed inputs are not included in that total.",
  },
  {
    question: "Can I return after the ending to enter a missed scene code?",
    answer:
      "Yes. The completed save remains available for missed-scene and achievement cleanup, so one missing reconstruction does not require restarting the full investigation.",
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
          name: "All Scene Codes and Walkthrough",
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
        "The Incident at Galley House All Scene Codes and Complete Walkthrough",
      description:
        "A complete answer-sheet walkthrough for The Incident at Galley House, covering all 106 valid reconstructions, original Timeline codes from Times 01 through 26, Person 1–11 names and animal-photo matches, hidden Person 12 and Person K scenes, modern investigation codes from Times 27 through 32, Ervin Dolskey's final scene, the Scene 00 family photograph, achievement-only inputs, and setup checks for codes that remain unavailable.",
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
          name: "The Incident at Galley House all scene codes",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House walkthrough",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House complete code list",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Person IDs",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Person 12",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Person K",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Time 31",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Scene 00",
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
          title="The Incident at Galley House All Scene Codes"
          description="Need the answers without progressive hints? Use the complete original, hidden, modern, and Scene 00 code list, plus Person 1–11 names and the exact setup required for each special reconstruction."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHouseAllSceneCodesContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}