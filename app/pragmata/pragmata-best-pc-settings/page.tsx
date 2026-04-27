import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PragmataBestPcSettingsContent from "@/data/pragmata/pragmata-best-pc-settings.mdx";

const pageUrl =
  "https://www.whisperofthehouse.com/pragmata/pragmata-best-pc-settings";
const siteUrl = "https://www.whisperofthehouse.com";
const gameHubUrl = `${siteUrl}/pragmata`;

export const metadata: Metadata = {
  title: "Pragmata Best PC Settings: Best Graphics, RT, DLSS & FSR",
  description:
    "The best Pragmata PC settings for 8GB and 16GB GPUs, including whether to use ray tracing, path tracing, DLSS, and FSR.",
  alternates: {
    canonical: pageUrl,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
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
        name: "Pragmata",
        item: gameHubUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pragmata Best PC Settings",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Pragmata Best PC Settings: Best Graphics, RT, DLSS & FSR",
    description:
      "The best Pragmata PC settings for 8GB and 16GB GPUs, including whether to use ray tracing, path tracing, DLSS, and FSR.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: "en",
    datePublished: "2026-04-18",
    dateModified: "2026-04-18",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Whisper of the House",
      url: siteUrl,
    },
    about: {
      "@type": "VideoGame",
      name: "Pragmata",
    },
    author: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
    publisher: {
      "@type": "Organization",
      name: "Whisper of the House",
    },
  },
];

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
          title="Pragmata Best PC Settings"
          description="This guide explains the best Pragmata PC settings for most players, including when to use ray tracing, path tracing, DLSS, FSR, and the Balanced preset for 8GB GPUs."
          gameTitle="Pragmata"
          gameHref="/pragmata"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 18, 2026"
          toc={[
            {
              id: "quick-answer",
              label: "Quick answer",
            },
            {
              id: "best-pc-settings-for-most-players",
              label: "Best settings for most players",
            },
            {
              id: "why-the-quality-preset-is-not-always-the-best-looking-option",
              label: "Why Quality is not always best-looking",
            },
            {
              id: "should-you-turn-ray-tracing-off",
              label: "Should you turn RT off?",
            },
            {
              id: "rt-on-vs-rt-off-what-actually-changes",
              label: "RT On vs RT Off",
            },
            {
              id: "rt-on-vs-path-tracing-which-one-is-better",
              label: "RT On vs Path Tracing",
            },
            {
              id: "best-settings-for-8gb-gpus",
              label: "Best settings for 8GB GPUs",
            },
            {
              id: "best-settings-for-16gb-gpus",
              label: "Best settings for 16GB GPUs",
            },
            {
              id: "why-upscaling-looks-worse-with-rt-enabled",
              label: "Why upscaling looks worse with RT",
            },
            {
              id: "best-pragmata-pc-settings-by-scenario",
              label: "Best settings by scenario",
            },
            {
              id: "final-verdict",
              label: "Final verdict",
            },
          ]}
          relatedLinks={[
            {
              href: "/pragmata",
              label: "Pragmata Guide Hub",
            },
            {
              href: "/pragmata/pragmata-best-early-upgrades",
              label: "Pragmata Best Early Upgrades",
            },
            {
              href: "/pragmata/pragmata-unknown-signal-guide",
              label: "Pragmata Unknown Signal Guide",
            },
            {
              href: "/pragmata/pragmata-pure-lunum-guide",
              label: "Pragmata Pure Lunum Farming Guide",
            },
          ]}
        >
          <PragmataBestPcSettingsContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}