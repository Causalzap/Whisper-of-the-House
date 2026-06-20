import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ResumeRulesGuideContent from "@/data/thank-you-for-your-application/resume-rules-thanks-letter-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application/resume-rules-thanks-letter-guide`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-day-one-requirements.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-graduation-certificate-check.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-thanks-letter-tutorial.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-missing-graduation-certificate-thanks-letter.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-missing-internship-rejection.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-missing-psychological-evaluation-report.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-psychological-report-date-invalid.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-breakdown-index-apartment.webp`,
];

const toc = [
{
id: "resume-rules-thanks-letter-guide",
label: "Resume rules guide",
},
{
id: "safe-workday-routine",
label: "Safe workday routine",
},
{
id: "local-vs-non-local-candidates",
label: "Local vs non-local",
},
{
id: "document-checks",
label: "Document checks",
},
{
id: "thanks-letter-ui",
label: "Thanks Letter UI",
},
{
id: "graduation-certificate-rules",
label: "Graduation certificate",
},
{
id: "internship-work-experience",
label: "Internship and work experience",
},
{
id: "psychological-evaluation-report",
label: "Psychological report",
},
{
id: "breakdown-index-limits",
label: "Breakdown index limits",
},
{
id: "mental-health-and-document-checking",
label: "Mental health and checking",
},
{
id: "when-to-approve",
label: "When to approve",
},
{
id: "common-mistakes",
label: "Common mistakes",
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
href: "/thank-you-for-your-application/beginner-guide",
label: "Thank You For Your Application Beginner Guide",
},
{
href: "/thank-you-for-your-application/final-evaluation-job-hopping-answers",
label: "Final Evaluation & Job-Hopping Answers",
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
href: "/thank-you-for-your-application",
label: "Thank You For Your Application Guide Hub",
},
];

const faqEntities = [
{
"@type": "Question",
name: "What is the first thing I should check?",
acceptedAnswer: {
"@type": "Answer",
text: "Open the Job Requirements tab. It shows which school, document, internship, report, and breakdown-index rules are active that day. Read it before calling any candidate.",
},
},
{
"@type": "Question",
name: "Where is the Thanks Letter button?",
acceptedAnswer: {
"@type": "Answer",
text: "After you select the failed requirement or invalid field, use the Thanks Letter button at the lower-right area of the interface. Generate the ticket, attach it to the resume, then reject.",
},
},
{
"@type": "Question",
name: "Why did I lose money even though the candidate should fail?",
acceptedAnswer: {
"@type": "Answer",
text: "The pass or fail decision may be correct, but the Thanks Letter reason may be wrong or missing. Once Thanks Letters are required, the rejection reason matters.",
},
},
{
"@type": "Question",
name: "How do I tell whether a candidate is local or non-local?",
acceptedAnswer: {
"@type": "Answer",
text: "Read the school or city shown on the resume and compare it with the School Reference Table and today's Job Requirements. Early examples treat Aeropolis or Aropolis schools as local and Manato schools as non-local.",
},
},
{
"@type": "Question",
name: "Do non-local candidates always need a graduation certificate?",
acceptedAnswer: {
"@type": "Answer",
text: "Do not assume it forever. Check today's rule. When the rule says non-local graduates need a graduation certificate, reject non-local candidates who do not provide it.",
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
name: "Is missing Psychological Evaluation Report the same as invalid date?",
acceptedAnswer: {
"@type": "Answer",
text: "No. If the report is missing, select the missing report requirement. If the report exists but the date is invalid, select the report date field.",
},
},
{
"@type": "Question",
name: "Does C89's own breakdown index change document rules?",
acceptedAnswer: {
"@type": "Answer",
text: "No. It does not change which candidate rule is correct. It affects route safety, overtime risk, and whether ending the day is dangerous.",
},
},
{
"@type": "Question",
name: "Does Standard Mode have a time limit?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Standard Mode is timed: time runs during interviews and the workday cuts off at the end-of-day limit. Subsidy Mode removes the interview time barrier.",
},
},
{
"@type": "Question",
name: "Should I use this page or the Beginner Guide?",
acceptedAnswer: {
"@type": "Answer",
text: "Use this page when you are making document decisions or choosing Thanks Letter reasons. Use the Beginner Guide for broader survival topics like pay, bills, Subsidy Mode, A02, and first-run planning.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Resume Rules Guide",
description:
"Master Thank You For Your Application resume rules, Thanks Letters, local vs non-local checks, certificates, reports, forged docs and breakdown index limits.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Thank You For Your Application Resume Rules Guide",
description:
"Learn how to approve, reject and attach Thanks Letters with resume checks, certificates, Psychological Evaluation Reports, forged documents and breakdown-index limits.",
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
title: "Thank You For Your Application Resume Rules Guide",
description:
"Resume rules, Thanks Letter UI, local vs non-local screening, forged documents, reports and breakdown-index limits.",
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
name: "Resume Rules & Thanks Letter Guide",
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
"Thank You For Your Application Resume Rules and Thanks Letter Guide",
description:
"A player-focused Thank You For Your Application resume rules and Thanks Letter guide covering Job Requirements, Standard Mode timing, Subsidy Mode, local vs non-local candidates, School Reference Table checks, graduation certificates, internship and work experience rules, Psychological Evaluation Reports, forged documents, name and social number mismatches, invalid report dates, breakdown-index limits, C89's own breakdown index, Thanks Letter UI behavior, rejection reasons, approve and reject rules, and common document-checking mistakes.",
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
name: "Thank You For Your Application resume rules",
},
{
"@type": "Thing",
name: "Thanks Letter",
},
{
"@type": "Thing",
name: "Job Requirements tab",
},
{
"@type": "Thing",
name: "Standard Mode time limit",
},
{
"@type": "Thing",
name: "Subsidy Mode",
},
{
"@type": "Thing",
name: "local candidates",
},
{
"@type": "Thing",
name: "non-local candidates",
},
{
"@type": "Thing",
name: "School Reference Table",
},
{
"@type": "Thing",
name: "graduation certificate",
},
{
"@type": "Thing",
name: "internship requirement",
},
{
"@type": "Thing",
name: "work experience requirement",
},
{
"@type": "Thing",
name: "Psychological Evaluation Report",
},
{
"@type": "Thing",
name: "forged documents",
},
{
"@type": "Thing",
name: "social number mismatch",
},
{
"@type": "Thing",
name: "invalid report date",
},
{
"@type": "Thing",
name: "breakdown index",
},
{
"@type": "Thing",
name: "C89 breakdown index",
},
{
"@type": "Thing",
name: "approve candidate",
},
{
"@type": "Thing",
name: "reject candidate",
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
      title="Thank You For Your Application Resume Rules & Thanks Letter Guide"
      description="Approve and reject candidates correctly with Job Requirements, local vs non-local checks, certificates, Psychological Evaluation Reports, forged documents, Thanks Letters, and breakdown-index limits."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <ResumeRulesGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
