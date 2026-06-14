import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import RequestBoardContent from "@/data/tales-of-seikyu/request-board-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/request-board-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-request-board.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fishing-job.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fishing-rod-beginner.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-bamboo-quest.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-ranch-facilities-sasaki.webp`,
];

const toc = [
  {
    id: "request-board-guide",
    label: "Request Board guide",
  },
  {
    id: "early-requests",
    label: "Early requests",
  },
  {
    id: "teach-a-yokai-to-fish",
    label: "Basic Rod quest",
  },
  {
    id: "timed-vs-red-stamp",
    label: "Timers and red stamps",
  },
  {
    id: "request-priority",
    label: "Request priority",
  },
  {
    id: "fish-requests",
    label: "Fish requests",
  },
  {
    id: "materials-to-keep",
    label: "Materials to keep",
  },
  {
    id: "cooking-requests",
    label: "Cooking requests",
  },
  {
    id: "request-benefits",
    label: "Request benefits",
  },
  {
    id: "bamboo-and-building-materials",
    label: "Building materials",
  },
  {
    id: "ranch-facility-requests",
    label: "Ranch requests",
  },
  {
    id: "achievement-connections",
    label: "Achievements",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tales-of-seikyu",
    label: "Tales of Seikyu Guide Hub",
  },
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
  {
    href: "/tales-of-seikyu/romance-gifts-marriage-guide",
    label: "Tales of Seikyu Romance, Gifts, and Marriage Guide",
  },
  {
    href: "/tales-of-seikyu/yokai-forms-guide",
    label: "Tales of Seikyu Yokai Forms Guide",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Request Board Guide: Timers & Basic Rod",
  description:
    "Use Tales of Seikyu Request Board with 3-day timers, red stamp quests, Teach a Yokai to Fish, Basic Rod, fish requests, affinity, and materials.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Request Board Guide: Timers, Red Stamps, Basic Rod, Fish Requests and Affinity",
    description:
      "Plan Request Board jobs in Tales of Seikyu with 3-day timers, red stamp side quests, Teach a Yokai to Fish, Torleone, the Basic Rod, Fish Please requests, cooking requests, material storage, ranch requests, affinity gains, and achievement routing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu Request Board with available requests.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Request Board Guide",
    description:
      "Understand 3-day timers, red stamp quests, Basic Rod, Fish Please requests, cooking items, materials, affinity, and request priority.",
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
          name: "Tales of Seikyu Guide",
          item: `${siteUrl}/tales-of-seikyu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tales of Seikyu Request Board Guide",
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
        "Tales of Seikyu Request Board Guide: Timers, Red Stamp Quests, Teach a Yokai to Fish, Basic Rod, Fish Please, Cooking Requests and Affinity",
      description:
        "A player-focused Tales of Seikyu Request Board guide covering normal 3-day timed requests, red stamp side quests, Teach a Yokai to Fish, Torleone on the docks, the Basic Rod, Fish Please same-species fish requests, Lend A Hand material requests, More Planks construction requests, cooking item requests, items to keep, request priority, affinity gains, ranch and facility requests, and achievement connections.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Request Board",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Teach a Yokai to Fish",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Basic Rod",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Torleone",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu red stamp quests",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu timed requests",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fish Please",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu cooking requests",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu affinity",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu ranch facilities",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the most important early Request Board quest in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Teach a Yokai to Fish is one of the most important early requests because it leads to Torleone on the docks and unlocks the Basic Rod.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I get the Basic Rod in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Accept Teach a Yokai to Fish, then go to Torleone on the docks. This starts your fishing route.",
          },
        },
        {
          "@type": "Question",
          name: "How long do normal requests last in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Many normal short requests use a 3-day timer. Check the item, quantity, and your storage before accepting.",
          },
        },
        {
          "@type": "Question",
          name: "What does a red stamp request mean in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A red stamp request is a longer side quest and does not behave like a normal short timed request. Treat it as progression content, not a quick timed delivery.",
          },
        },
        {
          "@type": "Question",
          name: "Should I accept every Request Board job in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Accept system unlocks, easy deliveries, important NPC requests, and jobs you can finish without sacrificing your last useful materials.",
          },
        },
        {
          "@type": "Question",
          name: "Do requests raise friendship in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Completing requests can raise affinity with the requesting character, which helps friendship and social achievement routes.",
          },
        },
        {
          "@type": "Question",
          name: "How should I prepare for Fish Please requests in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep several common fish in storage. Fish requests can ask for multiple of the same species, not only one new fish.",
          },
        },
        {
          "@type": "Question",
          name: "Should I sell duplicate fish in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not all of them. Keep a few duplicates of common fish after unlocking the Basic Rod, especially if you are checking the Request Board often.",
          },
        },
        {
          "@type": "Question",
          name: "What materials should I keep for requests in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Keep wood, stone, bamboo, hardwood, clay, ore, crops, ingredients, prepared food, meat, and several fish before selling extras.",
          },
        },
        {
          "@type": "Question",
          name: "Are cooking requests normal cooked meals in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Some cooking item requests can ask for pickled, dried, or other prepared items. Read the exact item name before assuming a normal meal works.",
          },
        },
        {
          "@type": "Question",
          name: "Can Request Board jobs help achievements in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Requests can support fishing, Kappa progress, friendship, ranch progress, material storage, and completion routes.",
          },
        },
        {
          "@type": "Question",
          name: "What Request Board jobs should I skip early in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Skip timed requests that need rare crops, rare fish, prepared food you cannot make yet, or materials you need for upgrades, offerings, or facilities.",
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
          title="Use the Request Board Without Wasting Materials or Timers"
          description="Learn which Request Board jobs to take first, how red stamp quests differ from timed requests, and why Basic Rod, fish, materials, cooking items, and affinity matter."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <RequestBoardContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
