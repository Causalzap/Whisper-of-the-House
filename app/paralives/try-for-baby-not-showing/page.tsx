import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ParalivesTryForBabyContent from "@/data/paralives/try-for-baby-not-showing.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/try-for-baby-not-showing`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-trying-for-a-baby-help-page.webp`,
  `${siteUrl}/images/paralives/paralives-romantic-interest-lover-status.webp`,
  `${siteUrl}/images/paralives/paralives-select-both-paras-group-talk.webp`,
  `${siteUrl}/images/paralives/paralives-shower-get-intimate-no-try-for-baby.webp`,
  `${siteUrl}/images/paralives/paralives-try-for-baby-bed-interaction.webp`,
  `${siteUrl}/images/paralives/paralives-try-for-baby-still-showing-loop.webp`,
];

const toc = [
  { id: "quick-route", label: "Quick route" },
  { id: "fertility-settings", label: "Fertility settings" },
  { id: "relationship-requirements", label: "Relationship" },
  { id: "together-cards", label: "Together cards" },
  { id: "select-both-paras", label: "Select both Paras" },
  { id: "use-bed-not-shower", label: "Bed, not shower" },
  { id: "bed-interaction", label: "Bed interaction" },
  { id: "bed-route-stuck", label: "Stuck action" },
  { id: "pregnancy-test-negative", label: "Negative test" },
  { id: "adoption-and-paramaker", label: "Other routes" },
  { id: "baby-stuck", label: "Baby stuck" },
  { id: "stuck-checklist", label: "Checklist" },
  { id: "when-to-reload", label: "When to reload" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/paralives",
    label: "Paralives Guide Hub",
  },
  {
    href: "/paralives/money-cheats-paradimes",
    label: "Money Cheats and Paradimes Guide",
  },
  {
    href: "/paralives/best-mods-steam-workshop-install-guide",
    label: "Best Mods and Steam Workshop Install Guide",
  },
  {
    href: "/paralives/paramaker-stats-vibes-personality",
    label: "Paramaker Stats, Vibes and Personality",
  },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
];

export const metadata: Metadata = {
  title: "Paralives Try for Baby Not Showing? Pregnancy Fixes",
  description:
    "Fix Paralives Try for Baby not showing with fertility settings, Together cards, bed route, editcharacter, stuck action fixes and adoption options.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paralives Try for Baby Not Showing? Pregnancy Fixes",
    description:
      "A practical Paralives pregnancy guide for Try for Baby not showing, fertility settings, Together cards, bed interactions, stuck actions and adoption options.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives Help page explaining the Try for a Baby route and Together Card requirement.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paralives Try for Baby Not Showing? Fixes",
    description:
      "Check fertility settings, Together cards, bed use, stuck actions and pregnancy route problems in Paralives.",
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
          name: "Paralives Guide",
          item: `${siteUrl}/paralives`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Try for Baby Not Showing",
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
        "Paralives Try for Baby Not Showing Guide: Fertility Settings, Together Cards, Bed Route, Stuck Actions and Pregnancy Fixes",
      description:
        "A player-focused Paralives guide for fixing Try for Baby not showing. It explains pregnancy ability settings, editcharacter checks, romance and lover requirements, baby-related Together cards, selecting both Paras, using the bed instead of the shower, handling stuck interactions, and alternative family routes such as adoption or Paramaker child creation.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Try for Baby" },
        { "@type": "Thing", name: "Paralives Pregnancy" },
        { "@type": "Thing", name: "Paralives Fertility Settings" },
        { "@type": "Thing", name: "Paralives Together Cards" },
        { "@type": "Thing", name: "Paralives editcharacter" },
        { "@type": "Thing", name: "Paralives Adoption" },
        { "@type": "Thing", name: "Paramaker" },
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
          name: "Why is Try for Baby not showing in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check pregnancy ability settings first. One Para needs Can Get Pregnant and the other needs Can Get Others Pregnant. Then check romance, lover status, the baby-related Together card, both Paras selected, and the bed.",
          },
        },
        {
          "@type": "Question",
          name: "How do I change pregnancy ability settings in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the cheat panel with Ctrl + F1 or Ctrl + Shift + C, type editcharacter, and check the Para's advanced personality or gender-related options in Paramaker.",
          },
        },
        {
          "@type": "Question",
          name: "Which Together card do I need for Try for Baby?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Look for baby-related cards such as Ask if they want to try for a baby NOW or Discuss having children in the future.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to select both Paras for Try for Baby?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Select both Paras before clicking the bed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I Try for Baby in the shower in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The reliable Try for Baby route is from a bed. Shower Get intimate is a romance interaction, not the main pregnancy route.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if Try for Baby gets stuck?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If the animation already finished, cancel the stuck action manually. If it still fails, check bed space and retry from a clean save.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the pregnancy test negative in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A negative test can simply mean the attempt failed. Check the setup, pregnancy chance, and whether the interaction completed cleanly.",
          },
        },
        {
          "@type": "Question",
          name: "Can I adopt instead in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Adoption is a separate family route and is better treated separately because the steps are different from Try for Baby.",
          },
        },
        {
          "@type": "Question",
          name: "Can I make a child in Paramaker?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Use Paramaker when you want to build a household directly instead of playing through pregnancy.",
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
          title="Paralives Try for Baby Not Showing?"
          description="Fix missing Try for Baby options with fertility settings, Together cards, bed use, stuck action fixes, editcharacter checks and family route alternatives."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ParalivesTryForBabyContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}