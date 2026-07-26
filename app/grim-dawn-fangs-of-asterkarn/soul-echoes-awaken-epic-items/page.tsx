import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SoulEchoesAwakenedEpicItemsContent from "@/data/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/soul-echoes-awaken-epic-items`;

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-altar-of-ascension-quest-complete.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-recipe-200k.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-awakened-epic-before-after.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-elder-noltukari-location.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-soul-echo-elder-noltukari-dialogue.webp`,
];

const toc = [
  {
    id: "unlock-services",
    label: "Unlock Ascension services",
  },
  {
    id: "soul-materials",
    label: "Soul Echoes, Fragments & Ashes",
  },
  {
    id: "item-ascension",
    label: "How item Ascension works",
  },
  {
    id: "awaken-epic",
    label: "How to Awaken an Epic",
  },
  {
    id: "elderveil",
    label: "Elderveil & Runed Orb",
  },
  {
    id: "inventory",
    label: "Store Epics & materials",
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
    href: "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
    label: "The Asterkarn Incident Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
    label: "Wereraven Leveling Build",
  },
];

export const metadata: Metadata = {
  title: "Grim Dawn Soul Echoes, Ascension & Awakened Epics",
  description:
    "Find Soul Echoes, Ashes of Awakening, Elderveil and the Runed Orb, then Awaken Epics first, Ascend them safely, and fix missing recipes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Grim Dawn Soul Echoes & Awakened Epic Items Guide",
    description:
      "Unlock Ascension, find Elderveil and the Runed Orb, farm soul materials, Awaken eligible Epics, and avoid losing an Ascended Affix.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[1],
        alt: "Grim Dawn Runed Orb recipe for Lokharr's Visage costing 200000 Iron Bits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grim Dawn Soul Echoes, Ashes & Awakened Epics",
    description:
      "Learn the correct Awaken-then-Ascend order, find Elderveil, use the Runed Orb, process Soul Echoes, and fix unavailable recipes.",
    images: [imageUrls[1]],
  },
};

const faqEntities = [
  {
    question: "Can I use another character to Ascend the same item?",
    answer:
      "Yes, but the character performing the Ascension affects the available mastery modifier pool. Use the mastery combination you want the final item to support.",
  },
  {
    question: "Can the Inventor reroll only one part of an item?",
    answer:
      "Yes. Alteration can target the item seed, prefix, suffix, or Ascended Affix separately. Check the displayed material cost for the selected operation before confirming it.",
  },
  {
    question: "Why did I receive a defensive-looking mastery modifier?",
    answer:
      "Mastery modifiers can affect defensive, passive, support, or offensive skills. A defensive result tied to one of the character's masteries is not automatically a regular affix or a bug.",
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
          name: "Soul Echoes and Awakened Epic Items",
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
        "Grim Dawn Soul Echoes and Awakened Epic Items Guide: Ascension, Ashes of Awakening, Elderveil, and the Runed Orb",
      description:
        "This Grim Dawn: Fangs of Asterkarn guide explains how Soul Echoes, Soul Fragments, Ashes of Awakening, item Ascension, Ascended Affixes, Epic Awakening, and Inventor Alteration connect. It covers the correct Awaken-first-then-Ascend order, the requirements for full Ascendant Mode and individual Altar mechanics, how to find Elderveil west of Guardian's Sorrow, where to meet Elder Noltukari, how to use the Runed Orb, how to evaluate supported Epic recipes, and how to diagnose missing materials, locked services, unsupported items, and lost Ascended Affixes.",
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
          name: "Soul Echoes",
        },
        {
          "@type": "Thing",
          name: "Soul Fragments",
        },
        {
          "@type": "Thing",
          name: "Ashes of Awakening",
        },
        {
          "@type": "Thing",
          name: "Altar of Ascension",
        },
        {
          "@type": "Thing",
          name: "Ascendant Mode",
        },
        {
          "@type": "Thing",
          name: "Item Ascension",
        },
        {
          "@type": "Thing",
          name: "Ascended Affixes",
        },
        {
          "@type": "Thing",
          name: "Epic Awakening",
        },
        {
          "@type": "Thing",
          name: "Awakened Epic Items",
        },
        {
          "@type": "Thing",
          name: "Jornn the Runekeeper",
        },
        {
          "@type": "Thing",
          name: "Elderveil",
        },
        {
          "@type": "Thing",
          name: "Elder Noltukari",
        },
        {
          "@type": "Thing",
          name: "Runed Orb",
        },
        {
          "@type": "Thing",
          name: "Guardian's Sorrow",
        },
        {
          "@type": "Thing",
          name: "Inventor Alteration",
        },
        {
          "@type": "Thing",
          name: "Lokharr's Visage",
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
          title="How I Awaken Epics Before Ascending Them in Grim Dawn"
          description="Follow the order I use to unlock the Altar, find Elderveil and the Runed Orb, process Soul Echoes, collect Ashes of Awakening, craft an Awakened Legendary, and add its Ascended Affix without wasting the original Epic."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SoulEchoesAwakenedEpicItemsContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}