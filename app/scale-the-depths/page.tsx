import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ScaleTheDepthsContent from "@/data/scale-the-depths/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths`;

const imageUrls = [
  `${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-start.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-fish-prep-phases.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-equipment-shop.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-perfect-fish-prep.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-customer-preferences.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-loch-ness-100-complete.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-bait-found.webp`,
  `${siteUrl}/images/scale-the-depths/scale-the-depths-legendary-fish-warning.webp`,
];

const toc = [
  { id: "what-to-do-first", label: "What to do first" },
  { id: "core-loop", label: "Core loop" },
  { id: "best-early-upgrades", label: "Best early upgrades" },
  { id: "fish-prep", label: "Fish prep" },
  { id: "customers", label: "Customers" },
  { id: "locations", label: "Location order" },
  { id: "secrets-and-collectibles", label: "Secrets and collectibles" },
  { id: "bait", label: "Bait" },
  { id: "legendary-fish", label: "Legendary fish" },
  { id: "when-to-use-100-guides", label: "When to use 100% guides" },
  { id: "achievements", label: "Achievements" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/scale-the-depths/artifacts-guide",
    label: "Scale the Depths Artifacts Guide",
  },
  {
    href: "/scale-the-depths/all-collectibles-secrets",
    label: "All Collectibles and Secrets Guide",
  },
  {
    href: "/scale-the-depths/achievement-guide",
    label: "Scale the Depths Achievement Guide",
  },
  {
    href: "/scale-the-depths/loch-ness-100-percent-guide",
    label: "Loch Ness 100% Guide",
  },
  {
    href: "/scale-the-depths/outer-banks-100-percent-guide",
    label: "Outer Banks 100% Guide",
  },
  {
    href: "/scale-the-depths/huatulco-100-percent-guide",
    label: "Huatulco 100% Guide",
  },
  {
    href: "/scale-the-depths/point-nemo-100-percent-guide",
    label: "Point Nemo 100% Guide",
  },
];

export const metadata: Metadata = {
  title: "Scale the Depths Guide: Upgrades, Prep, Secrets",
  description:
    "Learn Scale the Depths progression, best upgrades, fish prep, customers, artifacts, secrets, bait, legendary fish and 100% cleanup routes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Scale the Depths Guide: Best Upgrades, Fish Prep, Secrets and 100% Routes",
    description:
      "Start strong in Scale the Depths with the best upgrade order, fish prep tips, customer advice, artifacts, secrets, bait, legendary fish and area cleanup links.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Scale the Depths starting at Loch Ness near the fishing rod and shop.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale the Depths Guide",
    description:
      "Follow the core loop, buy the right upgrades, prep fish better, find artifacts and secrets, and use the right 100% guide.",
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
          name: "Scale the Depths Guide",
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
        "Scale the Depths Guide: Best Upgrades, Fish Prep, Customers, Secrets, Bait, Legendary Fish and 100% Routes",
      description:
        "A player-focused Scale the Depths hub guide explaining how to progress through the game, what to do first, the core catch-prep-feed-upgrade-explore loop, the best early upgrades, fish prep phases, customer preferences, location order from Loch Ness to Outer Banks, Huatulco and Point Nemo, how to approach secrets, messages, artifact slots, baits, switches, legendary fish, achievements, and when to use the Artifacts Guide, All Collectibles and Secrets Guide, or each 100% area guide.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-01",
      dateModified: "2026-06-15",
      articleSection: "Guides",
      about: [
        { "@type": "VideoGame", name: "Scale the Depths" },
        { "@type": "Thing", name: "Scale the Depths guide" },
        { "@type": "Thing", name: "Scale the Depths beginner guide" },
        { "@type": "Thing", name: "Scale the Depths best upgrades" },
        { "@type": "Thing", name: "Rod upgrades" },
        { "@type": "Thing", name: "Line upgrades" },
        { "@type": "Thing", name: "Bucket upgrades" },
        { "@type": "Thing", name: "Knife upgrades" },
        { "@type": "Thing", name: "Hook damage" },
        { "@type": "Thing", name: "Repellent" },
        { "@type": "Thing", name: "Fish prep" },
        { "@type": "Thing", name: "Perfect fish prep" },
        { "@type": "Thing", name: "Customer preferences" },
        { "@type": "Thing", name: "Bait" },
        { "@type": "Thing", name: "Messages in bottles" },
        { "@type": "Thing", name: "Scale the Depths artifacts" },
        { "@type": "Thing", name: "Scale the Depths artifacts guide" },
        { "@type": "Thing", name: "artifact slots" },
        { "@type": "Thing", name: "All Collectibles and Secrets Guide" },
        { "@type": "Thing", name: "Secrets" },
        { "@type": "Thing", name: "Legendary fish" },
        { "@type": "Thing", name: "Loch Ness" },
        { "@type": "Thing", name: "Outer Banks" },
        { "@type": "Thing", name: "Huatulco" },
        { "@type": "Thing", name: "Point Nemo" },
        { "@type": "Thing", name: "Beithir" },
        { "@type": "Thing", name: "Lost Dimetrodon" },
        { "@type": "Thing", name: "Hoga" },
        { "@type": "Thing", name: "Apophis 99942" },
        { "@type": "Thing", name: "Scale the Depths achievements" },
        { "@type": "Thing", name: "Scale the Depths 100% completion" },
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
          name: "What is the best first upgrade in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most players, the best first upgrade is rod or line distance because it lets you reach deeper routes and more secrets. Bucket and knife upgrades should follow soon after.",
          },
        },
        {
          "@type": "Question",
          name: "How do you make money faster in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Catch better fish, prep them carefully, feed customers efficiently and upgrade your gear instead of saving too long. Better prep means fish fill more of the customer bar.",
          },
        },
        {
          "@type": "Question",
          name: "Why are some fish hard to prep?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Later fish can have tougher scaling, parasites, barnacles or larger parts to chop. Upgrade your knife and slow down during careful prep phases.",
          },
        },
        {
          "@type": "Question",
          name: "How do customer preferences work?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Customers can like or dislike specific fish. Liked fish fill more of the bar, while disliked fish are less valuable for that customer. Ask for preferences and check your manual when you forget a hint.",
          },
        },
        {
          "@type": "Question",
          name: "Should I feed customers my best fish?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. If a customer only needs a little more progress, use a smaller fish and save valuable catches for bigger customers, favorite fish requests or legendary customer progress.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find more secrets?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade your rod or line, then check side paths, bushes, switches, chests, bottles and strange gaps. Repellent can help when small fish keep blocking exploration.",
          },
        },
        {
          "@type": "Question",
          name: "What does bait do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bait can change fishing or prep behavior. Some bait makes fish easier to handle, while other bait helps with specific prep problems or exploration goals.",
          },
        },
        {
          "@type": "Question",
          name: "How do I catch legendary fish?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade your hook, rod and line first. Open nearby shortcuts when possible, start with empty storage and treat the legendary fish as a dedicated target trip.",
          },
        },
        {
          "@type": "Question",
          name: "How many main locations are there?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The main locations are Loch Ness, Outer Banks, Huatulco and Point Nemo. Each one has its own fish, customers, secrets, collectibles and legendary fish.",
          },
        },
        {
          "@type": "Question",
          name: "Should I 100% Loch Ness before moving on?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can move on after unlocking the next location, but Loch Ness may still have missing customers, treasures, messages, artifacts or legendary progress. Return with better gear if you want a clean 100% route.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I am stuck in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stop forcing the same route. Upgrade gear, check customer hints, look for missed switches, then use the 100% guide for the location you are clearing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Scale the Depths more about fishing or exploration?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Both. Fishing earns the money, but exploration is how you find messages, artifacts, bait, shortcuts, cosmetics, legendary fish and 100% completion progress.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find all artifacts in Scale the Depths?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Scale the Depths Artifacts Guide if the missing item is in the Artifacts tab. It separates artifact slots from messages, bait, chests, cosmetics, knives and other collectibles.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use the Artifacts Guide or All Collectibles Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the Artifacts Guide for named artifact slots like Nessie Plush, Sputnik 1, English Shield, Aztec Sun Stone, Sonar Receiver, Toy Submarine and boss-route artifacts. Use the All Collectibles and Secrets Guide when you are missing mixed cleanup such as messages, bait, cosmetics, switches, boats or decals.",
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
          title="How Do You Progress in Scale the Depths?"
          description="Start here if you want the upgrade order, prep tips, customer rules, artifact help, secret hunting basics and the right 100% guide."
          gameTitle="Scale the Depths"
          gameHref="/scale-the-depths"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ScaleTheDepthsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}