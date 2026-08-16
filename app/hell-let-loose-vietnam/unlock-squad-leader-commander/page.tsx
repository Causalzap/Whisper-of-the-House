import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import UnlockSquadLeaderCommanderContent from "@/data/hell-let-loose-vietnam/unlock-squad-leader-commander.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/hell-let-loose-vietnam`;
const pageUrl = `${hubUrl}/unlock-squad-leader-commander`;

const metadataTitle =
  "Hell Let Loose Vietnam Unlock Squad Leader & Commander";

const metadataDescription =
  "Fix Requirements Not Met for Squad Leader or Commander, check the required Tutorials, and troubleshoot training that still appears locked.";

const imageUrls = [
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-squad-leader-training-locked.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-basic-training-role-tutorials.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-squad-leader-training-complete.webp`,
  `${siteUrl}/images/hell-let-loose-vietnam/hell-let-loose-vietnam-commander-training-requirements.webp`,
];

const toc = [
  {
    id: "squad-leader-requirements",
    label: "Squad Leader requirements",
  },
  {
    id: "squad-leader-training-complete",
    label: "Confirm Squad Leader Training",
  },
  {
    id: "commander-requirements",
    label: "Commander requirements",
  },
  {
    id: "why-squad-leader-comes-first",
    label: "Why Squad Leader comes first",
  },
  {
    id: "requirements-not-met",
    label: "Requirements Not Met",
  },
  {
    id: "completed-training-still-locked",
    label: "Training complete but still locked",
  },
  {
    id: "commander-training-alone",
    label: "Commander Training alone",
  },
  {
    id: "training-menu-confusion",
    label: "Check Tutorial completion",
  },
  {
    id: "squad-leader-unlocked",
    label: "After Squad Leader unlocks",
  },
  {
    id: "commander-unlocked",
    label: "After Commander unlocks",
  },
  {
    id: "unlock-troubleshooting",
    label: "Unlock troubleshooting",
  },
];

const relatedLinks = [
  {
    href: "/hell-let-loose-vietnam",
    label: "Hell Let Loose: Vietnam Guide Hub",
  },
  {
    href: "/hell-let-loose-vietnam/tutorial-connect-tunnel-garrison",
    label: "Connect Tunnel to Garrison Tutorial",
  },
  {
    href: "/hell-let-loose-vietnam/usa-commander-guide",
    label: "USA Commander Guide",
  },
  {
    href: "/hell-let-loose-vietnam/spawn-garrison-outpost-guide",
    label: "Spawn, Garrison & Outpost Guide",
  },
  {
    href: "/hell-let-loose-vietnam/nva-tunnels-guide",
    label: "NVA Tunnels Guide",
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
    title: "Hell Let Loose Vietnam: Unlock Squad Leader & Commander",
    description:
      "Check the exact Basic Training requirements for Squad Leader and Commander, then diagnose Requirements Not Met when completed training is not recognized.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Hell Let Loose Vietnam Commander Requirements Not Met message listing Getting Started Commander and Squad Leader Tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hell Let Loose Vietnam: Unlock Squad Leader & Commander",
    description:
      "Squad Leader needs Getting Started and Squad Leader Training. Commander needs Getting Started, Squad Leader, and Commander Training.",
    images: [imageUrls[3]],
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
          name: "Unlock Squad Leader & Commander",
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
        "Hell Let Loose Vietnam: How to Unlock Squad Leader and Commander",
      description:
        "A practical Hell Let Loose: Vietnam guide for fixing Squad Leader and Commander Requirements Not Met. It covers the exact Basic Training prerequisites, confirms that Squad Leader requires Getting Started and Squad Leader Training, explains that Commander requires Getting Started, Squad Leader, and Commander Training, shows how to verify Tutorial completion, and troubleshoots cases where completed training is not recognized correctly.",
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
          name: "Hell Let Loose Vietnam Squad Leader unlock",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Commander unlock",
        },
        {
          "@type": "Thing",
          name: "Squad Leader Requirements Not Met",
        },
        {
          "@type": "Thing",
          name: "Commander Requirements Not Met",
        },
        {
          "@type": "Thing",
          name: "Squad Leader Training",
        },
        {
          "@type": "Thing",
          name: "Commander Training",
        },
        {
          "@type": "Thing",
          name: "Hell Let Loose Vietnam Basic Training",
        },
        {
          "@type": "Thing",
          name: "Commander training not recognized",
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
          title="How I Unlock Squad Leader and Commander When Requirements Are Not Met"
          description="I check the exact Basic Training prerequisites first, verify each Tutorial actually finished, then troubleshoot the separate case where completed training still is not recognized."
          gameTitle="Hell Let Loose: Vietnam"
          gameHref="/hell-let-loose-vietnam"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 16, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <UnlockSquadLeaderCommanderContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}