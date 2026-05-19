import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ArtifactsMithrilContent from "@/data/dwarf-eats-mountain/artifacts-mithril-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dwarf-eats-mountain/artifacts-mithril-guide`;

const imageUrls = [
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-choice-bottled-dwarf.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-tremor-lords-idol.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-artifact-quickbeer-dispenser.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-runner-prospectors-nose.webp`,
  `${siteUrl}/images/dwarf-eats-mountain/dwarf-eats-mountain-mithril-upgrades-chain-mail.webp`,
];

const toc = [
  { id: "how-artifacts-work", label: "How artifacts work" },
  { id: "artifact-priority", label: "Artifact priority" },
  { id: "artifact-examples", label: "Examples" },
  { id: "runner-artifacts", label: "Runner artifacts" },
  { id: "damage-artifacts", label: "Damage artifacts" },
  { id: "luck-jackpot-artifacts", label: "Luck & Jackpot" },
  { id: "how-to-get-mithril", label: "How to get Mithril" },
  { id: "prestige-mithril", label: "Prestige Mithril" },
  { id: "mithril-forging", label: "Mithril Forging" },
  { id: "mountain-soul", label: "Mountain Soul" },
  { id: "artifact-ritual", label: "Artifact Ritual" },
  { id: "mithril-execution", label: "Execution order" },
  { id: "common-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/dwarf-eats-mountain", label: "Dwarf Eats Mountain Guide" },
  { href: "/dwarf-eats-mountain/build-order", label: "Beginner Build Order" },
  { href: "/dwarf-eats-mountain/runners-guide", label: "Runners Guide" },
  {
    href: "/dwarf-eats-mountain/prestige-ascension-guide",
    label: "Prestige and Ascension Guide",
  },
  { href: "/dwarf-eats-mountain/best-builds", label: "Best Builds Guide" },
  { href: "/dwarf-eats-mountain/endgame-guide", label: "Endgame Guide" },
];

export const metadata: Metadata = {
  title: "Stuck? Best Artifacts & Mithril Guide | Dwarf Eats Mountain",
  description:
    "Stop wasting Mithril! Master Dwarf Eats Mountain with the best Early-Late Artifact tiers, Mountain Soul uses, Forge routes, and powerful Ritual builds.",
  
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Dwarf Eats Mountain Artifacts & Mithril Guide",
    description:
      "A practical guide to artifact choices, Mithril spending, Mountain Souls, Luck, Jackpot, Forge upgrades and Artifact Ritual timing.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dwarf Eats Mountain Bottled Dwarf artifact choice with Mithril, dwarf and PP reward.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dwarf Eats Mountain Artifacts & Mithril Guide",
    description:
      "Pick artifacts by bottleneck and spend Mithril on the route that actually fixes your run.",
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
          name: "Artifacts and Mithril Guide",
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
        "Dwarf Eats Mountain Artifacts and Mithril Guide: Best Picks, Mountain Souls, Luck, Forge Routes and Rituals",
      description:
        "A player-focused Dwarf Eats Mountain artifacts and Mithril guide that explains how to choose artifacts by bottleneck instead of rarity, when to pick runner, damage, Luck, Jackpot, Mithril, PP, and rare-resource artifacts, how damage artifacts differ by Miner, Flamer, Demo, Ballista, Laser, and global damage builds, how to get Mithril, how to spend Mithril on Mithril Pickaxes, Mithril Chainmail, Magnetic Gloves, Ballista upgrades, Forge routes and Artifact Rituals, and when Mountain Souls and rare resources should be saved for route-defining upgrades.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-19",
      dateModified: "2026-05-19",
      about: [
        {
          "@type": "VideoGame",
          name: "Dwarf Eats Mountain",
        },
        { "@type": "Thing", name: "Artifacts" },
        { "@type": "Thing", name: "Mithril" },
        { "@type": "Thing", name: "Mountain Soul" },
        { "@type": "Thing", name: "Artifact Ritual" },
        { "@type": "Thing", name: "Luck" },
        { "@type": "Thing", name: "Jackpot" },
        { "@type": "Thing", name: "Bottled Dwarf" },
        { "@type": "Thing", name: "Quickbeer Dispenser" },
        { "@type": "Thing", name: "Tremor Lord's Idol" },
        { "@type": "Thing", name: "Mithril Forging" },
        { "@type": "Thing", name: "Mithril Pickaxes" },
        { "@type": "Thing", name: "Mithril Chainmail" },
        { "@type": "Thing", name: "Magnetic Gloves" },
        { "@type": "Thing", name: "Forge" },
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
          name: "What are the best artifacts in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best artifact depends on your bottleneck. Pick runner artifacts if gold is piling up, damage artifacts if the field is clean but the mountain is slow, Mithril artifacts if rare resources block upgrades, and Luck or Jackpot artifacts when drop quality matters.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always pick the highest-tier artifact?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. A lower-tier artifact that fixes your current problem can be better than a rare artifact that supports a build you are not using.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bottled Dwarf good?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Bottled Dwarf is a strong early value pick because it gives a dwarf, Mithril, and PP, helping both the current run and the next Prestige cycle.",
          },
        },
        {
          "@type": "Question",
          name: "When should I pick runner artifacts?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick runner artifacts when gold, gems, Mithril, or rare drops sit on the ground. If loot is not reaching the Great Maw, runner help is usually better than more damage.",
          },
        },
        {
          "@type": "Question",
          name: "When should I pick damage artifacts?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick damage artifacts when the field is clean and mountain HP, dens, veins, or bosses are the main wall. Match the artifact to your build, such as miner, Flamer, Demo, Ballista, Laser, or global damage.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get Mithril in Dwarf Eats Mountain?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mithril can come from dens, special targets, random damage drops, artifact rewards, and Prestige support such as Ancient Cache or Mountain's Hidden Veins.",
          },
        },
        {
          "@type": "Question",
          name: "What should I spend Mithril on first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Spend Mithril on the upgrade that fixes your blocker. Use Mithril Pickaxes for miner damage, Mithril Chainmail for runner safety, Magnetic Gloves for gathering speed, and Ballista or Forge upgrades when your build supports them.",
          },
        },
        {
          "@type": "Question",
          name: "What does Mountain Soul do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Mountain Soul is used for powerful upgrades, rituals, and advanced unlocks. Save it for upgrades that support your current build instead of spending it randomly.",
          },
        },
        {
          "@type": "Question",
          name: "Is Luck worth it early?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Luck is better once your basic economy works. If runners cannot collect normal drops, extra rare drops can make the field messier instead of helping.",
          },
        },
        {
          "@type": "Question",
          name: "When should I use Artifact Ritual?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use Artifact Ritual when your run is already stable and artifacts are becoming a main scaling system. Do not rush it before fixing damage, runners, and Mithril access.",
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
          title="Dwarf Eats Mountain Artifacts and Mithril Guide: What to Pick and What to Save"
          description="Choose artifacts by the problem your run actually has, then spend Mithril, Mountain Souls, and rituals on the route that fixes it."
          gameTitle="Dwarf Eats Mountain"
          gameHref="/dwarf-eats-mountain"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ArtifactsMithrilContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}