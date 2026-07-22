import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import VsGrime1DifferencesContent from "@/data/grime-2/vs-grime-1-differences.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/grime-2/vs-grime-1-differences`;

export const metadata: Metadata = {
  title: "GRIME II vs GRIME 1: What Changed and What Improved?",
  description:
    "Wondering how GRIME II compares with the first game? This guide breaks down combat freedom, Molds, weapons, world design, atmosphere, and which game feels better for different players.",
  alternates: {
    canonical: pageUrl,
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
          name: "GRIME II",
          item: `${siteUrl}/grime-2`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "GRIME II vs GRIME 1 Differences",
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
      headline: "GRIME II vs GRIME 1: What Changed and What Improved?",
      description:
        "This comparison explains the biggest differences between GRIME II and the original GRIME, including combat freedom, Molds, dynamic weapons, atmosphere, and which game may suit different players better.",
      image: [
        `${siteUrl}/images/grime-2/vs-grime-1-differences/grime-2-combat.webp`,
        `${siteUrl}/images/grime-2/vs-grime-1-differences/grime-2-world.webp`,
        `${siteUrl}/images/grime-2/vs-grime-1-differences/grime-1-battle.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-04",
      about: [
        {
          "@type": "VideoGame",
          name: "GRIME II",
        },
        {
          "@type": "VideoGame",
          name: "GRIME",
        },
        {
          "@type": "Thing",
          name: "Molds system",
        },
        {
          "@type": "Thing",
          name: "Combat freedom",
        },
        {
          "@type": "Thing",
          name: "Art direction",
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
          title="GRIME II vs GRIME 1: What Changed and What Improved?"
          description="Wondering how GRIME II compares with the first game? This guide breaks down combat freedom, Molds, weapons, world design, atmosphere, and which game feels better for different players."
          gameTitle="GRIME II"
          gameHref="/grime-2"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 4, 2026"
          toc={[
            {
              id: "the-biggest-difference-between-grime-ii-and-grime-1",
              label: "Biggest difference",
            },
            {
              id: "how-grime-ii-changes-combat-freedom",
              label: "Combat freedom",
            },
            {
              id: "how-molds-and-dynamic-weapons-make-grime-ii-broader",
              label: "Molds and weapons",
            },
            {
              id: "what-grime-ii-clearly-improves-over-grime-1",
              label: "Clear improvements",
            },
            {
              id: "what-is-different-but-not-necessarily-better",
              label: "Different, not always better",
            },
            {
              id: "what-grime-1-fans-may-not-like-about-grime-ii",
              label: "What old fans may dislike",
            },
            {
              id: "which-game-is-better-for-different-types-of-players",
              label: "Which game is better for you",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/grime-2",
              label: "GRIME II Guide Hub",
            },
            {
              href: "/grime-2/best-early-weapons",
              label: "GRIME II Best Early Weapons",
            },
            {
              href: "/grime-2/kankan-guide",
              label: "GRIME II Kankan Guide",
            },
            {
              href: "/grime-2/blade-mammoth-boss-guide",
              label: "How to Beat Blade Mammoth in GRIME II",
            },
          ]}
        >
          <VsGrime1DifferencesContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}