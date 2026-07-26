import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RitualOfCleansingWalkthroughContent from "@/data/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/ritual-of-cleansing-walkthrough`;

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-skald-magwyn.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-ember-first-flame-map.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-embers-first-flame.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-worlds-tear-blood-basin.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-ritual-cleansing-ashen-heart-void.webp`,
];

const toc = [
  {
    id: "before-you-start",
    label: "Before you start",
  },
  {
    id: "best-order",
    label: "Best material order",
  },
  {
    id: "embers-first-flame",
    label: "Embers of the First Flame",
  },
  {
    id: "ashen-heart",
    label: "Ashen Heart of the Void",
  },
  {
    id: "ugdenbog-essences",
    label: "Ugdenbog & Bargoll essences",
  },
  {
    id: "finish",
    label: "Finish the quest",
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
    href: "/grim-dawn-fangs-of-asterkarn/the-asterkarn-incident-walkthrough",
    label: "The Asterkarn Incident Walkthrough",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/wereraven-leveling-build",
    label: "Wereraven Leveling Build",
  },
  {
    href: "/grim-dawn-fangs-of-asterkarn/soul-echoes-awaken-epic-items",
    label: "Soul Echoes & Awakened Epic Items",
  },
];

export const metadata: Metadata = {
  title:
    "Grim Dawn Ritual of Cleansing Guide: Heart, Embers & Bargoll",
  description:
    "Find the Ashen Heart, Embers of the First Flame, and Bargoll essences, open the World's Tear, beat Naddo, and fix every quest block.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Grim Dawn Ritual of Cleansing Walkthrough",
    description:
      "Follow all three material routes, activate the Blood Basins, recover the Ashen Heart, find the Embers, and separate Root of Bargoll from Bargoll.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        alt: "Grim Dawn quest progress after recovering the Ashen Heart of the Void from the World's Tear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grim Dawn Ritual of Cleansing: All Material Locations",
    description:
      "Open the World's Tear, recover the Ashen Heart, find the Embers and Bargoll essences, and fix blocked Ritual of Cleansing objectives.",
    images: [imageUrls[4]],
  },
};

const faqEntities = [
  {
    question:
      "Do the old expansion areas need to be unlocked on my current difficulty?",
    answer:
      "Yes. Ritual of Cleansing can send you to Ugdenbog or the Tomb of the Eldritch Sun even when that character has not opened the complete route on the selected difficulty. Continue the relevant Ashes of Malmouth or Forgotten Gods campaign progression.",
  },
  {
    question:
      "Can I return one ritual material before collecting the other two?",
    answer:
      "Yes. Each apprentice controls a separate quest branch. You can return the Ashen Heart, Embers, or Ugdenbog essences as soon as that branch is complete, then continue the remaining searches.",
  },
  {
    question:
      'Why does another guide call the item "Ahsen Heart of the Void"?',
    answer:
      "The current English quest progress used for this guide spells the item Ashen Heart of the Void. This guide follows the spelling displayed directly in the game UI.",
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
          name: "Ritual of Cleansing Walkthrough",
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
        "Grim Dawn Ritual of Cleansing Walkthrough: Ashen Heart, Embers, Blood Basins, and Bargoll Essences",
      description:
        "This Grim Dawn: Fangs of Asterkarn Ritual of Cleansing walkthrough explains how to accept all three material quests, reach the Tomb of the Eldritch Sun, recover the Embers of the First Flame, offer Blood of Ch'thon at three Blood Basins, enter the World's Tear, defeat Naddo the Anointed, recover the Ashen Heart of the Void, find two Root of Bargoll elites, locate Bargoll at his current fixed hidden location, complete every material turn-in, and diagnose blocked quest states.",
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
          name: "Ritual of Cleansing",
        },
        {
          "@type": "Thing",
          name: "Skald Magwyn",
        },
        {
          "@type": "Thing",
          name: "Embers of the First Flame",
        },
        {
          "@type": "Thing",
          name: "Tomb of the Eldritch Sun",
        },
        {
          "@type": "Thing",
          name: "Blood Basin",
        },
        {
          "@type": "Thing",
          name: "Blood of Ch'thon",
        },
        {
          "@type": "Thing",
          name: "World's Tear",
        },
        {
          "@type": "Thing",
          name: "Naddo the Anointed",
        },
        {
          "@type": "Thing",
          name: "Ashen Heart of the Void",
        },
        {
          "@type": "Thing",
          name: "Root of Bargoll",
        },
        {
          "@type": "Thing",
          name: "Bargoll, the Mouldering Mound",
        },
        {
          "@type": "Thing",
          name: "Essence of Ugdenbog",
        },
        {
          "@type": "Thing",
          name: "Essence of Bargoll",
        },
        {
          "@type": "Thing",
          name: "Ascend the Roof of the World",
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
          title="How I Complete Ritual of Cleansing Without Missing a Material"
          description="Follow the exact route I use to unlock the Tomb, activate all three Blood Basins, recover the Ashen Heart, separate Root of Bargoll from Bargoll, and complete every Kurnhold turn-in without searching the wrong region."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 26, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RitualOfCleansingWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}