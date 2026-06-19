import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DustFrontRtsContent from "@/data/dust-front-rts/dust-front-rts.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/dust-front-rts`;

const imageUrls = [
  `${siteUrl}/images/dust-front-rts/dust-front-rts-deployment-zone-four.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-opening-building-garrison.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-frontline-funnel-defenses.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-material-fabricators-economy.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-foundry-arsenal-upgrades.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-mass-production-cycle.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-mcv-forward-push.webp`,
  `${siteUrl}/images/dust-front-rts/dust-front-rts-final-assault-2000-cap.webp`,
];

const toc = [
  {
    id: "dust-front-rts-demo-guide",
    label: "Demo guide",
  },
  {
    id: "controls-and-qol",
    label: "Controls and QoL",
  },
  {
    id: "bandit-vs-mutant-faction",
    label: "Bandit vs Mutant",
  },
  {
    id: "best-deployment-zone",
    label: "Best deployment zone",
  },
  {
    id: "opening-build-order",
    label: "Opening build order",
  },
  {
    id: "frontline-defense-layering",
    label: "Defense layering",
  },
  {
    id: "economy-and-material-fabricators",
    label: "Economy and fabricators",
  },
  {
    id: "foundry-arsenal-and-complector",
    label: "Foundry, Arsenal, Complector",
  },
  {
    id: "upgrades-and-building-connections",
    label: "Upgrades and connections",
  },
  {
    id: "full-build-order-route",
    label: "Build order route",
  },
  {
    id: "mass-production-setup",
    label: "Mass production",
  },
  {
    id: "pushing-into-enemy-territory",
    label: "Enemy base push",
  },
  {
    id: "threats-to-watch",
    label: "Threats to watch",
  },
  {
    id: "final-assault",
    label: "Final assault",
  },
  {
    id: "common-mistakes",
    label: "Common mistakes",
  },
  {
    id: "what-is-limited-in-the-demo",
    label: "Demo limits",
  },
  {
    id: "should-you-wishlist-dust-front-rts",
    label: "Should you wishlist it?",
  },
  {
    id: "what-to-read-next",
    label: "What to read next",
  },
  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/steam-next-fest",
    label: "Compare More Steam Next Fest Demos",
  },
  {
    href: "/iron-nest",
    label: "Try a Slower Systems Demo After Dust Front RTS",
  },
  {
    href: "/bombanana",
    label: "Try a Chaotic Co-op Demo After Dust Front RTS",
  },
  {
    href: "/casualties-unknown",
    label: "Casualties Unknown Demo Guide",
  },
];

export const metadata: Metadata = {
  title: "Dust Front RTS Demo Guide: Hardest Difficulty Strategy",
  description:
    "Beat Dust Front RTS demo hardest difficulty with deployment zones, Bandit and Mutant counters, fabricators, Complector Brutes and MCV pushes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Dust Front RTS Demo Guide: Hardest Difficulty, Factions, Fabricators and Mass Production",
    description:
      "Learn the Dust Front RTS demo hardest difficulty route with deployment zones, Bandit and Mutant counters, early vision, defense layering, material fabricators, Foundries, Arsenals, Complectors, free Brutes, warehouses, connected war factories, bomber correction and MCV forward pushes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Dust Front RTS deployment zone selection showing a start that funnels enemy paths.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dust Front RTS Demo Guide: Hardest Difficulty Strategy",
    description:
      "Beat Dust Front RTS with deployment zones, faction counters, fabricators, Complector Brutes, connected factories and MCV forward pushes.",
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
          name: "Steam Next Fest",
          item: `${siteUrl}/steam-next-fest`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Dust Front RTS Demo Guide",
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
        "Dust Front RTS Demo Guide: Hardest Difficulty Strategy, Faction Counters, Fabricators and Mass Production",
      description:
        "A player-focused Dust Front RTS demo guide covering hardest difficulty deployment zones, Bandit and Mutant faction responses, opening build order, early vision, interceptors, infantry screens, trenches, cranes, repairs, silos, material fabricators, Foundries, Arsenals, Complectors, free Brutes, warehouses, power management, screen select limiter, phantom placement repositioning, bomber flight correction, connected war factories, mass production, MCV forward pushes, artillery relocation, common mistakes, demo limits and Steam Next Fest wishlist advice.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Dust Front RTS",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS demo guide",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS hardest difficulty",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS deployment zone",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Bandit Faction",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Mutant Faction",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS material fabricators",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Foundry",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Arsenal",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Complector",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS Brutes",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS warehouses",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS connected war factories",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS MCV forward push",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS bomber flight correction",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS phantom placement",
        },
        {
          "@type": "Thing",
          name: "Dust Front RTS screen select limiter",
        },
        {
          "@type": "Thing",
          name: "large-scale RTS",
        },
        {
          "@type": "Thing",
          name: "Steam Next Fest demo",
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
          name: "What is Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Dust Front RTS is a large-scale real-time strategy demo about deployment choice, base building, resource processing, faction-specific defense, macro buildings, production scaling, and massive attacks against an aggressive AI.",
          },
        },
        {
          "@type": "Question",
          name: "How do you beat Dust Front RTS on hardest difficulty?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pick a deployment zone that funnels enemy waves, build a compact early base, use infantry screens and interceptors for the first waves, stabilize with cranes and layered defenses, then scale into material fabricators, Foundries, Arsenals, Complectors, warehouses, and mass production.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best deployment zone in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best deployment zone is the one that gives reasonable resources while forcing most enemy pathing into one main defensive front. In the observed route, the fourth deployment zone worked well because enemy bases naturally funneled toward one side.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between Bandits and Mutants in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Bandits focus more on light, fast pressure, so you want more AK30s, interceptors, garrisons, and flank warning. Mutants bring heavier units, worms, flies, and close-range pressure, so you need a thicker front line with infantry, trenches, flame turrets, Dreadnoughts, and repairs.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Complector do in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Complector is a macro building that produces free infantry called Brutes. Power plants connected to it can speed up Brute production, so it should be treated as part of your free-infantry macro engine.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pause the game in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Spacebar pause is very useful while learning. You can issue commands while paused, which makes repairs, building placement, control groups, and panic recovery much easier.",
          },
        },
        {
          "@type": "Question",
          name: "How do I select all same-type buildings across the map in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Disable the screen select limiter. With the limiter off, double-clicking an object can select matching objects across the whole map instead of only what is visible on the screen.",
          },
        },
        {
          "@type": "Question",
          name: "How does phantom placement repositioning work in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If you already marked a heavy-vehicle deployment phantom, select the phantom itself and move it. This lets you adjust deployment without dragging the camera back and rebuilding the placement from scratch.",
          },
        },
        {
          "@type": "Question",
          name: "Can I correct bomber flight paths in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. After setting the bombing direction, you can adjust the bomber flight path post-targeting. Use this when the battle shifts or your first bombing line is not ideal.",
          },
        },
        {
          "@type": "Question",
          name: "Why is vision so important early in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "MLRS, artillery, and long-range fire need vision to hit incoming units. Use interceptors and building garrisons early so the enemy is seen before it reaches your defenses.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need infantry in front of Dreadnoughts in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Infantry can absorb target priority, help against wasps, and protect heavier defenders from being focused too early. A thin infantry screen makes the whole front more stable.",
          },
        },
        {
          "@type": "Question",
          name: "Are trenches worth building in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Trenches slow infantry and help stop vehicles from driving directly into your defenses. They are especially useful when enemy pathing is already funneled into one lane.",
          },
        },
        {
          "@type": "Question",
          name: "What do silos do in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Silos increase material storage. Without storage, harvesters may sit idle because materials are not wasted but cannot be accepted.",
          },
        },
        {
          "@type": "Question",
          name: "What do material fabricators do in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Material fabricators create a secondary economy and increase unit build limit. They are the backbone of the turtle strategy, but they require serious power planning.",
          },
        },
        {
          "@type": "Question",
          name: "What do Foundries do in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Foundries upgrade vehicle toughness and support the durability side of your macro scaling. Build enough before mass production so later units and structures benefit more.",
          },
        },
        {
          "@type": "Question",
          name: "What do Arsenals do in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Arsenals upgrade unit damage. Build them before mass production so later waves hit harder.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build war factories next to each other in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, once you enter the mass-production stage, place new war factories close together so they can visibly connect. Treat connected factories as a production-speed layout bonus: useful when you are adding more factories anyway, but not important enough to tear down a working base or delay your first push. Early game, survive first; mid and late game, cluster new factories when you scale production.",
          },
        },
        {
          "@type": "Question",
          name: "Should I build large warehouses in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The observed route prefers normal warehouses because they increase cap without costing parts, while large warehouses cost parts. For this strategy, mass normal warehouses are usually cleaner.",
          },
        },
        {
          "@type": "Question",
          name: "When should I move the MCV forward in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Move the MCV forward after your mass wave can protect it. The MCV lets you build closer to the enemy, but losing it can ruin the push.",
          },
        },
        {
          "@type": "Question",
          name: "Why do my units get stuck in Dust Front RTS?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Huge armies can jam in narrow paths or chase bad targets. Switch rally points, pressure another side, and avoid forcing every unit through one clogged lane.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dust Front RTS good for Steam Next Fest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you like large-scale RTS battles, faction-specific defenses, base-building optimization, macro snowballing, industrial warfare, and overwhelming final assaults.",
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
          title="Beat Dust Front RTS Hardest Difficulty With Macro Scaling"
          description="Use this Dust Front RTS demo guide to pick the right deployment zone, counter Bandits and Mutants, build fabricators, use Complector Brutes, scale warehouses, cluster factories, correct bombers and push with a forward MCV."
          gameTitle="Dust Front RTS"
          gameHref="/dust-front-rts"
          breadcrumbBaseHref="/steam-next-fest"
          breadcrumbBaseLabel="Steam Next Fest"
          updatedAt="June 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <DustFrontRtsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}