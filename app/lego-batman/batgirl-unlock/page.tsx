import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BatgirlUnlockContent from "@/data/lego-batman/batgirl-unlock.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/lego-batman/batgirl-unlock`;

const imageUrls = [
  `${siteUrl}/images/lego-batman/lego-batman-batgirl-first-action.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-barbara-gordon-masquerade.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-barbara-raises-shutters.webp`,
  `${siteUrl}/images/lego-batman/lego-batman-batgirl-rescue-people.webp`,
];

const toc = [
  { id: "when-batgirl-unlocks", label: "Unlock Time" },
  { id: "batgirl-unlock-route", label: "Unlock Route" },
  { id: "the-exact-unlock-moment", label: "Exact Moment" },
  { id: "what-batgirl-can-do", label: "Abilities" },
  { id: "radio-towers-and-map-icons", label: "Radio Towers" },
  { id: "first-batgirl-section", label: "First Section" },
  { id: "should-you-wait-before-cleanup", label: "Cleanup Timing" },
  { id: "if-you-are-stuck", label: "Stuck?" },
  { id: "related-lego-batman-guides", label: "Related" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/lego-batman", label: "LEGO Batman Guide" },
  { href: "/lego-batman/firefly-boss", label: "Firefly Boss Guide" },
  { href: "/lego-batman/escaped-zoo-animals", label: "Escaped Zoo Animals Guide" },

  { href: "/lego-batman/poison-ivy-boss", label: "Poison Ivy Boss Guide" },
  { href: "/lego-batman/red-bricks", label: "Red Bricks Guide" },
  { href: "/lego-batman/carmine-falcone", label: "Carmine Falcone Walkthrough" },
  { href: "/lego-batman/bane-boss", label: "Bane Boss Guide" },
];

export const metadata: Metadata = {
  title: "Batgirl Unlock Guide: Radio Towers & Chapter 4",
  description:
    "Unlock Batgirl in LEGO Batman Legacy, follow the Chapter 4 Firefly route, use Radio Towers, reveal map icons, and plan Gotham cleanup.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Batgirl Unlock Guide: Chapter 4, Firefly, and Radio Towers",
    description:
      "Learn when Batgirl unlocks, what Barbara does in the Firefly sequence, and why Radio Towers matter for Gotham cleanup.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Batgirl taking action for the first time during the Firefly sequence in LEGO Batman Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Batgirl Unlock Guide: Radio Towers & Chapter 4",
    description:
      "Find Batgirl’s unlock point, use Radio Towers, reveal map icons, and start cleanup at the right time.",
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
          name: "LEGO Batman Guide",
          item: `${siteUrl}/lego-batman`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Batgirl Unlock Guide",
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
        "LEGO Batman Legacy Batgirl Unlock Guide: Chapter 4 Firefly Sequence, Radio Towers, Map Icons and Gotham Cleanup",
      description:
        "A player-focused LEGO Batman Legacy guide explaining when Batgirl unlocks, how Barbara Gordon becomes Batgirl during the Chapter 4 Wayne Industries masquerade ball and Firefly sequence, the exact security-door and shutter-hacking moment that marks the unlock, what Batgirl can do with tech systems, why Radio Towers and map icon reveals matter for open-world cleanup, how her first Firefly museum rescue section works, and when players should start serious Gotham cleanup after unlocking her.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-20",
      dateModified: "2026-05-20",
      about: [
        {
          "@type": "VideoGame",
          name: "LEGO Batman: Legacy of the Dark Knight",
        },
        { "@type": "Thing", name: "Batgirl" },
        { "@type": "Thing", name: "Barbara Gordon" },
        { "@type": "Thing", name: "Batgirl unlock" },
        { "@type": "Thing", name: "Chapter 4" },
        { "@type": "Thing", name: "Firefly sequence" },
        { "@type": "Thing", name: "Wayne Industries masquerade ball" },
        { "@type": "Thing", name: "Radio Towers" },
        { "@type": "Thing", name: "Map icons" },
        { "@type": "Thing", name: "Gotham cleanup" },
        { "@type": "Thing", name: "Hacking" },
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
          name: "When do you unlock Batgirl in LEGO Batman Legacy?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl unlocks in Chapter 4 during the Wayne Industries masquerade ball and Firefly sequence.",
          },
        },
        {
          "@type": "Question",
          name: "Is Batgirl unlocked from Bat-Mite's shop?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Batgirl is a main story unlock, not a Bat-Mite shop purchase.",
          },
        },
        {
          "@type": "Question",
          name: "What is the exact Batgirl unlock moment?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl unlocks after Firefly triggers the security doors and Barbara hacks the system to raise the shutters. Batman then calls her Batgirl.",
          },
        },
        {
          "@type": "Question",
          name: "What can Batgirl do?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Batgirl can interact with tech systems, hack route blockers, help with panels, and use hacking tools for Radio Towers and cleanup routing.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Radio Towers need Batgirl?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Radio Towers are tied to Batgirl's hacking role. Activating them helps reveal map icons, which makes open-world cleanup easier.",
          },
        },
        {
          "@type": "Question",
          name: "Should you wait for Batgirl before cleanup?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, for serious cleanup. Quick nearby activities are fine earlier, but Radio Towers and tech-based routes make cleanup smoother after Batgirl unlocks.",
          },
        },
        {
          "@type": "Question",
          name: "Is Batgirl needed for the Firefly fight?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. During the Firefly route, Batgirl's tech is used for the hack panel after the shuttle setup.",
          },
        },
        {
          "@type": "Question",
          name: "What should you do after unlocking Batgirl?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Finish the Firefly story route first. After that, start using Batgirl on Radio Towers before deep Gotham cleanup.",
          },
        },
        {
          "@type": "Question",
          name: "Is Batgirl temporary?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. After the Firefly sequence, Batgirl becomes part of the active team and her tech remains useful for later routes.",
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
          title="Batgirl Unlock Guide: When She Joins and Why Radio Towers Matter"
          description="Find the Chapter 4 Firefly sequence where Batgirl unlocks, learn what her hacking tools do, and use Radio Towers before serious Gotham cleanup."
          gameTitle="LEGO Batman: Legacy of the Dark Knight"
          gameHref="/lego-batman"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 20, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BatgirlUnlockContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}