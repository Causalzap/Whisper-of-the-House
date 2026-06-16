import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ScanalyzerFtlContent from "@/data/spacecraft/scanalyzer-alpha-ftl-engine.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/scanlyzer-alpha-ftl-engine`;

const imageUrls = [
  `${siteUrl}/images/spacecraft/spacecraft-scanlyzer-alpha-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-install-scanlyzer-shipyard.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-solar-alpha-2-gray-quartz.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-gravite-radar-search.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-company-exchanger-silicon-gel.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-electromagnetism-permit.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-ftl-engine-eco-recipe.webp`,
  `${siteUrl}/images/spacecraft/spacecraft-rakmu-orientation-clerk.webp`,
];

const toc = [
  {
    id: "scanlyzer-alpha-ftl-engine-guide",
    label: "Scanalyzer and FTL guide",
  },
  {
    id: "modular-systems-permit",
    label: "Modular Systems permit",
  },
  {
    id: "craft-scanalyzer-alpha",
    label: "Craft Scanalyzer Alpha",
  },
  {
    id: "install-scanalyzer-alpha",
    label: "Install Scanalyzer Alpha",
  },
  {
    id: "gray-quartz",
    label: "Gray Quartz",
  },
  {
    id: "crystalline-focuser",
    label: "Crystalline Focuser",
  },
  {
    id: "find-gravite",
    label: "Gravite",
  },
  {
    id: "buy-silicon-gel",
    label: "Silicon Gel",
  },
  {
    id: "unlock-electromagnetism",
    label: "Electromagnetism",
  },
  {
    id: "craft-ftl-engine-eco",
    label: "Craft FTL Engine",
  },
  {
    id: "install-ftl-engine",
    label: "Install FTL Engine",
  },
  {
    id: "refill-magnetic-plasma",
    label: "Magnetic Plasma",
  },
  {
    id: "final-ftl-checklist",
    label: "Final checklist",
  },
  {
    id: "what-happens-after-ftl",
    label: "After FTL",
  },
  {
    id: "materials-table",
    label: "Materials and blockers",
  },
  {
    id: "stuck-fixes",
    label: "Stuck fixes",
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
    href: "/spacecraft/permits-knowledge-unlock",
    label: "SpaceCraft Permits and Knowledge Unlock Guide",
    },
    {
    href: "/spacecraft/noviciate-corporation-unlock",
    label: "SpaceCraft Noviciate and Corporation Unlock Guide",
    },
  {
    href: "/spacecraft/resources-locations",
    label: "SpaceCraft Resources Guide",
  },
  {
    href: "/spacecraft/ship-upgrades-cargo-inventory",
    label: "SpaceCraft Ship Upgrades Guide",
  },
  {
    href: "/spacecraft/base-building-automation",
    label: "SpaceCraft Base Building and Automation Guide",
  },
];

export const metadata: Metadata = {
  title: "SpaceCraft FTL Guide: Scanalyzer, Quartz, Plasma",
  description:
    "Unlock SpaceCraft FTL with Modular Systems, Scanalyzer Alpha, Gray Quartz, Crystalline Focuser, Silicon Gel, Electromagnetism, Plasma, and fixes.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "SpaceCraft FTL Guide: Scanalyzer Alpha, Gray Quartz, Crystalline Focuser and Magnetic Plasma",
    description:
      "Unlock FTL in SpaceCraft with Modular Systems, Scanalyzer Alpha, Gray Quartz, Gravite, Crystalline Focuser, Silicon Gel, Electromagnetism, FTL Engine - Eco, Magnetic Plasma, and stuck fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "SpaceCraft Scanalyzer Alpha recipe in the Workshop.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceCraft FTL Guide",
    description:
      "Craft Scanalyzer Alpha, find Gray Quartz and Gravite, unlock Electromagnetism, install FTL Engine - Eco, and refill Magnetic Plasma.",
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
          name: "SpaceCraft Scanalyzer Alpha and FTL Guide",
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
        "SpaceCraft FTL Guide: Scanalyzer Alpha, Gray Quartz, Crystalline Focuser, Electromagnetism and Magnetic Plasma",
      description:
        "A player-focused SpaceCraft FTL guide covering the Modular Systems permit, Scanalyzer Alpha crafting and Shipyard installation, Solar Alpha 2 Gray Quartz, High Peak, Gravite radar behavior, Crystalline Focuser requirements, Wire blockers, Silicon Gel from the Company Exchanger, Electromagnetism permit, FTL Engine - Eco crafting and installation, Magnetic Plasma refill, current-build 40 credit plasma prompt, final FTL checklist, and fixes for common Scanalyzer and FTL route problems.",
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
          name: "SpaceCraft FTL",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Scanalyzer Alpha",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Modular Systems",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gray Quartz",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Crystalline Focuser",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Gravite",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Silicon Gel",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Electromagnetism",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft FTL Engine - Eco",
        },
        {
          "@type": "Thing",
          name: "SpaceCraft Magnetic Plasma",
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
          name: "How do I unlock Scanalyzer Alpha in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the early Copper and Iron route, check the Knowledge menu for Modular Systems when the objective offers it, then craft Scanalyzer Alpha in the Workshop at Babylon.",
          },
        },
        {
          "@type": "Question",
          name: "What does Modular Systems permit do in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Modular Systems is tied to the early ship-module and Shipyard progression path. Buy it as soon as Knowledge offers it so the first module route does not stall.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I find the Scanalyzer Alpha recipe?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check the active objective and Knowledge menu. If Modular Systems or the current permit path is not handled yet, the Workshop or Shipyard route may not show what you expect.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Scanalyzer Alpha not working?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It is probably crafted but not installed. Return to the Shipyard, place Scanalyzer Alpha on the ship, and confirm the edit.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I find Gray Quartz in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Go to Solar Alpha 2 after installing Scanalyzer Alpha. Use radar near the High Peak route, scan the dark crystal-like Gray Quartz, then mine it.",
          },
        },
        {
          "@type": "Question",
          name: "What does Crystalline Focuser require in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "In current build examples, each Crystalline Focuser requires 1 Gray Quartz plus Wire. If you have Quartz but the craft is still blocked, process more Copper into Wire and check the Workshop count.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I craft FTL Engine - Eco?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Check four things: Electromagnetism must be unlocked, and the recipe needs Small Module Kit, Crystalline Focuser, Wire, and Silicon Gel.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I buy Silicon Gel in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Buy Silicon Gel from the Company Exchanger during the trade step. The early route asks you to buy 10.",
          },
        },
        {
          "@type": "Question",
          name: "How do I unlock Electromagnetism in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Open Knowledge after the Silicon Gel step and buy Electromagnetism when the FTL route asks for it.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I find Gravite?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Gravite gives an approximate radar direction, not a perfect marker. Follow the direction, slow down, and search visually.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to mine Gravite?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For the early route, treat Gravite as a scan or progression target. Follow the objective text instead of treating it like normal ore.",
          },
        },
        {
          "@type": "Question",
          name: "Why can’t I jump after installing FTL Engine - Eco?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The engine must be installed and Magnetic Plasma must be filled. Use the station ship or dock prompt to fill Magnetic Plasma before taking off.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I refill Magnetic Plasma in SpaceCraft?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Use the station ship or dock prompt before departure. In the current build example, filling Magnetic Plasma costs 40 credits.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do after the first FTL jump?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Follow the route toward RakMu. Talk to the clerk, then use Bob for ship upgrades, Ingrid for Noviciate, and the Mining Bureau for resource work.",
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
          title="Unlock FTL Without Missing the Hidden Ship Steps"
          description="Follow the full SpaceCraft FTL chain from Modular Systems and Scanalyzer Alpha to Gray Quartz, Crystalline Focuser, FTL Engine - Eco, and Magnetic Plasma."
          gameTitle="SpaceCraft"
          gameHref="/spacecraft"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="June 13, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ScanalyzerFtlContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
