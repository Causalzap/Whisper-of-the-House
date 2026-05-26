import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ParalivesHubContent from "@/data/paralives/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-skills-panel-knowledge-skills.webp`,
  `${siteUrl}/images/paralives/paralives-career-strikes-schedule.webp`,
  `${siteUrl}/images/paralives/paralives-career-upgrade-bonus.webp`,
  `${siteUrl}/images/paralives/paralives-job-postings-skill-requirements.webp`,
];

const toc = [
  { id: "start-here", label: "Start here" },
  { id: "progression-loop", label: "Progression loop" },
  { id: "minimum-framework", label: "First-save plan" },
  { id: "system-overview", label: "Systems" },
  { id: "where-problems-start", label: "Common mismatches" },
  { id: "reading-order", label: "Reading order" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
  {
    href: "/paralives/level-skills-faster",
    label: "How to Level Skills Faster",
  },
  {
    href: "/paralives/job-performance-not-improving",
    label: "Job Performance Not Improving",
  },
  {
    href: "/paralives/paramaker-stats-vibes-personality",
    label: "Paramaker Stats, Vibes and Personality",
  },
];

export const metadata: Metadata = {
    title: "Paralives Guide: Beginner Tips, Skills, Careers & Builds",
description:
  "Start here for Paralives beginner tips, Paramaker stats, skills, careers, early builds, job performance fixes and progression routes.",
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: "Paralives Guide: Skills, Careers, Builds and Points",
      description:
        "A practical Paralives guide hub for beginner tips, early builds, skill leveling, job performance, careers and upgrade points.",
      url: pageUrl,
      siteName: "Whisper of the House",
      type: "article",
      images: [
        {
          url: imageUrls[0],
          width: 1600,
          height: 900,
          alt: "Paralives skills panel showing Knowledge Skills and related skills.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Paralives Guide: Beginner Tips, Skills & Careers",
      description:
        "Find the right Paralives guide for builds, skills, careers, points and job performance problems.",
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
          name: "Paralives Guide",
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
        "Paralives Skills and Careers Guide: Early Builds, Skill Leveling, Job Performance, Upgrade Points and Progression Routes",
      description:
        "A player-focused Paralives hub that helps early-game players find the right guide for their current problem. It explains the core progression loop between routes, stats, skills, careers, job performance and upgrades, then directs players to focused guides for early builds, faster skill leveling, job performance problems and upgrade point decisions.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Skills" },
        { "@type": "Thing", name: "Paralives Careers" },
        { "@type": "Thing", name: "Knowledge Skills" },
        { "@type": "Thing", name: "Job Performance" },
        { "@type": "Thing", name: "Upgrade Points" },
        { "@type": "Thing", name: "Early Game Builds" },
        { "@type": "Thing", name: "Career Progression" },
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
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "I am completely new to Paralives. Which guide should I read first?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Start with the Best Early Game Skills, Talents and Careers guide. It helps you choose a route before you spend too much time training random skills or taking a mismatched job.",
          },
        },
        {
          "@type": "Question",
          name: "What order should I read the Paralives guides in?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "For most players, read the early-game route guide first, the skill leveling guide second, the job performance guide third, and the upgrade points guide fourth. If you are already stuck in a job, start with the job performance guide instead.",
          },
        },
        {
          "@type": "Question",
          name: "Why are skills, careers and upgrade points connected in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Skills affect job performance, job performance affects Career Points, Career Points affect rank and perks, and those choices affect whether your route keeps moving or stalls.",
          },
        },
        {
          "@type": "Question",
          name: "Is this Paralives page a full wiki?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. This page is a hub for player decisions. It points to focused guides instead of listing every career, skill, item or mechanic.",
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
          title="Paralives Skills and Careers Guide"
          description="Use this hub to find the right guide for your problem: early builds, slow skills, stuck jobs, or confusing upgrade points."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <ParalivesHubContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}