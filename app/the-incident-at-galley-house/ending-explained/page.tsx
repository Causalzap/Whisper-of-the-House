import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheIncidentAtGalleyHouseEndingExplainedContent from "@/data/the-incident-at-galley-house/ending-explained.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-incident-at-galley-house`;
const pageUrl = `${hubUrl}/ending-explained`;

const imageUrls = [
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-ervin-emotional-connections-rule.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-rupert-remembers-amelia.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-modern-four-thunderclaps.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-time-31-reya-lawrence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-megan-remembers-lawrence.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-reya-no-connection-to-ervin.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-eleanor-galley-memorial.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-ervin-final-request.webp`,
  `${siteUrl}/images/the-incident-at-galley-house/the-incident-at-galley-house-scene-00-family-photo.webp`,
];

const toc = [
  {
    id: "ending-rules",
    label: "The three ending rules",
  },
  {
    id: "what-happened",
    label: "What really happened",
  },
  {
    id: "amelia-west",
    label: "Who is Amelia West?",
  },
  {
    id: "historical-incident",
    label: "The original incident",
  },
  {
    id: "thunderclaps",
    label: "What thunderclaps mean",
  },
  {
    id: "time-31",
    label: "What Time 31 reveals",
  },
  {
    id: "modern-chain",
    label: "The modern memory chain",
  },
  {
    id: "ervin-plan",
    label: "Ervin's plan",
  },
  {
    id: "why-reya-survives",
    label: "Why Reya survives",
  },
  {
    id: "machine-origin-cure",
    label: "Machine, origin, and cure",
  },
  {
    id: "cost-of-erasure",
    label: "Ervin's family and Eleanor",
  },
  {
    id: "final-request",
    label: "Ervin's final request",
  },
  {
    id: "scene-00",
    label: "What Scene 00 means",
  },
  {
    id: "unanswered",
    label: "Unanswered questions",
  },
  {
    id: "faq",
    label: "Ending FAQ",
  },
];

const relatedLinks = [
    {
        href: "/the-incident-at-galley-house/all-scene-codes",
        label: "All Scene Codes and Walkthrough",
      },
  {
    href: "/the-incident-at-galley-house",
    label: "The Incident at Galley House Guide Hub",
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
    href: "/the-incident-at-galley-house/achievements-guide",
    label: "All Achievements Guide",
  },
];

export const metadata: Metadata = {
  title:
    "The Incident at Galley House Ending Explained: Amelia & Reya",
  description:
    "Confused by The Incident at Galley House ending? Get a complete breakdown of the memory chain rules, Ervin's containment plan, and the truth behind Scene 00.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Incident at Galley House Ending Explained",
    description:
      "Follow the memory chain from Amelia and Rupert to Ervin's containment plan, Reya's survival, Eleanor's memorial, and Scene 00.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Ervin Dolskey explains the emotional memory chain in The Incident at Galley House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Incident at Galley House Ending Explained",
    description:
      "Understand Amelia West, the thunderclaps, the modern memory chain, Ervin's plan, Reya's survival, and the meaning of Scene 00.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Who is Amelia West, and what evidence connects her to Rupert?",
    answer:
      "Amelia West is the pianist named on the recital program found beside the unidentified Study body. Rupert later recognizes her music and realizes he had forgotten her. That restored personal memory, followed by the thunderclap, shows that the active chain passes from Amelia to Rupert.",
  },
  {
    question:
      "Why can the machine show Katherine if she never comes to Galley House?",
    answer:
      "The machine manual says a person who dies during the Timeline but outside its local range may leave only the moment of death accessible. Katherine's Wintercote scene is that exception because the machine cannot follow her through Galley House.",
  },
  {
    question:
      "Why does John's fall not break the memory-chain rule?",
    answer:
      "The rule controls the supernatural handoff rather than the visible injury on every body. John can die from a fall while still occupying a place in the death-and-forgetting sequence. Physical cause and memory transfer are related events, but they are not the same thing.",
  },
  {
    question: "What exactly does a thunderclap tell the player?",
    answer:
      "A thunderclap marks a new death and a new Timeline code. Lawrence makes this explicit when he counts four thunderclaps and matches them to Times 27, 28, 29, and 30, with one new code for each modern death.",
  },
  {
    question:
      "Why is Reya safe when she hears Ervin through the machine?",
    answer:
      "Megan remembers Lawrence first by focusing on his toy dinosaur, and Ervin then remembers Megan first. Reya is left outside those handoffs. She has also never met Ervin, so his reconstructed voice gives her evidence without restoring a personal emotional relationship.",
  },
  {
    question:
      "Why destroy the machine if it did not cause the phenomenon?",
    answer:
      "The machine can restore erased voices and relationships, making it a powerful way to reopen a branch. Ervin asks Reya to destroy the machine with the house and bodies after burning his personal effects and erasing records of his identity.",
  },
  {
    question:
      "What does Scene 00 add that the ending explanation does not?",
    answer:
      "Scene 00 restores the household before Time 01 as a family photograph in the Living Room. It does not explain the global origin of the phenomenon; it shows the ordinary relationships that the later Timeline erased.",
  },
  {
    question: "Why is Eleanor Galley's memorial important?",
    answer:
      "The memorial identifies Eleanor through her parents and her brothers Rupert and Oswald. Ervin concludes she was not the direct next carrier because her family could still remember her, but once everyone who knew her is gone, she disappears from living memory too.",
  },
  {
    question:
      "Is there a second or branching ending in The Incident at Galley House?",
    answer:
      "No separate decision creates another conclusion. Optional scenes and achievement cleanup add evidence, especially Scene 00, but the narrative ending remains Ervin's containment plan and Reya surviving to carry out his final request.",
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
          name: "Ending Explained",
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
        "The Incident at Galley House Ending, Memory Chain, and Scene 00 Explained",
      description:
        "This ending explanation examines the three rules governing the emotional memory chain, Amelia West's connection to Rupert Galley, the historical Galley House incident, Katherine's remote Wintercote death, the meaning of thunderclaps, Lawrence and Pippa at Time 31, Megan's dinosaur memory trigger, Ervin Dolskey's containment plan, why Reya Beckon survives, the role of the reconstruction machine, Eleanor Galley's memorial, Ervin's final request, and the narrative meaning of Scene 00.",
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
          name: "The Incident at Galley House ending explained",
        },
        {
          "@type": "Thing",
          name: "Amelia West",
        },
        {
          "@type": "Thing",
          name: "Rupert Galley",
        },
        {
          "@type": "Thing",
          name: "Ervin Dolskey",
        },
        {
          "@type": "Thing",
          name: "Reya Beckon",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House memory chain",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House thunderclaps",
        },
        {
          "@type": "Thing",
          name: "The Incident at Galley House Scene 00",
        },
        {
          "@type": "Thing",
          name: "Eleanor Galley memorial",
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
          title="The Incident at Galley House Ending Explained"
          description="Finished the case but still unsure how the memory chain works? Follow Amelia, Rupert, Pippa, Lawrence, Megan, Ervin, and Reya through the final handoffs, then see what Scene 00 actually resolves."
          gameTitle="The Incident at Galley House"
          gameHref="/the-incident-at-galley-house"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheIncidentAtGalleyHouseEndingExplainedContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}