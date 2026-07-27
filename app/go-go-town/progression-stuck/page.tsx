import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoGoTownProgressionStuckContent from "@/data/go-go-town/progression-stuck.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/go-go-town`;
const pageUrl = `${hubUrl}/progression-stuck`;

const metadataTitle =
  "Go-Go Town Progression Stuck: EGO, Rank & Unlock Fixes";

const metadataDescription =
  "Fix Go-Go Town progression when Town Goals will not advance, EGO Tech stays locked, unlocked buildings are missing, recipes fail, or rewards will not trigger.";

const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-rank-nine-tech-tier-six.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-claim-rank-reward.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-tourist-desires-ego.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-tourism-hub-mascot.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-advanced-materials-factory.webp`,
];

const toc = [
  {
    id: "identify-stuck-layer",
    label: "Identify the stuck layer",
  },
  {
    id: "town-goals-not-progressing",
    label: "Town Goals not progressing",
  },
  {
    id: "claim-rewards",
    label: "Claim Rewards",
  },
  {
    id: "town-rank-vs-ego-tech",
    label: "Town Rank vs EGO Tech",
  },
  {
    id: "not-enough-ego",
    label: "Not enough EGO",
  },
  {
    id: "ego-full-tech-locked",
    label: "Full EGO but Tech locked",
  },
  {
    id: "building-missing",
    label: "Unlocked building missing",
  },
  {
    id: "rebuy-vs-ego-tech",
    label: "Rebuy vs EGO Tech",
  },
  {
    id: "tourism-hub",
    label: "Tourism Hub No Spot",
  },
  {
    id: "advanced-materials-factory",
    label: "Advanced Materials Factory",
  },
  {
    id: "recipe-not-appearing",
    label: "Recipe not appearing",
  },
  {
    id: "creative-mode",
    label: "When to use Creative Mode",
  },
  {
    id: "progression-achievements",
    label: "EGO & ranking achievements",
  },
  {
    id: "when-to-go-forward",
    label: "When to move forward",
  },
  {
    id: "final-reset",
    label: "Final progression reset",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/go-go-town/",
    label: "Go-Go Town 1.0 Guide Hub",
  },
  {
    href: "/go-go-town/automation-not-working/",
    label: "Workers, Couriers & Automation Fixes",
  },
  {
    href: "/go-go-town/agent-peanut-safe-code/",
    label: "Agent Peanut, Safe Code & Town Deed",
  },
];

const faqEntities = [
  {
    question:
      "Why does Tourist Tracker show a need is covered but EGO is still slow?",
    answer:
      "A service can exist without serving tourists effectively. Check whether it is open, staffed, stocked, reachable, clean, and close to the route visitors actually use. Also check whether another desire has become the new lowest category.",
  },
  {
    question: "Can Creative Mode fix my stuck normal town?",
    answer:
      "No. Creative Mode is useful for testing layouts and terrain without normal economic pressure. A blocked normal save still needs its Town Goal, reward, EGO Tech node, building, recipe, or worker requirement completed in that save.",
  },
  {
    question: "Can Rebuy unlock an item for the first time?",
    answer:
      "No. Purchase the original unlock through EGO Tech first. Rebuy is used for another copy after the original node has already been purchased.",
  },
  {
    question:
      "Why is an EGO Tech tier available but its building is still missing?",
    answer:
      "The tier may be visible while the individual node remains unpurchased. The unlock may also be a fit-out or processor in another Build category, or the first copy may already exist and additional copies may be listed in Rebuy.",
  },
  {
    question: "Why did building construction not complete the Town Goal?",
    answer:
      "The goal may also require cutting the ribbon, choosing a fit-out, selecting a recipe, assigning a worker, completing a sale, allowing tourist use, or performing another final interaction. Reread the exact goal after finishing the shell.",
  },
  {
    question:
      "Why did my EGO achievement not unlock even though the meter is full?",
    answer:
      "A full current meter is not necessarily the same as reaching the achievement's tracked total or completing the related Tech progression. Continue spending EGO on useful unlocks and earning it through satisfied tourists instead of leaving the meter capped.",
  },
  {
    question:
      "Should I build another Advanced Materials Factory when no recipe appears?",
    answer:
      "No. First confirm that the existing factory is fully constructed, its ribbon was cut, and the completed production interface is being used. If the recipe is still absent, check EGO Tech, the required fit-out, and the correct production building before buying another factory.",
  },
  {
    question:
      "Why can I reach Town Rank 9 with an earlier EGO Tech tier unfinished?",
    answer:
      "Town Rank and EGO Tech are separate progression tracks. Ranking can advance through Top Town Tournament goals while older Tech nodes remain unpurchased, so scan backward through every tier instead of checking only the newest one.",
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
      "Go-Go Town Progression Stuck: Town Goals, EGO Tech, Rebuy and Recipe Fixes",
    description:
      "Diagnose why Town Goals will not advance, rewards remain unclaimed, EGO Tech nodes stay locked, unlocked buildings are missing, Tourism Hub shows No Spot, or recipes never appear.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Go-Go Town at Town Rank 9 with an earlier EGO Tech tier still unpurchased",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Fix stuck Town Goals, Claim Rewards, EGO Tech tiers, Rebuy items, missing buildings, Tourist Tracker problems and recipes in Go-Go Town 1.0.",
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
          name: "Go-Go Town Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Progression Stuck",
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
        "Go-Go Town Progression Stuck: Town Goals, EGO Tech, Rebuy, Buildings and Recipe Fixes",
      description:
        "A symptom-first Go-Go Town 1.0 progression guide explaining why Top Town Tournament goals do not advance, completed brackets still need Claim Rewards, Town Rank and EGO Tech progress separately, older Tech tiers can remain unpurchased, EGO generation slows, Tourist Tracker reveals unmet desires, unlocked buildings move between Build and Rebuy, Tourism Hub displays No Spot, the Advanced Materials Factory remains an unfinished shell, recipes fail to appear, and Creative Mode should be used for layout testing rather than repairing a blocked normal save.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Go-Go Town!",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Go-Go Town progression stuck",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Top Town Tournament",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Goals not progressing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Claim Rewards",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Rank",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town EGO Tech",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town not enough EGO",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Tourist Tracker App",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Rebuy",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town unlocked building missing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Tourism Hub No Spot",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Advanced Materials Factory",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town recipe not appearing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Creative Mode",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town EGO achievements",
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
          title="How I Fix Stuck Progression in Go-Go Town 1.0"
          description="I use this progression check when Town Goals stop updating, rewards remain unclaimed, EGO Tech unlocks are missing, Rebuy is confusing, a building will not activate, or a recipe never appears."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 27, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoGoTownProgressionStuckContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}