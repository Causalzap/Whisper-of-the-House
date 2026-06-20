import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsGuideContent from "@/data/thank-you-for-your-application/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/thank-you-for-your-application/achievements-guide`;

const imageUrls = [
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-achievements-list-steam.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-probation-review-meeting.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-a02-status-menu.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-minato-residents-association-mail.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-work-shift-mail-panel.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-permanent-contract-explained.webp`,
`${siteUrl}/images/thank-you-for-your-application/thank-you-for-your-application-breakdown-index-apartment.webp`,
];

const toc = [
{
id: "thank-you-for-your-application-achievements-guide",
label: "Achievements guide",
},
{
id: "checkpoint-save-warning",
label: "Checkpoint save warning",
},
{
id: "all-achievements",
label: "All achievements",
},
{
id: "hidden-achievements",
label: "Hidden achievements",
},
{
id: "probation-achievements",
label: "Probation achievements",
},
{
id: "brain-in-a-vat",
label: "Brain in a Vat",
},
{
id: "the-meaning-of-work",
label: "The Meaning of Work",
},
{
id: "a-new-job-for-life",
label: "A New Job for Life",
},
{
id: "whats-the-point-of-working",
label: "What's the point of working?",
},
{
id: "escape-achievement",
label: "Escape",
},
{
id: "job-for-life",
label: "Job for Life",
},
{
id: "work-life-not-balanced",
label: "Work Life Not Balanced",
},
{
id: "approve-all-reject-all-attitude-adjustment",
label: "Approve All, Reject All, shock",
},
{
id: "economic-contribution-and-elite-living",
label: "Economic Contribution and Elite Living",
},
{
id: "rarest-achievements-branch-warnings",
label: "Rare achievement branch warnings",
},
{
id: "recommended-100-percent-order",
label: "Recommended 100% order",
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
href: "/thank-you-for-your-application/endings-guide",
label: "Thank You For Your Application Endings Guide",
},
{
href: "/thank-you-for-your-application/final-evaluation-job-hopping-answers",
label: "Final Evaluation & Job-Hopping Answers",
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
name: "How many achievements are in Thank You For Your Application?",
acceptedAnswer: {
"@type": "Answer",
text: "There are 15 achievements in Thank You For Your Application.",
},
},
{
"@type": "Question",
name: "How many hidden achievements are there?",
acceptedAnswer: {
"@type": "Answer",
text: "There are 3 Steam-hidden achievements: Brain in a Vat, Work Life Not Balanced, and I Refuse to Answer.",
},
},
{
"@type": "Question",
name: "Does Thank You For Your Application have manual saves?",
acceptedAnswer: {
"@type": "Answer",
text: "Thank You For Your Application uses automatic checkpoint saves rather than free manual multi-save routing. Check your Load or Continue point before testing risky achievements.",
},
},
{
"@type": "Question",
name: "How do I unlock Brain in a Vat?",
acceptedAnswer: {
"@type": "Answer",
text: "Follow A02's apartment route, connect to A02's consciousness, and continue the data-route choices to discover A02's secret.",
},
},
{
"@type": "Question",
name: "How do I unlock The Meaning of Work?",
acceptedAnswer: {
"@type": "Answer",
text: "Continue from the A02 route. On Day 29, keep breakdown index above 20, choose Link consciousness, then choose (Do not reach out).",
},
},
{
"@type": "Question",
name: "How do I unlock A New Job for Life?",
acceptedAnswer: {
"@type": "Answer",
text: "Reach the job-hopping final interview and give the correct answer chain listed in the guide.",
},
},
{
"@type": "Question",
name: "How do I unlock Work Life Not Balanced?",
acceptedAnswer: {
"@type": "Answer",
text: "Work overtime for five days in a row. On builds before Patch 1.0.4, this can be save-destroying, so do not test it on your main route.",
},
},
{
"@type": "Question",
name: "Should I do Approve All, Reject All, or Attitude Adjustment on my main route?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Use a start-of-workday checkpoint because these achievements can hurt rating, pay, or final-route safety.",
},
},
];

export const metadata: Metadata = {
title: "Thank You For Your Application Achievements Guide",
description:
"Unlock all 15 Thank You For Your Application achievements with hidden triggers, Steam rarity, checkpoint saves, A02, overtime, Escape and job-hopping.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Thank You For Your Application Achievements Guide: All 15",
description:
"Unlock all 15 Thank You For Your Application achievements with Steam rarity, hidden achievements, checkpoint warnings, A02, overtime, Escape, Job for Life and job-hopping routes.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Steam achievement list for Thank You For Your Application.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Thank You For Your Application Achievements Guide",
description:
"All 15 achievements, hidden triggers, Steam rarity, checkpoint saves, A02, overtime, Escape and job-hopping answers.",
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
name: "Achievements Guide",
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
"Thank You For Your Application Achievements Guide: All 15, Hidden Achievements, Steam Rarity and Checkpoint Saves",
description:
"A player-focused Thank You For Your Application achievements guide covering all 15 achievements, Steam global rarity, the three hidden achievements, Brain in a Vat, Work Life Not Balanced, I Refuse to Answer, A02 route choices, The Meaning of Work, Escape, Job for Life, A New Job for Life, job-hopping answer chain, automatic checkpoint saves, Patch 1.0.4 overtime autosave behavior, and safe 100% achievement cleanup order.",
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
name: "Thank You For Your Application achievements",
},
{
"@type": "Thing",
name: "Thank You For Your Application hidden achievements",
},
{
"@type": "Thing",
name: "Brain in a Vat",
},
{
"@type": "Thing",
name: "Work Life Not Balanced",
},
{
"@type": "Thing",
name: "I Refuse to Answer",
},
{
"@type": "Thing",
name: "The Meaning of Work",
},
{
"@type": "Thing",
name: "A New Job for Life",
},
{
"@type": "Thing",
name: "What’s the point of working?",
},
{
"@type": "Thing",
name: "Escape achievement",
},
{
"@type": "Thing",
name: "Job for Life",
},
{
"@type": "Thing",
name: "Approve All",
},
{
"@type": "Thing",
name: "Reject All",
},
{
"@type": "Thing",
name: "Attitude Adjustment",
},
{
"@type": "Thing",
name: "A02 route",
},
{
"@type": "Thing",
name: "job-hopping answers",
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
      title="Thank You For Your Application Achievements Guide"
      description="Unlock every achievement with Steam rarity, hidden achievement triggers, checkpoint-save warnings, A02 route choices, Escape, Job for Life and job-hopping answers."
      gameTitle="Thank You For Your Application"
      gameHref="/thank-you-for-your-application"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 20, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <AchievementsGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
