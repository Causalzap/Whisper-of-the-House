import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import RitualOfCleansingWalkthroughContent from "@/data/grim-dawn-fangs-of-asterkarn/ritual-of-cleansing-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/grim-dawn-fangs-of-asterkarn`;
const pageUrl = `${hubUrl}/ritual-of-cleansing-walkthrough`;

const metadataTitle =
  "Grim Dawn Ritual of Cleansing: Ugdenbog & Bargoll Essences";

const metadataDescription =
  "Complete Ritual of Cleansing, find both Essence of Ugdenbog drops, reach Bargoll's hidden path, open the World's Tear, and recover every material.";

const imageUrls = [
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-secrets-of-ugdenbog-essence-requirements.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-root-of-bargoll-ugdenbog-target.webp`,
  `${siteUrl}/images/grim-dawn-fangs-of-asterkarn/grim-dawn-bargoll-hidden-path-location.webp`,
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
    id: "ugdenbog-essences",
    label: "Ugdenbog & Bargoll essences",
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
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: metadataTitle,
    description: metadataDescription,
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[2],
        alt: "Hidden swamp path in Ugdenbog leading toward Bargoll during Ritual of Cleansing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[2]],
  },
};

const faqEntities = [
  {
    question:
      "Do the older expansion areas need to be unlocked on my current difficulty?",
    answer:
      "Yes. Ritual of Cleansing can point to Ugdenbog or the Tomb of the Eldritch Sun even when that route is still closed on the current character and difficulty. Continue the relevant Ashes of Malmouth or Forgotten Gods progression instead of searching Asterkarn for another entrance.",
  },
  {
    question:
      "Does every yellow Bog Golem drop Essence of Ugdenbog?",
    answer:
      "No reliable rule in my run supported that. I followed the quest marker and checked the smaller Bargoll-like targets, but one apparent target did not advance the objective. Continue through other Ugdenbog branches until the quest counter updates.",
  },
  {
    question:
      "Can I return one ritual material before collecting the other two?",
    answer:
      "Yes. Each apprentice controls a separate branch. You can deliver the Ashen Heart, Embers, or Ugdenbog essences as soon as that branch is complete, although collecting the remaining materials first usually saves an extra trip to Kurnhold.",
  },
  {
    question:
      "Are the two Root of Bargoll targets located beside Bargoll?",
    answer:
      "Do not plan around that. Bargoll is reached through the hidden pocket south-east of the Ugdenbog Rift, while the two Essence of Ugdenbog targets require a broader sweep through separate swamp branches.",
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
        "Grim Dawn Ritual of Cleansing Walkthrough: Essence of Ugdenbog, Bargoll, Embers, and Ashen Heart",
      description:
        "A complete Ritual of Cleansing walkthrough for Grim Dawn: Fangs of Asterkarn. It explains how to accept all three material branches, find two Essence of Ugdenbog targets, reach Bargoll through the hidden path south-east of the Ugdenbog Rift, collect the Embers of the First Flame, activate three Blood Basins, enter the World's Tear, defeat Naddo the Anointed, recover the Ashen Heart of the Void, and complete every Kurnhold turn-in.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-26",
      dateModified: "2026-08-04",
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
          name: "Secrets of Ugdenbog",
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
          name: "Root of Bargoll",
        },
        {
          "@type": "Thing",
          name: "Bargoll, the Mouldering Mound",
        },
        {
          "@type": "Thing",
          name: "Ugdenbog Rift",
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
          title="Grim Dawn Ritual of Cleansing Walkthrough"
          description="Follow the route I use to collect both Essence of Ugdenbog drops, find Bargoll's hidden path, recover the Embers and Ashen Heart, and finish every Kurnhold turn-in without searching the wrong region."
          gameTitle="Grim Dawn: Fangs of Asterkarn"
          gameHref="/grim-dawn-fangs-of-asterkarn"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 4, 2026"
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