import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EndingsGuideContent from "@/data/thank-you-for-your-application/endings-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application/endings-guide`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-a02-apartment-concierge.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-a02-status-menu.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-work-shift-mail-panel.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-permanent-contract-explained.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-minato-residents-association-mail.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-probation-review-meeting.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-breakdown-index-apartment.webp`,
];

const toc = [
{
id: "thank-you-for-your-application-endings-guide",
label: "Endings guide",
},
{
id: "ending-checklist",
label: "Ending checklist",
},
{
id: "best-checkpoints",
label: "Best checkpoints",
},
{
id: "rating-thresholds",
label: "Rating thresholds",
},
{
id: "a02-true-ending",
label: "A02 True Ending",
},
{
id: "escape-ending",
label: "Escape Ending",
},
{
id: "day-30-final-evaluation",
label: "Day 30 final evaluation",
},
{
id: "job-for-life",
label: "Job for Life",
},
{
id: "refuse-permanent-employment",
label: "Refuse Permanent Employment",
},
{
id: "illegal-layoff",
label: "Illegal Layoff",
},
{
id: "failed-performance-review",
label: "Failed Performance Review",
},
{
id: "job-hopping-success",
label: "A New Job for Life",
},
{
id: "job-hopping-failure",
label: "Job-Hopping Failure",
},
{
id: "illegal-activity-ending",
label: "Illegal Activity",
},
{
id: "probation-failure",
label: "Probation Failure",
},
{
id: "mental-breakdown",
label: "Mental Breakdown",
},
{
id: "bills-and-residence-failure",
label: "Bills and Residence Failure",
},
{
id: "overtime-death",
label: "Overtime Death",
},
{
id: "recommended-ending-order",
label: "Recommended ending order",
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
href: "/thank-you-for-your-application",
label: "Thank You For Your Application Guide Hub",
},
{
href: "/thank-you-for-your-application/final-evaluation-job-hopping-answers",
label: "Final Evaluation & Job-Hopping Answers",
},
{
href: "/thank-you-for-your-application/achievements-guide",
label: "Thank You For Your Application Achievements Guide",
},
{
href: "/thank-you-for-your-application/beginner-guide",
label: "Thank You For Your Application Beginner Guide",
},
{
href: "/thank-you-for-your-application/resume-rules-thanks-letter-guide",
label: "Resume Rules & Thanks Letter Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "How many endings are in Thank You For Your Application?",
acceptedAnswer: {
"@type": "Answer",
text: "The official launch note says Thank You For Your Application has six final endings. This guide also tracks extra failure and punishment states that can end or lock a run before a clean final ending.",
},
},
{
"@type": "Question",
name: "How do I get The Meaning of Work ending?",
acceptedAnswer: {
"@type": "Answer",
text: "Follow A02's route, reach Day 29 with breakdown index above 20, choose Link consciousness, then choose (Do not reach out).",
},
},
{
"@type": "Question",
name: "How do I get Escape ending?",
acceptedAnswer: {
"@type": "Answer",
text: "On Day 27, reply I agree to leave to K88's work-shift Confidential Mail. On Day 29, choose Leave apartment from the apartment exit.",
},
},
{
"@type": "Question",
name: "How do I get Job for Life?",
acceptedAnswer: {
"@type": "Answer",
text: "Reach Day 30 with an A or B final rating, avoid H11 scanner violations and shock misuse, then accept permanent employment.",
},
},
{
"@type": "Question",
name: "What causes Illegal Layoff?",
acceptedAnswer: {
"@type": "Answer",
text: "A recorded H11 scanner violation or shock misuse can push the final evaluation into Illegal Layoff.",
},
},
{
"@type": "Question",
name: "What rating causes Failed Performance Review?",
acceptedAnswer: {
"@type": "Answer",
text: "A C or D final rating causes Failed Performance Review. A is 90% or higher, B is 75% or higher, C is 60% or higher, and D is below 60%.",
},
},
{
"@type": "Question",
name: "How do I avoid Illegal Activity?",
acceptedAnswer: {
"@type": "Answer",
text: "If you unlock the black-market route, buy the Data Cleaning Module before ending Day 24.",
},
},
{
"@type": "Question",
name: "How do I avoid Mental Breakdown?",
acceptedAnswer: {
"@type": "Answer",
text: "Do not end the day over the breakdown-index limit. Day 4 uses 40, and after Day 4 the limit becomes 35.",
},
},
{
"@type": "Question",
name: "What are the job-hopping answers?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the four-answer chain listed in the guide: contribute to the Minato Residents' Association, feel excited to work, choose Minato Communications for better prospects, and promise cross-department teamwork.",
},
},
{
"@type": "Question",
name: "Can I get all endings on one route?",
acceptedAnswer: {
"@type": "Answer",
text: "Not cleanly. Use checkpoints around Day 17, Day 24, Day 27, Day 29, Day 30, and the job-hopping final interview so you can branch without replaying the whole game.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Endings Guide",
description:
"Get all Thank You For Your Application endings with A02, Escape, Job for Life, Day 30 ratings, job-hopping answers, Data Cleaning Module and checkpoints.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Thank You For Your Application Endings Guide",
description:
"Route every Thank You For Your Application ending with A02, Escape, Job for Life, Day 30 ratings, H11 violations, job-hopping answers, Data Cleaning Module and checkpoints.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "A02 apartment concierge in Thank You For Your Application.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Thank You For Your Application Endings Guide",
description:
"A02 True Ending, Escape, Job for Life, Day 30 ratings, job-hopping answers, failure states and checkpoints.",
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
name: "Endings Guide",
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
"Thank You For Your Application Endings Guide: A02, Escape, Job for Life, Job-Hopping and Failure States",
description:
"A player-focused Thank You For Your Application endings guide covering the six final endings, extra failure and punishment states, A02 True Ending, The Meaning of Work, Escape, Job for Life, Refuse Permanent Employment, Illegal Layoff, Failed Performance Review, A New Job for Life, Job-Hopping Failure, Day 17 A02 route setup, Day 24 Data Cleaning Module risk, Day 27 K88 Confidential Mail, Day 29 apartment choices, Day 30 rating thresholds, H11 scanner violations, shock misuse, breakdown-index limits, overtime death, probation failure, automatic checkpoints, and Patch 1.0.4 overtime autosave behavior.",
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
name: "Thank You For Your Application endings",
},
{
"@type": "Thing",
name: "six final endings",
},
{
"@type": "Thing",
name: "The Meaning of Work",
},
{
"@type": "Thing",
name: "A02 True Ending",
},
{
"@type": "Thing",
name: "Escape Ending",
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
name: "A New Job for Life",
},
{
"@type": "Thing",
name: "job-hopping answers",
},
{
"@type": "Thing",
name: "Data Cleaning Module",
},
{
"@type": "Thing",
name: "K88 Confidential Mail",
},
{
"@type": "Thing",
name: "H11 scanner violation",
},
{
"@type": "Thing",
name: "breakdown index",
},
{
"@type": "Thing",
name: "probation review",
},
{
"@type": "Thing",
name: "automatic checkpoints",
},
{
"@type": "Thing",
name: "Patch 1.0.4 overtime autosave",
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
      title="Thank You For Your Application Endings Guide"
      description="Plan every ending with A02, Escape, Job for Life, job-hopping answers, Day 30 rating thresholds, failure states, and route checkpoints."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <EndingsGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
