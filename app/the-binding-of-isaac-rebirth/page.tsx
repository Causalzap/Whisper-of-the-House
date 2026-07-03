import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IsaacRebirthGuideHubContent from "@/data/the-binding-of-isaac-rebirth/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-repentance-new-run.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-first-item-room-route.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-post-it-completion-marks.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dads-note-ascent-start.webp`,
];

const toc = [
  {
    id: "the-binding-of-isaac-rebirth-guide",
    label: "Guide route",
  },
  {
    id: "which-guide-should-you-read",
    label: "Which guide?",
  },
  {
    id: "route-map",
    label: "Route map",
  },
  {
    id: "version-and-dlc",
    label: "Version & DLC",
  },
  {
    id: "first-runs",
    label: "First runs",
  },
  {
    id: "choose-a-character",
    label: "Characters",
  },
  {
    id: "after-mom",
    label: "After Mom",
  },
  {
    id: "late-repentance",
    label: "Late Repentance",
  },
  {
    id: "what-this-page-does-not-cover",
    label: "What it covers",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/the-binding-of-isaac-rebirth/dlc-buying-guide/",
    label: "DLC Buying Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/beginner-guide/",
    label: "Beginner Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/best-beginner-characters/",
    label: "Best Beginner Characters",
  },
  {
    href: "/the-binding-of-isaac-rebirth/unlock-order/",
    label: "Unlock Order Guide",
  },
  {
    href: "/the-binding-of-isaac-rebirth/tainted-characters-unlock-guide/",
    label: "Tainted Characters Unlock Guide",
  },
];

export const metadata: Metadata = {
  title: "The Binding of Isaac Rebirth Guide & Route Map",
  description:
    "Start Isaac with DLC buying, beginner tips, characters, unlock order, Repentance, Tainted characters, Hush, Mother, Home and route guide links.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac Rebirth Guide Hub, Beginner Route, DLC, Unlocks and Tainted Characters",
    description:
      "Use this The Binding of Isaac: Rebirth guide route to choose the right page for DLC buying, first runs, beginner characters, unlock order, Repentance routes, Tainted characters, Hush, Mother, Strange Door, Dad's Note and Home planning.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Repentance new run used as the starting point for the guide route.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Binding of Isaac Rebirth Guide & Route Map",
    description:
      "Pick the right Isaac guide for DLC buying, first runs, characters, unlock order, Repentance and Tainted routes.",
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
        "The Binding of Isaac: Rebirth Guide Route Map: DLC Buying, Beginner Tips, Characters, Unlock Order, Repentance and Tainted Characters",
      description:
        "A practical The Binding of Isaac: Rebirth guide hub for new and returning players who need the right guide, not a full wiki. The page routes players to the DLC Buying Guide for Rebirth, Afterbirth, Afterbirth+, Repentance, Repentance+ and the Complete Bundle; the Beginner Guide for first ten runs, item rooms, shops, bombs, tinted rocks, Secret Rooms, blue hearts, Devil Deals, D6 and Mom's Foot; the Best Beginner Characters Guide for Isaac, Magdalene, Lazarus, Azazel, Cain and delayed characters; the Unlock Order Guide for challenges, donation machines, Boss Rush, Hush, Delirium, Repentance routes, Soul Stones and cleanup; and the Tainted Characters Unlock Guide for Hush, Mother, Strange Door, The Fool, Dad's Note, Red Key, Cracked Key, Home, Dogma and Beast routing.",
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
          name: "The Binding of Isaac guide",
        },
        {
          "@type": "Thing",
          name: "Rebirth",
        },
        {
          "@type": "Thing",
          name: "Afterbirth",
        },
        {
          "@type": "Thing",
          name: "Afterbirth+",
        },
        {
          "@type": "Thing",
          name: "Repentance",
        },
        {
          "@type": "Thing",
          name: "Repentance+",
        },
        {
          "@type": "Thing",
          name: "Complete Bundle",
        },
        {
          "@type": "Thing",
          name: "beginner guide",
        },
        {
          "@type": "Thing",
          name: "beginner characters",
        },
        {
          "@type": "Thing",
          name: "unlock order",
        },
        {
          "@type": "Thing",
          name: "Tainted characters",
        },
        {
          "@type": "Thing",
          name: "Hush",
        },
        {
          "@type": "Thing",
          name: "Mother",
        },
        {
          "@type": "Thing",
          name: "Strange Door",
        },
        {
          "@type": "Thing",
          name: "Dad's Note",
        },
        {
          "@type": "Thing",
          name: "Home",
        },
        {
          "@type": "Thing",
          name: "Dogma",
        },
        {
          "@type": "Thing",
          name: "Beast",
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
          name: "What should I read first as a new Isaac player?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Beginner Guide if you already own the game. Start with the DLC Buying Guide if you are still deciding between Rebirth, Repentance, Repentance+, and the Complete Bundle.",
          },
        },
        {
          "@type": "Question",
          name: "Is this a full Binding of Isaac wiki?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This route is for practical decisions: what to buy, how to start, which character to use, what to unlock, and when to attempt Tainted characters.",
          },
        },
        {
            "@type": "Question",
            name: "What if The Binding of Isaac is not loading or not launching?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Treat that as a technical issue, not a gameplay route problem. Start with Steam file verification, disable risky mods, check whether the correct DLC chain is installed, and relaunch before changing save or progression plans. If enough search data appears for not loading, crash, black screen, or launch errors, split it into a separate troubleshooting page.",
            },
          },
        {
          "@type": "Question",
          name: "Should I buy all DLC before learning The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Only if the bundle price makes sense and you expect to play. DLC adds more content, but it does not replace learning item rooms, shops, bombs, health, and boss routing.",
          },
        },
        {
          "@type": "Question",
          name: "Should I start with Isaac or Azazel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with Isaac if you want to learn the normal game. Use Azazel when you want easier clears after the basic route makes sense. The full comparison is in the Best Beginner Characters Guide.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after beating Mom?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move into unlock order. Prioritize rewards that make future runs stronger before chasing full checklist completion.",
          },
        },
        {
          "@type": "Question",
          name: "When should I unlock Tainted characters?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Later, after the base route and Repentance route gates make sense. If Strange Door, Dad's Note, Red Key, Cracked Key, or Home routing is the blocker, use the Tainted Characters Unlock Guide.",
          },
        },
        {
          "@type": "Question",
          name: "Why not put every detail on this Isaac guide page?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Because the details are more useful on the page where the player needs them. This page chooses the next guide; the dedicated guides solve the specific problem.",
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
          title="Choose the Right Isaac Guide for Your Current Blocker"
          description="Start with the right Isaac route: DLC buying, first runs, beginner characters, unlock order, Repentance gates, Tainted characters, Home and Beast planning."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <IsaacRebirthGuideHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}