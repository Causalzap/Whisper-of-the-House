import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BestEarlyGameContent from "@/data/paralives/best-early-game-skills-talents-careers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/paralives/best-early-game-skills-talents-careers`;

const imageUrls = [
  `${siteUrl}/images/paralives/paralives-job-postings-skill-requirements.webp`,
  `${siteUrl}/images/paralives/paralives-career-strikes-schedule.webp`,
  `${siteUrl}/images/paralives/paralives-career-upgrade-bonus.webp`,
  `${siteUrl}/images/paralives/paralives-knowledge-skill-food-cooking.webp`,
];

const toc = [
  { id: "pick-your-route", label: "Pick route" },
  { id: "application-points", label: "Application Points" },
  { id: "application-points-example", label: "Rank 5 example" },
  { id: "job-hopping", label: "Job hopping" },
  { id: "money-route", label: "Money route" },
  { id: "tech-route", label: "Tech route" },
  { id: "low-maintenance-route", label: "Easy routine" },
  { id: "social-route", label: "Social route" },
  { id: "knowledge-skills", label: "Knowledge Skills" },
  { id: "inspired-training", label: "Inspired" },
  { id: "best-careers", label: "Careers" },
  { id: "career-upgrade-points", label: "Career Points" },
  { id: "quick-build-summary", label: "Builds" },
  { id: "mistakes", label: "Mistakes" },
  { id: "faq", label: "FAQ" },
];

const relatedLinks = [
  { href: "/paralives", label: "Paralives Skills and Careers Guide" },
  { href: "/paralives/level-skills-faster", label: "How to Level Skills Faster" },
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
  title: "Best Early Game Skills, Talents & Careers in Paralives",
  description:
    "Pick the best early skills, talents, vibes and careers in Paralives. Learn routes for money, tech jobs, social play and smoother progression.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Best Early Game Skills, Talents and Careers in Paralives",
    description:
      "A practical Paralives early-game guide covering skills, talents, vibes, Application Points, career routes, Knowledge Skills, job hopping and Career Upgrade Points.",
    url: pageUrl,
    siteName: "Whisper of the House",
    type: "article",
    images: [
      {
        url: imageUrls[0],
        width: 1600,
        height: 900,
        alt: "Paralives job postings board showing career ranks salaries and not qualified jobs.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Early Game Skills, Talents and Careers in Paralives",
    description:
      "Choose a stronger first route in Paralives with clear picks for money, tech, social jobs, Knowledge Skills and career upgrades.",
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
          name: "Best Early Game Skills, Talents and Careers",
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
        "Best Early Game Skills, Talents, Vibes and Careers in Paralives: Application Points, Knowledge Skills, Job Hopping and Career Upgrade Points",
      description:
        "A player-focused Paralives early-game guide explaining how to choose a strong first route based on money, tech careers, easier daily life or social play. It covers Application Points, why Serious is useful for many career-focused builds, how job rank and qualification work, how Knowledge Skills support related skills, how to use Inspired as a small training bonus, which early careers match each route, when to job hop, and how to decide between upgrading job rank or choosing career perks.",
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      about: [
        { "@type": "VideoGame", name: "Paralives" },
        { "@type": "Thing", name: "Paralives Skills" },
        { "@type": "Thing", name: "Paralives Careers" },
        { "@type": "Thing", name: "Paralives Talents" },
        { "@type": "Thing", name: "Paralives Vibes" },
        { "@type": "Thing", name: "Application Points" },
        { "@type": "Thing", name: "Knowledge Skills" },
        { "@type": "Thing", name: "Career Upgrade Points" },
        { "@type": "Thing", name: "Early Game Builds" },
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
          name: "What is the best early-game setup in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The best early-game setup depends on your goal. For fast money, Serious with Art, Creativity and Painting is strong. For tech careers, Serious with Technology, Mind and Programming works well. For easier daily life, Energetic with Fitness and Physique is a smoother option. For social jobs, Overjoyed with Charisma and social perks is a better fit.",
          },
        },
        {
          "@type": "Question",
          name: "How do Application Points work in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Application Points help decide whether your Para qualifies for higher-rank jobs. Rank 1 jobs require no Application Points, while higher-rank jobs need more. Application Points can come from relevant skills, work experience, Charisma and Vibe bonuses such as Serious.",
          },
        },
        {
          "@type": "Question",
          name: "Why is Serious good for early careers in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Serious is strong for many career-focused players because it can help with job applications and productive work. It is especially useful when paired with a clear skill route such as Technology and Programming or Art and Painting.",
          },
        },
        {
          "@type": "Question",
          name: "Should I pick the highest-paying job in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Not always. A higher-paying job is only useful if your Para can qualify for it and perform well. A lower-rank job that matches your skills is usually better than a higher-rank job that gives poor performance or strikes.",
          },
        },
        {
          "@type": "Question",
          name: "How do Knowledge Skills work in Paralives?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Knowledge Skills act like parent skills. Raising a Knowledge Skill helps the related practical skills feel better to train. For example, Technology supports Programming and Graphic Design, Food supports Cooking, and Art supports Painting.",
          },
        },
        {
          "@type": "Question",
          name: "Should I upgrade job rank or pick a career perk?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "If your skills are strong and job performance is stable, upgrading job rank is usually good. If your skills are weak, performance is unstable, or you are close to strikes, a career perk, vacation day, performance bonus or stability option can be safer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I change my Para later?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "You can change some parts of your Para later with commands such as editcharacter or personality reset options, but starting choices still matter. Save before making major changes.",
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
          title="Best Early Game Skills, Talents, and Careers in Paralives"
          description="Not sure what to pick first? Choose a route that actually fits your Para: money, tech, easier daily life, or social jobs."
          gameTitle="Paralives"
          gameHref="/paralives"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="May 25, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <BestEarlyGameContent />
        </GuideArticlePage>
      </main>
      <Footer />
    </>
  );
}