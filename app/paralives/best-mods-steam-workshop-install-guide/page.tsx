import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ParalivesBestModsSteamWorkshopContent from "@/data/paralives/best-mods-steam-workshop-install-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/best-mods-steam-workshop-install-guide`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-steam-workshop-browse-mods.webp`,
  `${siteUrl}/images/paralives/paralives-display-townies-map-mod.webp`,
  `${siteUrl}/images/paralives/paralives-steam-workshop-subscribe-mod.webp`,
  `${siteUrl}/images/paralives/paralives-workshop-household-cloud-icon.webp`,
  `${siteUrl}/images/paralives/paralives-place-workshop-lot-library.webp`,
  `${siteUrl}/images/paralives/paralives-workshop-lot-floating-shift-drag.webp`,
  `${siteUrl}/images/paralives/paralives-script-mod-local-files-bepinex.webp`,
];

const toc = [
  { id: "install-first", label: "Install first" },
  { id: "best-mods", label: "Best mods" },
  { id: "steam-workshop-install", label: "Workshop install" },
  { id: "content-types", label: "Content types" },
  { id: "enable-disable-delete", label: "Enable or remove" },
  { id: "backup-save", label: "Save backup" },
  { id: "households", label: "Households" },
  { id: "lots", label: "Lots" },
  { id: "floating-lot", label: "Floating lot fix" },
  { id: "script-mods", label: "Script mods" },
  { id: "patch-maintenance", label: "After patches" },
  { id: "control-panel-console", label: "Console tools" },
  { id: "mods-not-showing", label: "Not showing" },
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
    href: "/paralives/paramaker-stats-vibes-personality",
    label: "Paramaker Stats, Vibes and Personality",
  },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
  {
    href: "/paralives/level-skills-faster",
    label: "How to Level Skills Faster",
  },
];

export const metadata: Metadata = {
  title: "Paralives Mods Guide: Best Mods, Workshop Install & Fixes",
  description:
    "Install Paralives mods safely with Steam Workshop, households, lots, script mods, save backups, toggles, Console checks and mod not showing fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paralives Mods Guide: Best Mods, Workshop Install & Fixes",
    description:
      "A practical Paralives mod guide for Steam Workshop installs, households, lots, script mods, save backups, toggles, patch checks and not showing fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives Steam Workshop browse page showing mod categories and popular Workshop items.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paralives Mods Guide: Workshop Install & Fixes",
    description:
      "Install Paralives mods safely with Steam Workshop, households, lots, script mods, backups and mod not showing fixes.",
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
          name: "Paralives Mods Guide",
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
        "Paralives Mods Guide: Best Mods to Install First, Steam Workshop Setup, Script Mods, Save Backups and Not Showing Fixes",
      description:
        "A player-focused Paralives mods guide that explains which mods to install first, how to use Steam Workshop, where households and lots appear, how to handle script mods, how to back up saves, what to do after patches, and how to troubleshoot mods that do not show up.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-07-06",
      dateModified: "2026-07-06",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Mods" },
        { "@type": "Thing", name: "Paralives Steam Workshop" },
        { "@type": "Thing", name: "Paralives Script Mods" },
        { "@type": "Thing", name: "Paralives Households" },
        { "@type": "Thing", name: "Paralives Lots" },
        { "@type": "Thing", name: "Paralives Mod Troubleshooting" },
        { "@type": "Thing", name: "Paralives Save Backup" },
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
          name: "Where do I install Paralives mods?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For normal Steam Workshop items, start from Main Menu, then Mods, then Browse for Mods. Use local files only when a mod creator specifically tells you to.",
          },
        },
        {
          "@type": "Question",
          name: "How do I enable or disable a Paralives mod?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the toggle on the Mods page. If you are troubleshooting, disable the newest mod first, restart if needed, and test the save before removing several items.",
          },
        },
        {
          "@type": "Question",
          name: "Where are Paralives saves on Windows?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "On Windows, check %USERPROFILE%\\AppData\\LocalLow\\Alex Masse\\Paralives\\Saves and copy the full Saves folder before testing risky mods.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my subscribed Paralives mod not showing?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the content type first. A household appears in the household library, a lot appears in the lot library, a normal mod appears on the Mods page, and script mods may require local installation.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my downloaded Paralives lot floating?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The lot may have been built for a different terrain or lot shape. Use an owned empty lot, check the lot size, try Shift-dragging once, then switch lots if the placement still looks wrong.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after a Paralives patch?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check creator notes, keep risky script or gameplay mods disabled until confirmed compatible, then test on a backup or test save before continuing your main save.",
          },
        },
        {
          "@type": "Question",
          name: "What are Ctrl+F1 and Ctrl+F2 for in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Ctrl+F1 opens the Console on Windows so you can check red errors. Ctrl+F2 on Windows or Cmd+F2 on Mac opens the Control Panel for deeper content inspection.",
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
          title="Paralives Mods Guide"
          description="Install Paralives mods safely with Steam Workshop, households, lots, script mods, save backups, patch checks and not showing fixes."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="July 6, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ParalivesBestModsSteamWorkshopContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}