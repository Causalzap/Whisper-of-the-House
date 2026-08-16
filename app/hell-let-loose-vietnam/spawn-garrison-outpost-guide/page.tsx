import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import SpawnGarrisonOutpostGuideContent from "@/data/hell-let-loose-vietnam/spawn-garrison-outpost-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/spawn-garrison-outpost-guide`;

const metadataTitle =
  "Hell Let Loose Vietnam Spawn, Garrison & Outpost Guide";

const metadataDescription =
  "Use Outposts and Garrisons correctly, check 50/100 supply costs and 200m spacing, fix placement failures, and rebuild a collapsed spawn network.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-spawn-network-outpost-garrison.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-garrison-50-supplies.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-garrison-enemy-territory-rules.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-forward-outpost-destroyed.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-specialist-supplies-for-garrison.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-enemy-garrison-dismantle.webp`,
];

const toc = [
  {
    id: "outpost-vs-garrison",
    label: "Outpost vs. Garrison",
  },
  {
    id: "outposts",
    label: "How I use Outposts",
  },
  {
    id: "garrisons",
    label: "How I use Garrisons",
  },
  {
    id: "garrison-territory-rules",
    label: "Garrison territory rules",
  },
  {
    id: "garrison-200-meter-rule",
    label: "200m Garrison spacing",
  },
  {
    id: "territory-flip",
    label: "When territory flips",
  },
  {
    id: "rebuild-after-collapse",
    label: "Rebuild a collapsed network",
  },
  {
    id: "specialist-supply-workflow",
    label: "Specialist supply workflow",
  },
  {
    id: "backup-before-offense",
    label: "Backup before offense",
  },
  {
    id: "garrison-coverage",
    label: "Build better Garrison coverage",
  },
  {
    id: "destroy-enemy-spawns",
    label: "Destroy enemy spawns",
  },
  {
    id: "nva-tunnels",
    label: "Garrisons and NVA Tunnels",
  },
  {
    id: "spawn-network-check",
    label: "Spawn network checklist",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/beginner-guide",
    label: "Beginner Guide",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
  },
  {
    href: "/hell-let-loose-vietnam/usa-commander-guide",
    label: "USA Commander Guide",
  },
  {
    href: "/hell-let-loose-vietnam/unlock-squad-leader-commander",
    label: "Unlock Squad Leader & Commander",
  },
];

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Hell Let Loose Vietnam Spawn, Garrison & Outpost Guide",
    description:
      "Learn when I use an Outpost or Garrison, how supplies, territory and 200m spacing affect placement, and how I rebuild the spawn network after it collapses.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam Squad Leader spawn training covering Outposts and Garrisons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam Spawn, Garrison & Outpost Guide",
    description:
      "Use OPs and Garrisons correctly, understand 50/100 supply costs and 200m spacing, and rebuild the spawn network instead of making another long run.",
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
          name: "Hell Let Loose: Vietnam Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Spawn, Garrison & Outpost Guide",
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
        "Hell Let Loose Vietnam Spawn, Garrison and Outpost Guide",
      description:
        "A practical Hell Let Loose: Vietnam spawn guide covering the differences between Outposts and Garrisons, squad-only Outpost spawning, neutral-territory Outposts, 50-supply friendly Garrisons, 100-supply unlocked-enemy-territory Garrisons, the 200-meter Garrison spacing rule, locked territory, Specialist supply workflows, collapsed spawn-network recovery, defensive backup routes, Garrison coverage, and enemy spawn removal.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-16",
      dateModified: "2026-08-16",
      articleSection: "Hell Let Loose: Vietnam Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Hell Let Loose: Vietnam",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam spawns",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Garrison",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Outpost",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Garrison supplies",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam 50 supply Garrison",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam 100 supply Garrison",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam 200 meter Garrison spacing",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Garrison placement",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam spawn network",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Specialist supplies",
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
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <GuideArticlePage
          title="How I Build a Spawn Network Instead of Running Back From HQ"
          description="I use Outposts for squad mobility, Garrisons for team routes, check supplies and 200m spacing before placing, and rebuild from the rear forward when the network collapses."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <SpawnGarrisonOutpostGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}