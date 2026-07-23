import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningWalkthroughContent from "@/data/dragonsword-awakening/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/walkthrough`;

const metadataTitle =
  "DragonSword Awakening Walkthrough: Chapters 1–8";
const metadataDescription =
  "Complete DragonSword Awakening Chapters 1–8 with fixes for the Goblin cave, ancient device, fog road, mural door, Dragon Egg route, Ursula and ending.";

const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-first-familiar-unlock.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-goblin-treasure-cave-explosive-crate.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ancient-device-activated.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-dragon-cult-teleport-trap.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-northern-fog-blocked-road-cliff.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-reina-rescue-lich-skeletons.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-worm-nest-dragon-egg-route.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-final-true-dragon-transformation.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-eonas-legacy-final-shot.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-dragon-sword-ending-ceremony.webp`,
];

const toc = [
  {
    id: "chapter-overview",
    label: "Chapter 1–8 route at a glance",
  },
  {
    id: "before-starting",
    label: "Before starting",
  },
  {
    id: "chapter-1",
    label: "Chapter 1: Orbis & Goblin cave",
  },
  {
    id: "chapter-2",
    label: "Chapter 2: Ancient device",
  },
  {
    id: "chapter-3",
    label: "Chapter 3: Dragon Cult altar",
  },
  {
    id: "chapter-4",
    label: "Chapter 4: Barrier Stone",
  },
  {
    id: "chapter-5",
    label: "Chapter 5: Fog & Reina rescue",
  },
  {
    id: "chapter-6",
    label: "Chapter 6: Ropi & mural door",
  },
  {
    id: "chapter-7",
    label: "Chapter 7: Final-operation setup",
  },
  {
    id: "chapter-8",
    label: "Chapter 8: Dragon Egg & Ursula",
  },
  {
    id: "common-stuck-points",
    label: "Common story blockers",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/dragonsword-awakening",
    label: "DragonSword Awakening Guide Hub",
  },
  {
    href: "/dragonsword-awakening/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/dragonsword-awakening/best-team-comps",
    label: "Best Team Comps",
  },
  {
    href: "/dragonsword-awakening/gear-karma-guide",
    label: "Gear & Karma Guide",
  },
  {
    href: "/dragonsword-awakening/ending-final-boss",
    label: "Ursula Final Boss & Ending",
  },
];

const faqEntities = [
  {
    question:
      "How many main-story chapters are in DragonSword Awakening?",
    answer:
      "The completed main route covered here contains eight chapters.",
  },
  {
    question: "Should I clear every chest before leaving a chapter?",
    answer:
      "No. Take visible chests and short detours, but leave routes that require underwater travel, a Moon Key, a later Familiar skill, or another locked movement option.",
  },
  {
    question: "When should I stop the story and upgrade?",
    answer:
      "Stop when normal enemies survive several full rotations, one boss hit removes most of a hero's health, or the team cannot create its own Signal conditions. A new menu appearing is not by itself a reason to pause the story.",
  },
  {
    question: "Is Ropi's offer a route choice?",
    answer:
      "Not in the Chapter 6 route covered here. Lute remains with the group and the main story continues after the scripted conversation.",
  },
  {
    question:
      "Does the Chapter 6 transcript provide the exact mural symbol order?",
    answer:
      "No. It confirms that the earlier mural is copied to open the later door, but the text material does not preserve a reliable symbol-by-symbol answer. A screenshot of the reference mural and mechanism is still the best future addition.",
  },
  {
    question:
      "Can I recover the Dragon Egg and restore the original plan?",
    answer:
      "The party pursues the Worm, but the operation continues after the objective returns to the surface. Do not keep searching every chamber after the marker changes.",
  },
  {
    question:
      "Is the final battle over when the combat UI disappears?",
    answer:
      "No. Continue through the battlefield aftermath, Orbis return, royal ceremony, and later conversations.",
  },
  {
    question:
      "Does this walkthrough prove that the game has only one ending?",
    answer:
      "No. It covers the complete scripted Chapter 1–8 route shown in the source material. That does not prove that no hidden condition, future update, or later expansion can add another ending.",
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
    title:
      "DragonSword Awakening Walkthrough: Complete Chapter 1–8 Route",
    description:
      "Follow the full DragonSword Awakening story route with direct fixes for the Goblin cave, ancient device, Dragon Cult teleport, Barrier Stone, fog cliff, mural door, Dragon Egg, Worm nest and Ursula.",
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[4]],
  },
};

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
          name: "DragonSword Awakening",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Chapter 1–8 Walkthrough",
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
        "DragonSword Awakening Walkthrough: Complete Chapter 1–8 Guide",
      description:
        "A complete DragonSword Awakening main-story walkthrough covering Chapters 1 through 8, the first Orbis Guild route, Goblin treasure cave, Alboin's ancient device, Dragon Cult altar teleport, Bardok's Barrier Stone, northern fog cliff, Rock Tribe investigation, Reina rescue, Ropi's letter and meeting, the mural-door solution, Eona's Legacy preparation, the Dragon Egg and Worm route, Ursula, and the ending sequence.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-23",
      dateModified: "2026-07-23",
      about: [
        {
          "@type": "VideoGame",
          name: "DragonSword: Awakening",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening walkthrough",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 1",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 2",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 3",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 4",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 5",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 6",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 7",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Chapter 8",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Goblin cave",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening ancient device",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Barrier Stone",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening mural puzzle",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Dragon Egg",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Ursula",
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
          title="DragonSword Awakening Walkthrough: Complete Chapter 1–8 Guide"
          description="Follow the full main-story route, fix every major physical and objective blocker, and continue correctly when a teleport, missing Dragon Egg, mural door, or moving final boss makes the quest look broken."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}