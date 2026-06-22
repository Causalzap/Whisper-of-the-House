import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AutomationGuideContent from "@/data/timberborn/automation-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/automation-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-automation-throttling-valves.webp`,
`${siteUrl}/images/timberborn/timberborn-badtide-contamination-sensor-automation.webp`,
`${siteUrl}/images/timberborn/timberborn-stream-gauge-flow-rate.webp`,
`${siteUrl}/images/timberborn/timberborn-irrigation-tank-throttling-valve.webp`,
`${siteUrl}/images/timberborn/timberborn-automation-delay-timer.webp`,
`${siteUrl}/images/timberborn/timberborn-automation-powered-building-thresholds.webp`,
`${siteUrl}/images/timberborn/timberborn-automation-population-free-beds.webp`,
`${siteUrl}/images/timberborn/timberborn-automated-floodgate-dam.webp`,
];

const toc = [
{
id: "timberborn-automation-guide",
label: "Automation guide",
},
{
id: "unlock-order",
label: "Unlock order",
},
{
id: "automation-components",
label: "Components",
},
{
id: "logic-gates",
label: "Logic gates",
},
{
id: "mini-circuits",
label: "Mini circuits",
},
{
id: "badwater-outlet-circuit",
label: "Badwater outlet",
},
{
id: "reservoir-release-circuit",
label: "Reservoir release",
},
{
id: "fill-valve-vs-throttling-valve",
label: "Valves vs floodgates",
},
{
id: "delay-and-flicker",
label: "Timers and flicker",
},
{
id: "powered-building-circuit",
label: "Powered buildings",
},
{
id: "population-circuit",
label: "Population circuit",
},
{
id: "automated-floodgates",
label: "Automated floodgates",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "best-first-automation-projects",
label: "Best first projects",
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
href: "/timberborn/badwater-badtide-guide",
label: "Badwater and Badtide Guide",
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
href: "/timberborn/first-drought-guide",
label: "First Drought Guide",
},
];

const faqEntities = [
{
"@type": "Question",
name: "What automation component should I unlock first?",
acceptedAnswer: {
"@type": "Answer",
text: "Start with a Lever, then a Depth Sensor or Stream Gauge, then Relay. This gives you manual control, measurement, and simple logic before complex circuits.",
},
},
{
"@type": "Question",
name: "What is the difference between AND and OR in Timberborn automation?",
acceptedAnswer: {
"@type": "Answer",
text: "AND triggers only when every condition is true. OR triggers when any condition is true. Use AND for safety checks and OR for danger responses.",
},
},
{
"@type": "Question",
name: "What is a good first badwater automation circuit?",
acceptedAnswer: {
"@type": "Answer",
text: "Use Contamination Sensor above 5% OR Badtide Weather as inputs, then open the badwater outlet valve or floodgate.",
},
},
{
"@type": "Question",
name: "When should I use a timer or delay?",
acceptedAnswer: {
"@type": "Answer",
text: "Use a timer or delay when a valve, floodgate, or building flickers because the output changes the same value the sensor reads.",
},
},
{
"@type": "Question",
name: "Is a Flow Sensor the same as a Depth Sensor?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Flow Sensor checks whether water is moving. Depth Sensor or Stream Gauge checks water level. Use the one that matches the problem.",
},
},
{
"@type": "Question",
name: "Should I automate population growth?",
acceptedAnswer: {
"@type": "Answer",
text: "Only later. Use population automation after food, water, jobs, and housing support are stable. It is not a first survival tool.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Automation Guide: Sensors & Logic",
description:
"Build Timberborn automation with levers, sensors, AND/OR/NOT relays, timers, valves, badwater circuits, reservoir release and factory thresholds.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Automation Guide: Sensors, Relays & Valves",
description:
"Use Timberborn automation safely with levers, depth sensors, flow sensors, contamination sensors, AND/OR/NOT logic, timers, valves and floodgates.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Throttling valves prepared for automation in Timberborn.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn Automation Guide: Sensors & Logic",
description:
"Build safer Timberborn automation with sensors, relays, timers, badwater outlets, reservoir release and powered building thresholds.",
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
name: "Automation Guide",
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
"Timberborn Automation Guide: Sensors, Relays, Logic Gates, Valves and Mini Circuits",
description:
"A player-focused Timberborn automation guide covering levers, depth sensors, flow sensors, weather and drought sensors, contamination sensors, storage and resource counters, population counters, fill valves, throttling valves, AND logic, OR logic, NOT logic, XOR logic, flip-flops, timers, delays, badwater outlet circuits, drought reservoir release circuits, emergency low-water triggers, powered building thresholds, controlled housing expansion and automated floodgates.",
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
name: "Timberborn AND logic",
},
{
"@type": "Thing",
name: "Timberborn OR logic",
},
{
"@type": "Thing",
name: "Timberborn NOT logic",
},
{
"@type": "Thing",
name: "Timberborn XOR logic",
},
{
"@type": "Thing",
name: "Timberborn Flip-Flop",
},
{
"@type": "Thing",
name: "Timberborn timer delay",
},
{
"@type": "Thing",
name: "Timberborn Depth Sensor",
},
{
"@type": "Thing",
name: "Timberborn Flow Sensor",
},
{
"@type": "Thing",
name: "Timberborn Contamination Sensor",
},
{
"@type": "Thing",
name: "Timberborn Resource Counter",
},
{
"@type": "Thing",
name: "Timberborn Population Counter",
},
{
"@type": "Thing",
name: "Timberborn Fill Valve",
},
{
"@type": "Thing",
name: "Timberborn Throttling Valve",
},
{
"@type": "Thing",
name: "Timberborn badwater automation",
},
{
"@type": "Thing",
name: "Timberborn reservoir automation",
},
{
"@type": "Thing",
name: "Timberborn floodgate automation",
},
{
"@type": "Thing",
name: "Timberborn powered building thresholds",
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
      title="Timberborn Automation Guide"
      description="Use levers, sensors, relays, logic gates, timers, valves and mini circuits to automate badwater outlets, reservoir release, powered buildings and housing growth without breaking a working colony."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <AutomationGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
