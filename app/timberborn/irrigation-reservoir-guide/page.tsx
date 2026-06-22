import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import IrrigationGuideContent from "@/data/timberborn/irrigation-reservoir-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/irrigation-reservoir-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-drought-crop-risk.webp`,
`${siteUrl}/images/timberborn/timberborn-reservoir-hole-plan.webp`,
`${siteUrl}/images/timberborn/timberborn-drought-proof-water-hole-depth.webp`,
`${siteUrl}/images/timberborn/timberborn-water-diverter-filling-pit.webp`,
`${siteUrl}/images/timberborn/timberborn-underground-irrigation-tunnel-layout.webp`,
`${siteUrl}/images/timberborn/timberborn-irrigation-tank-throttling-valve.webp`,
`${siteUrl}/images/timberborn/timberborn-underground-irrigation-flow.webp`,
`${siteUrl}/images/timberborn/timberborn-underground-irrigation-green-coverage.webp`,
`${siteUrl}/images/timberborn/timberborn-stream-gauge-flow-rate.webp`,
];

const toc = [
{
id: "timberborn-irrigation-reservoir-guide",
label: "Irrigation guide",
},
{
id: "irrigation-numbers",
label: "Planning numbers",
},
{
id: "map-and-farm-situations",
label: "Map and farm situations",
},
{
id: "coverage-and-water-depth",
label: "Coverage and water depth",
},
{
id: "reservoir-before-tunnel",
label: "Reservoir before tunnel",
},
{
id: "reservoir-design-checks",
label: "Reservoir checks",
},
{
id: "depth-over-width",
label: "Depth over width",
},
{
id: "canal-width",
label: "Canal width",
},
{
id: "filling-a-reservoir",
label: "Fill the reservoir",
},
{
id: "underground-irrigation",
label: "Underground irrigation",
},
{
id: "flow-control",
label: "Flow control",
},
{
id: "aquatic-crops",
label: "Aquatic crops",
},
{
id: "do-not-refill-everything",
label: "Do not refill everything",
},
{
id: "green-coverage",
label: "Green coverage",
},
{
id: "stream-gauge",
label: "Stream gauges",
},
{
id: "badwater-safe-irrigation",
label: "Badwater safety",
},
{
id: "common-irrigation-mistakes",
label: "Common mistakes",
},
{
id: "after-drought-recovery",
label: "After-drought recovery",
},
{
id: "recommended-irrigation-checklist",
label: "Recommended checklist",
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
name: "Why are my crops drying out even though I have water tanks?",
acceptedAnswer: {
"@type": "Answer",
text: "Tanks store drinking water. They do not irrigate soil unless water is routed close enough and deep enough to keep the farm green.",
},
},
{
"@type": "Question",
name: "Why do the outer crops dry first?",
acceptedAnswer: {
"@type": "Answer",
text: "As water level drops, irrigation coverage can shrink. The farthest crop tiles from the water source often lose coverage first.",
},
},
{
"@type": "Question",
name: "How deep should a Timberborn reservoir be?",
acceptedAnswer: {
"@type": "Answer",
text: "Use 2.0 m or more as a practical target before relying on a reservoir for longer droughts. Deeper compact storage is usually better than wide shallow storage.",
},
},
{
"@type": "Question",
name: "How much water evaporates in Timberborn?",
acceptedAnswer: {
"@type": "Answer",
text: "A useful planning number is about 0.045 m per exposed surface tile per day. This is why wide shallow reservoirs lose more water than deep compact reservoirs with the same volume.",
},
},
{
"@type": "Question",
name: "Should my irrigation canal be wider?",
acceptedAnswer: {
"@type": "Answer",
text: "Usually no if the goal is soil coverage. One-tile-wide canals are often the most space-efficient. Wider canals are useful when you also need storage volume or flow capacity.",
},
},
{
"@type": "Question",
name: "Why did my Cattails or Spadderdock die?",
acceptedAnswer: {
"@type": "Answer",
text: "Aquatic crops need direct water coverage on their growing tiles. If drought drains the basin or riverbed, they can die even if nearby land is still green.",
},
},
{
"@type": "Question",
name: "Should I refill the whole river to irrigate crops?",
acceptedAnswer: {
"@type": "Answer",
text: "Only as an emergency or test. It can waste a lot of water if you only need to keep a small farm zone green.",
},
},
{
"@type": "Question",
name: "When is underground irrigation worth it?",
acceptedAnswer: {
"@type": "Answer",
text: "It is worth it when a specific farm or forest area keeps drying out and refilling the surface river wastes too much water.",
},
},
{
"@type": "Question",
name: "Why is my underground irrigation not making land green?",
acceptedAnswer: {
"@type": "Answer",
text: "The route may be too far from the target soil, too shallow, too short, or not holding enough water. Check green coverage, not just water level.",
},
},
{
"@type": "Question",
name: "Should I automate irrigation?",
acceptedAnswer: {
"@type": "Answer",
text: "Only after the manual system works. First confirm the source, outlet, flow, depth, and green coverage. Then add sensors or valves for reliability.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Irrigation & Reservoir Guide",
description:
"Plan Timberborn irrigation with reservoir depth, 0.045 evaporation, pump depth, canal width, green coverage, Cattails, Spadderdock and drought recovery.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Irrigation & Reservoir Guide",
description:
"Keep Timberborn crops watered with reservoir depth, evaporation math, pump depth, irrigation coverage, canal width, aquatic crops, gauges and flow control.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Timberborn crops at risk when drought removes nearby irrigation.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn Irrigation & Reservoir Guide",
description:
"Plan reservoirs, canals, water depth, green coverage, aquatic crops and drought-safe irrigation in Timberborn.",
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
name: "Irrigation and Reservoir Guide",
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
"Timberborn Irrigation and Reservoir Guide: Depth, Coverage, Canals and Aquatic Crops",
description:
"A player-focused Timberborn 1.0 irrigation and reservoir guide covering drinking-water math versus crop-irrigation math, 2.1–2.5 water per beaver planning, pump minimum depth, 2.0 m reservoir depth, 0.045 m evaporation per exposed surface tile per day, irrigation radius, green coverage, one-tile canal efficiency, underground irrigation, Cattails, Spadderdock, stream gauges, throttling valves, badwater-safe routes, and drought recovery fixes.",
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
name: "Timberborn irrigation guide",
},
{
"@type": "Thing",
name: "Timberborn reservoir guide",
},
{
"@type": "Thing",
name: "Timberborn crop drying",
},
{
"@type": "Thing",
name: "Timberborn green coverage",
},
{
"@type": "Thing",
name: "Timberborn irrigation radius",
},
{
"@type": "Thing",
name: "Timberborn water depth",
},
{
"@type": "Thing",
name: "Timberborn reservoir depth",
},
{
"@type": "Thing",
name: "Timberborn 2.0 m reservoir",
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
name: "Timberborn pump depth",
},
{
"@type": "Thing",
name: "Timberborn canal width",
},
{
"@type": "Thing",
name: "Timberborn one-tile canal",
},
{
"@type": "Thing",
name: "Timberborn underground irrigation",
},
{
"@type": "Thing",
name: "Timberborn Cattails",
},
{
"@type": "Thing",
name: "Timberborn Spadderdock",
},
{
"@type": "Thing",
name: "Timberborn aquatic crops",
},
{
"@type": "Thing",
name: "Timberborn stream gauge",
},
{
"@type": "Thing",
name: "Timberborn throttling valve",
},
{
"@type": "Thing",
name: "Timberborn badwater-safe irrigation",
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
      title="Timberborn Irrigation & Reservoir Guide"
      description="Keep crops, trees and aquatic crops alive with reservoir depth, evaporation math, pump depth, irrigation coverage, canal width, underground routes, stream gauges and drought recovery checks."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <IrrigationGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
