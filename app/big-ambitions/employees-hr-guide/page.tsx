import type { Metadata } from "next";

import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";

import EmployeesHrGuideContent from "@/data/big-ambitions/employees-hr-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const hubUrl = `${siteUrl}/big-ambitions`;
const pageUrl = `${hubUrl}/employees-hr-guide`;

const metadataTitle =
  "Big Ambitions Employees & HR Guide: Hiring and Automation";

const metadataDescription =
  "Hire and manage Big Ambitions 1.0 employees, handle demands and schedules, train staff, use HR Managers and Headhunters, and automate replacements.";

const imageUrls = [
  `${siteUrl}/images/big-ambitions/big-ambitions-employee-candidate-demands-office-phone.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-headhunter-recruitment-filters.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-hr-manager-training-absence-plan.webp`,
  `${siteUrl}/images/big-ambitions/big-ambitions-headhunter-automatic-replacement.webp`,
];

const toc = [
  {
    id: "employee-system",
    label: "Employee system",
  },
  {
    id: "recruit-employees",
    label: "Recruit employees",
  },
  {
    id: "employee-schedule",
    label: "Employee schedules",
  },
  {
    id: "employee-demands",
    label: "Employee demands",
  },
  {
    id: "employee-training",
    label: "Employee training",
  },
  {
    id: "hr-manager",
    label: "HR Manager",
  },
  {
    id: "absence-replacement",
    label: "Absent employees",
  },
  {
    id: "headhunter",
    label: "Headhunter",
  },
  {
    id: "headhunter-filters",
    label: "Recruitment filters",
  },
  {
    id: "automatic-replacement",
    label: "Automatic replacement",
  },
  {
    id: "large-workforce",
    label: "Large workforce",
  },
];

const relatedLinks = [
  {
    href: "/big-ambitions",
    label: "Big Ambitions Guide Hub",
  },
  {
    href: "/big-ambitions/progression-guide",
    label: "Progression Guide & What to Unlock Next",
  },
  {
    href: "/big-ambitions/best-businesses",
    label: "Best Businesses by Progression Stage",
  },
  {
    href: "/big-ambitions/warehouse-logistics-guide",
    label: "Warehouse & Logistics Guide",
  },
  {
    href: "/big-ambitions/achievements",
    label: "All 126 Achievements & Checklist",
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
    title: metadataTitle,
    description:
      "Manage Big Ambitions 1.0 employees from the first recruitment and schedule through HR Manager training, Headhunter filtering, and automatic staff replacement.",
    siteName: "Whisper of the House",
    images: [
      {
        url: imageUrls[3],
        width: 1600,
        height: 900,
        alt: "Big Ambitions Headhunter automatic replacement settings for resigning and retiring employees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description:
      "Handle hiring, schedules, employee demands, HR training, Headhunters, absences, resignations, and replacements in Big Ambitions 1.0.",
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
          name: "Big Ambitions Guide",
          item: hubUrl,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Employees & HR Guide",
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
        "Big Ambitions Employees and HR Guide: Hiring, Training and Automation",
      description:
        "A player-focused Big Ambitions 1.0 employee and HR guide covering recruitment, candidate skills and demands, employee schedules, manual and HR training, HR Manager plans, absence coverage, Headhunter recruitment filters, continuous recruiting, automatic replacement of resigning and retiring employees, and scaling a large workforce.",
      url: pageUrl,
      image: imageUrls,
      inLanguage: "en",
      datePublished: "2026-08-30",
      dateModified: "2026-08-30",
      articleSection: "Big Ambitions Guides",
      about: [
        {
          "@type": "VideoGame",
          name: "Big Ambitions",
          url: hubUrl,
        },
        {
          "@type": "Thing",
          name: "Big Ambitions employees",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions HR Manager",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions Headhunter",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions employee demands",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions employee schedule",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions employee training",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions automatic replacement",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions absent employees",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions resigning employees",
        },
        {
          "@type": "Thing",
          name: "Big Ambitions retiring employees",
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
          title="How I Hire, Train and Automate Employees in Big Ambitions 1.0"
          description="The first employees are easy to manage manually. The real shift comes when schedules, demands, training, sick calls, resignations and new hiring all start competing for the same attention, and HR becomes part of the company infrastructure."
          gameTitle="Big Ambitions"
          gameHref="/big-ambitions"
          breadcrumbBaseHref="/"
          breadcrumbBaseLabel="Home"
          updatedAt="August 30, 2026"
          toc={toc}
          relatedLinks={relatedLinks}
        >
          <EmployeesHrGuideContent />
        </GuideArticlePage>
      </main>

      <Footer />
    </>
  );
}