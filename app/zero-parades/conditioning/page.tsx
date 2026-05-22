import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ConditioningContent from "@/data/zero-parades/conditioning.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades/conditioning`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-thought-primitive-accumulation.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-thought-umbral-host.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-conditioning-thoughts-menu.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-gear-skill-bonus.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-thought-latest-synthetic-desires.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-thought-peoples-republic-la-la-land.webp`,
];

const toc = [
  { id: "confirmed-thoughts-and-effects", label: "Confirmed Thoughts" },
  { id: "best-conditioning-by-build", label: "Best by Build" },
  { id: "umbral-host-violation-example", label: "Umbral Host Example" },
  { id: "what-conditioning-does", label: "How Conditioning Works" },
  { id: "how-violations-work", label: "Violations" },
  { id: "when-to-commit", label: "When to Commit" },
  { id: "conditioning-vs-gear", label: "Conditioning vs Gear" },
  { id: "conditioning-vs-thought-cabinet", label: "Thought Cabinet" },
  { id: "can-you-undo-conditioning", label: "Can You Undo It?" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades", label: "ZERO PARADES Guide" },
  { href: "/zero-parades/best-build", label: "ZERO PARADES Best Build Guide" },
  { href: "/zero-parades/stress-exertion", label: "ZERO PARADES Stress and Exertion Guide" },
  { href: "/zero-parades/early-game", label: "ZERO PARADES Early Game Walkthrough" },
  { href: "/zero-parades/disco-elysium-guide", label: "ZERO PARADES Guide for Disco Elysium Players" },
];

export const metadata: Metadata = {
  title: "ZERO PARADES Best Conditioning: Thoughts, Effects & Drawbacks",
  description:
    "Compare confirmed ZERO PARADES Thoughts like Primitive Accumulation, The Umbral Host and Latest Synthetic Desires, with effects, drawbacks and build fits.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES Conditioning Guide: Best Thoughts & Effects",
    description:
      "Compare confirmed Thoughts in ZERO PARADES, including Primitive Accumulation, The Umbral Host, Latest Synthetic Desires, effects, drawbacks, and build fits.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Primitive Accumulation Thought in ZERO PARADES showing skill potential and violation rules.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES Conditioning Guide: Best Thoughts & Effects",
    description:
      "Confirmed ZERO PARADES Thoughts, effects, violations, best picks, and build pairings.",
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
          name: "ZERO PARADES Guide",
          item: `${siteUrl}/zero-parades`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "ZERO PARADES Conditioning",
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
        "ZERO PARADES: For Dead Spies Conditioning Guide: Best Thoughts, Effects, Drawbacks, Violations and Build Pairings",
      description:
        "A player-focused ZERO PARADES: For Dead Spies Conditioning guide covering confirmed Thoughts, reinforced effects, skill potential bonuses, violation rules, drawbacks, best first-run Conditioning choices, build pairings, The Umbral Host sleep violation, Primitive Accumulation, Latest Synthetic Desires, and how Conditioning differs from Disco Elysium's Thought Cabinet.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        { "@type": "Thing", name: "ZERO PARADES Conditioning" },
        { "@type": "Thing", name: "ZERO PARADES Thoughts" },
        { "@type": "Thing", name: "best Conditioning ZERO PARADES" },
        { "@type": "Thing", name: "Primitive Accumulation" },
        { "@type": "Thing", name: "The Umbral Host" },
        { "@type": "Thing", name: "Latest Synthetic Desires" },
        { "@type": "Thing", name: "People's Republic of La-La-La-Land" },
        { "@type": "Thing", name: "Apology World Tour 96" },
        { "@type": "Thing", name: "Eternal Victim" },
        { "@type": "Thing", name: "The Wang Way" },
        { "@type": "Thing", name: "skill potential" },
        { "@type": "Thing", name: "Thought violations" },
        { "@type": "Thing", name: "Disco Elysium Thought Cabinet" },
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
          name: "What is the best Conditioning in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Based on currently confirmed Thoughts, Primitive Accumulation looks like the best general first-run Conditioning choice because it supports Blueprints and Personalism. Latest Synthetic Desires is better for Instincts and Fatigue management.",
          },
        },
        {
          "@type": "Question",
          name: "Which Thought is best for a first run in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Primitive Accumulation is the safest confirmed first-run pick so far. It reinforces two broadly useful skills and has a clear drawback players can plan around.",
          },
        },
        {
          "@type": "Question",
          name: "Can you undo or remove a Thought in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A general undo or respec option has not been fully confirmed. Until it is confirmed, treat each Thought as a meaningful commitment and save before taking one with a harsh drawback.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if you violate a Thought in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Confirmed Thoughts show a common pattern: the player can temporarily lose reinforced effects, and some Thoughts also apply category disadvantages such as Action disadvantage or Relation disadvantage.",
          },
        },
        {
          "@type": "Question",
          name: "Which Thought is best for a Relation build in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Primitive Accumulation and Apology World Tour 96 are the best confirmed Relation-adjacent options so far. Primitive Accumulation gives Personalism and Blueprints, while Apology World Tour 96 gives Personalism and Records.",
          },
        },
        {
          "@type": "Question",
          name: "Which Thought is best for an Action build in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Wang Way fits Coordination and Technoflex, while The Umbral Host is better for Shadowplay-heavy or night-focused covert play. Latest Synthetic Desires can also help if the build needs Fatigue support.",
          },
        },
        {
          "@type": "Question",
          name: "Is Conditioning the same as the Thought Cabinet in Disco Elysium?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Conditioning is similar in spirit, but it is more explicit about skill potential, visible bonuses, and violation rules. It should be judged as a gameplay commitment, not just a roleplay idea.",
          },
        },
        {
          "@type": "Question",
          name: "Should I take Thoughts early or wait in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wait if you do not understand your build or the drawback yet. Commit early only when the Thought clearly supports your route and the violation rule does not fight your normal play habits.",
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
          title="ZERO PARADES Conditioning Guide: Best Thoughts, Effects, and Drawbacks"
          description="Compare confirmed Thoughts, see which builds they fit, and avoid violation rules that can punish your run."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ConditioningContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}