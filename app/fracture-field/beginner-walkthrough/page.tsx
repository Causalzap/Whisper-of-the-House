import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FractureFieldBeginnerWalkthroughContent from "@/data/fracture-field/beginner-walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/fracture-field`;
const pageUrl = `${gameUrl}/beginner-walkthrough`;

export const metadata: Metadata = {
    title: "Fracture Field Beginner Guide & Early Game Walkthrough",
    description:
      "Start strong in Fracture Field with our early game walkthrough. Master Timed Swings, optimal Dust upgrades, Collector Drone timing, and your first World Fracture.",
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
          name: "Fracture Field Guide",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Fracture Field Beginner Walkthrough",
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
        "Fracture Field Beginner Walkthrough: Best Early Upgrades and First World Fracture",
      description:
        "This Fracture Field beginner walkthrough explains the early route from Stone to Clay, Sandstone and Quartz, how Timed Swing and Dust work, what to upgrade first, when to unlock layers, whether Collector Drones are worth it early, how to use bombs, and when to do your first World Fracture.",
      image: [
        `${siteUrl}/images/fracture-field/first-world-fracture.webp`,
        `${siteUrl}/images/fracture-field/fracture-field-walkthrough-guide.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-27",
      about: [
        {
          "@type": "VideoGame",
          name: "Fracture Field",
        },
        {
          "@type": "Thing",
          name: "Fracture Field beginner guide",
        },
        {
          "@type": "Thing",
          name: "Fracture Field beginner walkthrough",
        },
        {
          "@type": "Thing",
          name: "Fracture Field early game",
        },
        {
          "@type": "Thing",
          name: "Timed Swing",
        },
        {
          "@type": "Thing",
          name: "Dust",
        },
        {
          "@type": "Thing",
          name: "Stone",
        },
        {
          "@type": "Thing",
          name: "Clay",
        },
        {
          "@type": "Thing",
          name: "Sandstone",
        },
        {
          "@type": "Thing",
          name: "Quartz",
        },
        {
          "@type": "Thing",
          name: "World Fracture",
        },
        {
          "@type": "Thing",
          name: "Core Fragments",
        },
        {
          "@type": "Thing",
          name: "Collector Drone",
        },
        {
          "@type": "Thing",
          name: "Drone Hub",
        },
        {
          "@type": "Thing",
          name: "Fracture",
        },
        {
          "@type": "Thing",
          name: "Pierce",
        },
        {
          "@type": "Thing",
          name: "Bombs",
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
          name: "What should I do first in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Learn the timed swing rhythm, break Stone consistently for Dust, then buy early Fracture, resource output, and useful capacity upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "How do timed swings work in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timed swings reward consistent timing. Reliable Good swings are better than frantic clicking, especially early when every clean break improves Dust flow and upgrade speed.",
          },
        },
        {
          "@type": "Question",
          name: "What is Dust used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dust is the core early currency for broad upgrades. You use it to improve stats such as damage, output, speed, and other run-wide power.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best early upgrades in Fracture Field?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best early upgrades are Fracture, resource output, useful capacity, and then Pierce once Quartz or Iron starts resisting your damage.",
          },
        },
        {
          "@type": "Question",
          name: "When should I unlock Clay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlock Clay when Stone breaks quickly and your Stone upgrades are no longer difficult to afford.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reset as soon as Sandstone appears?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sandstone starts Core Fragment generation, but your first World Fracture is usually better once the reward can buy useful upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "When should I do my first World Fracture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do your first World Fracture when Quartz or the next layer slows down and you can buy meaningful Core Fragment upgrades. Around 30 or more Core Fragments is a good first-reset benchmark.",
          },
        },
        {
          "@type": "Question",
          name: "Which drone should I get first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Collector Drone is often the most beginner-friendly first drone because it keeps resources moving while you focus on timed swings, upgrades, and early layer progression.",
          },
        },
        {
          "@type": "Question",
          name: "Are drones worth it early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, but only as support. Early drones are limited by slots, cores, and upgrade levels. They become much stronger after World Fracture and later prestige upgrades.",
          },
        },
        {
          "@type": "Question",
          name: "Should I buy bombs early?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Buy bombs when they help with clusters or field control, but do not build your entire early route around them.",
          },
        },
        {
          "@type": "Question",
          name: "Why does Quartz feel so slow?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quartz is often the first real slowdown. It is a normal point to start thinking about your first World Fracture.",
          },
        },
        {
          "@type": "Question",
          name: "What should I read after this beginner guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the Fracture Field Prestige Guide for World Fracture and Reality Shatter timing, the Progression Guide for Iron and later walls, and the Achievements Guide for 100% completion.",
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
          title="Fracture Field Beginner Walkthrough: Best Early Upgrades and First World Fracture"
          description="Start Fracture Field with this beginner walkthrough for Timed Swing, Dust, Stone to Quartz progression, the best early upgrades, Collector Drone timing, bombs, and your first World Fracture."
          gameTitle="Fracture Field"
          gameHref="/fracture-field"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 27, 2026"
          toc={[
            {
              id: "beginner-route",
              label: "Beginner route",
            },
            {
              id: "timed-swings-and-dust",
              label: "Timed Swing and Dust",
            },
            {
              id: "dust-and-early-economy",
              label: "Dust and early economy",
            },
            {
              id: "what-to-upgrade-first",
              label: "What to upgrade first",
            },
            {
              id: "stone-to-quartz-walkthrough",
              label: "Stone to Quartz",
            },
            {
              id: "when-to-unlock-layers",
              label: "Layer unlock timing",
            },
            {
              id: "when-to-world-fracture-first",
              label: "First World Fracture",
            },
            {
              id: "best-first-world-fracture-upgrades",
              label: "First reset upgrades",
            },
            {
              id: "drone-hub-beginner-timing",
              label: "Drone Hub timing",
            },
            {
              id: "bombs-for-beginners",
              label: "Bombs for beginners",
            },
            {
              id: "early-game-too-slow",
              label: "Early game too slow",
            },
            {
              id: "common-beginner-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/fracture-field",
              label: "Fracture Field Complete Walkthrough & Guide",
            },
            {
              href: "/fracture-field/prestige-guide",
              label: "Fracture Field Prestige Guide",
            },
            {
              href: "/fracture-field/progression-guide",
              label: "Fracture Field Progression Guide",
            },
            {
              href: "/fracture-field/achievements-guide",
              label: "Fracture Field Achievements Guide",
            },
          ]}
        >
          <FractureFieldBeginnerWalkthroughContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}