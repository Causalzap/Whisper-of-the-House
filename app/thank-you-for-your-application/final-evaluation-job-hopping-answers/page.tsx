import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FinalEvaluationGuideContent from "@/data/thank-you-for-your-application/final-evaluation-job-hopping-answers.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application/final-evaluation-job-hopping-answers`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-permanent-contract-explained.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-minato-residents-association-mail.webp`,
];

const toc = [
{
id: "final-evaluation-job-hopping-answers",
label: "Final evaluation answers",
},
{
id: "use-this-page-for",
label: "Use this page for",
},
{
id: "day-30-diagnosis-table",
label: "Day 30 diagnosis",
},
{
id: "day-30-checks",
label: "Day 30 checks",
},
{
id: "job-for-life-vs-refuse",
label: "Job for Life vs Refuse",
},
{
id: "illegal-layoff-diagnosis",
label: "Illegal Layoff diagnosis",
},
{
id: "failed-performance-review-diagnosis",
label: "Failed Review diagnosis",
},
{
id: "job-hopping-answer-chain",
label: "Job-hopping answers",
},
{
id: "why-job-hopping-answers-fail",
label: "Why answers fail",
},
{
id: "do-not-mix-work-purpose-routes",
label: "Do not mix work-purpose routes",
},
{
id: "what-to-do-if-ending-is-wrong",
label: "Wrong ending troubleshooting",
},
{
id: "related-achievements",
label: "Related achievements",
},
{
id: "quick-route-links",
label: "Quick route links",
},
{
id: "what-to-read-next",
label: "What to read next",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/thank-you-for-your-application/endings-guide",
label: "Thank You For Your Application Endings Guide",
},
{
href: "/thank-you-for-your-application/achievements-guide",
label: "Thank You For Your Application Achievements Guide",
},
{
href: "/thank-you-for-your-application/resume-rules-thanks-letter-guide",
label: "Resume Rules & Thanks Letter Guide",
},
{
href: "/thank-you-for-your-application/beginner-guide",
label: "Thank You For Your Application Beginner Guide",
},
{
href: "/thank-you-for-your-application",
label: "Thank You For Your Application Guide Hub",
},
];

const faqEntities = [
{
"@type": "Question",
name: "I had an A or B rating but still got Illegal Layoff. Why?",
acceptedAnswer: {
"@type": "Answer",
text: "A recorded H11 scanner violation or shock misuse can override the clean Day 30 branch. A good rating does not erase those records.",
},
},
{
"@type": "Question",
name: "I expected Job for Life but got Failed Performance Review. What went wrong?",
acceptedAnswer: {
"@type": "Answer",
text: "Your final rating likely landed in the C or D range. Repair earlier work accuracy, especially wrong approvals, wrong rejections, missed document rules, and incorrect Thanks Letter reasons.",
},
},
{
"@type": "Question",
name: "I reached the job-hopping interview but failed. Why?",
acceptedAnswer: {
"@type": "Answer",
text: "One of the answers probably did not match the successful chain. The job-hopping route wants loyal motivation, excitement to work, belief in Minato Communications, and cross-department teamwork.",
},
},
{
"@type": "Question",
name: "Should I choose the no-purpose work answer for job-hopping?",
acceptedAnswer: {
"@type": "Answer",
text: "No. The no-purpose answer belongs to What’s the point of working?. Job-hopping success uses the loyal-worker answer chain.",
},
},
{
"@type": "Question",
name: "Why did I get Job for Life instead of The Meaning of Work?",
acceptedAnswer: {
"@type": "Answer",
text: "On the A02 Day 29 branch, choosing (Take A01's hand) points toward Job for Life. For The Meaning of Work, choose (Do not reach out).",
},
},
{
"@type": "Question",
name: "Why did Escape not appear on Day 29?",
acceptedAnswer: {
"@type": "Answer",
text: "You probably missed or answered K88's Day 27 work-shift Confidential Mail differently. The Escape setup starts during the work shift, not from apartment mail after work.",
},
},
{
"@type": "Question",
name: "Where are the exact Day 30 rating thresholds?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the rating table in the Endings Guide. This page focuses on diagnosing the final result after the game has already chosen a route.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Job-Hopping Answers",
description:
"Fix Day 30 final evaluation routes, Illegal Layoff, Failed Review and wrong endings with the exact Thank You For Your Application job-hopping answers.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Thank You For Your Application Job-Hopping Answers",
description:
"Use the final evaluation troubleshooting guide for Day 30, Illegal Layoff, Failed Performance Review, Job for Life, refusal routes and job-hopping answers.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Permanent contract explanation in Thank You For Your Application.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Thank You For Your Application Job-Hopping Answers",
description:
"Exact job-hopping answers plus Day 30 troubleshooting for Illegal Layoff, Failed Review, Job for Life and wrong endings.",
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
name: "Thank You For Your Application Guide",
item: `${siteUrl}/thank-you-for-your-application`,
},
{
"@type": "ListItem",
position: 3,
name: "Final Evaluation & Job-Hopping Answers",
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
"Thank You For Your Application Final Evaluation and Job-Hopping Answers",
description:
"A player-focused Thank You For Your Application final evaluation troubleshooting guide covering Day 30 result diagnosis, Job for Life vs Refuse Permanent Employment, Illegal Layoff causes, Failed Performance Review diagnosis, H11 scanner violations, shock misuse, exact job-hopping final interview answers, wrong job-hopping answer patterns, What’s the point of working? route conflicts, wrong-ending troubleshooting, Escape setup checks, The Meaning of Work branch checks, and related achievements such as A New Job for Life, Job for Life, The Meaning of Work, Attitude Adjustment, and What’s the point of working?.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-20",
dateModified: "2026-06-20",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Thank You For Your Application",
},
{
"@type": "Thing",
name: "Thank You For Your Application final evaluation",
},
{
"@type": "Thing",
name: "job-hopping answers",
},
{
"@type": "Thing",
name: "A New Job for Life",
},
{
"@type": "Thing",
name: "Job for Life",
},
{
"@type": "Thing",
name: "Refuse Permanent Employment",
},
{
"@type": "Thing",
name: "Illegal Layoff",
},
{
"@type": "Thing",
name: "Failed Performance Review",
},
{
"@type": "Thing",
name: "Day 30 final evaluation",
},
{
"@type": "Thing",
name: "H11 scanner violation",
},
{
"@type": "Thing",
name: "shock misuse",
},
{
"@type": "Thing",
name: "Minato Residents' Association",
},
{
"@type": "Thing",
name: "Minato Communications",
},
{
"@type": "Thing",
name: "What’s the point of working?",
},
{
"@type": "Thing",
name: "The Meaning of Work",
},
{
"@type": "Thing",
name: "Escape route",
},
{
"@type": "Thing",
name: "K88 Confidential Mail",
},
{
"@type": "Thing",
name: "wrong ending troubleshooting",
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
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: faqEntities,
},
],
};

export default function Page() {
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

    <GuideArticlePage
      title="Thank You For Your Application Final Evaluation & Job-Hopping Answers"
      description="Diagnose Day 30 results, fix wrong endings, avoid Illegal Layoff, understand Failed Performance Review, and use the exact job-hopping answer chain."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <FinalEvaluationGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
