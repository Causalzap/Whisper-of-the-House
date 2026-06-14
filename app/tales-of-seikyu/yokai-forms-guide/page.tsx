import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import YokaiFormsContent from "@/data/tales-of-seikyu/yokai-forms-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/tales-of-seikyu/yokai-forms-guide`;

const imageUrls = [
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-forms-menu.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-boar-form-farming.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-boar-rush-upgrade.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-slime-form-unlock.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-slime-underwater.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-tengu-form-flight.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-yuki-onna-form-card.webp`,
  `${siteUrl}/images/tales-of-seikyu/tales-of-seikyu-fox-form-scroll.webp`,
];

const toc = [
  {
    id: "yokai-forms-guide",
    label: "Yokai Forms guide",
  },
  {
    id: "how-forms-work",
    label: "How forms work",
  },
  {
    id: "boar-form",
    label: "Boar Form",
  },
  {
    id: "boar-rush",
    label: "Boar Rush",
  },
  {
    id: "slime-form",
    label: "Slime Form",
  },
  {
    id: "slime-underwater",
    label: "Underwater routes",
  },
  {
    id: "slime-farm-watering",
    label: "Farm watering",
  },
  {
    id: "tengu-form",
    label: "Tengu Form",
  },
  {
    id: "yuki-onna-form",
    label: "Yuki-onna Form",
  },
  {
    id: "fox-form",
    label: "Fox Form",
  },
  {
    id: "form-upgrades",
    label: "Form upgrades",
  },
  {
    id: "blocked-routes",
    label: "Blocked routes",
  },
  {
    id: "fox-ruins-form-routing",
    label: "Fox Ruins routing",
  },
  {
    id: "mistakes",
    label: "Mistakes",
  },

  {
    id: "faq",
    label: "FAQ",
  },
];

const relatedLinks = [
  {
    href: "/tales-of-seikyu",
    label: "Tales of Seikyu Guide Hub",
  },
  {
    href: "/tales-of-seikyu/fox-ruins-guide",
    label: "Tales of Seikyu Fox Ruins Guide",
  },
  {
    href: "/tales-of-seikyu/beginner-guide",
    label: "Tales of Seikyu Beginner Guide",
  },
  {
    href: "/tales-of-seikyu/achievements-guide",
    label: "Tales of Seikyu Achievements Guide",
  },
  {
    href: "/tales-of-seikyu/request-board-guide",
    label: "Tales of Seikyu Request Board Guide",
  },
];

export const metadata: Metadata = {
  title: "Tales of Seikyu Yokai Forms Guide: Slime, Tengu & Fox",
  description:
    "Unlock Tales of Seikyu forms with Boar, Slime, Tengu, Yuki-onna and Fox routes, boss scrolls, upgrades, farm watering, flight, and blockers.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Tales of Seikyu Yokai Forms Guide: Boar, Slime, Tengu, Yuki-onna and Fox Form",
    description:
      "Use every Tales of Seikyu form with clear unlock routes, Fox Ruins boss scrolls, Slime farm watering, Tengu flight, Yuki-onna movement, Fox Form prerequisites, upgrades, and blocked-route fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Tales of Seikyu forms menu showing transformation progress.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tales of Seikyu Yokai Forms Guide",
    description:
      "Unlock Boar, Slime, Tengu, Yuki-onna and Fox Form, then use upgrades, watering, flight, and form checks to clear blockers.",
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
          name: "Tales of Seikyu Guide",
          item: `${siteUrl}/tales-of-seikyu`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tales of Seikyu Yokai Forms Guide",
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
        "Tales of Seikyu Yokai Forms Guide: Boar, Slime, Tengu, Yuki-onna, Fox Form, Boss Scrolls, Upgrades and Route Blockers",
      description:
        "A player-focused Tales of Seikyu Yokai Forms guide covering Human Form, Boar Form, Slime Form, Tengu Form, Yuki-onna Form, and Fox Form. Learn how form progression works, how Slime Form unlocks after Anji, how Tengu Form unlocks after Fujiki, how Slime Form helps with crop watering and underwater paths, how Tengu Form handles high routes, how Yuki-onna helps later movement checks, how Fox Form depends on earlier forms, which form upgrades to prioritize, and how to handle blocked Fox Ruins routes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-14",
      dateModified: "2026-06-14",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Tales of Seikyu",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Yokai Forms",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Boar Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Slime Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Tengu Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Yuki-onna Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Form",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fox Ruins",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Anji",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu Fujiki",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu form upgrades",
        },
        {
          "@type": "Thing",
          name: "Tales of Seikyu crop watering",
        },
      ],
      publisher: {
        "@type": "Organization",
        name: "Whisper of the House",
        url: siteUrl,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I unlock Slime Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defeat Anji, the first Tanuki boss in the Fox Ruins, then collect the Slime transformation scroll.",
          },
        },
        {
          "@type": "Question",
          name: "What is Slime Form used for in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Slime Form is used for underwater routes, water-based Fox Ruins checks, water attacks, and farm watering. It can replace the watering can once you learn how to manage water efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Tengu Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Defeat Fujiki, the second Tanuki boss in the Fox Ruins, then collect the Tengu transformation scroll.",
          },
        },
        {
          "@type": "Question",
          name: "What is Tengu Form used for in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Tengu Form is used for flight, high ledges, aerial gaps, and routes that cannot be reached by walking, Boar Form, or Slime Form.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Yuki-onna Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yuki-onna Form unlocks later through Fox Ruins story and boss progression after earlier forms. Keep progressing past Tengu routes and check the next transformation scroll when the story opens it.",
          },
        },
        {
          "@type": "Question",
          name: "What is Yuki-onna Form used for in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yuki-onna Form helps with later movement, hover-style exploration, ice-linked route checks, and high spaces that still feel awkward after Tengu.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Fox Form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Fox Form is the final transformation route. Learn Boar, Slime, Tengu, and Yuki-onna first, then continue the Fox Clan story route.",
          },
        },
        {
          "@type": "Question",
          name: "Is Fox Form better than every other form in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not for every task. Fox Form is the final transformation, but Boar, Slime, Tengu, and Yuki-onna still matter because each solves a different kind of blocker.",
          },
        },
        {
          "@type": "Question",
          name: "Which form should I upgrade first in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade the form that solves your next blocker. Boar helps farm cleanup, Slime helps water and watering, Tengu helps high routes, Yuki-onna helps later vertical routes, and Fox Form matters after the final route opens.",
          },
        },
        {
          "@type": "Question",
          name: "Can Slime Form water crops in Tales of Seikyu?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Slime Form can be used for crop watering once you are comfortable collecting and spending water. This can save time compared with basic watering can routes.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I reach a high path in the Fox Ruins?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If Slime and Boar cannot solve it, you probably need Tengu Form or later Yuki-onna progress. Return after the correct transformation unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "Should I force a blocked room until it works?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. If the form that should solve it does nothing, leave the room, continue story or boss progress, and return later with the next form or upgrade.",
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
          title="Unlock and Use Every Yokai Form"
          description="Learn how Boar, Slime, Tengu, Yuki-onna, and Fox Form work, which bosses unlock key scrolls, and which form solves water, flight, farm, and Fox Ruins blockers."
          gameTitle="Tales of Seikyu"
          gameHref="/tales-of-seikyu"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 14, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <YokaiFormsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
