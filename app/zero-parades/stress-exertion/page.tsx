import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import StressExertionContent from "@/data/zero-parades/stress-exertion.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades/stress-exertion`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-stress-meters-hud.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-anxiety-limit-reached.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-anxiety-lower-skill.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-anxiety-reset-after-skill-loss.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-delirium-limit-cannot-exert.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-delirium-exertion-plus-four.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-dramatic-encounter-bazaar.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-technoflex-exert-options.webp`,
];

const toc = [
  { id: "stress-guide-overview", label: "Overview" },
  { id: "fatigue-anxiety-delirium-explained", label: "Stress Meters" },
  { id: "how-stress-rises", label: "How Stress Rises" },
  { id: "what-happens-when-stress-gets-too-high", label: "Stress Limit" },
  { id: "pressured-explained", label: "Pressured" },
  { id: "how-exertion-works", label: "Exertion" },
  { id: "when-to-use-exertion", label: "When to Exert" },
  { id: "dramatic-encounters", label: "Dramatic Encounters" },
  { id: "how-to-pass-checks-without-exertion", label: "Avoid Exertion" },
  { id: "how-to-recover-stress", label: "Recovery" },
  { id: "should-you-reload-stress-mistakes", label: "Reloading" },
  { id: "common-stress-mistakes", label: "Mistakes" },
  { id: "best-beginner-rules", label: "Beginner Rules" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades", label: "ZERO PARADES Guide" },
  { href: "/zero-parades/early-game", label: "ZERO PARADES Early Game Walkthrough" },
  { href: "/zero-parades/best-build", label: "ZERO PARADES Best Build Guide" },
  { href: "/zero-parades/conditioning", label: "ZERO PARADES Conditioning Guide" },
  { href: "/zero-parades/disco-elysium-guide", label: "ZERO PARADES Guide for Disco Elysium Players" },
];

export const metadata: Metadata = {
    title: "ZERO PARADES Stress & Exertion: Pressured & Skill Loss",
    description:
      "Learn Fatigue, Anxiety, Delirium, Exertion, Pressured at 15, stress limits, skill loss, Fatigue recovery, and when to push checks.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES Stress & Exertion Guide",
    description:
      "Understand Fatigue, Anxiety, Delirium, Exertion, Pressured limits, skill loss, recovery consumables, and safer ways to pass checks.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Fatigue, Anxiety, and Delirium meters in ZERO PARADES.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES Stress & Exertion Guide",
    description:
      "Fatigue, Anxiety, Delirium, Exertion, Pressured, skill loss, and recovery explained.",
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
          name: "ZERO PARADES Stress & Exertion",
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
        "ZERO PARADES: For Dead Spies Stress and Exertion Guide: Fatigue, Anxiety, Delirium, Pressured, Skill Loss and Recovery",
      description:
        "A player-focused ZERO PARADES: For Dead Spies mechanics guide explaining Fatigue, Anxiety, Delirium, how stress rises, how Exertion affects checks, visible stress increases around +4 to +5, what Pressured means, Delirium limit at 15, Anxiety limit examples, forced skill reduction, meter reset after skill loss, safer check methods, Dramatic Encounters, Fatigue recovery consumables, and beginner stress-management rules.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        { "@type": "Thing", name: "ZERO PARADES stress" },
        { "@type": "Thing", name: "ZERO PARADES Exertion" },
        { "@type": "Thing", name: "Fatigue" },
        { "@type": "Thing", name: "Anxiety" },
        { "@type": "Thing", name: "Delirium" },
        { "@type": "Thing", name: "Pressured" },
        { "@type": "Thing", name: "skill loss" },
        { "@type": "Thing", name: "stress limit" },
        { "@type": "Thing", name: "Dramatic Encounters" },
        { "@type": "Thing", name: "Latest Synthetic Desires" },
        { "@type": "Thing", name: "Fatigue recovery" },
        { "@type": "Thing", name: "Rumba Canned Coffee" },
        { "@type": "Thing", name: "Jefa Red & Black Blend" },
        { "@type": "Thing", name: "Camisado Ultra Sweet" },
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
          name: "What are Fatigue, Anxiety, and Delirium in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fatigue, Anxiety, and Delirium are the three main stress meters in ZERO PARADES. They track different kinds of pressure and can make your run harder if they climb too high.",
          },
        },
        {
          "@type": "Question",
          name: "How much stress does Exertion add in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Exertion raises the related stress meter. Current visible examples show increases around +4 to +5 depending on the check or scene, so Exertion should not be treated as a free retry.",
          },
        },
        {
          "@type": "Question",
          name: "What does Exertion do in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Exertion lets the player push a skill check for a better chance, but it raises the related stress meter. It is useful for important rolls, but dangerous if used casually.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Exertion on every check in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Exertion should be used only when the check matters. If a roll is optional, low-value, or fixable with gear or more context, saving stress is usually better.",
          },
        },
        {
          "@type": "Question",
          name: "What does Pressured mean in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Pressured means one of the stress meters is high enough that Exertion becomes restricted. A Delirium example shows the meter at 15 with Limit Reached and Cannot exert, but other meters should be tested separately before assuming every category uses the exact same threshold.",
          },
        },
        {
          "@type": "Question",
          name: "What number triggers Pressured or skill loss in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A visible Delirium example shows Limit Reached and Cannot exert at 15. A visible Anxiety example shows Anxiety Limit Reached, a forced skill reduction, and Anxiety reset afterward. More testing is still useful before treating every meter and difficulty setting as identical.",
          },
        },
        {
          "@type": "Question",
          name: "Can stress kill you in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Stress itself is more about skill loss than a normal death. Some specific choices or checks can still lead to death scenes, but maxing a stress meter is mainly dangerous because it can damage skills.",
          },
        },
        {
          "@type": "Question",
          name: "What happens when Anxiety limit is reached in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A visible Anxiety example shows Anxiety Raised +5, Anxiety Limit Reached, then a prompt to lower a Relation-side skill such as Statehood, Cold Read, or Nerve. After Cold Read is lowered, Anxiety resets.",
          },
        },
        {
          "@type": "Question",
          name: "How do I lower stress in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use recovery options, consumables, safer routing, and fewer unnecessary Exertions. Fatigue recovery has confirmed consumable synergy through Latest Synthetic Desires, which boosts Fatigue reduction from specific drinks.",
          },
        },
        {
          "@type": "Question",
          name: "Which consumables reduce Fatigue in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Rumba Canned Coffee, Jefa Red & Black Blend, and Camisado Ultra Sweet are shown as drinks affected by Latest Synthetic Desires, which gives a 1.33x bonus to reducing Fatigue when consuming them.",
          },
        },
        {
          "@type": "Question",
          name: "Is skill loss a run ender in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Usually no. Skill loss hurts, but players can keep playing, use gear, adjust the route, and rebuild. Reloading is most useful if the loss ruins a specific outcome the player cares about.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best stress tip for beginners in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Save Exertion for checks that change the route or protect a goal. Do not raise stress just to win every small roll.",
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
          title="ZERO PARADES Stress & Exertion: Stop Burning Your Build"
          description="Learn what Fatigue, Anxiety, and Delirium actually do, when Exertion is worth it, and how stress limits can lower your skills."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <StressExertionContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}