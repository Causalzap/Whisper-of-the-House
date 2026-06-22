import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BeginnerGuideContent from "@/data/timberborn/beginner-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/beginner-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-1-0-hard-mode-start.webp`,
`${siteUrl}/images/timberborn/timberborn-disaster-forecast-ui.webp`,
`${siteUrl}/images/timberborn/timberborn-first-dam-river-start.webp`,
`${siteUrl}/images/timberborn/timberborn-water-tank-no-storage.webp`,
`${siteUrl}/images/timberborn/timberborn-first-drought-warning.webp`,
`${siteUrl}/images/timberborn/timberborn-dam-complete-65-percent-buffer.webp`,
];

const toc = [
{
id: "timberborn-beginner-guide",
label: "Beginner guide",
},
{
id: "what-changed-in-1-0",
label: "What changed in 1.0",
},
{
id: "day-one-paths",
label: "Day 1 paths",
},
{
id: "beginner-numbers",
label: "Beginner numbers",
},
{
id: "first-30-days-route",
label: "First 30 days",
},
{
id: "map-start-adjustments",
label: "Map adjustments",
},
{
id: "water-and-first-dam",
label: "Water and first dam",
},
{
id: "green-land",
label: "Green land rule",
},
{
id: "forester",
label: "Forester",
},
{
id: "inventor-and-science",
label: "Inventor and science",
},
{
id: "food-and-farms",
label: "Food and farms",
},
{
id: "first-drought-warning",
label: "First drought warning",
},
{
id: "common-beginner-mistakes",
label: "Common mistakes",
},
{
id: "after-the-first-drought",
label: "After first drought",
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
];

const faqEntities = [
{
"@type": "Question",
name: "Is Folktails still the best beginner pick in Timberborn 1.0?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes for most new players. Folktails make the early loop easier to learn because farming, tree planting, and water storage are straightforward.",
},
},
{
"@type": "Question",
name: "What if my starting river is too wide for an early dam?",
acceptedAnswer: {
"@type": "Answer",
text: "Do not force the day 2–3 dam. Prioritize filled tanks, food, wood, and paths first, then build the dam when the site is reachable and affordable.",
},
},
{
"@type": "Question",
name: "Does Forester planting zone size matter?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. A tiny planting zone will not replace your starting forest fast enough. Mark enough nearby land that your future log supply grows while you handle drought prep.",
},
},
{
"@type": "Question",
name: "Is it ever okay to build on green land?",
acceptedAnswer: {
"@type": "Answer",
text: "Sometimes, if the map gives you more fertile land than you need or the layout demands it. As a beginner rule, avoid it until you understand your food margin.",
},
},
{
"@type": "Question",
name: "Should I run the Inventor during drought?",
acceptedAnswer: {
"@type": "Answer",
text: "Only if water, food, pump work, and dam work are already safe. If survival jobs are behind, temporarily move the worker and restart science after the crisis.",
},
},
{
"@type": "Question",
name: "What should I do if my first drought barely succeeds?",
acceptedAnswer: {
"@type": "Answer",
text: "Do not add many new beds. Fix the bottleneck first: water storage, food, Forester coverage, science unlocks, dam access, or path efficiency.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Beginner Guide: First 30 Days",
description:
"Start Timberborn 1.0 with a safer first 30 days route: water math, map-based dam timing, tanks, Forester, green land rules, Inventor science and drought prep.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Beginner Guide: First 30 Days",
description:
"Start Timberborn 1.0 with water math, map-based dam timing, Forester setup, green land rules, Inventor science, tanks and first drought prep.",
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
title: "Timberborn Beginner Guide: First 30 Days",
description:
"Use a safer Timberborn 1.0 opening with water math, tanks, map-based dam timing, Forester, green land rules and Inventor science.",
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
"Timberborn Beginner Guide: First 30 Days, Water Math, Forester, Green Land and Drought Prep",
description:
"A player-focused Timberborn 1.0 beginner guide covering Folktails, first 30 days planning, map-dependent dam timing, water math, Small Water Tanks, Large Water Tanks, Forester timing, green land rules, Inventor science timing, path efficiency, first drought warning checks, common beginner mistakes, and what to fix after the first drought.",
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
name: "Timberborn beginner guide",
},
{
"@type": "Thing",
name: "Timberborn first 30 days",
},
{
"@type": "Thing",
name: "Timberborn 1.0 beginner start",
},
{
"@type": "Thing",
name: "Timberborn Folktails beginner",
},
{
"@type": "Thing",
name: "Timberborn water math",
},
{
"@type": "Thing",
name: "Timberborn Small Water Tank",
},
{
"@type": "Thing",
name: "Timberborn Large Water Tank",
},
{
"@type": "Thing",
name: "Timberborn first dam",
},
{
"@type": "Thing",
name: "Timberborn map-based dam timing",
},
{
"@type": "Thing",
name: "Timberborn Forester",
},
{
"@type": "Thing",
name: "Timberborn green land rules",
},
{
"@type": "Thing",
name: "Timberborn Inventor",
},
{
"@type": "Thing",
name: "Timberborn science unlocks",
},
{
"@type": "Thing",
name: "Timberborn path efficiency",
},
{
"@type": "Thing",
name: "Timberborn first drought prep",
},
{
"@type": "Thing",
name: "Timberborn beginner mistakes",
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
      title="Timberborn Beginner Guide"
      description="Start Timberborn 1.0 with a safer first 30 days route: water math, map-based dam timing, early tanks, Forester setup, green land rules, Inventor science and first drought recovery."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
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
