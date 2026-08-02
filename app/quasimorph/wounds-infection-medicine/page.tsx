import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import QuasimorphMedicineGuideContent from "@/data/quasimorph/wounds-infection-medicine.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/quasimorph`;
const pageUrl = `${hubUrl}/wounds-infection-medicine`;

const imageUrls = [
  `${siteUrl}/images/quasimorph/quasimorph-health-monitor-knee-wound-and-supplies.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-rag-emergency-stabilize.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-plastic-emergency-stabilize.webp`,
  `${siteUrl}/images/quasimorph/quasimorph-autodoc-heal-60-hp-five-batteries.webp`,
];

export const metadata: Metadata = {
  title: "Quasimorph Wounds and Infection Guide: Healing and Auto-Docs",
  description:
    "Read wounds, Pain and infection risk, use Bandages, Splints, Rags and Plastic correctly, and know when an Auto-Doc or extraction is the safer choice.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "How to Treat Wounds and Infection in Quasimorph 1.0",
    description:
      "Read the Health Monitor, leave Run before treatment, use emergency stabilizers carefully, and stop looting when the wound changes the route.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1280,
        height: 720,
        alt: "Quasimorph Health Monitor showing a knee contusion, Pain, Fullness and available Bandages and Splints",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quasimorph Wounds and Infection Guide",
    description:
      "Treat wounds, manage infection risk, use Auto-Docs correctly and know when a wounded run should become an extraction run.",
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
          name: "Quasimorph Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Wounds, Infection and Medicine",
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
        "Quasimorph Wounds and Infection Guide: How to Read the Health Monitor, Treat Injuries, Use Emergency Stabilizers, and Decide When to Extract",
      description:
        "This Quasimorph 1.0 wounds and infection guide explains how to read HP, Pain, Fullness, body-part injuries and infection risk in the Health Monitor, leave Run before attempting treatment, choose proper Bandages or Splints before improvised Rags and Plastic, use eight-turn emergency stabilization without mistaking it for full recovery, distinguish current Infection from a wound's infection chance, evaluate an Auto-Doc that shows 60 percent charge, Heal 60 HP, Heal All Wounds unavailable and a five-battery recharge cost, recalculate the mission after treatment, pack enough medicine before launch and decide when a wound has turned optional looting into an extraction route.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-02",
      dateModified: "2026-08-02",
      about: [
        {
          "@type": "VideoGame",
          name: "Quasimorph",
        },
        {
          "@type": "Thing",
          name: "Quasimorph wounds",
        },
        {
          "@type": "Thing",
          name: "Quasimorph infection",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Health Monitor",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Pain",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Bandages and Splints",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Rag",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Plastic",
        },
        {
          "@type": "Thing",
          name: "Quasimorph Auto-Doc",
        },
        {
          "@type": "Thing",
          name: "Quasimorph medical supplies",
        },
        {
          "@type": "Thing",
          name: "Quasimorph extraction",
        },
        {
          "@type": "Thing",
          name: "Quasimorph 1.0",
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
          title="How I Treat a Wound and Decide Whether the Run Is Over"
          description="Read the body part and infection risk, leave Run before healing, and use treatment to finish the objective or create a safer extraction route."
          gameTitle="Quasimorph"
          gameHref="/quasimorph"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 2, 2026"
          toc={[
            {
              id: "read-health-monitor",
              label: "Read the Health Monitor",
            },
            {
              id: "leave-run",
              label: "Leave Run before healing",
            },
            {
              id: "choose-treatment",
              label: "Choose the treatment",
            },
            {
              id: "infection-risk",
              label: "Read infection risk",
            },
            {
              id: "autodoc",
              label: "Use an Auto-Doc",
            },
            {
              id: "recalculate-route",
              label: "Recalculate the route",
            },
            {
              id: "pack-before-launch",
              label: "Pack before launch",
            },
            {
              id: "field-rule",
              label: "My field rule",
            },
          ]}
          relatedLinks={[
            {
              href: "/quasimorph/beginner-guide",
              label: "Quasimorph Beginner Guide",
            },
            {
              href: "/quasimorph/contracts-guide",
              label: "Contracts, Rewards & Mission Choice",
            },
            {
              href: "/quasimorph/ship-upgrades",
              label: "Best Ship Upgrades",
            },
            {
              href: "/quasimorph/loot-priority",
              label: "Early-Game Loot Priority",
            },
            {
              href: "/quasimorph/quasimorphosis-guide",
              label: "Quasimorphosis, Ecolapse & Barons",
            },
            {
              href: "/quasimorph/start-realware-storyline",
              label: "Start the RealWare Storyline",
            },
            {
              href: "/quasimorph",
              label: "Quasimorph Guide Hub",
            },
          ]}
        >
          <QuasimorphMedicineGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}