import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ZeroParadesContent from "@/data/zero-parades/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/zero-parades`;

const imageUrls = [
  `${siteUrl}/images/zero-parades/zero-parades-dramatic-encounter-bazaar.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-skill-setup-screen.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-stress-meters-hud.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-red-disc-stereo.webp`,
  `${siteUrl}/images/zero-parades/zero-parades-conditioning-thoughts-menu.webp`,
];

const toc = [
  { id: "zero-parades-guide-overview", label: "Overview" },
  { id: "which-guide-should-you-read-next", label: "Guide Hub" },
  { id: "what-to-do-first", label: "What to Do First" },
  { id: "best-first-playthrough-build", label: "Best Build" },
  { id: "fatigue-anxiety-delirium", label: "Stress Meters" },
  { id: "when-to-use-exertion", label: "Exertion" },
  { id: "conditioning-and-thoughts", label: "Conditioning" },
  { id: "early-game-pseudopod-red-disc-cipher", label: "Early Game" },
  { id: "for-disco-elysium-players", label: "Disco Players" },
  { id: "common-beginner-mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/zero-parades/early-game", label: "ZERO PARADES Early Game Walkthrough" },
  { href: "/zero-parades/best-build", label: "ZERO PARADES Best Build Guide" },
  { href: "/zero-parades/stress-exertion", label: "ZERO PARADES Stress and Exertion Guide" },
  { href: "/zero-parades/conditioning", label: "ZERO PARADES Conditioning Guide" },
  { href: "/zero-parades/disco-elysium-guide", label: "ZERO PARADES Guide for Disco Elysium Players" },
];

export const metadata: Metadata = {
    title: "ZERO PARADES Guide: Beginner Tips, Builds & First Route",
    description:
      "Start ZERO PARADES with first-route tips, safe builds, stress and Exertion help, Conditioning, early clues, Bootleg Bazaar, and Disco Elysium advice.",
    alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "ZERO PARADES Guide: Beginner Tips, Builds & Walkthrough",
    description:
      "A beginner hub for ZERO PARADES covering what to do first, safe builds, stress, Exertion, Conditioning, early clues, and Disco Elysium player tips.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "A dramatic encounter in ZERO PARADES: For Dead Spies during a tense bazaar escape.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZERO PARADES Guide: Beginner Tips, Builds & Walkthrough",
    description:
      "Start ZERO PARADES with safe build advice, early-game clues, stress tips, Conditioning, and Disco Elysium player guidance.",
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
        "ZERO PARADES: For Dead Spies Beginner Guide: What to Do First, Best Build, Stress, Exertion, Conditioning and Early Game Tips",
      description:
        "A player-focused ZERO PARADES: For Dead Spies beginner guide and hub covering what to do first, safe first-run build direction, Fatigue, Anxiety, Delirium, Exertion, Pressured, Conditioning and Thoughts, Pseudopod, red disc, purchase order, ciphers, Bootleg Bazaar, common beginner mistakes, and guidance for players coming from Disco Elysium.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-22",
      dateModified: "2026-05-22",
      about: [
        {
          "@type": "VideoGame",
          name: "ZERO PARADES: For Dead Spies",
        },
        { "@type": "Thing", name: "ZERO PARADES guide" },
        { "@type": "Thing", name: "ZERO PARADES beginner guide" },
        { "@type": "Thing", name: "ZERO PARADES tips" },
        { "@type": "Thing", name: "ZERO PARADES best build" },
        { "@type": "Thing", name: "Fatigue" },
        { "@type": "Thing", name: "Anxiety" },
        { "@type": "Thing", name: "Delirium" },
        { "@type": "Thing", name: "Exertion" },
        { "@type": "Thing", name: "Conditioning" },
        { "@type": "Thing", name: "Thoughts" },
        { "@type": "Thing", name: "Pseudopod" },
        { "@type": "Thing", name: "red disc" },
        { "@type": "Thing", name: "purchase order" },
        { "@type": "Thing", name: "Bootleg Bazaar" },
        { "@type": "Thing", name: "Disco Elysium" },
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
          name: "What should I do first in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Inspect the safe house carefully. Check Pseudopod, his jacket, the stereo, the trousers, and the desk before leaving. You want the purchase order, red disc, half cipher, Rosetta cipher, and Bootleg Bazaar lead.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best build for beginners in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best beginner build is flexible rather than extreme. Lean toward social and mental options for dialogue and clue reading, but keep enough physical ability to survive tense encounters.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Exertion on every check in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Use Exertion when the check matters. If the roll is optional, low-value, or easy to improve with gear, save your stress.",
          },
        },
        {
          "@type": "Question",
          name: "What do Fatigue, Anxiety, and Delirium do in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fatigue, Anxiety, and Delirium are the main stress meters. They rise through pressure, mistakes, and Exertion, and they can make a run more difficult if they get too high.",
          },
        },
        {
          "@type": "Question",
          name: "Is Conditioning like the Thought Cabinet?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Conditioning has a similar role, but it should not be treated as a simple Thought Cabinet copy. Conditioning and Thoughts can improve a build, but many also come with drawbacks or rules that change how the player should play.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to play Disco Elysium first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. ZERO PARADES is its own game. Disco Elysium experience helps players understand the style of reading and roleplaying, but the systems are different enough that new players can start here.",
          },
        },
        {
          "@type": "Question",
          name: "Should I reload failed checks in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Reload if the failed check blocks a route or result you really care about. Otherwise, keep going and see how the game handles the failure.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I go after the safe house in ZERO PARADES?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the Bootleg Bazaar lead. The purchase order and Constance's directions point toward the next useful place to investigate.",
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
          title="ZERO PARADES Guide: What to Do First"
          description="Start with the right guide for your problem, then learn the safe first-run habits for builds, stress, Conditioning, and the opening investigation."
          gameTitle="ZERO PARADES: For Dead Spies"
          gameHref="/zero-parades"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 22, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ZeroParadesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}

