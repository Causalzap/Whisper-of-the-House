import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PrestigeAscensionContent from "@/data/dwarf-eats-mountain/prestige-ascension-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/prestige-ascension-guide`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-upgrades-screen.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-choice-bottled-dwarf.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-swift-start.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-ancient-cache.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-mountains-hidden-veins.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-heirloom-inheritance.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-prestige-looming-motivation.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-ballista-laser-flamer-chaos.webp`,
];

const toc = [
  { id: "how-prestige-works", label: "How Prestige works" },
  { id: "how-to-get-pp", label: "How to get PP" },
  { id: "when-to-prestige", label: "When to Prestige" },
  { id: "first-prestige-priorities", label: "Early upgrades" },
  { id: "swift-start", label: "Swift Start" },
  { id: "mithril-prestige", label: "Mithril upgrades" },
  { id: "artifact-prestige", label: "Artifact starts" },
  { id: "overflow-prestige", label: "Ore overflow" },
  { id: "choose-by-bottleneck", label: "By bottleneck" },
  { id: "t2-and-beyond", label: "T2+" },
  { id: "t6-prestige", label: "T6 Prestige" },
  { id: "ascension", label: "Ascension" },
  { id: "when-to-ascend", label: "When to Ascend" },
  { id: "prestige-route", label: "Route" },
  { id: "mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/build-order", label: "Beginner Build Order" },
  { href: "/dwarf-eats-mountain/runners-guide", label: "Runners Guide" },
  {
    href: "/dwarf-eats-mountain/artifacts-mithril-guide",
    label: "Artifacts and Mithril Guide",
  },
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "Dwarf Eats Mountain Prestige Guide: PP, T6, Ascension",
  description:
    "Don't waste your Prestige Points! Master Dwarf Eats Mountain with the best reset timing, optimal PP upgrades, T6 stacking, and Ascension mechanics.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Prestige Guide: PP, T6, Ascension",
    description:
      "Use this guide to spend PP correctly, pick early Prestige upgrades, plan T6 upgrades, and understand what Ascension keeps or resets.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain Prestige upgrade screen showing PP and permanent upgrade choices.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Prestige Guide: PP, T6, Ascension",
    description:
      "Know when to reset, how to spend PP before Begin Game, and how T6 and Ascension Rank affect long-term scaling.",
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
          name: "Dwarf Eats Mountain Guide",
          item: `${siteUrl}/dwarf-eats-mountain`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prestige and Ascension Guide",
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
        "Dwarf Eats Mountain Prestige and Ascension Guide: PP, T6 Upgrades, Reset Timing, and Ascension Rank",
      description:
        "A player-focused Dwarf Eats Mountain Prestige and Ascension guide that explains when to reset, how PP is earned, why PP is spent on the Prestige setup screen rather than during an active run, which early Prestige upgrades are useful, how Swift Start, Ancient Cache, Mountain's Hidden Veins, Heirloom Inheritance, and Looming Motivation fit different bottlenecks, why T6 upgrades should usually be focused around one build direction, and how Ascension resets earlier Prestige progress while keeping T6 upgrades and granting Ascension Rank that directly buffs T6 power.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Prestige" },
        { "@type": "Thing", name: "Prestige Points" },
        { "@type": "Thing", name: "PP" },
        { "@type": "Thing", name: "Hold to Prestige" },
        { "@type": "Thing", name: "Swift Start" },
        { "@type": "Thing", name: "T6 Upgrades" },
        { "@type": "Thing", name: "Ascension" },
        { "@type": "Thing", name: "Ascension Rank" },
        { "@type": "Thing", name: "Looming Motivation" },
        { "@type": "Thing", name: "Ancient Cache" },
        { "@type": "Thing", name: "Mountain's Hidden Veins" },
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
          name: "When should I Prestige in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prestige when your run clearly slows down and your next permanent upgrade will make the next run faster.",
          },
        },
        {
          "@type": "Question",
          name: "How do I spend PP in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Hold the top Hold to Prestige button, spend PP on the Prestige setup screen, then press Begin Game. You cannot spend PP during an active run.",
          },
        },
        {
          "@type": "Question",
          name: "Why can't I buy Prestige upgrades during a run?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Prestige upgrades are bought between runs. If you are still in active gameplay, hold the Prestige button first and use the setup screen before starting the next run.",
          },
        },
        {
          "@type": "Question",
          name: "How do you get PP in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You mainly get PP by eating mountains. Some artifacts and bosses can also give PP or help you reach more PP sources.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best first Prestige upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Swift Start is one of the safest early picks because every run needs runners. Guild Apprentices, Housing Batches, Veteran Settlers, Ancient Cache, and Looming Motivation are also strong depending on your bottleneck.",
          },
        },
        {
          "@type": "Question",
          name: "Is Ancient Cache worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ancient Cache is worth it if Mithril is blocking your route. It is less urgent if your main problem is basic gold collection or dwarf capacity.",
          },
        },
        {
          "@type": "Question",
          name: "What does Looming Motivation do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Looming Motivation helps when there are over 350 uncollected ores and the mountain starts reclaiming them. It gives runners temporary carrying capacity when they return to stash.",
          },
        },
        {
          "@type": "Question",
          name: "What does Ascension reset in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ascension resets earlier Prestige progress and unspent PP, while keeping T6 upgrades. It also gives Ascension Rank, which directly buffs T6 upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "When should I Ascend?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ascend after T6 upgrades matter, your current layer has slowed down, and your kept T6 upgrades are strong enough to make the next cycle better.",
          },
        },
        {
          "@type": "Question",
          name: "Should I spread T6 upgrades evenly?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. T6 upgrades do not increase in cost with each purchase, so stacking the T6 type that matches your build often performs better than spreading points randomly.",
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
          title="Dwarf Eats Mountain Prestige and Ascension Guide: When to Reset and How to Spend PP"
          description="A practical reset guide for players who are stuck: learn how to spend PP, which early upgrades are worth it, when T6 matters, and what Ascension actually keeps or wipes."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <PrestigeAscensionContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}