import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import FangsOfAsterkarnHubContent from "@/data/grim-dawn-fangs-of-asterkarn/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-asterkarn-incident-frostveil-rift.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-wereraven-mastery-bar-unlock.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-altar-of-ascension-quest-complete.webp`,
];

const guidePages = [
  {
    name: "The Asterkarn Incident Walkthrough",
    url: `${pageUrl}/the-asterkarn-incident-walkthrough`,
    description:
      "Find the missing Scouts, follow the correct Frostveil route, defeat Garmir, and finish the Ulfgarn dialogue.",
  },
  {
    name: "Wereraven Leveling Build",
    url: `${pageUrl}/wereraven-leveling-build`,
    description:
      "Level a Cold and Frostburn Wereraven with the right skills, devotions, gear, attributes, and Energy fixes.",
  },
  {
    name: "Ritual of Cleansing Walkthrough",
    url: `${pageUrl}/ritual-of-cleansing-walkthrough`,
    description:
      "Recover the Ashen Heart, Embers of the First Flame, and the Ugdenbog and Bargoll essences.",
  },
  {
    name: "Soul Echoes and Awakened Epic Items Guide",
    url: `${pageUrl}/soul-echoes-awaken-epic-items`,
    description:
      "Understand Soul materials, Elderveil, the Runed Orb, Ascension, Ascended Affixes, and Epic Awakening.",
  },
];

const toc = [
  {
    id: "start-here",
    label: "Choose the right guide",
  },
  {
    id: "how-to-start",
    label: "How to start FoA",
  },
  {
    id: "main-story",
    label: "Main story milestones",
  },
  {
    id: "berserker-overview",
    label: "Berserker transformations",
  },
  {
    id: "kurnhold-systems",
    label: "Kurnhold & endgame systems",
  },
  {
    id: "smaller-topics",
    label: "Smaller quests & topics",
  },
  {
    id: "returning-player-checklist",
    label: "Returning-player checklist",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href:
      "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
    label: "The Asterkarn Incident Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
    label: "Wereraven Leveling Build",
  },
  {
    href:
      "/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough",
    label: "Ritual of Cleansing Walkthrough",
  },
  {
    href:
      "/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items",
    label: "Soul Echoes & Awakened Epic Items",
  },
];

export const metadata: Metadata = {
  title: "Grim Dawn Fangs of Asterkarn Guide & Walkthrough",
  description:
    "Start Fangs of Asterkarn, follow the story, choose a Berserker build, reach Kurnhold, and use the right Ascension and Awakening guides.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Grim Dawn: Fangs of Asterkarn Guide Hub",
    description:
      "Find the correct story walkthrough, Berserker build, Kurnhold quest guide, and Ascension system guide for Fangs of Asterkarn.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        alt: "Grim Dawn Frostveil Highlands route at the beginning of Fangs of Asterkarn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grim Dawn: Fangs of Asterkarn Guide Hub",
    description:
      "Start the expansion, navigate Frostveil and Kurnhold, choose a Berserker transformation, and understand the endgame systems.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question:
      "Do I need to start a new character for Fangs of Asterkarn?",
    answer:
      "No. An existing character that can reach Fort Ikon can begin the expansion. A fresh character is useful when you specifically want to level Berserker from the beginning, but it is not required for access.",
  },
  {
    question:
      "Do I need Ashes of Malmouth and Forgotten Gods for Fangs of Asterkarn?",
    answer:
      "Yes. Fangs of Asterkarn requires both expansions. Some later quests also return to their campaign regions, so those routes may need to be unlocked on the current character and difficulty.",
  },
  {
    question: "Where does Fangs of Asterkarn start?",
    answer:
      "The story begins at Fort Ikon and follows the northwest expansion route into the Frostveil Highlands.",
  },
  {
    question: "Which Fangs of Asterkarn guide should I read first?",
    answer:
      "For story progression, begin with The Asterkarn Incident walkthrough. For a fresh Berserker, use the Wereraven Leveling Build. Ritual of Cleansing and the Soul Echo guide become more useful after reaching Kurnhold.",
  },
  {
    question:
      "Are Hearth in the Blizzard and Feathers of a Bird required?",
    answer:
      "No. Both are optional Frostveil quests. They can be completed during exploration or left until after the main eastern route is secure.",
  },
  {
    question:
      "Is full Ascendant Mode required for every Ascension feature?",
    answer:
      "No. Full Ascendant Mode is the Level 100 Ultimate setting. Individual Altar mechanics and related services can be used separately as they become available.",
  },
  {
    question: "Should I Ascend an Epic before Awakening it?",
    answer:
      "No. Awakening consumes the original Epic and creates a Legendary item. Awaken the Epic first, then Ascend the finished Legendary.",
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
          name: "Grim Dawn: Fangs of Asterkarn Guide",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Grim Dawn: Fangs of Asterkarn Guide Hub",
      headline:
        "Grim Dawn: Fangs of Asterkarn Guide, Walkthroughs, Builds, and Ascension Systems",
      description:
        "A guide hub for Grim Dawn: Fangs of Asterkarn covering how to start the expansion, the Frostveil and Kurnhold story route, Berserker transformations, Wereraven leveling, Ritual of Cleansing, Soul Echoes, Epic Awakening, item Ascension, optional quests, and common progression blocks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-26",
      dateModified: "2026-07-26",
      breadcrumb: {
        "@id": `${pageUrl}#breadcrumb`,
      },
      mainEntity: {
        "@type": "ItemList",
        "@id": `${pageUrl}#guides`,
        name: "Fangs of Asterkarn Guides",
        numberOfItems: guidePages.length,
        itemListElement: guidePages.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: guide.url,
          item: {
            "@type": "Article",
            "@id": `${guide.url}#article`,
            name: guide.name,
            headline: guide.name,
            description: guide.description,
            url: guide.url,
          },
        })),
      },
      hasPart: guidePages.map((guide) => ({
        "@type": "Article",
        "@id": `${guide.url}#article`,
        name: guide.name,
        description: guide.description,
        url: guide.url,
      })),
      about: [
        {
          "@type": "VideoGame",
          name: "Grim Dawn: Fangs of Asterkarn",
          url: pageUrl,
        },
        {
          "@type": "Thing",
          name: "Frostveil Highlands",
        },
        {
          "@type": "Thing",
          name: "Kurnhold",
        },
        {
          "@type": "Thing",
          name: "Berserker Mastery",
        },
        {
          "@type": "Thing",
          name: "Wereraven",
        },
        {
          "@type": "Thing",
          name: "Werewolf",
        },
        {
          "@type": "Thing",
          name: "The Asterkarn Incident",
        },
        {
          "@type": "Thing",
          name: "Journey to Kurnhold",
        },
        {
          "@type": "Thing",
          name: "Ritual of Cleansing",
        },
        {
          "@type": "Thing",
          name: "Ascendant Mode",
        },
        {
          "@type": "Thing",
          name: "Soul Echoes",
        },
        {
          "@type": "Thing",
          name: "Epic Awakening",
        },
        {
          "@type": "Thing",
          name: "Item Ascension",
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
          title="Grim Dawn: Fangs of Asterkarn Guide Hub"
          description="Start at Fort Ikon, choose the right story walkthrough or Berserker build, follow the route to Kurnhold, and understand how the expansion's Ascension and Awakening systems fit together."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <FangsOfAsterkarnHubContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}