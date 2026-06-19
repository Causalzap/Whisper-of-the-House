import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BombananaContent from "@/data/bombanana/bombanana.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/bombanana`;

const imageUrls = [
  `${siteUrl}/images/bombanana/bombanana-tutorial-book.webp`,
  `${siteUrl}/images/bombanana/bombanana-wire-module-led.webp`,
  `${siteUrl}/images/bombanana/bombanana-numpad-math-module.webp`,
  `${siteUrl}/images/bombanana/bombanana-switch-module.webp`,
];

const toc = [
  { id: "bombanana-demo-guide", label: "Demo guide" },
  { id: "roles-and-teamwork", label: "Roles and teamwork" },
  { id: "communication-flow", label: "Communication flow" },
  { id: "demo-level-progression", label: "Level progression" },
  { id: "module-overview", label: "Module overview" },
  { id: "wires-guide", label: "Wires guide" },
  {
    id: "dpad-directional-pad-guide",
    label: "D-pad guide",
  },
  {
    id: "numpad-math-module",
    label: "Numpad math",
  },
  {
    id: "numpad-odd-even-greater-less-priority",
    label: "Numpad priority",
  },
  {
    id: "switch-panel-guide",
    label: "Switch panel",
  },
  {
    id: "pre-game-role-plan",
    label: "Pre-game role plan",
  },
  { id: "common-mistakes", label: "Common mistakes" },
  {
    id: "what-is-limited-in-the-demo",
    label: "Demo limits",
  },
  {
    id: "should-you-wishlist-bombanana",
    label: "Should you wishlist it?",
  },
  { id: "what-to-read-next", label: "What to read next" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/steam-next-fest",
    label: "Compare More Steam Next Fest Demos",
  },
  {
    href: "/dust-front-rts",
    label: "Try a Strategy-Focused Demo After BOMBANANA",
  },
  {
    href: "/iron-nest",
    label: "Try a Slower Systems Demo After BOMBANANA",
  },
  {
    href: "/casualties-unknown",
    label: "Casualties Unknown Demo Guide",
  },
];

export const metadata: Metadata = {
  title: "BOMBANANA Demo Guide: Roles, Modules & Callouts",
  description:
    "Learn BOMBANANA demo roles, wire callouts, D-pad, numpad math, switch panels, seven levels, odd/even priority and co-op mistakes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "BOMBANANA Demo Guide: Roles, Modules, Callouts, Numpad Math and Switch Panels",
    description:
      "Learn how to play the BOMBANANA demo with Blind, Deaf and Mute roles, clean callout rules, wires, D-pad, numpad math, odd/even and greater-than/less-than priority, switch panels, demo level progression, common mistakes and wishlist advice.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "BOMBANANA tutorial book explaining bomb modules, roles, time, mistakes and braille.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BOMBANANA Demo Guide: Roles, Modules & Callouts",
    description:
      "Learn BOMBANANA roles, wire callouts, D-pad, numpad math, switch panels, seven levels and co-op mistakes.",
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
          name: "BOMBANANA Demo Guide",
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
        "BOMBANANA Demo Guide: Roles, Wire Callouts, D-pad, Numpad Math, Switch Panels and Level Progression",
      description:
        "A player-focused BOMBANANA demo guide covering Blind, Deaf and Mute roles, role-limited communication, clean module callouts, demo level progression, wire modules, D-pad and directional pad modules, numpad math, odd/even logic, greater-than and less-than ambiguity, jumbled keypads, switch panels, pre-game role planning, common co-op mistakes, demo limits and Steam Next Fest wishlist advice.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-19",
      dateModified: "2026-06-19",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "BOMBANANA",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA demo guide",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA roles",
        },
        {
          "@type": "Thing",
          name: "Blind Deaf Mute co-op",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA callouts",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA wire module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA D-pad module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA numpad module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA math module",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA odd even",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA greater than less than",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA switch panel",
        },
        {
          "@type": "Thing",
          name: "BOMBANANA seven levels",
        },
        {
          "@type": "Thing",
          name: "bomb defusal co-op game",
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
          name: "What is BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "BOMBANANA is a three-player co-op bomb-defusal game where Blind, Deaf, and Mute monkeys must solve bomb modules with limited communication.",
          },
        },
        {
          "@type": "Question",
          name: "How many players do you need for BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The BOMBANANA demo structure is built around three roles: Blind, Deaf, and Mute. The game works best when each player accepts their communication restriction instead of trying to bypass it.",
          },
        },
        {
          "@type": "Question",
          name: "How many levels are in the BOMBANANA demo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The BOMBANANA demo has seven difficulty tiers. Early levels focus on wires and basic role communication, while the middle levels start adding D-pad, numpad, and math logic. Around Level 4 to 5, the numpad becomes more important because results can involve odd/even and greater-than/less-than style decisions instead of just typing the raw answer.",
          },
        },
        {
          "@type": "Question",
          name: "Should we use external voice chat in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. The tutorial specifically tells players not to use external voice chat. The point is to solve modules through the game's role-limited communication.",
          },
        },
        {
          "@type": "Question",
          name: "What should we communicate first in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Always start with the module name and module position. Then give the details the manual holder needs, such as wire count, LED color, center number, math expression, or switch color order.",
          },
        },
        {
          "@type": "Question",
          name: "How do wires work in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For wires, communicate the number of wires, the wire colors from left to right, and the LED color. Do not cut until the answer is repeated and confirmed.",
          },
        },
        {
          "@type": "Question",
          name: "How does the D-pad module work in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the D-pad, communicate the LED color and center value, then use the shared left/right perspective to press the correct direction. If the module changes after a mistake, call the new state again.",
          },
        },
        {
          "@type": "Question",
          name: "How does the numpad module work in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For numpad modules, solve the visible math expression, identify odd or even if needed, read the LED state, handle comparison clues if they apply, then press the target number given by the manual logic. The keypad may be jumbled, so press the number itself, not a normal keypad position.",
          },
        },
        {
          "@type": "Question",
          name:
            "If a BOMBANANA numpad result is both odd and greater than 5, which rule wins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Do not let the bomb handler guess. The manual holder should use the LED color and the manual's branch order to choose the final target number. The handler should report the full state, such as result 67, odd, greater than 5, yellow LED, then wait for the final key.",
          },
        },
        {
          "@type": "Question",
          name: "How does the switch panel work in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For switch panels, communicate the top light color order, the full digit string, and each switch state. Press enter only after all switch positions are confirmed.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Blind role do in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Blind player handles the bomb, locates modules by touch, and may read or interpret tactile information such as dots or braille-style values.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Deaf role do in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Deaf player can participate in communication but cannot rely on hearing the team, so visual confirmation and clear gestures matter.",
          },
        },
        {
          "@type": "Question",
          name: "What does the Mute role do in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Mute player holds the defusal instructions and must use gestures instead of voice, so the team should agree on basic signs before starting.",
          },
        },
        {
          "@type": "Question",
          name: "Why do we keep failing the first BOMBANANA modules?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Most early failures come from incomplete callouts, not hard puzzles. Say the module name, wire count, LED color, number, or stage before asking for an answer.",
          },
        },
        {
          "@type": "Question",
          name: "What should we do after a wrong input in BOMBANANA?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Re-read the module state. The LED, number, stage, or required answer may have changed after the mistake.",
          },
        },
        {
          "@type": "Question",
          name: "Is BOMBANANA good for Steam Next Fest?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if your group likes short, chaotic, communication-heavy demos. It is especially strong as a party-game demo because every failure teaches a better team rule.",
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
          title="Defuse BOMBANANA Without Losing the Callout"
          description="Use this BOMBANANA demo guide to understand Blind, Deaf and Mute roles, wire callouts, D-pad inputs, numpad math, switch panels, seven demo tiers, and the mistakes that make teams fail."
          gameTitle="BOMBANANA"
          gameHref="/bombanana"
          breadcrumbBaseHref="/steam-next-fest"
          breadcrumbBaseLabel="Steam Next Fest"
          updatedAt="June 19, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BombananaContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
