import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import TheCrustWalkthroughContent from "@/data/the-crust/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/the-crust`;
const pageUrl = `${hubUrl}/walkthrough`;

const imageUrls = [
  `${siteUrl}/images/the-crust/the-crust-aurora-malachite-ief-choice.webp`,
  `${siteUrl}/images/the-crust/the-crust-explosion-epicenter-location.webp`,
  `${siteUrl}/images/the-crust/the-crust-commander-moore-wreckage.webp`,
  `${siteUrl}/images/the-crust/the-crust-mdr-recovered.webp`,
  `${siteUrl}/images/the-crust/the-crust-black-obelisk-signal.webp`,
];

export const metadata: Metadata = {
  title: "The Crust Walkthrough: 1.0 Story & Progression Guide",
  description:
    "Follow The Crust 1.0 campaign through Hope 2, colonists, Aurora, the explosion epicenter, MDR, FES labs, and the black obelisk.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "The Crust Walkthrough: Story & Progression Route",
    description:
      "Follow the 1.0 campaign from Hope 2 and colonists through Aurora, the lunar investigation, MDR recovery, FES labs, and the black obelisk.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[4],
        width: 1600,
        height: 900,
        alt: "The Crust black obelisk discovered during the later lunar investigation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crust 1.0 Walkthrough & Progression Guide",
    description:
      "Know what to build, investigate, and unlock next through The Crust 1.0 story and mid-to-late progression.",
    images: [imageUrls[4]],
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
          name: "The Crust Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Walkthrough",
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
        "The Crust 1.0 Walkthrough: Story and Progression Route",
      description:
        "A The Crust 1.0 walkthrough covering campaign progression from early colony stabilization and Hope 2 through life support, colonists, Atlantis, Aurora, the explosion investigation, Commander Moore, MDR recovery, FES labs, the black obelisk, and common progression blockers.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-09-13",
      dateModified: "2026-09-13",
      about: [
        {
          "@type": "VideoGame",
          name: "The Crust",
        },
        {
          "@type": "Thing",
          name: "The Crust walkthrough",
        },
        {
          "@type": "Thing",
          name: "The Crust 1.0 story",
        },
        {
          "@type": "Thing",
          name: "The Crust progression",
        },
        {
          "@type": "Thing",
          name: "Hope 2",
        },
        {
          "@type": "Thing",
          name: "Atlantis complex",
        },
        {
          "@type": "Thing",
          name: "Aurora Project",
        },
        {
          "@type": "Thing",
          name: "Commander Moore",
        },
        {
          "@type": "Thing",
          name: "Mobile Drilling Rig",
        },
        {
          "@type": "Thing",
          name: "FES laboratories",
        },
        {
          "@type": "Thing",
          name: "Black Obelisk",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="The Crust 1.0 Walkthrough: Story & Progression Route"
          description="Follow the campaign in the order that actually opens new systems: stabilize the colony, push Hope 2, prepare for colonists, then follow the investigation through Aurora, MDR, the FES labs, and the black obelisk."
          gameTitle="The Crust"
          gameHref="/the-crust"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="September 13, 2026"
          toc={[
            {
              id: "campaign-route",
              label: "How the campaign route works",
            },
            {
              id: "stabilize-first",
              label: "Stabilize the colony first",
            },
            {
              id: "hope-2",
              label: "Hope 2",
            },
            {
              id: "life-support",
              label: "Water, oxygen & Living Quarters",
            },
            {
              id: "first-colonists",
              label: "First colonists",
            },
            {
              id: "atlantis",
              label: "Atlantis rescue",
            },
            {
              id: "aurora-choice",
              label: "Aurora choice",
            },
            {
              id: "epicenter",
              label: "Explosion epicenter",
            },
            {
              id: "commander-moore",
              label: "Commander Moore",
            },
            {
              id: "midgame-parallel",
              label: "Midgame priorities",
            },
            {
              id: "mdr",
              label: "Recover the MDR",
            },
            {
              id: "fes-labs",
              label: "FES labs",
            },
            {
              id: "black-obelisk",
              label: "Black obelisk",
            },
            {
              id: "when-to-return-base",
              label: "When to return to base",
            },
            {
              id: "progression-stalls",
              label: "Why progression stalls",
            },
            {
              id: "what-next",
              label: "What to do next",
            },
          ]}
          relatedLinks={[
            {
              href: "/the-crust",
              label: "The Crust Guide Hub",
            },
            {
              href: "/the-crust/beginners-guide",
              label: "The Crust Beginner Guide",
            },
            {
              href: "/the-crust/hope-2-choice",
              label: "The Crust Hope 2 Choice",
            },
            {
              href: "/the-crust/living-quarters",
              label: "The Crust Living Quarters Guide",
            },
            {
              href: "/the-crust/cargo-terminal",
              label: "The Crust Cargo Terminal Guide",
            },
            {
              href: "/the-crust/contracts-guide",
              label: "The Crust Contracts Guide",
            },
            {
              href: "/the-crust/achievements",
              label: "The Crust Achievements Guide",
            },
          ]}
        >
          <TheCrustWalkthroughContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}