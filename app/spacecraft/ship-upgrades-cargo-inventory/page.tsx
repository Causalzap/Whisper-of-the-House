import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ShipUpgradesContent from "@/data/spacecraft/ship-upgrades-cargo-inventory.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/ship-upgrades-cargo-inventory`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-bob-ship-upgrade-priorities.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-cargo-weight-limit.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-small-cargo-hold-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-simple-resource-detector-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-install-simple-resource-detector.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-simple-mining-laser-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-overclocked-mining-laser-requirement.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-flywheel-battery-requirement.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-system-capacity-heat.webp`,
];

const toc = [
  {
    id: "ship-upgrades-guide",
    label: "Ship upgrades guide",
  },
  {
    id: "quick-module-recipe-lookup",
    label: "Module recipe lookup",
  },
  {
    id: "best-first-upgrade",
    label: "Best first upgrade",
  },
  {
    id: "small-cargo-hold",
    label: "Small Cargo Hold",
  },
  {
    id: "resource-detector",
    label: "Resource Detector",
  },
  {
    id: "install-resource-detector",
    label: "Install or replace detector",
  },
  {
    id: "mining-laser",
    label: "Mining Laser",
  },
  {
    id: "overclocked-mining-laser",
    label: "Overclocked Mining Laser",
  },
  {
    id: "battery-upgrade",
    label: "Battery upgrades",
  },
  {
    id: "system-support-heat",
    label: "System Support and heat",
  },
  {
    id: "replace-installed-modules",
    label: "Replace installed modules",
  },
  {
    id: "materials-to-save",
    label: "Materials to save",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
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
    href: "/spacecraft",
    label: "SpaceCraft Guide Hub",
  },
  {
    href: "/spacecraft/beginner-guide",
    label: "SpaceCraft Beginner Guide",
  },
  {
    href: "/spacecraft/scanlyzer-alpha-ftl-engine",
    label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
  },
  {
    href: "/spacecraft/resources-locations",
    label: "SpaceCraft Resources Guide",
  },
  {
    href: "/spacecraft/base-building-automation",
    label: "SpaceCraft Base Building and Automation Guide",
  },
];

export const metadata: Metadata = {
  title: "SpaceCraft Ship Upgrades Guide: Cargo, Laser, Detector",
  description:
    "Upgrade SpaceCraft cargo, Resource Detector, Mining Laser, Battery, System Support, patch slots, module replacement, recipes, SP limits, and heat.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft Ship Upgrades Guide: Cargo Hold, Resource Detector, Mining Laser and Battery",
    description:
      "Upgrade your SpaceCraft ship with Small Cargo Hold, Simple Resource Detector, Simple Mining Laser, Overclocked Mining Laser, Flywheel Battery, System Support, patch slots, Shipyard module replacement, SP limits, and overheating fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "SpaceCraft Bob explaining mining lasers resource detectors cargo space and batteries.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCraft Ship Upgrades Guide",
    description:
      "Choose Cargo Hold, Resource Detector, Mining Laser, Battery, and System Support upgrades without wasting materials or overheating.",
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
          name: "SpaceCraft Guide",
          item: `${siteUrl}/spacecraft`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SpaceCraft Ship Upgrades Guide",
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
        "SpaceCraft Ship Upgrades Guide: Cargo Hold, Resource Detector, Mining Laser, Battery, System Support and Module Replacement",
      description:
        "A player-focused SpaceCraft ship upgrades guide covering upgrade priority, Small Cargo Hold recipe, Simple Resource Detector recipe and installation, Simple Mining Laser recipe, Crystalline Focuser blockers, Overclocked Mining Laser stats, patch slots, Flywheel Battery recipe, System Support and SP limits, overheating, how to replace installed modules in the Shipyard editor, materials worth saving, troubleshooting, and common ship upgrade mistakes.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-06-13",
      dateModified: "2026-06-13",
      articleSection: "Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "SpaceCraft",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft ship upgrades",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft cargo hold",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Small Cargo Hold",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Resource Detector",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Simple Resource Detector",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Mining Laser",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Simple Mining Laser",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Overclocked Mining Laser",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Flywheel Battery",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft System Support",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft patch slots",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Shipyard module replacement",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft overheating",
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
          name: "What should I upgrade first in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most players, upgrade Cargo Hold first. The starter ship fills quickly, and more storage makes every mining run more efficient.",
          },
        },
        {
          "@type": "Question",
          name: "How do I increase cargo space in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Craft a Small Cargo Hold, install it through the Shipyard editor, and confirm the ship edit.",
          },
        },
        {
          "@type": "Question",
          name: "What does Small Cargo Hold require?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the shown build, Small Cargo Hold uses 1 Small Module Kit, 6 Metal Sheet, and 4 Silicon Gel.",
          },
        },
        {
          "@type": "Question",
          name: "When should I upgrade the Resource Detector?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade it when finding resources becomes harder than mining them. This is especially useful for Mining Bureau targets and specific recipe materials.",
          },
        },
        {
          "@type": "Question",
          name: "What does Simple Resource Detector require?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the shown build, Simple Resource Detector uses 1 Small Module Kit and 2 Magnetic Coil.",
          },
        },
        {
          "@type": "Question",
          name: "How do I replace an installed detector?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the Shipyard editor, select the old detector, remove it if the editor allows it, place the new detector in the freed slot, then confirm the ship edit.",
          },
        },
        {
          "@type": "Question",
          name: "When should I upgrade the Mining Laser?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade your Mining Laser when your current laser cannot mine the materials you need or mining speed becomes the bottleneck.",
          },
        },
        {
          "@type": "Question",
          name: "What does Simple Mining Laser require?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the shown build, Simple Mining Laser uses 1 Small Module Kit and 2 Crystalline Focuser.",
          },
        },
        {
          "@type": "Question",
          name: "Should I rush Overclocked Mining Laser?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not immediately. Check cargo, detector, Quartz, previous module requirements, System Support, and heat first.",
          },
        },
        {
          "@type": "Question",
          name: "What are patch slots in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Patch slots are upgrade or tuning slots on a module. They do not give instant power by themselves, but they can make a module scale better later if compatible patches are available.",
          },
        },
        {
          "@type": "Question",
          name: "When should I upgrade the battery?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Upgrade battery when maximum power storage or charging speed starts limiting longer routes and module-heavy setups.",
          },
        },
        {
          "@type": "Question",
          name: "What does Flywheel Battery require?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In the shown build, Flywheel Battery uses 1 Small Module Kit, 1 Motor, and 2 Concrete.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I check System Support in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open the Shipyard editor and look at the Ship Stats or System panel. Current screenshots show examples such as 1140 / 1620 SP and 1240 / 1620 SP.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my ship overheating?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Your system requirements may be higher than your ship’s System Support. Reduce module load or improve support before stacking more upgrades.",
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
          title="Upgrade Your SpaceCraft Ship Without Wasting Materials"
          description="Choose cargo, detector, mining laser, battery, and System Support upgrades by your real bottleneck, then replace modules safely in the Shipyard."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ShipUpgradesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
