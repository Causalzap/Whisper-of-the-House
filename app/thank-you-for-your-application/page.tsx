import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ThankYouApplicationGuideContent from "@/data/thank-you-for-your-application/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-day-one-requirements.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-thanks-letter-tutorial.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-nlre-probation-terms.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-permanent-contract-explained.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-achievements-list-steam.webp`,
];

const toc = [
{
id: "thank-you-for-your-application-guide",
label: "Guide hub",
},
{
id: "which-guide-should-you-read",
label: "Which guide to read",
},
{
id: "first-run-priorities",
label: "First-run priorities",
},
{
id: "core-systems",
label: "Core systems",
},
{
id: "money-bills-and-apartment",
label: "Money and apartment",
},
{
id: "endings-and-route-locks",
label: "Endings and route locks",
},
{
id: "achievements-and-cleanup",
label: "Achievements and cleanup",
},
{
id: "recommended-reading-order",
label: "Recommended reading order",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/thank-you-for-your-application/beginner-guide",
label: "Thank You For Your Application Beginner Guide",
},
{
href: "/thank-you-for-your-application/resume-rules-thanks-letter-guide",
label: "Resume Rules & Thanks Letter Guide",
},
{
href: "/thank-you-for-your-application/endings-guide",
label: "Thank You For Your Application Endings Guide",
},
{
href: "/thank-you-for-your-application/achievements-guide",
label: "Thank You For Your Application Achievements Guide",
},
{
href: "/thank-you-for-your-application/final-evaluation-job-hopping-answers",
label: "Final Evaluation & Job-Hopping Answers",
},
];

const faqEntities = [
{
"@type": "Question",
name: "Which guide should I read first?",
acceptedAnswer: {
"@type": "Answer",
text: "Start with the Beginner Guide if you are new. Use the Resume Rules & Thanks Letter Guide once you start losing money from wrong approvals, wrong rejections, or missing Thanks Letter reasons.",
},
},
{
"@type": "Question",
name: "How many endings are in Thank You For Your Application?",
acceptedAnswer: {
"@type": "Answer",
text: "The game advertises six final endings. The Endings Guide also tracks failure and punishment states that can end or lock a run before a clean final ending.",
},
},
{
"@type": "Question",
name: "How many achievements are in Thank You For Your Application?",
acceptedAnswer: {
"@type": "Answer",
text: "There are 15 Steam achievements. Use the Achievements Guide for hidden achievements, route achievements, overtime, A02, and cleanup order.",
},
},
{
"@type": "Question",
name: "How do Thanks Letters work?",
acceptedAnswer: {
"@type": "Answer",
text: "After Thanks Letters become required, select the exact failed requirement or invalid field, generate the Thanks Letter, attach it to the resume, then send the resume to the red reject folder.",
},
},
{
"@type": "Question",
name: "What should I check first during work?",
acceptedAnswer: {
"@type": "Answer",
text: "Open the Job Requirements tab. It shows which school, document, internship, report, and breakdown-index rules are active that day. Read it before calling any candidate.",
},
},
{
"@type": "Question",
name: "What is the breakdown index limit?",
acceptedAnswer: {
"@type": "Answer",
text: "Candidate breakdown-index limits can change by day. Early report checks can use 40%, and later workdays can show 35. C89's own breakdown danger also uses 40 on Day 4 and 35 after Day 4.",
},
},
{
"@type": "Question",
name: "Does Thank You For Your Application have Subsidy Mode?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Subsidy Mode gives 30P per day and removes the interview time barrier, making it easier to learn document checks and story routes.",
},
},
{
"@type": "Question",
name: "Does the game have manual saves?",
acceptedAnswer: {
"@type": "Answer",
text: "Treat it as an automatic-checkpoint game, not a free manual multi-save game. Check your Load or Continue point before testing risky achievements, overtime, or late ending branches.",
},
},
{
"@type": "Question",
name: "Does this guide cover the latest patch?",
acceptedAnswer: {
"@type": "Answer",
text: "This hub covers the launch version through Patch 1.0.4. If later patches change choice wording or route behavior, follow the guide’s route meaning and recheck the updated page notes.",
},
},
{
"@type": "Question",
name: "Where are the job-hopping answers?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Final Evaluation & Job-Hopping Answers guide. It gives the four-answer chain and explains why wrong job-hopping answers fail.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Guide Hub",
description:
"Start with all Thank You For Your Application guides: beginner tips, resume rules, Thanks Letters, endings, achievements and job-hopping answers.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Thank You For Your Application Guide Hub",
description:
"Find every Thank You For Your Application guide: beginner tips, resume rules, Thanks Letters, endings, achievements, Day 30 final evaluation and job-hopping answers.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Day 1 job requirements in Thank You For Your Application.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Thank You For Your Application Guide Hub",
description:
"Beginner guide, resume rules, Thanks Letters, endings, achievements, Day 30 final evaluation and job-hopping answers.",
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
"Thank You For Your Application Guide Hub: Beginner Tips, Resume Rules, Endings, Achievements and Job-Hopping Answers",
description:
"A player-focused Thank You For Your Application guide hub linking the full guide set for the game, including the Beginner Guide, Resume Rules and Thanks Letter Guide, Endings Guide, Achievements Guide, and Final Evaluation & Job-Hopping Answers. Covers Subsidy Mode, Standard Mode timing, Job Requirements, Thanks Letters, forged documents, local vs non-local candidates, breakdown-index checks, automatic checkpoints, A02, Escape, Job for Life, all 15 Steam achievements, six final endings, Day 30 final evaluation, Illegal Layoff, Failed Performance Review, and job-hopping answer routes.",
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
name: "Thank You For Your Application guide",
},
{
"@type": "Thing",
name: "Thank You For Your Application beginner guide",
},
{
"@type": "Thing",
name: "resume rules",
},
{
"@type": "Thing",
name: "Thanks Letters",
},
{
"@type": "Thing",
name: "Job Requirements tab",
},
{
"@type": "Thing",
name: "forged documents",
},
{
"@type": "Thing",
name: "breakdown index",
},
{
"@type": "Thing",
name: "Subsidy Mode",
},
{
"@type": "Thing",
name: "automatic checkpoints",
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
name: "Thank You For Your Application achievements",
},
{
"@type": "Thing",
name: "15 Steam achievements",
},
{
"@type": "Thing",
name: "A02",
},
{
"@type": "Thing",
name: "Escape",
},
{
"@type": "Thing",
name: "Job for Life",
},
{
"@type": "Thing",
name: "Day 30 final evaluation",
},
{
"@type": "Thing",
name: "job-hopping answers",
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
      title="Thank You For Your Application Guide"
      description="Choose the right guide for beginner survival, resume rules, Thanks Letters, endings, achievements, Day 30 final evaluation, and job-hopping answers."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <ThankYouApplicationGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
