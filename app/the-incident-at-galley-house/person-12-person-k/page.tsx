import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHousePerson12PersonKContent from "@/data/the-incident-at-galley-house/person-12-person-k.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-incident-at-galley-house`;
const pageUrl = `${hubUrl}/person-12-person-k`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-12-code.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-people-calibration.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-rupert-study-body.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-fox-case-note.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-rupert-remembers-amelia.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-katherine-phone-call.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-distant-death-note.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-person-k-code.webp`,
];

const toc = [
  {
    id: "who-they-are",
    label: "Who are Person 12 and K?",
  },
  {
    id: "roster-check",
    label: "Check Person 1–11 first",
  },
  {
    id: "when-to-solve",
    label: "When to solve them",
  },
  {
    id: "manual-calibration",
    label: "Manual Calibration",
  },
  {
    id: "person-12",
    label: "Person 12 solution",
  },
  {
    id: "person-k",
    label: "Person K solution",
  },
  {
    id: "why-the-codes-work",
    label: "Why the codes work",
  },
  {
    id: "achievement-cleanup",
    label: "Achievement cleanup",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "faq",
    label: "Person 12 and K FAQ",
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
  title: "The Incident at Galley House Person 12 & Person K Guide",
  description:
    "Identify Person 12 and Person K, match Rupert Galley to Fox and Katherine Beaumont to Deer, then enter 01-ST-12 and 25-WI-K without guessing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House Person 12 & Person K",
    description:
      "Follow the evidence for Rupert Galley and Katherine Beaumont, match the Fox and Deer portraits, and solve the hidden 01-ST-12 and 25-WI-K scenes.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "The Incident at Galley House Person 12 code 01-ST-12 for Rupert Galley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House Person 12 & Person K",
    description:
      "Find Rupert Galley and Katherine Beaumont, assign Fox and Deer, and solve the hidden Person 12 and Person K reconstruction codes.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Who is Person 12 in The Incident at Galley House?",
    answer:
      "Person 12 is Rupert Galley. Create profile 12 through Manual Calibration and assign the Fox portrait.",
  },
  {
    question:
      "What is the Person 12 code in The Incident at Galley House?",
    answer:
      "The Person 12 reconstruction code is 01-ST-12: Time 01, Study, and Rupert Galley as profile 12.",
  },
  {
    question: "Which portrait belongs to Rupert Galley?",
    answer:
      "Rupert Galley uses the Fox portrait. The leg injury, film canister, piano key, Amelia West program, and opening thunderclap support the match.",
  },
  {
    question: "Why is Rupert Galley Person 12?",
    answer:
      "Rupert dies before the known Person 1 through Person 11 victim sequence. The opening thunderclap places his death at Time 01, so he must be added as the missing profile 12.",
  },
  {
    question: "Who is Person K in The Incident at Galley House?",
    answer:
      "Person K is Katherine Beaumont, the mother of Annie Beaumont and Victoria Beaumont.",
  },
  {
    question:
      "What is the Person K code in The Incident at Galley House?",
    answer:
      "The Person K reconstruction code is 25-WI-K: Time 25, Wintercote, and Katherine Beaumont as profile K.",
  },
  {
    question: "Which portrait belongs to Katherine Beaumont?",
    answer:
      "Katherine Beaumont uses the Deer portrait. The wheelchair, broken teacup, photograph of two girls, phone call, and Wintercote evidence support the match.",
  },
  {
    question:
      "Why is Katherine in Wintercote instead of Galley House?",
    answer:
      "Katherine dies outside the machine's normal local detection radius. The machine can reach only her remote death moment at Wintercote rather than a full route through Galley House.",
  },
  {
    question:
      "Which achievements do the Person 12 and Person K codes unlock?",
    answer:
      "Entering 01-ST-12 unlocks Inciting Incident. Entering 25-WI-K unlocks Not Over Yet.",
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
          name: "Person 12 and Person K",
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
        "The Incident at Galley House Person 12 and Person K Solutions",
      description:
        "A complete evidence-based guide to the two hidden profiles in The Incident at Galley House, explaining why Person 12 is Rupert Galley, why Person K is Katherine Beaumont, when Manual Calibration should be used, how the Fox and Deer portraits are identified, why Rupert belongs before the numbered 1–11 chain, why Katherine's remote death is reconstructed at Wintercote, and how to enter 01-ST-12 and 25-WI-K.",
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
          name: "The Incident at Galley House Person 12",
        },
        {
          "@type": "Person",
          name: "Rupert Galley",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Person K",
        },
        {
          "@type": "Person",
          name: "Katherine Beaumont",
        },
        {
          "@type": "Thing",
          name: "01-ST-12",
        },
        {
          "@type": "Thing",
          name: "25-WI-K",
        },
        {
          "@type": "Thing",
          name: "Fox portrait",
        },
        {
          "@type": "Thing",
          name: "Deer portrait",
        },
        {
          "@type": "Thing",
          name: "Wintercote",
        },
        {
          "@type": "Thing",
          name: "Manual Calibration",
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
          title="The Incident at Galley House Person 12 & Person K"
          description="Trying to identify the two profiles missing from the normal roster? Follow the Fox, Deer, Amelia West, phone-call, thunderclap, and Wintercote evidence before entering the exact hidden-scene codes."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHousePerson12PersonKContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}