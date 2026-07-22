import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestBeginnerCharactersContent from "@/data/the-binding-of-isaac-rebirth/best-beginner-characters.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-binding-of-isaac-rebirth/best-beginner-characters/`;

const imageUrls = [
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-dlc-fresh-save-isaac.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-magdalene-character-select.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-lazarus-revive-counter.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-azazel-flight-brimstone.webp`,
  `${siteUrl}/images/the-binding-of-isaac-rebirth/the-binding-of-isaac-rebirth-hard-mode-completion-marks.webp`,
];

const toc = [
  {
    id: "best-beginner-characters",
    label: "Best characters",
  },
  {
    id: "quick-ranking",
    label: "Unlocks & setup",
  },
  {
    id: "by-problem",
    label: "Pick by problem",
  },
  {
    id: "isaac-first",
    label: "Why Isaac first",
  },
  {
    id: "safety-picks",
    label: "Safety picks",
  },
  {
    id: "azazel",
    label: "Azazel",
  },
  {
    id: "cain-and-normal-upgrades",
    label: "Cain",
  },
  {
    id: "characters-i-delay",
    label: "Who to delay",
  },
  {
    id: "normal-or-hard",
    label: "Normal or Hard",
  },
  {
    id: "learning-vs-winning",
    label: "Learning vs winning",
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
    href: "/the-binding-of-isaac-rebirth/unlock-order",
    label: "Unlock Order Guide",
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
  title: "Binding of Isaac Best Beginner Characters & Unlocks",
  description:
    "Choose Isaac, Magdalene, Lazarus, Azazel, Cain and delayed characters with unlock conditions, starting setups, Normal/Hard advice and problem-based picks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "The Binding of Isaac Best Beginner Characters, Unlocks and Starting Setups",
    description:
      "Choose the best beginner character in The Binding of Isaac: Rebirth by problem, unlock condition, starting setup and learning goal. Compare Isaac, Magdalene, Lazarus, Azazel, Cain, Judas, Eve, Eden, Lilith and later characters.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt:
          "The Binding of Isaac Rebirth fresh save character select with Isaac available first.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binding of Isaac Best Beginner Characters & Unlocks",
    description:
      "Pick Isaac, Magdalene, Lazarus, Azazel or Cain by unlock condition, starting setup and the problem killing your runs.",
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
          name: "Best Beginner Characters",
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
        "The Binding of Isaac: Rebirth Best Beginner Characters: Isaac, Magdalene, Lazarus, Azazel, Cain, Unlock Conditions, Starting Setups and Problem-Based Picks",
      description:
        "A practical The Binding of Isaac: Rebirth beginner character guide for new and returning players. The guide explains why Isaac is the best first teacher, when Magdalene is better for health mistakes, when Lazarus is useful for revive safety, why Azazel is the easiest early clear but not always the best teacher, when Cain becomes a good normal-character upgrade, which characters to delay, how to unlock key beginner characters, what each recommended character starts with, when to use Normal or Hard, and how to choose a character by the specific problem killing your runs instead of following a pure tier list.",
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
          name: "The Binding of Isaac beginner characters",
        },
        {
          "@type": "Thing",
          name: "Isaac",
        },
        {
          "@type": "Thing",
          name: "Magdalene",
        },
        {
          "@type": "Thing",
          name: "Lazarus",
        },
        {
          "@type": "Thing",
          name: "Azazel",
        },
        {
          "@type": "Thing",
          name: "Cain",
        },
        {
          "@type": "Thing",
          name: "Samson",
        },
        {
          "@type": "Thing",
          name: "Judas",
        },
        {
          "@type": "Thing",
          name: "Eve",
        },
        {
          "@type": "Thing",
          name: "Eden",
        },
        {
          "@type": "Thing",
          name: "Lilith",
        },
        {
          "@type": "Thing",
          name: "Normal Mode",
        },
        {
          "@type": "Thing",
          name: "Hard Mode",
        },
        {
          "@type": "Thing",
          name: "D6",
        },
        {
          "@type": "Thing",
          name: "Yum Heart",
        },
        {
          "@type": "Thing",
          name: "Lucky Foot",
        },
        {
          "@type": "Thing",
          name: "The Book of Belial",
        },
        {
          "@type": "Thing",
          name: "Whore of Babylon",
        },
        {
          "@type": "Thing",
          name: "Box of Friends",
        },
        {
          "@type": "Thing",
          name: "Incubus",
        },
        {
          "@type": "Thing",
          name: "Brimstone",
        },
        {
          "@type": "Thing",
          name: "Devil Room deals",
        },
        {
          "@type": "Thing",
          name: "completion marks",
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
          name: "Who is the best beginner character in The Binding of Isaac: Rebirth?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Isaac is the best first teacher because he starts simple and teaches the base room loop. Azazel is easier for early wins, but Isaac teaches the normal game better.",
          },
        },
        {
          "@type": "Question",
          name: "Should I start with Isaac or Azazel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with Isaac if you are learning. Use Azazel when you want easier clears, faster boss kills, or route access after the basics make sense.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Magdalene in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Have 7 or more red heart containers at one time. Magdalene starts with 4 red heart containers and Yum Heart, making her a safer health-focused beginner pick.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Lazarus in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Have 4 or more Soul Hearts or Black Hearts at one time in one run. Lazarus is useful after the first floors make sense because his revive forgives one big mistake.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Azazel in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Make 3 Devil Room deals in one run. Azazel starts with 3 Black Hearts, The Fool, flight, and short-ranged Brimstone.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Cain in The Binding of Isaac?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Hold 55 coins at one time. Cain starts with 2 red heart containers, 1 key, and Lucky Foot, so he feels better once pickups and shops make sense.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners play Judas?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Judas is better delayed for most beginners. He has strong damage potential and The Book of Belial, but he starts with only 1 red heart container.",
          },
        },
        {
          "@type": "Question",
          name: "Should beginners play Eve?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Eve is not ideal as a first beginner character. She rewards low-health control, which is risky before soul hearts, red hearts, and deal safety make sense.",
          },
        },
        {
          "@type": "Question",
          name: "Should I play beginner characters on Normal or Hard?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Normal to learn a character. Use Hard when you are ready for serious completion marks and do not want to repeat progress later.",
          },
        },
        {
          "@type": "Question",
          name: "Who should I use after beating Mom?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the problem table. If you need safety, try Magdalene or Lazarus. If you need clears, try Azazel. If you want a normal upgrade after Isaac, try Cain.",
          },
        },
        {
          "@type": "Question",
          name: "Are Tainted characters beginner-friendly?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Tainted characters are later-game unlocks. Learn the base characters first, then move into Beast route and Tainted unlock planning.",
          },
        },
        {
          "@type": "Question",
          name: "What is the biggest beginner character mistake?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The biggest mistake is treating a tier list as a route plan. Choose the character that solves your current problem instead of forcing the highest-ranked character every run.",
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
          title="Choose the Beginner Character That Solves Your Problem"
          description="Compare Isaac, Magdalene, Lazarus, Azazel, Cain and delayed characters by unlock condition, starting setup, Normal or Hard timing, and the problem killing your runs."
          gameTitle="The Binding of Isaac: Rebirth"
          gameHref="/the-binding-of-isaac-rebirth/"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 3, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestBeginnerCharactersContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}