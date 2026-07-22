import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import UnlockOrderContent from "@/data/the-binding-of-isaac-rebirth/unlock-order.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/unlock-order`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-post-it-completion-marks.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-challenges-unlock-menu.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-shop-donation-machine.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-soul-stone-unlocks.webp`,
];

const toc = [
  {
    id: "binding-of-isaac-unlock-order",
    label: "Unlock order",
  },
  {
    id: "first-unlock-route",
    label: "Route table",
  },
  {
    id: "mom-first",
    label: "Mom first",
  },
  {
    id: "challenges",
    label: "Challenges",
  },
  {
    id: "donation-machines",
    label: "Donation machines",
  },
  {
    id: "boss-route-unlocks",
    label: "Boss routes",
  },
  {
    id: "character-unlocks",
    label: "Characters",
  },
  {
    id: "repentance-route",
    label: "Repentance",
  },
  {
    id: "soul-stones-reverse-cards",
    label: "Soul Stones",
  },
  {
    id: "what-i-delay",
    label: "What to delay",
  },
  {
    id: "when-to-switch-guides",
    label: "Next guides",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-binding-of-isaac-rebirth",
    label: "The Binding of Isaac: Rebirth Guide Hub",
  },
  {
    href: "/the-binding-of-isaac-rebirth/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/best-beginner-characters",
    label: "Best Beginner Characters",
  },
  {
    href: "/the-binding-of-isaac-rebirth/dlc-buying-guide",
    label: "DLC Buying Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide",
    label: "Tainted Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "Binding of Isaac Rebirth Unlock Order & Challenges",
  description:
    "Build a stronger item pool with the best unlock order in The Binding of Isaac! Prioritize high-value challenges, donation milestones, and boss routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac Rebirth Unlock Order, Challenges, Donation Machines and Boss Routes",
    description:
      "Plan The Binding of Isaac: Rebirth unlock order with high-value challenges, regular Donation Machine 600 and 999 goals, Greed Donation Machine milestones, Boss Rush, Hush, Delirium, Repentance routes, Soul Stones and reverse card cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Rebirth character select showing post-it completion marks.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binding of Isaac Rebirth Unlock Order & Challenges",
    description:
      "Prioritize Isaac unlocks with challenges, donation machines, Boss Rush, Hush, Delirium, Repentance routes and Soul Stones.",
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
          name: "The Binding of Isaac: Rebirth Guide",
          item: `${siteUrl}/the-binding-of-isaac-rebirth/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Unlock Order Guide",
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
        "The Binding of Isaac: Rebirth Unlock Order Guide: Challenges, Donation Machines, Boss Rush, Hush, Delirium, Repentance Routes, Soul Stones and Reverse Cards",
      description:
        "A practical The Binding of Isaac: Rebirth unlock order guide for new and returning players. The guide explains why to prioritize unlocks that make future runs stronger, how to stabilize Mom clears before chasing completion, which high-value challenges to clear early, how to separate the regular shop Donation Machine from the Greed Donation Machine, why 600 coins on the regular Donation Machine matters before 999, which Greed Donation Machine milestones matter for Cain's Paper Clip, The Lost's Holy Mantle, Generosity and Keeper, when to stack Boss Rush, Hush and Delirium marks on a strong run, which character unlocks solve real beginner problems, when to move into Repentance routes, and why Soul Stones, reverse cards and late pool cleanup should be handled selectively.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-03",
      dateModified: "2026-07-03",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "The Binding of Isaac: Rebirth",
        },
        {
          "@type": "Thing",
          name: "The Binding of Isaac unlock order",
        },
        {
          "@type": "Thing",
          name: "challenges",
        },
        {
          "@type": "Thing",
          name: "Jera",
        },
        {
          "@type": "Thing",
          name: "Perthro",
        },
        {
          "@type": "Thing",
          name: "Algiz",
        },
        {
          "@type": "Thing",
          name: "Credit Card",
        },
        {
          "@type": "Thing",
          name: "Death's Touch",
        },
        {
          "@type": "Thing",
          name: "Tech.5",
        },
        {
          "@type": "Thing",
          name: "Epic Fetus",
        },
        {
          "@type": "Thing",
          name: "Donation Machine",
        },
        {
          "@type": "Thing",
          name: "Greed Donation Machine",
        },
        {
          "@type": "Thing",
          name: "Cain's Paper Clip",
        },
        {
          "@type": "Thing",
          name: "The Lost's Holy Mantle",
        },
        {
          "@type": "Thing",
          name: "Keeper",
        },
        {
          "@type": "Thing",
          name: "Boss Rush",
        },
        {
          "@type": "Thing",
          name: "Hush",
        },
        {
          "@type": "Thing",
          name: "Delirium",
        },
        {
          "@type": "Thing",
          name: "Repentance",
        },
        {
          "@type": "Thing",
          name: "Tainted characters",
        },
        {
          "@type": "Thing",
          name: "Soul Stones",
        },
        {
          "@type": "Thing",
          name: "reverse cards",
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
      mainEntity: [
        {
          "@type": "Question",
          name:
            "What should I unlock first in The Binding of Isaac: Rebirth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with stable Mom clears, then high-value challenge rewards, then regular shop Donation Machine progress toward 600. After that, move into boss route unlocks, practical character unlocks, Repentance routes and selective pool cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Should I clear every Isaac challenge immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Start with high-value challenge rewards like Jera, Perthro, Algiz, Credit Card, Death's Touch, Tech.5 and later Repentance rewards. Skip miserable challenges until the file is stronger.",
          },
        },
        {
          "@type": "Question",
          name:
            "Is the regular Donation Machine the same as the Greed Donation Machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The regular shop Donation Machine and the Greed Donation Machine are separate tracks with different milestones. The regular machine controls shop-related unlocks like 600 and 999, while the Greed machine has milestones like Cain's Paper Clip, The Lost's Holy Mantle, Generosity and Keeper.",
          },
        },
        {
          "@type": "Question",
          name: "Should I donate to 600 or 999 first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prioritize 600 on the regular shop Donation Machine because it upgrades shops for future runs. Treat 999 as a later goal for Stop Watch.",
          },
        },
        {
          "@type": "Question",
          name:
            "What happens if I donate the 1000th coin to the regular Donation Machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The regular Donation Machine explodes and resets to 0. Avoid accidental 1000th donations after reaching 999.",
          },
        },
        {
          "@type": "Question",
          name:
            "Which Greed Donation Machine milestones matter most?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The important Greed Donation Machine milestones to watch are 68 for Cain's Paper Clip, 879 for The Lost's Holy Mantle, 999 for Generosity and 1000 for Keeper.",
          },
        },
        {
          "@type": "Question",
          name:
            "When should I try Boss Rush, Hush and Delirium together?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only try the Boss Rush, Hush and Delirium chain on a strong and fast run. If you can beat Mom within 20 minutes, continue to Hush within the 30-minute route, and the run is still strong, Hush gives a guaranteed Void entrance for Delirium.",
          },
        },
        {
          "@type": "Question",
          name:
            "Should I unlock every Soul Stone and reverse card immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Unlock the Soul Stones and reverse cards you actually want first, then clean up the rest later. Selective pool management is better than adding rewards you do not understand yet.",
          },
        },
        {
          "@type": "Question",
          name:
            "When should I start Repentance route unlocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start Repentance route planning after the base route feels stable. Hush, Mother, Strange Door, Dad's Note, Home, Beast and Tainted characters are not first-night goals.",
          },
        },
        {
          "@type": "Question",
          name:
            "What is the biggest unlock order mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest mistake is treating the checklist as the strategy. A good unlock route improves future runs first and saves completion cleanup for later.",
          },
        },
      ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GuideArticlePage
          title="Prioritize Unlocks That Make Future Runs Stronger"
          description="Plan Isaac unlock order around challenge rewards, regular and Greed donation machines, Boss Rush, Hush, Delirium, Repentance routes, Soul Stones and cleanup."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnlockOrderContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}