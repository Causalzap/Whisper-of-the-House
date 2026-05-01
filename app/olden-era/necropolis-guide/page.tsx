import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NecropolisGuideContent from "@/data/olden-era/necropolis-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/olden-era/necropolis-guide`;

export const metadata: Metadata = {
  title:
    "Heroes Olden Era Necropolis Guide: Best Heroes, Skeleton Archers, Necromancy, and Build Order",
  description:
    "Learn the best Necropolis start in Heroes of Might and Magic: Olden Era, including Onkos, Marl, Funerella, King-of-Kings, Skeleton Archer upgrades, Necromancy, Undead Transformer, Focus usage, and Week 1 build order.",
  alternates: {
    canonical: pageUrl,
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
          name: "Heroes of Might and Magic: Olden Era Guide",
          item: `${siteUrl}/olden-era`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Necropolis Guide",
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
        "Heroes Olden Era Necropolis Guide: Best Heroes, Skeleton Archers, Necromancy, and Build Order",
      description:
        "This Heroes of Might and Magic: Olden Era Necropolis guide explains the best Necropolis heroes, Skeleton Archer upgrade timing, Necromancy HP conversion, Undead Transformer strategy, Diplomacy conversion routes, Focus usage, Marketplace timing, and safe Week 1 build order.",
      image: [
        `${siteUrl}/images/olden-era/olden-era-necropolis-skeletal-archers.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-starting-skeletons.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-hero-zam.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-vampires-liches.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-mage-guild-marketplace.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-law-points.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-arcane-dust.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-arcane-dust-upgrade.webp`,
        `${siteUrl}/images/olden-era/olden-era-necropolis-lethal-battle.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-01",
      dateModified: "2026-05-01",
      about: [
        {
          "@type": "VideoGame",
          name: "Heroes of Might and Magic: Olden Era",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis guide",
        },
        {
          "@type": "Thing",
          name: "Heroes of Might and Magic Olden Era Necropolis",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era best Necropolis hero",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Onkos",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Marl",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Funerella",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era King-of-Kings",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Skeleton Archers",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necromancy",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Undead Transformer",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Diplomacy",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Necropolis build order",
        },
        {
          "@type": "Thing",
          name: "Heroes Olden Era Focus Points",
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
          name: "Who is the best Necropolis hero in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a simple Skeleton Archer snowball, start with Onkos. For safe clearing, Marl is excellent. For conversion economy, King-of-Kings is the key Diplomacy pick.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best Necropolis build order in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A safe Week 1 route is economy or Skeleton Archer access first, then Skeleton Archer upgrade, Marketplace or Mage Guild if blocked, then Graverobber, Lich, Vampire, or conversion setup depending on hero.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to upgrade Skeletons into Skeleton Archers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The upgrade costs 10 gold per Skeleton. For example, 100 Skeletons cost 1000 gold to upgrade into Skeleton Archers.",
          },
        },
        {
          "@type": "Question",
          name: "How many Skeleton Archers should I have by Week 2?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A strong Necropolis start can move toward 100 to 200 Skeleton Archers by Week 2, depending on hero, fights, laws, conversion, and losses.",
          },
        },
        {
          "@type": "Question",
          name: "How does Necromancy work in Heroes Olden Era?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necromancy converts defeated enemy HP into allied Undead HP after battle victories. Basic, Advanced, and Expert Necromancy convert 4%, 6%, and 8% of defeated enemy HP.",
          },
        },
        {
          "@type": "Question",
          name: "Is Necromancy based on unit count or HP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necromancy is based on defeated enemy HP, not enemy unit count. A large number of fragile enemies may give less reanimation value than a smaller group of high-HP enemies.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Undead Transformer do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Undead Transformer turns collected or recruited creature value into Necropolis-compatible army value, especially with Diplomacy and creature hut routes.",
          },
        },
        {
          "@type": "Question",
          name: "Is King-of-Kings good for Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In the current Early Access version, King-of-Kings is one of the strongest Necropolis picks if you want a Diplomacy and Undead Transformer strategy.",
          },
        },
        {
          "@type": "Question",
          name: "How should Necropolis use Focus?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Necropolis should save Focus for meaningful abilities, especially Lich revive and Graverobber Skeleton summons.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Vampires or Liches as Necropolis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only rush Vampires or Liches if your Skeleton Archer, Necromancy, and conversion engine is already stable. Otherwise, follow the Week 1 build order first.",
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
          title="Heroes Olden Era Necropolis Guide: Best Heroes, Skeleton Archers, Necromancy, and Build Order"
          description="Follow this Heroes of Might and Magic: Olden Era Necropolis guide to learn the best heroes, Skeleton Archer upgrade timing, Necromancy HP conversion, Undead Transformer strategy, Focus usage, and safe Week 1 build order."
          gameTitle="Heroes of Might and Magic: Olden Era"
          gameHref="/olden-era"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 1, 2026"
          toc={[
            {
              id: "is-necropolis-good",
              label: "Is Necropolis good?",
            },
            {
              id: "best-necropolis-heroes",
              label: "Best heroes",
            },
            {
              id: "key-numbers",
              label: "Key numbers",
            },
            {
              id: "week-one-timeline",
              label: "Week 1 timeline",
            },
            {
              id: "week-one-build-order",
              label: "Week 1 build order",
            },
            {
              id: "skeletal-archers",
              label: "Skeleton Archers",
            },
            {
              id: "necromancy",
              label: "Necromancy",
            },
            {
              id: "undead-transformer",
              label: "Undead Transformer",
            },
            {
              id: "multi-hero-strategy",
              label: "Multi-hero strategy",
            },
            {
              id: "focus-points",
              label: "Focus Points",
            },
            {
              id: "marketplace",
              label: "Marketplace",
            },
            {
              id: "law-points",
              label: "Law Points",
            },
            {
              id: "arcane-dust",
              label: "Arcane Dust",
            },
            {
              id: "when-to-fight",
              label: "When to fight",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/olden-era/subclass-guide",
              label: "Subclass and Advanced Class Guide",
            },
            {
              href: "/olden-era/how-to-unlock-subclasses",
              label: "How to Unlock Subclasses",
            },
            {
              href: "/olden-era/cant-unlock-subclass",
              label: "Why You Can’t Unlock a Subclass",
            },
            {
              href: "/olden-era/necropolis-guide",
              label: "Necropolis Guide",
            },
            {
              href: "/olden-era/necropolis-week-1-build-order",
              label: "Necropolis Week 1 Build Order",
            },
            {
              href: "/olden-era/beginner-economy-guide",
              label: "Beginner Economy Guide",
            },
            {
              href: "/olden-era/best-buildings-first",
              label: "Best Buildings to Build First",
            },
            {
              href: "/olden-era/law-points-astrology-points",
              label: "Law Points and Astrology Points Explained",
            },
            {
              href: "/olden-era/focus-points",
              label: "Focus Points Explained",
            },
            {
              href: "/olden-era/schism-guide",
              label: "Schism Guide",
            },
            {
              href: "/olden-era/temple-guide",
              label: "Temple Guide",
            },
          ]}
        >
          <NecropolisGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}