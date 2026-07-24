import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TearsOfMetalBeginnerGuideContent from "@/data/tears-of-metal/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/tears-of-metal`;
const pageUrl = `${hubUrl}/beginner-guide`;

const imageUrls = [
  `${siteUrl}/images/tears-of-metal/tears-of-metal-act-one-route-great-gates.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-threat-threshold-tooltip.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-beacon-enemy-buff.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-ally-rescue-saved.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-healing-font-100-coins.webp`,
  `${siteUrl}/images/tears-of-metal/tears-of-metal-gilles-the-hog-boss.webp`,
];

const toc = [
  {
    id: "best-act-one-route",
    label: "Best Act 1 route",
  },
  {
    id: "threat-level",
    label: "Threat Level",
  },
  {
    id: "block-parry-dodge",
    label: "Block, Parry or Dodge",
  },
  {
    id: "target-priority",
    label: "Target priority",
  },
  {
    id: "healing-vs-chest",
    label: "Healing Font vs Chest",
  },
  {
    id: "starter-build",
    label: "Wallace starter builds",
  },
  {
    id: "great-gates",
    label: "Great Gates & Gilles",
  },
  {
    id: "why-run-failed",
    label: "Why the run failed",
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
    href: "/tears-of-metal/village-upgrades",
    label: "Village Upgrades & Progression",
  },
  {
    href: "/tears-of-metal/best-builds",
    label: "Best Builds & Emblem Synergies",
  },
  {
    href: "/tears-of-metal/co-op-guide",
    label: "Co-op Host, Loot & Revives",
  },
  {
    href: "/tears-of-metal/boss-guide",
    label: "Gilles & Iseult Boss Guide",
  },
];

export const metadata: Metadata = {
  title: "Tears of Metal Beginner Guide: Act 1 Route & Wallace Build",
  description:
    "Plan your first Tears of Metal Campaign with a tested Act 1 route, Threat stop rules, healing choices, Wallace builds, and a safe Gilles strategy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Tears of Metal Beginner Guide: First Campaign Route",
    description:
      "Control Threat, protect your healing Coins, build Wallace around one reliable combo, and reach Gilles without overextending the Act 1 map.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1536,
        height: 864,
        alt: "Tears of Metal Act 1 Campaign map with routes leading toward the Great Gates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tears of Metal Beginner Guide: Act 1 Route & Threat",
    description:
      "Choose a safer Act 1 route, control Threat, spend Coins on the right recovery, build Wallace, and prepare for Gilles at the Great Gates.",
    images: [imageUrls[0]],
  },
};

const faqEntities = [
  {
    question: "Does health refill after every battle in Tears of Metal?",
    answer:
      "No. Check the battlefield for Chicken, Coins, Chests, and paid healing before leaving. Once the leave countdown begins, do not assume you can return for an unused recovery item.",
  },
  {
    question: "Does a failed objective increase Threat in Tears of Metal?",
    answer:
      "Yes. The Threat tooltip explicitly says that failed objectives increase the meter. Because the exact amount is not displayed, treat every optional timed objective as a real route cost.",
  },
  {
    question: "Can Chicken replace a Healing Font in Tears of Metal?",
    answer:
      "Not at critical health. Chicken is useful for free cleanup healing, but a Healing Font is the safer choice when one Captain attack can end the Campaign. Avoid consuming Chicken while already at full health.",
  },
  {
    question: "Do I need to kill every enemy before leaving a battle?",
    answer:
      "Not always. Some clear-area objectives complete after the important elites are defeated even while distant Fodders remain. Follow the objective marker and completion prompt instead of automatically hunting every soldier.",
  },
  {
    question: "What happens at maximum Threat in Tears of Metal?",
    answer:
      "Lu Bu can appear. In the Early Access launch-build run covered here, defeating him reduced Threat by one level rather than resetting the entire meter, so reaching maximum Threat is not part of the recommended first-clear route.",
  },
  {
    question: "What carries over after a failed Tears of Metal Campaign?",
    answer:
      "Coins and run-specific Emblems do not become permanent Village stock. Permanent currencies already awarded and Village upgrades already purchased remain available, while some heroes, items, and other unlocks still require their own conditions.",
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
          name: "Beginner Guide",
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
        "Tears of Metal Beginner Guide: Act 1 Route, Threat, Healing and Wallace Starter Builds",
      description:
        "This Tears of Metal beginner guide follows a practical first-Campaign route through Act 1. It explains how to choose between safe, balanced, and greedy map paths; how battles and failed objectives raise Threat; when to stop exploring; and how to prioritize Commander rescues, Beacons, Archer Towers, Captains, and objectives. It also compares a 75-Coin Chest, a 100-Coin Healing Font that raised displayed health from 6 to 27, and a later 200-Coin Chest with a 30% Strike Damage reward. The guide includes simple Wallace Vortex and Ravager starter builds, Great Gates preparation, a minimum Gilles strategy, and a failure diagnosis for route, build, economy, and combat mistakes.",
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
          name: "Tears of Metal beginner guide",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal first Campaign",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Act 1 route",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Threat Level",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Healing Font",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Wallace starter build",
        },
        {
          "@type": "Thing",
          name: "Crusader Vortex Heavy",
        },
        {
          "@type": "Thing",
          name: "Ravager Delayed Heat",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Great Gates",
        },
        {
          "@type": "Thing",
          name: "Gilles, The Hog",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Beacons and Archer Towers",
        },
        {
          "@type": "Thing",
          name: "Tears of Metal Commander rescue",
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
          title="How I Clear My First Tears of Metal Campaign"
          description="Follow the Act 1 route I use to control Threat, protect healing Coins, build Wallace around one reliable combo, and reach Gilles without turning every optional node into a death trap."
          gameTitle="Tears of Metal"
          gameHref="/tears-of-metal"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 24, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <TearsOfMetalBeginnerGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}