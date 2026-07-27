import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import GoGoTownAgentPeanutSafeCodeContent from "@/data/go-go-town/agent-peanut-safe-code.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/go-go-town`;
const pageUrl = `${hubUrl}/agent-peanut-safe-code`;

const metadataTitle =
  "Go-Go Town Agent Peanut Safe Code & Town Deed Guide";

const metadataDescription =
  "Finish the Agent Peanut endgame route in Go-Go Town: reach #1, get the Safe code, open the Town Co. Safe, unlock the red bunker door, and claim the Town Deed.";
const imageUrls = [
  `${siteUrl}/images/go-go-town/go-go-town-safe-locked-code-required.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-bunker-network-entrance-unlock.webp`,
  `${siteUrl}/images/go-go-town/go-go-town-bunker-network-interior.webp`,
];

const toc = [
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
    id: "agent-toffee",
    label: "Agent Toffee vs Peanut",
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
    id: "terrain-controls",
    label: "Terrain controls",
  },
  {
    id: "bunker-network",
    label: "Bunker Network unlocks",
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
    label: "Red bunker door",
  },
  {
    id: "town-deed",
    label: "Find the Town Deed",
  },
  {
    id: "when-to-return",
    label: "When to return",
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
    href: "/go-go-town",
    label: "Go-Go Town 1.0 Guide Hub",
  },
  {
    href: "/go-go-town/progression-stuck",
    label: "Town Rank, EGO & Progression Fixes",
  },
  {
    href: "/go-go-town/automation-not-working",
    label: "Workers, Couriers & Automation Fixes",
  },
];

const faqEntities = [
  {
    question: "Can I open the Town Co. Safe when I first find it?",
    answer:
      "No. The early interaction only displays the locked message. Return after finishing Challenge 10, reaching number one in Town Rankings, and speaking to Agent Peanut.",
  },
  {
    question: "Is the Safe code entered through the Phone?",
    answer:
      "No. Finish Agent Peanut's dialogue, travel back to the physical Town Co. Safe, and interact with it there. The Phone and Jailbreak App are unrelated to this objective.",
  },
  {
    question: "Do I need to pay Agent Toffee before opening the Safe?",
    answer:
      "Agent Toffee and Agent Peanut have separate objectives. Toffee asks for 30,000 Coins, while Peanut provides the Safe route. Finish both station conversations, but Toffee's payment is not the Safe code.",
  },
  {
    question: "Why is Agent Peanut not appearing?",
    answer:
      "Confirm Challenge 10, claim the final reward, verify the number-one ranking, finish pending TownCo. and Train Station dialogue, leave the platform, and return after the arrival sequence updates.",
  },
  {
    question: "Do I need to return to Agent Peanut after opening the Safe?",
    answer:
      "Yes when his invitation objective remains active. Collecting the TownCo. Bunker Door Key and reporting the discovery are separate quest steps.",
  },
  {
    question:
      "Does one surface bunker entrance unlock every underground door?",
    answer:
      "No. Each surface entrance connects to a specific bunker route. Enter the local bunker wing, activate its switch, and then return to the shared underground network.",
  },
  {
    question:
      "Does my constructed TownCo. Bunker entrance unlock missing destinations?",
    answer:
      "No. It provides a convenient entrance into the shared network, but the other surface entrances and their connected routes still need to be discovered and activated.",
  },
  {
    question:
      "Why does the bunker say it cannot pass to the destination?",
    answer:
      "The connected route is missing an entrance, switch, or navigation activation. Return to the corresponding surface region or local bunker wing instead of repeatedly testing the blocked door.",
  },
  {
    question: "Where is the Town Deed?",
    answer:
      "The Town Deed is found at the desks in the back of the deeper bunker room. Opening the red door or entering the room does not complete the objective by itself.",
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
      "Finish the final Town Rankings trigger, find Agent Peanut, open the northwest Town Co. Safe, navigate the Bunker Network, and discover the Town Deed.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 540,
        height: 448,
        alt: "Go-Go Town Town Co Safe displaying that it is locked before Agent Peanut provides the code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Find Agent Peanut, open the locked Town Co. Safe, get the Bunker Door Key, fix bunker route errors, and discover the Town Deed.",
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
        "A complete Go-Go Town endgame guide for the Agent Peanut route. It explains the Challenge 10 and number-one Town Rankings requirements, why the Town Co. Safe remains locked early, where to find the Safe, how to receive the code, collect the TownCo. Bunker Door Key, finish Peanut's invitation, check the available terrain controls, activate surface bunker entrances, fix the Unable to Pass to Destination error, open the deeper red bunker door, and interact with the rear desks to discover the Town Deed.",
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
        {
          "@type": "Thing",
          name: "Go-Go Town terrain controls",
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
          description="Follow the final route from Challenge 10 and the Train Station to the northwest Town Co. Safe, the Bunker Door Key, the underground red door, and the rear desks that complete the Town Deed objective."
          gameTitle="Go-Go Town!"
          gameHref="/go-go-town"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 27, 2026"
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