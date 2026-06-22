import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DamGuideContent from "@/data/timberborn/dam-levee-floodgate-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/dam-levee-floodgate-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-dam-complete-65-percent-buffer.webp`,
`${siteUrl}/images/timberborn/timberborn-first-dam-river-start.webp`,
`${siteUrl}/images/timberborn/timberborn-levee-river-control.webp`,
`${siteUrl}/images/timberborn/timberborn-reservoir-hole-plan.webp`,
`${siteUrl}/images/timberborn/timberborn-water-diverter-filling-pit.webp`,
`${siteUrl}/images/timberborn/timberborn-drought-proof-water-hole-depth.webp`,
`${siteUrl}/images/timberborn/timberborn-trapped-water-floodgate-warning.webp`,
`${siteUrl}/images/timberborn/timberborn-automation-throttling-valves.webp`,
];

const toc = [
{
id: "timberborn-dam-levee-floodgate-guide",
label: "Dam guide",
},
{
id: "key-numbers",
label: "Key numbers",
},
{
id: "dam-vs-levee-vs-floodgate",
label: "Dam vs levee vs floodgate",
},
{
id: "map-start-adjustments",
label: "Map adjustments",
},
{
id: "evaporation-and-depth",
label: "Evaporation and depth",
},
{
id: "why-first-dam-matters",
label: "First dam",
},
{
id: "when-to-upgrade",
label: "When to upgrade",
},
{
id: "gate-operation",
label: "Gate operation",
},
{
id: "levees-and-spillways",
label: "Levees and spillways",
},
{
id: "reservoir-planning",
label: "Reservoir planning",
},
{
id: "diverting-water",
label: "T-valves and diversion",
},
{
id: "reservoir-depth",
label: "Reservoir depth",
},
{
id: "trapped-water",
label: "Trapped water",
},
{
id: "throttling-valves",
label: "Throttling valves",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "troubleshooting",
label: "Troubleshooting",
},
{
id: "before-first-release",
label: "Before first release",
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
href: "/timberborn",
label: "Timberborn Guide Hub",
},
{
href: "/timberborn/first-drought-guide",
label: "First Drought Guide",
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
name: "What does a dam do in Timberborn?",
acceptedAnswer: {
"@type": "Answer",
text: "A dam is an early water-buffer structure. It holds part of the water height and lets excess water pass, so it is not the same as a full wall.",
},
},
{
"@type": "Question",
name: "Should I build a dam or tanks first?",
acceptedAnswer: {
"@type": "Answer",
text: "If the river is narrow and reachable, build the dam early. If the river is wide, far, or awkward, fill tanks first and build the dam later.",
},
},
{
"@type": "Question",
name: "What is the difference between a dam and a floodgate?",
acceptedAnswer: {
"@type": "Answer",
text: "A dam has a fixed pass-through behavior. A floodgate can be adjusted, so you can control whether water is held, released, or diverted.",
},
},
{
"@type": "Question",
name: "How tall are floodgates?",
acceptedAnswer: {
"@type": "Answer",
text: "Plan single, double, and triple floodgates as about 1.0 m, 2.0 m, and 3.0 m of controllable water height.",
},
},
{
"@type": "Question",
name: "How much water evaporates in Timberborn?",
acceptedAnswer: {
"@type": "Answer",
text: "A useful planning number is about 0.045 water per exposed tile per day. This is why wide shallow reservoirs lose more water than deep compact reservoirs with the same volume.",
},
},
{
"@type": "Question",
name: "Why does my Water Pump stop when I can still see water?",
acceptedAnswer: {
"@type": "Answer",
text: "The water may be too shallow. Water Pumps need roughly 0.3 m of water depth to keep working.",
},
},
{
"@type": "Question",
name: "What is a spillway?",
acceptedAnswer: {
"@type": "Answer",
text: "A spillway is a planned overflow route. It should send extra water somewhere safe instead of letting a full reservoir overtop a random weak edge.",
},
},
{
"@type": "Question",
name: "What is a T-valve in Timberborn?",
acceptedAnswer: {
"@type": "Answer",
text: "A T-valve is a water split where two gated branches let you switch the flow direction. Open one branch and close the other to redirect water.",
},
},
{
"@type": "Question",
name: "How deep should a reservoir be?",
acceptedAnswer: {
"@type": "Answer",
text: "Use 2.0 m+ as a practical early target before treating a reservoir as serious drought storage. Deeper compact storage is usually better than wide shallow storage.",
},
},
{
"@type": "Question",
name: "When should I automate floodgates?",
acceptedAnswer: {
"@type": "Answer",
text: "Automate only after the manual route works. Automation improves a safe system; it does not fix bad routing.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Dam, Levee & Floodgate Guide",
description:
"Choose Timberborn dams, levees and floodgates with 65% dam buffers, 1/2/3 m gates, evaporation math, pump depth, spillways, T-valves and drought release.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Dam, Levee & Floodgate Guide",
description:
"Plan Timberborn dams, levees, floodgates, reservoirs, evaporation, spillways, T-valves, pump depth and controlled drought release.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Completed Timberborn dam holding water behind an early river buffer.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn Dam, Levee & Floodgate Guide",
description:
"Use dams, levees, floodgates, reservoir depth, evaporation math, spillways and T-valves to control Timberborn water.",
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
item: `${siteUrl}/timberborn`,
},
{
"@type": "ListItem",
position: 3,
name: "Dam, Levee and Floodgate Guide",
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
"Timberborn Dam, Levee and Floodgate Guide: Reservoirs, Evaporation, Spillways and T-Valves",
description:
"A player-focused Timberborn 1.0 water-control guide covering dams, levees, floodgates, reservoir depth, 65% dam buffers, 1.0 m, 2.0 m and 3.0 m floodgate planning, evaporation at 0.045 water per exposed tile per day, Water Pump working depth, spillways, T-valve diversions, gate operation, controlled drought release, trapped water, throttling valves, badwater choke points, and troubleshooting.",
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
name: "Timberborn 0.045 evaporation",
},
{
"@type": "Thing",
name: "Timberborn Water Pump depth",
},
{
"@type": "Thing",
name: "Timberborn 65% dam buffer",
},
{
"@type": "Thing",
name: "Timberborn floodgate height",
},
{
"@type": "Thing",
name: "Timberborn 1.0 m floodgate",
},
{
"@type": "Thing",
name: "Timberborn 2.0 m floodgate",
},
{
"@type": "Thing",
name: "Timberborn 3.0 m floodgate",
},
{
"@type": "Thing",
name: "Timberborn reservoir depth",
},
{
"@type": "Thing",
name: "Timberborn spillway",
},
{
"@type": "Thing",
name: "Timberborn T-valve",
},
{
"@type": "Thing",
name: "Timberborn trapped water",
},
{
"@type": "Thing",
name: "Timberborn throttling valve",
},
{
"@type": "Thing",
name: "Timberborn badwater choke point",
},
{
"@type": "Thing",
name: "Timberborn drought release",
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
      title="Timberborn Dam, Levee & Floodgate Guide"
      description="Choose the right Timberborn water-control structure with dam buffers, floodgate heights, evaporation math, reservoir depth, pump depth, spillways, T-valves, trapped-water fixes and controlled drought release."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <DamGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}
