import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TimberbornGuideContent from "@/data/timberborn/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-1-0-hard-mode-start.webp`,
`${siteUrl}/images/timberborn/timberborn-first-drought-warning.webp`,
`${siteUrl}/images/timberborn/timberborn-underground-irrigation-green-coverage.webp`,
`${siteUrl}/images/timberborn/timberborn-badwater-triple-floodgate.webp`,
];

const toc = [
{
id: "timberborn-guide",
label: "Guide hub",
},
{
id: "which-guide-should-you-read",
label: "Which guide to read",
},
{
id: "key-numbers",
label: "Key numbers",
},
{
id: "guide-overview",
label: "Guide overview",
},
{
id: "diagnose-secondary-failures",
label: "Secondary diagnosis",
},
{
id: "faq",
label: "FAQ",
},
];

const relatedLinks = [
{
href: "/timberborn/beginner-guide",
label: "Beginner Guide",
},
{
href: "/timberborn/first-drought-guide",
label: "First Drought Guide",
},
{
href: "/timberborn/dam-levee-floodgate-guide",
label: "Dam, Levee and Floodgate Guide",
},
{
href: "/timberborn/irrigation-reservoir-guide",
label: "Irrigation and Reservoir Guide",
},
{
href: "/timberborn/badwater-badtide-guide",
label: "Badwater and Badtide Guide",
},
{
href: "/timberborn/automation-guide",
label: "Automation Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "Which Timberborn guide should I read first?",
acceptedAnswer: {
"@type": "Answer",
text: "Start with the Beginner Guide if you are new. If you are already losing to a specific problem, jump directly to the First Drought, Dam, Irrigation, Badwater, or Automation guide.",
},
},
{
"@type": "Question",
name: "Why do some Timberborn guides use 2.1, 2.5, or 3 water per beaver per day?",
acceptedAnswer: {
"@type": "Answer",
text: "Use 2.1 to 2.5 water per beaver per day for normal planning and 3 per day only as a conservative stress buffer. The First Drought Guide explains the calculation in detail.",
},
},
{
"@type": "Question",
name: "Why do my crops dry when my beavers still have water?",
acceptedAnswer: {
"@type": "Answer",
text: "Drinking water and soil irrigation are different systems. Tanks keep beavers alive, but crops need nearby water that is close and deep enough to keep land green.",
},
},
{
"@type": "Question",
name: "Should I always build a dam before the first drought?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Build an early dam only if the site is realistic. If the river is wide, far, shallow, or awkward, stored water and better access may be safer first.",
},
},
{
"@type": "Question",
name: "When should I use floodgates instead of a dam?",
acceptedAnswer: {
"@type": "Answer",
text: "Use floodgates when you need adjustable water height, controlled reservoir filling, drought release, badwater isolation, or future automation.",
},
},
{
"@type": "Question",
name: "When should I start badwater planning?",
acceptedAnswer: {
"@type": "Answer",
text: "Start once basic drought survival works, and earlier if a badwater source or Badtide Drain can reach your clean river, pumps, farms, or irrigation route.",
},
},
{
"@type": "Question",
name: "Should I automate early?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Test the route manually first. Automation is best when it improves a working system, not when it hides bad routing.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Guide: Drought, Dams & Badwater",
description:
"Find the right Timberborn 1.0 guide for first drought, pumps, dams, reservoirs, irrigation, badwater, automation and colony failure diagnosis.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Guide: Drought, Dams & Badwater",
description:
"Use this Timberborn 1.0 guide hub to find the right help for first drought survival, pumps, dams, irrigation, badwater, reservoirs and automation.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Starting a Timberborn 1.0 colony on Hard Mode.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn Guide: Drought, Dams & Badwater",
description:
"Route your Timberborn colony problem to the right guide: first drought, dams, irrigation, badwater or automation.",
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
name: "Timberborn Guide",
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
"Timberborn Guide Hub: First Drought, Dams, Irrigation, Badwater and Automation",
description:
"A player-focused Timberborn 1.0 guide hub that routes colony problems to the right guide, including beginner starts, first drought survival, water math, pump depth, dams, levees, floodgates, evaporation, reservoirs, irrigation coverage, aquatic crops, badwater, badtides, Extract production, sensors, relays, valves and automation circuits.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-22",
dateModified: "2026-06-22",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Timberborn",
},
{
"@type": "Thing",
name: "Timberborn guide",
},
{
"@type": "Thing",
name: "Timberborn 1.0 guide",
},
{
"@type": "Thing",
name: "Timberborn beginner guide",
},
{
"@type": "Thing",
name: "Timberborn first drought guide",
},
{
"@type": "Thing",
name: "Timberborn water math",
},
{
"@type": "Thing",
name: "Timberborn pump depth",
},
{
"@type": "Thing",
name: "Timberborn dam guide",
},
{
"@type": "Thing",
name: "Timberborn levee guide",
},
{
"@type": "Thing",
name: "Timberborn floodgate guide",
},
{
"@type": "Thing",
name: "Timberborn reservoir guide",
},
{
"@type": "Thing",
name: "Timberborn evaporation",
},
{
"@type": "Thing",
name: "Timberborn irrigation guide",
},
{
"@type": "Thing",
name: "Timberborn green coverage",
},
{
"@type": "Thing",
name: "Timberborn aquatic crops",
},
{
"@type": "Thing",
name: "Timberborn badwater guide",
},
{
"@type": "Thing",
name: "Timberborn badtide guide",
},
{
"@type": "Thing",
name: "Timberborn Extract production",
},
{
"@type": "Thing",
name: "Timberborn automation guide",
},
{
"@type": "Thing",
name: "Timberborn sensors",
},
{
"@type": "Thing",
name: "Timberborn relays",
},
{
"@type": "Thing",
name: "Timberborn valves",
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
      title="Timberborn Guide Hub"
      description="Find the right Timberborn 1.0 guide for your current colony problem: beginner start, first drought, pump depth, dams, reservoirs, irrigation, badwater, badtides or automation."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <TimberbornGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
