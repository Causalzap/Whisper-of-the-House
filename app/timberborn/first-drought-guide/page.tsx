import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import FirstDroughtGuideContent from "@/data/timberborn/first-drought-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/first-drought-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-first-drought-warning.webp`,
`${siteUrl}/images/timberborn/timberborn-water-tank-no-storage.webp`,
`${siteUrl}/images/timberborn/timberborn-dam-complete-65-percent-buffer.webp`,
`${siteUrl}/images/timberborn/timberborn-water-pump-draining-river.webp`,
`${siteUrl}/images/timberborn/timberborn-drought-crop-risk.webp`,
];

const toc = [
{
id: "timberborn-first-drought-guide",
label: "First drought guide",
},
{
id: "what-drought-does",
label: "What drought does",
},
{
id: "first-drought-numbers",
label: "Water numbers",
},
{
id: "map-based-plan",
label: "Map-based plan",
},
{
id: "difficulty-and-scaling",
label: "Difficulty scaling",
},
{
id: "water-tanks-and-pump-reach",
label: "Tanks and pump reach",
},
{
id: "finish-the-dam",
label: "Finish the dam",
},
{
id: "faction-and-population",
label: "Faction and population",
},
{
id: "during-the-drought",
label: "Days left formula",
},
{
id: "crops-during-drought",
label: "Crops during drought",
},
{
id: "evaporation-after-drought",
label: "Evaporation",
},
{
id: "common-first-drought-mistakes",
label: "Common mistakes",
},
{
id: "after-the-first-drought",
label: "After the drought",
},
{
id: "recommended-first-drought-route",
label: "Recommended route",
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
href: "/timberborn/beginner-guide",
label: "Beginner Guide",
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
name: "How much water does one beaver need per day?",
acceptedAnswer: {
"@type": "Answer",
text: "A useful baseline is about 2.1 water per adult beaver per day. For beginner planning, use 2.5 water per day. Use 3 water per day only as a conservative safety buffer.",
},
},
{
"@type": "Question",
name: "Is one Small Tank enough for the first drought?",
acceptedAnswer: {
"@type": "Answer",
text: "Usually no. A Small Tank stores 30 water. For 10 beavers, that is only about one day if you use the conservative 3 water per day planning value.",
},
},
{
"@type": "Question",
name: "Should I always build a dam before the first drought?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Build it early only if the river is narrow, close, and reachable. If the site is wide or awkward, filled tanks are safer than an unfinished dam.",
},
},
{
"@type": "Question",
name: "Why did my pump stop during drought?",
acceptedAnswer: {
"@type": "Answer",
text: "The river level likely dropped too low for the pump to keep working. Pump reach matters as much as the amount of visible water.",
},
},
{
"@type": "Question",
name: "Is the first drought longer on Hard Mode?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes, Hard can start with a much longer first drought than Easy or Normal. Use the forecast and plan with a larger water buffer.",
},
},
{
"@type": "Question",
name: "Why do later droughts feel harder?",
acceptedAnswer: {
"@type": "Answer",
text: "On Normal and Hard, drought pressure increases over time. The first drought is only the first test, not the final water target.",
},
},
{
"@type": "Question",
name: "Should I add more housing before the first drought?",
acceptedAnswer: {
"@type": "Answer",
text: "Only if water and food are clearly ahead. More beavers mean more labor, but they also increase water and food demand.",
},
},
{
"@type": "Question",
name: "Why did my crops die even though beavers survived?",
acceptedAnswer: {
"@type": "Answer",
text: "Tanks solved drinking water, not soil irrigation. Crops need nearby water or green land to stay alive.",
},
},
{
"@type": "Question",
name: "What should I fix first after the drought ends?",
acceptedAnswer: {
"@type": "Answer",
text: "Fix the system that almost failed: tank storage, pump reach, dam timing, food, logs, or crop irrigation.",
},
},
{
"@type": "Question",
name: "Does evaporation matter for the first drought?",
acceptedAnswer: {
"@type": "Answer",
text: "Usually not as much as storage and pump reach, but it matters when you start building reservoirs. Deep compact storage loses less useful water than wide shallow storage.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn First Drought Guide: Water & Pumps",
description:
"Survive Timberborn’s first drought with water math, tank targets, pump reach, difficulty lengths, Folktails vs Iron Teeth, crop drying and recovery fixes.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn First Drought Guide",
description:
"Use Timberborn first drought water math, tank planning, pump reach, faction differences, crop checks and recovery fixes to keep your colony alive.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "First drought warning timer in Timberborn.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn First Drought Guide",
description:
"Calculate water days left, protect pump reach, control population and survive Timberborn’s first drought.",
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
name: "First Drought Guide",
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
"Timberborn First Drought Guide: Water Math, Pump Reach, Difficulty Scaling and Recovery",
description:
"A player-focused Timberborn 1.0 first drought guide covering water consumption math, 2.1 baseline water use, 2.5 safer planning, 3/day conservative buffers, Small Tank storage, Easy, Normal and Hard first drought planning, pump reach, shallow-water pump failure, Folktails and Iron Teeth differences, population control, crop drying, evaporation, days-left calculations, and what to fix after the first drought.",
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
name: "Timberborn first drought guide",
},
{
"@type": "Thing",
name: "Timberborn drought survival",
},
{
"@type": "Thing",
name: "Timberborn water math",
},
{
"@type": "Thing",
name: "Timberborn beaver water use",
},
{
"@type": "Thing",
name: "Timberborn 2.1 water per day",
},
{
"@type": "Thing",
name: "Timberborn 2.5 water planning",
},
{
"@type": "Thing",
name: "Timberborn Small Tank",
},
{
"@type": "Thing",
name: "Timberborn pump reach",
},
{
"@type": "Thing",
name: "Timberborn pump minimum depth",
},
{
"@type": "Thing",
name: "Timberborn Easy first drought",
},
{
"@type": "Thing",
name: "Timberborn Normal first drought",
},
{
"@type": "Thing",
name: "Timberborn Hard first drought",
},
{
"@type": "Thing",
name: "Timberborn Folktails",
},
{
"@type": "Thing",
name: "Timberborn Iron Teeth",
},
{
"@type": "Thing",
name: "Timberborn population control",
},
{
"@type": "Thing",
name: "Timberborn crop drying",
},
{
"@type": "Thing",
name: "Timberborn evaporation",
},
{
"@type": "Thing",
name: "Timberborn dam timing",
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
      title="Timberborn First Drought Guide"
      description="Survive the first drought with water math, tank targets, pump reach, difficulty-based drought planning, faction differences, population control, crop checks and a days-left formula."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <FirstDroughtGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
