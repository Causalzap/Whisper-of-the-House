import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import DragonSwordAwakeningEndingFinalBossContent from "@/data/dragonsword-awakening/ending-final-boss.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/dragonsword-awakening`;
const pageUrl = `${hubUrl}/ending-final-boss`;

const metadataTitle =
  "DragonSword Awakening Ursula Final Boss & Ending";
const metadataDescription =
  "Beat Lv.70 Ursula, follow the Dragon Egg and Worm route, survive lightning, use the signal flare, and understand Eona’s Legacy, Lute, Ropi and the ending.";

const imageUrls = [
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ursula-transformation.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ursula-level-70-boss.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-worm-nest-dragon-egg-route.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-dragon-trap-barrier-setup.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ursula-status-conditions.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-ursula-signal-flare.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-lute-dragon-power-transformation.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-eonas-legacy-victory-confirmed.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-dragon-sword-ending-ceremony.webp`,
  `${siteUrl}/images/dragonsword-awakening/dragonsword-awakening-lute-ropi-grandfather-reveal.webp`,
];

const toc = [
  {
    id: "chapter-8-route",
    label: "Chapter 8 route & phases",
  },
  {
    id: "before-final-operation",
    label: "Final-operation preparation",
  },
  {
    id: "dragon-egg-worm-route",
    label: "Dragon Egg & Worm route",
  },
  {
    id: "trap-and-first-confrontation",
    label: "Trap & first confrontation",
  },
  {
    id: "ursula-final-boss",
    label: "How to beat Lv.70 Ursula",
  },
  {
    id: "pursuit-final-operation",
    label: "Pursuit & final operation",
  },
  {
    id: "lute-eonas-legacy",
    label: "Lute & Eona’s Legacy",
  },
  {
    id: "after-ursula",
    label: "After beating Ursula",
  },
  {
    id: "ending-explained",
    label: "Ending explained",
  },
  {
    id: "multiple-endings",
    label: "Multiple endings?",
  },
  {
    id: "troubleshooting",
    label: "Chapter 8 problems & fixes",
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
    href: "/dragonsword-awakening/walkthrough",
    label: "Chapter 1–8 Walkthrough",
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
    href: "/dragonsword-awakening/beginner-guide",
    label: "Beginner Guide",
  },
];

const faqEntities = [
  {
    question: "What level is Ursula?",
    answer:
      "The final-boss interface displays Lv.70 Ursula. This confirms the boss level, not a requirement that every party member must be exactly Level 70.",
  },
  {
    question: "Should I return to Orbis after losing the Dragon Egg?",
    answer:
      "No. Follow the Worm, clear the nest route, and return to the operation area when the objective changes.",
  },
  {
    question: "Is Ursula weak to Shock, Poison, Ice, and Air?",
    answer:
      "Those labels appear during combat, but the interface does not identify all four as permanent elemental weaknesses. Keep using the condition your team triggers reliably.",
  },
  {
    question: "How many times does Ursula leave the arena?",
    answer:
      "She leaves after the initial transformed encounter and retreats again after the next fight. The second retreat leads to the signal flare and regrouping phase.",
  },
  {
    question: "Who defeats Ursula?",
    answer:
      "The party and allied forces keep the operation alive long enough for Eona's Legacy to deliver the finishing attack. The operator of the ancient device is not identified.",
  },
  {
    question: "Does Lute become a Dragon?",
    answer:
      "Lute displays Dragon-like power, but Chapter 8 does not explain whether he is a Dragon, where the power comes from, or whether the change is permanent.",
  },
  {
    question: "Is Ropi the final villain?",
    answer:
      "The ending does not establish that. Ropi is Lute's grandfather and one of the Six Heroes, but his motives and current actions remain unresolved.",
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
      "DragonSword Awakening Chapter 8: Ursula Final Boss and Ending",
    description:
      "Follow the complete Chapter 8 route, beat Lv.70 Ursula, handle lightning and both pursuits, use the signal flare, and understand Eona’s Legacy, Lute, Ropi and the ending.",
    siteName: "Whisper of the House",
    images: imageUrls,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: [imageUrls[0]],
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
          name: "Ursula Final Boss and Ending",
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
        "DragonSword Awakening Chapter 8: Ursula Final Boss and Ending",
      description:
        "A hands-on DragonSword Awakening Chapter 8 guide covering the Dragon Egg and Worm route, trap operation, Lv.70 Ursula strategy, lightning attacks, two pursuits, signal flare, Lute's Dragon-like power, Eona's Legacy, the royal ceremony, Ropi and the current main-story ending.",
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
          name: "DragonSword Awakening Chapter 8",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening Ursula",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening final boss",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening ending explained",
        },
        {
          "@type": "Thing",
          name: "Dragon Egg and Worm route",
        },
        {
          "@type": "Thing",
          name: "Ursula lightning attacks",
        },
        {
          "@type": "Thing",
          name: "Ursula signal flare",
        },
        {
          "@type": "Thing",
          name: "Eona's Legacy",
        },
        {
          "@type": "Thing",
          name: "Lute's Dragon power",
        },
        {
          "@type": "Thing",
          name: "Ropi",
        },
        {
          "@type": "Thing",
          name: "DragonSword Awakening multiple endings",
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
          title="DragonSword Awakening Chapter 8: Ursula Final Boss and Ending"
          description="Follow the complete Chapter 8 operation, beat Lv.70 Ursula, survive the lightning and pursuit phases, and understand Eona’s Legacy, Lute, Ropi and the ending."
          gameTitle="DragonSword Awakening"
          gameHref="/dragonsword-awakening"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 23, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DragonSwordAwakeningEndingFinalBossContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}