import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheAsterkarnIncidentWalkthroughContent from "@/data/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/the-asterkarn-incident-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-quest-journal.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-frostveil-rift.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-hearth-blizzard-detour.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-garmir-the-lost.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-ulfgarn-scouts.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-frostveil-rock-feathers.webp`,
];

const toc = [
  {
    id: "quest-start",
    label: "Quest start & rewards",
  },
  {
    id: "exact-route",
    label: "Route to the missing Scouts",
  },
  {
    id: "hearth-versus-main-route",
    label: "Hearth detour vs main route",
  },
  {
    id: "garmir",
    label: "How to beat Garmir",
  },
  {
    id: "after-garmir",
    label: "What to do after Garmir",
  },
  {
    id: "optional-quests",
    label: "Optional Frostveil quests",
  },
  {
    id: "stuck",
    label: "Stuck fixes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/grim-dawn-fangs-of-asterkarn",
    label: "Fangs of Asterkarn Guide Hub",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough",
    label: "Ritual of Cleansing Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items",
    label: "Soul Echoes & Awakened Epic Items",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
    label: "Wereraven Leveling Build",
  },
];

export const metadata: Metadata = {
  title: "Grim Dawn Asterkarn Incident: Garmir & Missing Scouts",
  description:
    "Follow the Frostveil route, avoid the Hearth detour, beat Garmir, find the missing Scouts, speak to Ulfgarn, and fix quest blocks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Asterkarn Incident Walkthrough in Grim Dawn",
    description:
      "Leave Fort Ikon, activate the Frostveil Riftgate, turn east toward Garmir, rescue the missing Scouts, and finish Ulfgarn's dialogue.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Grim Dawn route through the Frostveil Highlands toward Garmir and the missing Scouts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grim Dawn Asterkarn Incident: Garmir Route",
    description:
      "Find the correct Frostveil route, avoid the northwest side-quest detour, defeat Garmir, and complete the Scout and Ulfgarn interactions.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "Does the quest marker show the route from Fort Ikon?",
    answer:
      "No. Leave Fort Ikon through the northwest route, activate the first Frostveil Riftgate, continue north into the snowy highlands, and then turn east toward Garmir and the missing Scouts.",
  },
  {
    question:
      "Can I skip Hearth in the Blizzard and Feathers of a Bird?",
    answer:
      "Yes. Both are optional Frostveil side quests. Neither is required to defeat Garmir, rescue the Scouts, speak with Ulfgarn, or unlock Journey to Kurnhold.",
  },
  {
    question:
      "Does The Asterkarn Incident route change on Normal, Elite, or Ultimate?",
    answer:
      "The main locations and interaction order remain the same. Difficulty changes enemy scaling and the danger of the Garmir fight, but not the north-then-east route or the required Scout and Ulfgarn conversations.",
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
          name: "Fangs of Asterkarn Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "The Asterkarn Incident Walkthrough",
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
        "The Asterkarn Incident Walkthrough: Frostveil Route, Garmir, Missing Scouts, Ulfgarn, and Quest Rewards",
      description:
        "This Grim Dawn: Fangs of Asterkarn walkthrough explains how to start The Asterkarn Incident with Scout Avirs at Fort Ikon, enter the Frostveil Highlands, activate the first Riftgate, follow the north-then-east route, avoid confusing Hearth in the Blizzard with the main objective, defeat Garmir the Lost, speak to the rescued Scouts and Ulfgarn, collect the Frozen Aster reward, unlock Journey to Kurnhold, separate optional Rock Feather objectives from the main quest, and fix missing markers or incomplete dialogue.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-26",
      dateModified: "2026-07-26",
      about: [
        {
          "@type": "VideoGame",
          name: "Grim Dawn: Fangs of Asterkarn",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "The Asterkarn Incident",
        },
        {
          "@type": "Thing",
          name: "Scout Avirs",
        },
        {
          "@type": "Thing",
          name: "Fort Ikon",
        },
        {
          "@type": "Thing",
          name: "Frostveil Highlands",
        },
        {
          "@type": "Thing",
          name: "Garmir the Lost",
        },
        {
          "@type": "Thing",
          name: "Missing Scouts",
        },
        {
          "@type": "Thing",
          name: "Ulfgarn, Son of Garn",
        },
        {
          "@type": "Thing",
          name: "Hearth in the Blizzard",
        },
        {
          "@type": "Thing",
          name: "Feathers of a Bird",
        },
        {
          "@type": "Thing",
          name: "Rock Feathers",
        },
        {
          "@type": "Thing",
          name: "Frozen Aster",
        },
        {
          "@type": "Thing",
          name: "Journey to Kurnhold",
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
          title="How I Find the Missing Scouts and Finish The Asterkarn Incident"
          description="Follow the route I use from Fort Ikon through the Frostveil Highlands, activate the Riftgate before exploring, avoid the northwest Hearth detour, beat Garmir, and complete the Scout and Ulfgarn conversations without losing the main quest."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TheAsterkarnIncidentWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}