import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoGoTownAgentPeanutSafeCodeContent from "@/data/go-go-town/agent-peanut-safe-code.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/go-go-town`;
const pageUrl = `${hubUrl}/agent-peanut-safe-code`;

const metadataTitle =
  "Go-Go Town Agent Peanut Safe Code, Key & Town Deed";

const metadataDescription =
  "Finish Challenge 10, trigger the Town Deed call, find Agent Peanut, open the Town Co. Safe, get the Bunker Door Key, and claim the Town Deed.";

const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-boss-town-deed-secret-location.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-top-town-tournament-final-reward.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-safe-locked-code-required.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-bunker-network-entrance-unlock.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-bunker-network-interior.webp`,
];

const toc = [
  {
    id: "after-winning-tournament",
    label: "After winning the tournament",
  },
  {
    id: "safe-locked",
    label: "Why the Safe is locked",
  },
  {
    id: "safe-location",
    label: "Town Co. Safe location",
  },
  {
    id: "agent-peanut-requirements",
    label: "Agent Peanut requirements",
  },
  {
    id: "agent-peanut-not-appearing",
    label: "Agent Peanut missing",
  },
  {
    id: "get-safe-code",
    label: "Get the Safe code",
  },
  {
    id: "open-safe",
    label: "Open the Safe",
  },
  {
    id: "bunker-network",
    label: "Unlock the Bunker Network",
  },
  {
    id: "bunker-interior",
    label: "Navigate the bunker",
  },
  {
    id: "navigation-error",
    label: "Destination error fix",
  },
  {
    id: "red-bunker-door",
    label: "Open the red bunker door",
  },
  {
    id: "town-deed",
    label: "Find the Town Deed",
  },
  {
    id: "where-to-go-next",
    label: "Where to go next",
  },
  {
    id: "troubleshooting-checklist",
    label: "Troubleshooting checklist",
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
    href: "/go-go-town/progression-stuck/",
    label: "Town Goals, EGO Tech & Progression Fixes",
  },
  {
    href: "/go-go-town/automation-not-working/",
    label: "Workers, Couriers & Automation Fixes",
  },
];

const faqEntities = [
  {
    question:
      "Does the Boss's Town Deed call happen before or after the final reward?",
    answer:
      "It happens after the final Top Town Tournament reward is claimed and the tournament conversation finishes. Wait through the apparent ending for the Boss's follow-up call about the hidden Town Deed.",
  },
  {
    question: "Can I use a Safe code from another save?",
    answer:
      "Do not rely on another save's number. The Town Co. Safe is controlled by the current quest state, so complete Agent Peanut's dialogue and use the code connected to the current town.",
  },
  {
    question:
      "Do Agent Toffee or the other final agents unlock Peanut's Safe?",
    answer:
      "No. The final agents can appear during the same Train Station window, but their objectives are separate. Their requirements and rewards do not provide Agent Peanut's Safe code.",
  },
  {
    question:
      "Do I need to unlock every Bunker Network entrance before finding the Town Deed?",
    answer:
      "No. You need a working route into the shared network and access to the deeper story corridor. Unrelated surface destinations may remain locked, although activating more entrances makes navigation easier.",
  },
  {
    question:
      "Can my constructed TownCo. Bunker entrance replace the surface entrances?",
    answer:
      "No. A constructed entrance shortens repeated trips into an accessible network, but each destination still requires its matching surface entrance and activation.",
  },
  {
    question:
      "Can I open the Town Co. Safe as soon as I find the northwest plot?",
    answer:
      "No. Buying the land and reaching the entrance only reveals the early locked state. The Safe remains progression-locked until the final tournament sequence and Agent Peanut dialogue are complete.",
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
      "Go-Go Town Agent Peanut Safe Code, Bunker Key & Town Deed",
    description:
      "Win Challenge 10, trigger the Boss's Town Deed call, find Agent Peanut, open the northwest Safe, navigate the Bunker Network, and claim the deed.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Go-Go Town Boss revealing that TownCo agents hid the Town Deed in a secret location",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Trigger the Town Deed call, get Agent Peanut's Safe code and Bunker Door Key, open the red bunker door, and claim the deed.",
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
          name: "Agent Peanut Safe Code",
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
        "Go-Go Town Agent Peanut Safe Code, Bunker Door Key and Town Deed Guide",
      description:
        "A complete Go-Go Town endgame route covering Top Town Tournament Challenge 10, the final tournament reward, the Boss's follow-up Town Deed call, Agent Peanut's Train Station requirements, the northwest Town Co. Safe, the numeric Safe code, the TownCo. Bunker Door Key, surface bunker entrances, the constructed bunker shortcut, the green central chamber, the Unable to Pass to Destination error, the deeper red bunker door, and the rear desks where the Town Deed objective completes.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-27",
      dateModified: "2026-07-28",
      about: [
        {
          "@type": "VideoGame",
          name: "Go-Go Town!",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Top Town Tournament Challenge 10",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town final tournament reward",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Boss Town Deed call",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Agent Peanut",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Agent Peanut not appearing",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Safe code",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Co. Safe",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town TownCo. Bunker Door Key",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Bunker Network",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town surface bunker entrances",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Unable to Pass to Destination",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Townie Navigation Module",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town red bunker door",
        },
        {
          "@type": "Thing",
          name: "Go-Go Town Town Deed",
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
          title="How I Get Agent Peanut's Safe Code and the Town Deed"
          description="I follow the post-tournament Town Deed call to Agent Peanut, the northwest Safe, the Bunker Door Key, the red bunker door, and the rear desks."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 28, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <GoGoTownAgentPeanutSafeCodeContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}