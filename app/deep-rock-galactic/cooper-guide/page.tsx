import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CooperGuideContent from "@/data/deep-rock-galactic/cooper-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/deep-rock-galactic/cooper-guide`;

const imageUrls = [
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-solo.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-pickup.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-upgrade.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-expenite-deposit.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-cooper-mining.webp`,
  `${siteUrl}/images/deep-rock-galactic/rogue-core-power-cable-route.webp`,
];

const toc = [
  { id: "cooper-guide-overview", label: "Overview" },
  { id: "what-is-cooper", label: "What Is Cooper?" },
  { id: "how-to-command-cooper", label: "Commands" },
  { id: "cooper-upgrades", label: "Cooper Upgrades" },
  { id: "best-cooper-upgrades", label: "Best Upgrades" },
  { id: "expenite-gem", label: "Expenite Gem" },
  { id: "cooper-mining", label: "Mining Help" },
  { id: "cooper-route-control", label: "Route Control" },
  { id: "best-classes-with-cooper", label: "Best Classes" },
  { id: "cooper-vs-bosco", label: "Cooper vs Bosco" },
  { id: "common-cooper-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/deep-rock-galactic", label: "Deep Rock Galactic: Rogue Core Guide" },
  { href: "/deep-rock-galactic/solo-guide", label: "Rogue Core Solo Guide" },
  { href: "/deep-rock-galactic/upgrades-explained", label: "Rogue Core Upgrades Explained" },
  { href: "/deep-rock-galactic/best-class", label: "Rogue Core Best Class" },
  { href: "/deep-rock-galactic/beginner-guide", label: "Rogue Core Beginner Guide" },
  { href: "/deep-rock-galactic/rogue-core-vs-drg", label: "Rogue Core vs Deep Rock Galactic" },
];

export const metadata: Metadata = {
  title: "Rogue Core Cooper Guide: Commands, Upgrades, Solo Bot",
  description:
    "Use Cooper better in Rogue Core solo: command it with the laser pointer, mine Expenite, focus enemies, pick upgrades, and use Expenite Gems.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Rogue Core Cooper Guide: Commands, Upgrades, Expenite Gems",
    description:
      "Learn how Cooper works in Rogue Core solo runs, including laser pointer commands, mining help, focus fire, Cooper upgrades, Expenite Gems, and Bosco differences.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Cooper supporting a solo run in Deep Rock Galactic Rogue Core.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rogue Core Cooper Guide: Commands, Upgrades, Solo Bot",
    description:
      "Command Cooper, mine Expenite, focus enemies, pick Cooper upgrades, and use Expenite Gems in Rogue Core solo runs.",
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
          name: "Deep Rock Galactic: Rogue Core Guide",
          item: `${siteUrl}/deep-rock-galactic`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rogue Core Cooper Guide",
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
        "Deep Rock Galactic: Rogue Core Cooper Guide: Solo Bot Commands, Laser Pointer Targeting, Cooper Upgrades, Expenite Gems, Mining Help and Bosco Differences",
      description:
        "A player-focused Rogue Core Cooper guide explaining how the solo helper works, how to command Cooper with the laser pointer, how to send Cooper to mine Expenite or focus fire high-threat enemies, when Cooper upgrades appear from R.E.P.D. or Bio Booster events, why Expenite Gems are major solo power spikes, which Cooper upgrades to pick, how Cooper helps with route control and mining, which Reclaimers pair best with Cooper, how Cooper differs from Bosco in Deep Rock Galactic, and the common Cooper mistakes that hurt solo runs.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-21",
      dateModified: "2026-05-21",
      about: [
        {
          "@type": "VideoGame",
          name: "Deep Rock Galactic: Rogue Core",
        },
        { "@type": "Thing", name: "Rogue Core Cooper" },
        { "@type": "Thing", name: "Rogue Core Cooper guide" },
        { "@type": "Thing", name: "Rogue Core solo bot" },
        { "@type": "Thing", name: "How to command Cooper" },
        { "@type": "Thing", name: "Rogue Core laser pointer" },
        { "@type": "Thing", name: "Cooper upgrades" },
        { "@type": "Thing", name: "R.E.P.D." },
        { "@type": "Thing", name: "Bio Booster" },
        { "@type": "Thing", name: "Expenite Gem" },
        { "@type": "Thing", name: "Cooper mining" },
        { "@type": "Thing", name: "Cooper vs Bosco" },
        { "@type": "Thing", name: "Rogue Core solo guide" },
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
          name: "What is Cooper in Rogue Core?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cooper is the solo helper drone in Deep Rock Galactic: Rogue Core. It can help with combat, mining, focus fire, and solo task flow, and it can receive Cooper-specific upgrades during the run.",
          },
        },
        {
          "@type": "Question",
          name: "How do you command Cooper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use your laser pointer. Point Cooper at useful mineral deposits, out-of-reach Expenite, or high-threat enemies you want it to focus.",
          },
        },
        {
          "@type": "Question",
          name: "Can Cooper mine Expenite?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Use the laser pointer on Expenite deposits, especially ones that are awkward, out of reach, or unsafe to mine yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Does Cooper get upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Cooper upgrade options can occasionally appear during R.E.P.D. / processor drone upgrades or Bio Booster events in solo runs.",
          },
        },
        {
          "@type": "Question",
          name: "What does an Expenite Gem do for Cooper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "An Expenite Gem can trigger an Epic-tier upgrade for both you and Cooper. Deposit it immediately instead of carrying it through more danger.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best Cooper upgrades?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best Cooper upgrade depends on what is hurting your run. Rocket radius helps against groups, damage helps kill pressure, reliability helps focus fire, and utility helps mining or solo task flow.",
          },
        },
        {
          "@type": "Question",
          name: "Is Cooper like Bosco?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Cooper fills a similar solo-helper role, but it is built for Rogue Core's run-based structure. Cooper upgrades, R.E.P.D. choices, Bio Boosters, and Expenite Gems make it feel more tied to the roguelite loop.",
          },
        },
        {
          "@type": "Question",
          name: "Can Cooper carry solo runs?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Cooper helps a lot, but solo still depends on your route, upgrade choices, Expenite timing, positioning, and when you leave the floor.",
          },
        },
        {
          "@type": "Question",
          name: "What class is best with Cooper?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Guardian is the safest class to pair with Cooper for new solo players. Slicer has the higher aggressive ceiling, and Falconer is a flexible option with extra pressure but less solo revive value.",
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
          title="Rogue Core Cooper Guide: How to Use the Solo Bot"
          description="Learn how to command Cooper, mine Expenite, focus high-threat enemies, choose Cooper upgrades, use Expenite Gems, and understand how Cooper differs from Bosco."
          gameTitle="Deep Rock Galactic: Rogue Core"
          gameHref="/deep-rock-galactic"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 21, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CooperGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}