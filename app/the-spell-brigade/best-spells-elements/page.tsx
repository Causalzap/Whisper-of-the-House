import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestSpellsElementsContent from "@/data/the-spell-brigade/best-spells-elements.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-spell-brigade/best-spells-elements`;

export const metadata: Metadata = {
  title: "The Spell Brigade Best Spells & Elements Tier List",
  description:
    "Find the best spells and elements in The Spell Brigade 1.0, including Lightning, Acid, Plasma, Flux, Brimstone, Wildfire, Thunder, and co-op element picks.",
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
          name: "The Spell Brigade Guide",
          item: `${siteUrl}/the-spell-brigade`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Spells & Elements",
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
      headline: "The Spell Brigade Best Spells & Elements Tier List",
      description:
        "Find the best spells and elements in The Spell Brigade 1.0, including Lightning, Acid, Plasma, Flux, Brimstone, Wildfire, Thunder, and co-op element picks.",
      image: [
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-brimstone-choice.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-infusion-level-7.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-solar-pulse-plasma.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-scepter-mesh-plasma.webp`,
        `${siteUrl}/images/the-spell-brigade/the-spell-brigade-best-spells-elements-objectives-augments.webp`,
      ],
      inLanguage: "en",
      datePublished: "2026-05-10",
      dateModified: "2026-05-10",
      about: [
        {
          "@type": "VideoGame",
          name: "The Spell Brigade",
        },
        {
          "@type": "Thing",
          name: "Spells",
        },
        {
          "@type": "Thing",
          name: "Element Infusions",
        },
        {
          "@type": "Thing",
          name: "Character Builds",
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
          name: "What is the best element in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lightning is the safest general element. Acid is usually the best answer when bosses or elites live too long. Plasma is strong for burst, but it is not always better than Acid, Flux, or Corrosion.",
          },
        },
        {
          "@type": "Question",
          name: "Is Acid good with Astral Orbs and Moonerang?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Acid is excellent on multi-hit spells such as Astral Orbs and Moonerang because repeated hits can apply resistance-reduction value much more often.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Flux and Corrosion?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Flux is Lightning plus Acid, so it keeps Lightning pressure while adding Acid utility. Corrosion is Acid plus Acid, so it is the full Acid route for resistance reduction and safer elite or boss fights.",
          },
        },
        {
          "@type": "Question",
          name: "Is Wildfire a base element?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Wildfire is Fire plus Fire. It is an advanced Fire infusion, not a base element.",
          },
        },
        {
          "@type": "Question",
          name: "Does Ice make enemies take more damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ice is mainly control: slow, freeze, and space. Acid is the element that reduces resistance and makes enemies take more damage from all sources.",
          },
        },
        {
          "@type": "Question",
          name: "What is Thunder in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Thunder is Lightning plus Lightning. It is the double-Lightning route for stronger impact damage.",
          },
        },
        {
          "@type": "Question",
          name: "What is Plasma in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plasma is Fire plus Lightning. It is a strong burst route for spells with good uptime, such as Solar Pulse or Scepter Mesh.",
          },
        },
        {
          "@type": "Question",
          name: "What is Brimstone in The Spell Brigade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brimstone is Acid plus Fire. Its initial hit inflicts splash damage on nearby enemies, making it strong against clustered packs.",
          },
        },
        {
          "@type": "Question",
          name: "Are advanced infusions guaranteed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You need the spell to reach the right level and you need the correct element options to appear. Rerolls help, but you should not assume every run will offer the exact route you want.",
          },
        },
        {
          "@type": "Question",
          name: "What element should beginners learn first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with Lightning, then learn Acid, Plasma, Brimstone, Wildfire, Ice, and Dark in that order.",
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
          title="The Spell Brigade Best Spells & Elements: Tier List, Infusions and Combos"
          description="Find the best spells and elements in The Spell Brigade 1.0, including Lightning, Acid, Plasma, Flux, Corrosion, Brimstone, Wildfire, Thunder, Ice, Dark, wizard picks, and co-op element templates."
          gameTitle="The Spell Brigade"
          gameHref="/the-spell-brigade"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 10, 2026"
          toc={[
            {
              id: "element-tier-list",
              label: "Element tier list",
            },
            {
              id: "base-elements",
              label: "Base elements",
            },
            {
              id: "infusion-timing",
              label: "Infusion timing",
            },
            {
              id: "element-decision-tree",
              label: "Decision tree",
            },
            {
              id: "advanced-infusions",
              label: "Advanced infusions",
            },
            {
              id: "acid",
              label: "Acid",
            },
            {
              id: "flux-vs-corrosion",
              label: "Flux vs Corrosion",
            },
            {
              id: "brimstone",
              label: "Brimstone",
            },
            {
              id: "plasma",
              label: "Plasma",
            },
            {
              id: "thunder",
              label: "Thunder",
            },
            {
              id: "wildfire",
              label: "Wildfire",
            },
            {
              id: "ice",
              label: "Ice",
            },
            {
              id: "dark",
              label: "Dark",
            },
            {
              id: "best-elements-by-wizard",
              label: "Elements by wizard",
            },
            {
              id: "best-spells",
              label: "Best spells",
            },
            {
              id: "scepter-mesh",
              label: "Scepter Mesh",
            },
            {
              id: "objectives-augments",
              label: "Objectives & augments",
            },
            {
              id: "coop-templates",
              label: "Co-op templates",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "recommended-learning-order",
              label: "Learning order",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-spell-brigade",
              label: "The Spell Brigade Guide",
            },
            {
              href: "/the-spell-brigade/best-builds",
              label: "The Spell Brigade Best Builds",
            },
            {
              href: "/the-spell-brigade/solo-guide",
              label: "The Spell Brigade Solo Guide",
            },
            {
              href: "/the-spell-brigade/gold-farm",
              label: "The Spell Brigade Gold Farm Guide",
            },
            {
              href: "/the-spell-brigade/wizard-unlocks",
              label: "The Spell Brigade Wizard Unlock Guide",
            },
            {
              href: "/the-spell-brigade/achievements-guide",
              label: "The Spell Brigade Achievements Guide",
            },
            {
              href: "/the-spell-brigade/trial-covenants-masteries-prestige",
              label: "The Spell Brigade Trial Covenants Guide",
            },
          ]}
        >
          <BestSpellsElementsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}