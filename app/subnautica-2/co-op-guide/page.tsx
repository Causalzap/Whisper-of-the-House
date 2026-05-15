import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import CoopGuideContent from "@/data/subnautica-2/co-op-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/subnautica-2/co-op-guide`;

const imageUrls = [
  `${siteUrl}/images/subnautica-2/subnautica-2-coop-crossplay-invite.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-coop-save-convert-menu.webp`,
  `${siteUrl}/images/subnautica-2/subnautica-2-dive-elevator-resource-transport.webp`,
];

const toc = [
  { id: "last-updated", label: "EA note" },
  { id: "coop-roles", label: "Roles" },
  { id: "phase-plan", label: "Phase plan" },
  { id: "new-guest-quick-start", label: "New guest" },
  { id: "platforms-crossplay", label: "Crossplay" },
  { id: "playable-characters", label: "Characters" },
  { id: "session-settings", label: "Session settings" },
  { id: "convert-solo-save", label: "Solo to co-op" },
  { id: "convert-back-single-player", label: "Back to solo" },
  { id: "share-save-host", label: "Share save" },
  { id: "host-save", label: "Host" },
  { id: "shared-vs-personal", label: "Shared vs personal" },
  { id: "dynamic-scaling", label: "Scaling" },
  { id: "storage-base-risk", label: "Storage risk" },
  { id: "death-items", label: "Death" },
  { id: "known-issues", label: "Known issues" },
  { id: "coop-vs-solo", label: "Solo vs co-op" },
  { id: "no-tether", label: "Tether" },
  { id: "vehicles", label: "Vehicles" },
  { id: "dive-elevator", label: "Dive Elevator" },
  { id: "creative-mode", label: "Creative" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/subnautica-2", label: "Subnautica 2 Guide" },
  { href: "/subnautica-2/what-to-do-first", label: "What to Do First" },
  { href: "/subnautica-2/early-resources", label: "Early Resources" },
  { href: "/subnautica-2/navigation-guide", label: "Navigation Guide" },
  {
    href: "/subnautica-2/fully-functional-fabricator",
    label: "Fully Functional Fabricator Fix",
  },
  { href: "/subnautica-2/tadpole-submarine", label: "Tadpole Submarine" },
];

export const metadata: Metadata = {
  title: "Subnautica 2 Co-op Guide: Crossplay, Roles & Saves",
  description:
    "Set up Subnautica 2 co-op with crossplay, save conversion, guest progress, roles, shared storage, death recovery and Dive Elevator logistics.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Subnautica 2 Co-op Guide: Crossplay, Roles & Saves",
    description:
      "A player-first Subnautica 2 co-op guide covering crossplay, solo-to-multiplayer saves, guest setup, shared storage, roles, death recovery and Dive Elevator logistics.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Subnautica 2 co-op invite and crossplay guide image.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subnautica 2 Co-op Guide: Crossplay, Roles & Saves",
    description:
      "Learn Subnautica 2 co-op saves, roles, guest progress, shared storage, death recovery and Dive Elevator logistics.",
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
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "Subnautica 2 Guide",
          item: `${siteUrl}/subnautica-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Co-op Guide",
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
        "Subnautica 2 Co-op Guide: Crossplay, Save Conversion, Guest Progress, Roles, Shared Storage, Death Recovery and Dive Elevator Logistics",
      description:
        "A Subnautica 2 Early Access co-op guide explaining native multiplayer without mods, crossplay platforms, solo-to-multiplayer and multiplayer-to-solo save conversion, host responsibilities, save copy transfer, new guest quick-start steps, shared versus personal progression, role splits by group size, phase planning, storage risks, death drops, Biobed respawns, known co-op issues, solo versus co-op differences, vehicles, Creative Mode, and Dive Elevator logistics.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-14",
      dateModified: "2026-05-15",
      about: [
        { "@type": "VideoGame", name: "Subnautica 2" },
        { "@type": "Thing", name: "Co-op" },
        { "@type": "Thing", name: "Crossplay" },
        { "@type": "Thing", name: "Save Conversion" },
        { "@type": "Thing", name: "Guest Progress" },
        { "@type": "Thing", name: "Dive Elevator" },
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
          name: "Do I need mods for Subnautica 2 co-op?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Subnautica 2 has native co-op support, so you do not need a multiplayer mod.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch a multiplayer save back to solo?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Use world or session options to convert the multiplayer world back to single player, then continue alone.",
          },
        },
        {
          "@type": "Question",
          name: "Can a friend host my save instead?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if you deliberately share a copy of the save with a trusted teammate. Confirm the correct save location for your platform or storefront first.",
          },
        },
        {
          "@type": "Question",
          name: "Can a teammate recover my dropped items?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, if they can safely reach the death location. A teammate may be able to pick up dropped items, but the team should still regroup after recovery.",
          },
        },
        {
          "@type": "Question",
          name: "Does a new guest get my adaptations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. Treat DNA Adaptations and personal body upgrades as personal progression. A new guest should check their own survival setup first.",
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
          title="Subnautica 2 Co-op Guide: Roles, Saves, Crossplay and Guest Progress"
          description="Set up a clean co-op save, avoid shared-storage chaos, onboard fresh guests, split roles, recover dropped items, and use Dive Elevator logistics."
          gameTitle="Subnautica 2"
          gameHref="/subnautica-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 15, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <CoopGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
