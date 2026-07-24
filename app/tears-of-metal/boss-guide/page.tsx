import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalBossGuideContent from "@/data/tears-of-metal/boss-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/boss-guide`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gilles-the-hog-boss.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gilles-overhead-slam-telegraph.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gilles-second-form.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-iseult-the-banshee-boss.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-iseult-erupting-earth.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-iseult-clone-phase.webp`,
];

const toc = [
  {
    id: "boss-ready-check",
    label: "Boss-ready checklist",
  },
  {
    id: "gilles",
    label: "How to beat Gilles",
  },
  {
    id: "iseult",
    label: "How to beat Iseult",
  },
  {
    id: "threat-differences",
    label: "Normal vs high Threat",
  },
  {
    id: "wallace-or-brienne",
    label: "Wallace or Brienne",
  },
  {
    id: "two-player-co-op",
    label: "Two-player co-op",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tears-of-metal",
    label: "Tears of Metal Guide Hub",
  },
  {
    href: "/tears-of-metal/beginner-guide",
    label: "Beginner Guide & Act 1 Route",
  },
  {
    href: "/tears-of-metal/best-builds",
    label: "Wallace & Brienne Builds",
  },
  {
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades & Progression",
  },
  {
    href: "/tears-of-metal/co-op-guide",
    label: "Co-op Host, Loot & Revives",
  },
];

export const metadata: Metadata = {
  title: "Tears of Metal Gilles & Iseult Boss Guide",
  description:
    "Beat Gilles and Iseult with attack cues, safe punish windows, clone checks, Erupting Earth movement, minimum builds, and two-player co-op roles.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title:
      "How to Beat Gilles & Iseult in Tears of Metal",
    description:
      "Learn Gilles attack timing, overhead slam recovery, Iseult clone checks, Erupting Earth movement, high-Threat adjustments, and two-player boss roles.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1024,
        height: 768,
        alt: "Tears of Metal Gilles The Hog entering the Act 1 boss fight at the Great Gates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Beat Gilles and Iseult in Tears of Metal",
    description:
      "Use readable attack cues, one safe punish at a time, boss-health-bar clone checks, and clear solo or two-player roles.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Should I stay locked on Gilles in Tears of Metal?",
    answer:
      "Not constantly. Lock-on helps during the direct exchange, but release or adjust the camera when Gilles fills the screen and hides ranged enemies, Commander danger, or the next ground attack.",
  },
  {
    question: "Can I Block Gilles in Tears of Metal?",
    answer:
      "Block short, readable swings while Block Stamina is healthy. Leave an extended string before the bar breaks and move out of the overhead slam instead of trying to Block the large impact.",
  },
  {
    question: "How do I find the real Iseult?",
    answer:
      "Use the shortest safe hit and watch whether the main boss health bar decreases. Preserve Heavy, Special, and long Finishers until that response confirms the target.",
  },
  {
    question: "Can I Block Iseult's Erupting Earth?",
    answer:
      "Do not rely on Block for Erupting Earth. Leave the marked ground, preserve Block Stamina, and return after the hazard stops controlling the route.",
  },
  {
    question: "Does defeating Iseult revive dead Allies?",
    answer:
      "No. In the successful run covered here, the hero recovered during the transition, but soldiers that had already died remained unavailable in the next region.",
  },
  {
    question: "Why is the same Tears of Metal boss harder on another run?",
    answer:
      "Check Threat, current health, surviving Commanders, and the build before assuming the mechanics changed. High Threat gives mistakes less margin, and a damaged army makes the same punish window harder to use.",
  },
  {
    question: "Is Wallace or Brienne better for Gilles?",
    answer:
      "Wallace is the safer choice because Block, deliberate Heavy openings, and Archer support fit the fight. Brienne works when attack strings stay short and health is not traded for Direct Hits.",
  },
  {
    question: "Is Wallace or Brienne better for Iseult?",
    answer:
      "Brienne is strong when movement and short target checks are comfortable. Wallace is safer when survival is the problem, but Heavy must wait until the real target and safe lane are confirmed.",
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
          name: "Tears of Metal Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gilles and Iseult Boss Guide",
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
        "Tears of Metal Gilles and Iseult Boss Guide: Attacks, Clones and Safe Openings",
      description:
        "This Tears of Metal boss guide explains how to beat Gilles, The Hog and Iseult, The Banshee on the Early Access launch build. It covers Gilles normal swing strings, Block and Dodge choices, overhead slam timing, second-form burst planning, army commands, Commander rescues, Dragonstone Shard rewards, and the effect of entering the fight at high Threat. The Iseult section explains Erupting Earth, relocation, clone testing through the main boss health bar, nearby-soldier priorities, direct damage requirements, confirmed punish windows, post-fight hero recovery, and continuing army losses. It also includes boss-ready checks, minimum Wallace and Brienne setups, normal versus high-Threat differences, and tested two-player co-op role divisions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-24",
      dateModified: "2026-07-24",
      about: [
        {
          "@type": "VideoGame",
          name: "Tears of Metal",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Gilles, The Hog",
        },
        {
          "@type": "Thing",
          name: "Iseult, The Banshee",
        },
        {
          "@type": "Thing",
          name: "Gilles boss fight",
        },
        {
          "@type": "Thing",
          name: "Iseult clone phase",
        },
        {
          "@type": "Thing",
          name: "Erupting Earth",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Threat Level",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal co-op bosses",
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
          title="How to Beat Gilles and Iseult in Tears of Metal"
          description="Read Gilles's attack strings before committing to one safe punish, then beat Iseult by separating movement phases from damage phases and confirming the real target through the main boss health bar."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalBossGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}