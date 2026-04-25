import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import InviteVillagersGuideContent from "@/data/holovillage-our-cozy-days/how-to-invite-villagers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const gameUrl = `${siteUrl}/holovillage-our-cozy-days`;
const pageUrl = `${gameUrl}/how-to-invite-villagers`;

export const metadata: Metadata = {
  title:
    "How to Invite Villagers in holoVillage: Houses, Points & Jobs",
  description:
    "Learn how to invite villagers in holoVillage: Our Cozy Days, including villager houses, visitors, exchange points, invite points, next-day move-ins, jobs, and the workbox.",
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
          name: "holoVillage: Our Cozy Days",
          item: gameUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Invite Villagers in holoVillage",
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
        "How to Invite Villagers in holoVillage: Houses, Visitors, Exchange Points, Jobs, and Workbox Explained",
      description:
        "This holoVillage: Our Cozy Days villager guide explains why you need a vacant villager house, how visitors and exchange points work, how to invite a specific villager, when villagers move in, how jobs work, and what the workbox does.",
      image: [
        `${siteUrl}/images/holovillage-our-cozy-days/how-to-invite-villagers.webp`,
      ],
      inLanguage: "en",
      dateModified: "2026-04-24",
      about: [
        {
          "@type": "VideoGame",
          name: "holoVillage: Our Cozy Days",
        },
        {
          "@type": "Thing",
          name: "Villagers",
        },
        {
          "@type": "Thing",
          name: "Villager House",
        },
        {
          "@type": "Thing",
          name: "Visitors",
        },
        {
          "@type": "Thing",
          name: "Exchange Points",
        },
        {
          "@type": "Thing",
          name: "Invite Points",
        },
        {
          "@type": "Thing",
          name: "Villager Jobs",
        },
        {
          "@type": "Thing",
          name: "Workbox",
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
          title="How to Invite Villagers in holoVillage: Houses, Visitors, Exchange Points, Jobs, and Workbox Explained"
          description="Learn how to invite villagers in holoVillage: Our Cozy Days, including why you need a vacant house, how visitors and invite points work, when villagers move in, how to assign jobs, and what the workbox is for."
          gameTitle="holoVillage: Our Cozy Days"
          gameHref="/holovillage-our-cozy-days"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="April 24, 2026"
          toc={[
            {
              id: "villager-system-at-a-glance",
              label: "Villager system at a glance",
            },
            {
              id: "how-villagers-work-in-holovillage",
              label: "How villagers work",
            },
            {
              id: "why-you-cant-invite-villagers-at-the-start",
              label: "Why you can't invite villagers",
            },
            {
              id: "how-to-build-a-villager-house",
              label: "Build a villager house",
            },
            {
              id: "visitors-exchange-points-and-invite-points",
              label: "Visitors and invite points",
            },
            {
              id: "how-to-invite-a-specific-villager",
              label: "Invite a specific villager",
            },
            {
              id: "when-invited-villagers-move-in",
              label: "When villagers move in",
            },
            {
              id: "how-to-assign-villager-jobs",
              label: "Assign villager jobs",
            },
            {
              id: "what-the-workbox-does",
              label: "What the workbox does",
            },
            {
              id: "what-if-the-villager-you-want-appears-too-early",
              label: "If a villager appears too early",
            },
            {
              id: "best-early-villager-jobs",
              label: "Best early jobs",
            },
            {
              id: "common-villager-problems",
              label: "Common villager problems",
            },
            {
              id: "common-mistakes",
              label: "Common mistakes",
            },
            {
              id: "faq",
              label: "FAQ",
            },
          ]}
          relatedLinks={[
            {
              href: "/holovillage-our-cozy-days",
              label: "holoVillage: Our Cozy Days Guide Hub",
            },
            {
              href: "/holovillage-our-cozy-days/fishing-guide",
              label: "holoVillage Fishing Guide",
            },
            {
              href: "/holovillage-our-cozy-days/beginner-guide",
              label: "holoVillage Beginner Guide",
            },
            {
              href: "/holovillage-our-cozy-days/shop-money-guide",
              label: "holoVillage Shop and Money Guide",
            },
            {
              href: "/holovillage-our-cozy-days/early-combat-guide",
              label: "holoVillage Early Combat Guide",
            },
          ]}
        >
          <InviteVillagersGuideContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}
