import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import JobPerformanceContent from "@/data/paralives/job-performance-not-improving.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/job-performance-not-improving`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-career-strikes-schedule.webp`,
  `${siteUrl}/images/paralives/paralives-needs-before-work.webp`,
  `${siteUrl}/images/paralives/paralives-job-postings-skill-requirements.webp`,
  `${siteUrl}/images/paralives/paralives-career-upgrade-bonus.webp`,
  `${siteUrl}/images/paralives/paralives-storyteller-skill-buff.webp`,
];

const toc = [
  { id: "read-career-panel", label: "Career panel" },
  { id: "needs-before-work", label: "Needs" },
  { id: "skills-match-job", label: "Skills" },
  { id: "dont-rush-rank", label: "Job rank" },
  { id: "career-perks", label: "Perks" },
  { id: "story-cards", label: "Story Cards" },
  { id: "strikes", label: "Strikes" },
  { id: "still-stuck", label: "Still stuck" },
  { id: "recovery-plan", label: "Recovery plan" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/paralives", label: "Paralives Skills and Careers Guide" },
  { href: "/paralives/level-skills-faster", label: "How to Level Skills Faster" },
  {
    href: "/paralives/paramaker-stats-vibes-personality",
    label: "Paramaker Stats, Vibes and Personality",
  },
  {
    href: "/paralives/best-early-game-skills-talents-careers",
    label: "Best Early Game Skills, Talents and Careers",
  },
];

export const metadata: Metadata = {
  title: "Paralives Job Performance Not Improving? Fixes & Strikes",
  description:
    "Fix Paralives job performance problems with skills, needs, Story Cards, perks, strikes, Moon Book, vacation days and career rank checks.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Paralives Job Performance Not Improving?",
    description:
      "A practical Paralives career troubleshooting guide covering stuck job performance, weak skills, needs, rank problems, Story Cards, strikes, Moon Book and vacation day fixes.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives career panel showing job performance, low skills and two strikes.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paralives Job Performance Not Improving?",
    description:
      "Stuck at work or sitting on 2/3 strikes? Use this Paralives checklist to fix skills, needs, perks, Story Cards and career risk.",
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
          item: `${siteUrl}/paralives`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Job Performance Not Improving",
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
        "Paralives Job Performance Not Improving: Career Panel, Needs, Skills, Rank, Story Cards, Strikes, Moon Book and Vacation Day Fixes",
      description:
        "A troubleshooting guide for Paralives players whose job performance is not improving, dropping or getting stuck. It explains how to read the career panel, diagnose low needs, bad mood, red job skill icons, weak required skills, over-upgraded job rank, risky career perks, Story Card work bonuses, Moon Book strike removal, strike expiration, Storyteller Settings, ADDVACATIONDAY, CLEARSTRIKES and a simple three-day recovery plan for a struggling career.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Job Performance" },
        { "@type": "Thing", name: "Paralives Careers" },
        { "@type": "Thing", name: "Strikes" },
        { "@type": "Thing", name: "Moon Book" },
        { "@type": "Thing", name: "Story Cards" },
        { "@type": "Thing", name: "Career Upgrade Points" },
        { "@type": "Thing", name: "ADDVACATIONDAY" },
        { "@type": "Thing", name: "CLEARSTRIKES" },
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
          name: "Why is my job performance not improving in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Job performance usually gets stuck because your Para has low needs, bad mood, weak job-related skills, a poor schedule, an over-upgraded job rank, active penalties or strikes. Check the career panel first and fix the red flags before pushing rank again.",
          },
        },
        {
          "@type": "Question",
          name: "What do red skill icons mean in the Paralives career panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Red skill icons usually mean that a required job skill is hurting your work performance. Train that skill or its related Knowledge Skill before upgrading job rank again.",
          },
        },
        {
          "@type": "Question",
          name: "What should I do if I have two strikes in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You are not doomed. Strikes can expire after 14 in-game days, so avoid getting a third strike until they clear. You can also use Moon Book if it appears, take a vacation day, add one with ADDVACATIONDAY, adjust Storyteller Settings, or use CLEARSTRIKES for a console reset.",
          },
        },
        {
          "@type": "Question",
          name: "What is Moon Book in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Moon Book is a Story Card option that can remove a strike when your Para already has one. If you are at 2/3 strikes and Moon Book appears, it is usually worth taking.",
          },
        },
        {
          "@type": "Question",
          name: "What does ADDVACATIONDAY do in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "ADDVACATIONDAY is a console command that adds a vacation day. It can help if your Para is close to getting fired, needs time to recover, or needs a day to train weak job skills before returning to work.",
          },
        },
        {
          "@type": "Question",
          name: "Can Story Cards improve job performance in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Some Story Cards can give work-related skill XP, job performance bonuses, rewards, job perks, small pay boosts or strike-related help. Check Story Cards before repeating another risky workday.",
          },
        },
        {
          "@type": "Question",
          name: "Should I always take a promotion in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. Higher rank usually means better pay, but it can also raise expectations. If your job skills are behind or the career panel shows red skill icons, train first before upgrading rank again.",
          },
        },
        {
          "@type": "Question",
          name: "Is job performance bugged in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It can be hard to tell during Early Access. Check needs, mood, required skills, schedule, rank, strikes, Story Cards and work results first. If several clean workdays still do not change anything, it may be a bug or tuning issue.",
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
          title="Job Performance Not Improving in Paralives?"
          description="Use this checklist when your Para keeps going to work but performance barely moves, drops, or gets stuck near strikes."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <JobPerformanceContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}