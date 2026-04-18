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
              id: "what-tribesmen-actually-do-in-shifting-sands",
              label: "What Tribesmen actually do",
            },
            {
              id: "how-recruitment-actually-works",
              label: "How recruitment works",
            },
            {
              id: "first-jobs-that-actually-remove-friction",
              label: "The first useful jobs",
            },
            {
              id: "why-workers-go-idle",
              label: "Why workers go idle",
            },
            {
              id: "when-farming-and-gathering-become-real-automation",
              label: "When automation becomes real",
            },
            {
              id: "animal-loops-and-why-specialists-matter",
              label: "Animal loops and specialists",
            },
            {
              id: "production-ownership-and-later-base-scaling",
              label: "Later production scaling",
            },
            {
              id: "war-party-and-field-use",
              label: "War party and field use",
            },
            {
              id: "airships-change-reach-not-base-economy",
              label: "Airships and the bonfire base",
            },
            {
              id: "where-strict-optimization-ends",
              label: "Where strict optimization ends and playstyle begins",
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

          ]}
        >
          <TribesmenGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}