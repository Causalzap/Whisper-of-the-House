import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TribesmenGuideContent from "@/data/soulmask/tribesmen-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/soulmask/tribesmen-guide`;

export const metadata: Metadata = {
  title:
    "Soulmask Tribesmen Guide: Role System, Assignments, Farming, and Combat Followers",
  description:
    "Need help with Tribesmen in Soulmask: Shifting Sands? This guide covers recruitment, role assignments, farming, breeding, profession bonuses, production jobs, and combat followers.",
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
          name: "Soulmask",
          item: `${siteUrl}/soulmask`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tribesmen Guide",
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
        "Soulmask Tribesmen Guide: Role System, Assignments, Farming, and Combat Followers",
      description:
        "This guide explains how Tribesmen work in Soulmask: Shifting Sands, including recruitment, role assignments, farming loops, breeding automation, profession bonuses, production jobs, and deployed followers.",
      image: [
        `${siteUrl}/images/soulmask/first-recruit-work-menu.webp`,
        `${siteUrl}/images/soulmask/farm-manager-grainery-well.webp`,
        `${siteUrl}/images/soulmask/breeding-farm-chicken-loop.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-11",
      about: [
        {
          "@type": "VideoGame",
          name: "Soulmask",
        },
        {
          "@type": "Thing",
          name: "Shifting Sands",
        },
        {
          "@type": "Thing",
          name: "Tribesmen",
        },
        {
          "@type": "Thing",
          name: "Role System",
        },
        {
          "@type": "Thing",
          name: "Assignments",
        },
        {
          "@type": "Thing",
          name: "Breeding Farm",
        },
        {
          "@type": "Thing",
          name: "Combat Followers",
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
          title="Soulmask Tribesmen Guide: Role System, Assignments, Farming, and Combat Followers"
          description="Looking for the full Tribesmen route in Soulmask: Shifting Sands? This guide covers recruitment, role assignments, farming, gathering, breeding, profession bonuses, production jobs, and war party setup."
          gameTitle="Soulmask"
          gameHref="/soulmask"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 11, 2026"
          toc={[
            {
              id: "why-tribesmen-matter-in-shifting-sands",
              label: "Why Tribesmen matter",
            },
            {
              id: "how-to-unlock-and-recruit-tribesmen",
              label: "How to unlock and recruit Tribesmen",
            },
            {
              id: "best-first-tribesmen-jobs",
              label: "Best first Tribesmen jobs",
            },
            {
              id: "why-tribesmen-stop-working",
              label: "Why Tribesmen stop working",
            },
            {
              id: "how-farming-actually-works",
              label: "How farming actually works",
            },
            {
              id: "wild-collection-and-basic-resource-loops",
              label: "Wild collection and resource loops",
            },
            {
              id: "breeding-farm-and-animal-automation",
              label: "Breeding farm and animal automation",
            },
            {
              id: "profession-bonuses-and-why-output-matters",
              label: "Profession bonuses and output",
            },
            {
              id: "position-based-production-and-furnace-work",
              label: "Production positions and furnace work",
            },
            {
              id: "best-way-to-build-a-war-party",
              label: "How to build a war party",
            },
            {
              id: "what-tribesmen-still-do-badly",
              label: "What Tribesmen still do badly",
            },
            {
              id: "best-practical-tribesmen-order",
              label: "Best practical Tribesmen order",
            },
            {
              id: "what-still-needs-testing",
              label: "What still needs testing",
            },
            {
              id: "tribesmen-system-at-a-glance",
              label: "Tribesmen system at a glance",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/soulmask",
              label: "Shifting Sands Guide Hub",
            },
            {
              href: "/soulmask/shifting-sands-beginner-guide/",
              label: "Shifting Sands Beginner Guide",
            },
            {
              href: "/soulmask/airship-guide/",
              label: "Airship Guide",
            },
            {
              href: "/soulmask/tribesmen-guide/",
              label: "Tribesmen Guide",
            },

          ]}
        >
          <TribesmenGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}