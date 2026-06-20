import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/thank-you-for-your-application/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application/beginner-guide`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-nlre-probation-terms.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-day-one-requirements.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-thanks-letter-tutorial.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-graduation-certificate-check.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-psychological-report-date-invalid.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-day-one-report-salary.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-probation-review-meeting.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-apartment-bills-panel.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-a02-status-menu.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-breakdown-index-apartment.webp`,
];

const toc = [
{
id: "thank-you-for-your-application-beginner-guide",
label: "Beginner guide",
},
{
id: "start-here",
label: "Start here",
},
{
id: "subsidy-mode",
label: "Subsidy Mode",
},
{
id: "workstation-ui",
label: "Workstation UI",
},
{
id: "one-workday-checklist",
label: "Workday checklist",
},
{
id: "thanks-letter-basics",
label: "Thanks Letter basics",
},
{
id: "forged-documents",
label: "Forged documents",
},
{
id: "probation-and-pay",
label: "Probation and pay",
},
{
id: "after-work-apartment-checks",
label: "After-work checks",
},
{
id: "a02-and-status",
label: "A02 and status",
},
{
id: "breakdown-index",
label: "Breakdown index",
},
{
id: "checkpoint-risk",
label: "Checkpoints and risky choices",
},
{
id: "recommended-first-run",
label: "Recommended first run",
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
href: "/thank-you-for-your-application/resume-rules-thanks-letter-guide",
label: "Resume Rules & Thanks Letter Guide",
},
{
href: "/thank-you-for-your-application/achievements-guide",
label: "Thank You For Your Application Achievements Guide",
},
{
href: "/thank-you-for-your-application/endings-guide",
label: "Thank You For Your Application Endings Guide",
},
{
href: "/thank-you-for-your-application/final-evaluation-job-hopping-answers",
label: "Final Evaluation & Job-Hopping Answers",
},
];

const faqEntities = [
{
"@type": "Question",
name: "Should I start with Subsidy Mode?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, if you want less pressure. Subsidy Mode gives 30P per day and removes the interview time barrier, making it easier to learn document rules and follow the story.",
},
},
{
"@type": "Question",
name: "What should I check first at work?",
acceptedAnswer: {
"@type": "Answer",
text: "Open the Job Requirements tab first. Then check the resume, required documents, school eligibility, identity fields, and any Thanks Letter reason before approving or rejecting.",
},
},
{
"@type": "Question",
name: "What do the green and red folders do?",
acceptedAnswer: {
"@type": "Answer",
text: "The green folder is the Interview Pass Folder for approved candidates. The red folder is the Interview Reject Folder for failed candidates.",
},
},
{
"@type": "Question",
name: "What is the Thanks Letter for?",
acceptedAnswer: {
"@type": "Answer",
text: "The Thanks Letter explains the rejection reason. After it becomes required, you need to select the exact failed requirement or invalid field before rejecting a candidate.",
},
},
{
"@type": "Question",
name: "What counts as a forged or invalid document?",
acceptedAnswer: {
"@type": "Answer",
text: "Common signs include mismatched social numbers, mismatched names, wrong school details, invalid report dates, and Psychological Evaluation Reports that fail the required value.",
},
},
{
"@type": "Question",
name: "How long is probation?",
acceptedAnswer: {
"@type": "Answer",
text: "C89 starts with a 7-day probation period.",
},
},
{
"@type": "Question",
name: "How much do successful interviews pay early on?",
acceptedAnswer: {
"@type": "Answer",
text: "The opening contract shows 10P per successful interview. Your daily report can also show subsidy and bonuses.",
},
},
{
"@type": "Question",
name: "What should I do after work?",
acceptedAnswer: {
"@type": "Answer",
text: "Check mail, bills, A02, personal status, subsidy status, and breakdown index before sleeping or spending money.",
},
},
{
"@type": "Question",
name: "Does Thank You For Your Application have manual saves?",
acceptedAnswer: {
"@type": "Answer",
text: "Treat the game as an automatic-checkpoint game rather than a free manual multi-save game. Check your Load or Continue point before testing risky achievements or late route choices.",
},
},
{
"@type": "Question",
name: "Should I work overtime on my first run?",
acceptedAnswer: {
"@type": "Answer",
text: "Only if you need the money and your condition is safe. Do not chase five consecutive overtime days on a clean first route.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Beginner Guide",
description:
"Start Thank You For Your Application with Subsidy Mode, 7-day probation, 10P pay, bills, A02, Thanks Letters, forged documents and checkpoints.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Thank You For Your Application Beginner Guide",
description:
"Learn Subsidy Mode, 7-day probation, 10P interview pay, workstation UI, Thanks Letters, forged documents, bills, A02, breakdown index and checkpoint risk.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Non-local residence employment terms in Thank You For Your Application.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Thank You For Your Application Beginner Guide",
description:
"Beginner tips for Subsidy Mode, probation, pay, Thanks Letters, forged documents, bills, A02 and checkpoints.",
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
name: "Beginner Guide",
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
"Thank You For Your Application Beginner Guide: Subsidy Mode, Probation, Bills, Thanks Letters and Checkpoints",
description:
"A player-focused Thank You For Your Application beginner guide covering Subsidy Mode, 30P daily support, 7-day probation, 10P successful interview pay, 30-day contract, workstation UI, Job Requirements tab, Interview Pass Folder, Interview Reject Folder, School Reference Table, Company Reference Tab, Thanks Letter rejection reasons, forged document checks, Psychological Evaluation Report dates, bills, A02 status checks, breakdown index, automatic checkpoints, Patch 1.0.4 overtime autosave behavior, 15 Steam achievements and 6 story endings.",
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
name: "Thank You For Your Application beginner guide",
},
{
"@type": "Thing",
name: "Subsidy Mode",
},
{
"@type": "Thing",
name: "7-day probation",
},
{
"@type": "Thing",
name: "10P per successful interview",
},
{
"@type": "Thing",
name: "30-day contract",
},
{
"@type": "Thing",
name: "Job Requirements tab",
},
{
"@type": "Thing",
name: "Interview Pass Folder",
},
{
"@type": "Thing",
name: "Interview Reject Folder",
},
{
"@type": "Thing",
name: "School Reference Table",
},
{
"@type": "Thing",
name: "Company Reference Tab",
},
{
"@type": "Thing",
name: "Thanks Letter",
},
{
"@type": "Thing",
name: "forged documents",
},
{
"@type": "Thing",
name: "Psychological Evaluation Report",
},
{
"@type": "Thing",
name: "bills",
},
{
"@type": "Thing",
name: "A02",
},
{
"@type": "Thing",
name: "breakdown index",
},
{
"@type": "Thing",
name: "automatic checkpoint saves",
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
      title="Thank You For Your Application Beginner Guide"
      description="Start safely with Subsidy Mode, probation, interview pay, workstation tools, Thanks Letters, forged document checks, bills, A02, breakdown index and checkpoint warnings."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <BeginnerGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
