import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHouseAchievementsGuideContent from "@/data/the-incident-at-galley-house/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-incident-at-galley-house`;
const pageUrl = `${hubUrl}/achievements-guide`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-achievement-progress.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-machine-generator.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-k-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-death-note-skull-marker.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-12-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-shocking-revelation-body.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-still-alive-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-type-he-l-p-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-hallucination-final-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-00-family-photo.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-all-scenes-complete.webp`,
];

const toc = [
  {
    id: "overview",
    label: "All 15 achievements",
  },
  {
    id: "missable",
    label: "Are achievements missable?",
  },
  {
    id: "seance-persistence",
    label: "Seance and Persistence",
  },
  {
    id: "power-achievements",
    label: "Power achievements",
  },
  {
    id: "house-tour",
    label: "House Tour",
  },
  {
    id: "full-house",
    label: "Full House",
  },
  {
    id: "death-note",
    label: "Death Note",
  },
  {
    id: "hidden-people",
    label: "Person 12 and Person K",
  },
  {
    id: "shocking-revelation",
    label: "A Shocking Revelation",
  },
  {
    id: "still-alive",
    label: "Still Alive code",
  },
  {
    id: "type-help",
    label: "TYPE HE-L-P code",
  },
  {
    id: "hallucination",
    label: "Hallucination code",
  },
  {
    id: "spectronoeticist",
    label: "Spectronoeticist",
  },
  {
    id: "cleanup-route",
    label: "Fast cleanup route",
  },
  {
    id: "common-problems",
    label: "Achievement fixes",
  },
  {
    id: "faq",
    label: "Achievements FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-incident-at-galley-house/all-scene-codes",
    label: "All Scene Codes and Walkthrough",
  },
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
    href: "/the-incident-at-galley-house",
    label: "The Incident at Galley House Guide Hub",
  },
];

export const metadata: Metadata = {
  title: "The Incident at Galley House Achievements Guide",
  description:
    "Unlock all 15 Galley House achievements in one save with exact codes for Person 12, Person K, Still Alive, TYPE HE-L-P, Scene 00, and all scenes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House Achievements Guide",
    description:
      "Complete all 15 achievements with a one-save cleanup route, exact hidden codes, every location, Scene 00, and the last missing-scene checks.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Incident at Galley House achievement progress after completing the story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House Achievements Guide",
    description:
      "Unlock all 15 achievements with exact codes for Still Alive, TYPE HE-L-P, Person 12, Person K, Hallucination, and every scene.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "How many achievements are in The Incident at Galley House?",
    answer:
      "There are 15 Steam achievements in The Incident at Galley House.",
  },
  {
    question:
      "Can I unlock every achievement in one save?",
    answer:
      "Yes. The completed save remains available after the ending for missing scenes, locations, reminders, hidden profiles, and achievement-code cleanup.",
  },
  {
    question:
      "What is the Still Alive achievement code?",
    answer:
      "After Admin Access becomes available, enter 32-LI-70. The machine rejects the attempt because Reya Beckon is still alive, which unlocks Still Alive.",
  },
  {
    question:
      "What is the TYPE HE-L-P achievement code?",
    answer:
      "Create temporary profiles L and P through Manual Calibration, then enter 00-HE-L-P using Time 00 and Helen's Room.",
  },
  {
    question:
      "What is the Person 12 achievement code?",
    answer:
      "Create Person 12 as Rupert Galley, assign the Fox portrait, and enter 01-ST-12 to unlock Inciting Incident.",
  },
  {
    question:
      "What is the Person K achievement code?",
    answer:
      "Create Person K as Katherine Beaumont, assign the Deer portrait, add Wintercote, and enter 25-WI-K to unlock Not Over Yet.",
  },
  {
    question:
      "What is the final Hallucination achievement code?",
    answer:
      "Enter 00-LI-3-5-6-7-8-10-12. The Scene 00 reconstruction uses the Living Room and People 3, 5, 6, 7, 8, 10, and 12.",
  },
  {
    question:
      "Why did Hallucination unlock but not Spectronoeticist?",
    answer:
      "Scene 00 is complete, but at least one earlier historical or modern reconstruction is still missing. Check optional single-person scenes, rarely used rooms, Person 12, Person K, and the modern side scenes.",
  },
  {
    question:
      "Do I need to view a scene in every location for Full House?",
    answer:
      "No. Full House checks whether all locations have been added to the machine. House Tour separately requires viewing at least one scene in every required room.",
  },
  {
    question:
      "Which achievement had the lowest launch completion rate?",
    answer:
      "TYPE HE-L-P had the lowest completion rate in the July 16, 2026 snapshot at 12.5%, followed by Still Alive at 14.4% and Spectronoeticist at 14.5%.",
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
          name: "Achievements Guide",
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
        "The Incident at Galley House Achievements Guide: All 15 Unlocks",
      description:
        "A complete one-save achievement guide for The Incident at Galley House, covering all 15 Steam achievements, dated launch completion rates, Seance and Persistence, the three generator-restoration achievements, House Tour, all 16 locations for Full House, the Death Note skull reminder, Person 12 and Person K, A Shocking Revelation, the exact 32-LI-70 Still Alive code, the 00-HE-L-P wordplay setup, the final Scene 00 Hallucination code, Spectronoeticist missing-scene checks, and a fast completed-save cleanup order.",
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
          name: "The Incident at Galley House achievements",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House achievement guide",
        },
        {
          "@type": "Thing",
          name: "Still Alive achievement",
        },
        {
          "@type": "Thing",
          name: "TYPE HE-L-P achievement",
        },
        {
          "@type": "Thing",
          name: "Hallucination achievement",
        },
        {
          "@type": "Thing",
          name: "Spectronoeticist achievement",
        },
        {
          "@type": "Thing",
          name: "Inciting Incident achievement",
        },
        {
          "@type": "Thing",
          name: "Not Over Yet achievement",
        },
        {
          "@type": "Thing",
          name: "Scene 00",
        },
        {
          "@type": "Thing",
          name: "00-HE-L-P",
        },
        {
          "@type": "Thing",
          name: "32-LI-70",
        },
        {
          "@type": "Thing",
          name: "00-LI-3-5-6-7-8-10-12",
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
          title="The Incident at Galley House Achievements Guide"
          description="Use one completed save to unlock all 15 achievements, including the hidden Person 12 and Person K scenes, Still Alive, TYPE HE-L-P, Hallucination, Spectronoeticist, and every location."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHouseAchievementsGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}