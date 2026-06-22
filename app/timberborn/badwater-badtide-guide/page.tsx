import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import BadwaterGuideContent from "@/data/timberborn/badwater-badtide-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/timberborn/badwater-badtide-guide`;

const imageUrls = [
`${siteUrl}/images/timberborn/timberborn-badwater-triple-floodgate.webp`,
`${siteUrl}/images/timberborn/timberborn-badwater-source-diversion-path.webp`,
`${siteUrl}/images/timberborn/timberborn-badwater-dual-purpose-reservoir.webp`,
`${siteUrl}/images/timberborn/timberborn-badtide-divert-source-plan.webp`,
`${siteUrl}/images/timberborn/timberborn-trapped-water-floodgate-warning.webp`,
`${siteUrl}/images/timberborn/timberborn-badwater-channel-capacity.webp`,
`${siteUrl}/images/timberborn/timberborn-badtide-contamination-sensor-automation.webp`,
];

const toc = [
{
id: "timberborn-badwater-badtide-guide",
label: "Badwater guide",
},
{
id: "badwater-vs-badtide",
label: "Badwater vs badtide",
},
{
id: "why-badwater-is-dangerous",
label: "Contamination spread",
},
{
id: "first-badwater-defense",
label: "First defense",
},
{
id: "badtide-drains",
label: "Badtide Drains",
},
{
id: "dual-purpose-reservoir",
label: "Dual-purpose reservoir",
},
{
id: "badwater-rig-and-source-routing",
label: "Source routing",
},
{
id: "extract-production",
label: "Extract production",
},
{
id: "faction-differences",
label: "Faction differences",
},
{
id: "avoid-trapped-water",
label: "Trapped badwater",
},
{
id: "channel-capacity",
label: "Channel capacity",
},
{
id: "automation-timing",
label: "Automation timing",
},
{
id: "common-badwater-mistakes",
label: "Common mistakes",
},
{
id: "recommended-badwater-plan",
label: "Recommended plan",
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
href: "/timberborn/dam-levee-floodgate-guide",
label: "Dam, Levee and Floodgate Guide",
},
{
href: "/timberborn/automation-guide",
label: "Automation Guide",
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
name: "How do I stop badwater in Timberborn?",
acceptedAnswer: {
"@type": "Answer",
text: "Give badwater a separate route away from your main river, farms, pumps, and clean irrigation. Use levees, floodgates, barriers, and safe outlets.",
},
},
{
"@type": "Question",
name: "Why is badwater so dangerous?",
acceptedAnswer: {
"@type": "Answer",
text: "Badwater can contaminate connected water and terrain. If it reaches your farm or drinking route, the damage can spread far beyond the first tile.",
},
},
{
"@type": "Question",
name: "What is a Badtide Drain?",
acceptedAnswer: {
"@type": "Answer",
text: "A Badtide Drain is a map feature that can release badwater during badtides. It may not matter during normal weather, so check the map before building downstream.",
},
},
{
"@type": "Question",
name: "How long can badtides last?",
acceptedAnswer: {
"@type": "Answer",
text: "It depends on settings and difficulty. Easy badtides can be short, while hard badtides can last several days. Long colonies should plan for longer events over time.",
},
},
{
"@type": "Question",
name: "Can contaminated terrain still hurt me after badwater leaves?",
acceptedAnswer: {
"@type": "Answer",
text: "Yes. Soil can remain unsafe after the visible badwater recedes, and contamination can continue affecting crops and nearby land.",
},
},
{
"@type": "Question",
name: "Should I block badwater completely?",
acceptedAnswer: {
"@type": "Answer",
text: "Not always. Toxic water still needs somewhere to go. A controlled diversion is usually safer than trapping it.",
},
},
{
"@type": "Question",
name: "How do I use badwater for Extract?",
acceptedAnswer: {
"@type": "Answer",
text: "Use Badwater Pump and storage, then process badwater in a Centrifuge. A common conversion is 4 badwater plus 0.1 logs into 1 Extract per 0.75-hour cycle.",
},
},
{
"@type": "Question",
name: "What is different for Folktails and Iron Teeth?",
acceptedAnswer: {
"@type": "Answer",
text: "Folktails can use Contamination Barriers to protect farmland. Iron Teeth use different irrigation tools and can also use badwater discharge for power setups.",
},
},
{
"@type": "Question",
name: "When should I automate badwater control?",
acceptedAnswer: {
"@type": "Answer",
text: "Automate only after the manual route works. A simple starter circuit is Contamination Sensor above 5% OR Badtide Weather opening the badwater outlet.",
},
},
{
"@type": "Question",
name: "Why is badwater trapped behind my floodgate?",
acceptedAnswer: {
"@type": "Answer",
text: "The gate or terrain may have created a dead-end pocket. Check the inlet, outlet, and any terrain lip that prevents water from flushing away.",
},
},
];

export const metadata: Metadata = {
title: "Timberborn Badwater & Badtide Guide",
description:
"Stop badwater in Timberborn with toxic-water routes, contamination fixes, Badtide Drain checks, Extract production, faction tools and automation timing.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title: "Timberborn Badwater & Badtide Guide",
description:
"Control Timberborn badwater with contamination-safe routing, Badtide Drain checks, floodgate defenses, Extract production and faction tools.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Annotated badwater floodgate choke point in Timberborn.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Timberborn Badwater & Badtide Guide",
description:
"Build safe badwater routes, stop contamination spread, check Badtide Drains, use Extract production and time automation correctly.",
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
name: "Badwater and Badtide Guide",
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
"Timberborn Badwater and Badtide Guide: Contamination, Drains, Routing and Extract",
description:
"A player-focused Timberborn badwater and badtide guide covering contamination spread, connected water risks, contaminated terrain, Badtide timing, Badtide Drains, safe toxic-water routing, floodgate choke points, dual-purpose reservoirs, badwater source routing, Extract production, Folktails and Iron Teeth faction tools, trapped badwater, channel capacity, and automation timing.",
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
name: "Timberborn badwater guide",
},
{
"@type": "Thing",
name: "Timberborn badtide guide",
},
{
"@type": "Thing",
name: "Timberborn contamination",
},
{
"@type": "Thing",
name: "Timberborn contaminated terrain",
},
{
"@type": "Thing",
name: "Timberborn Badtide Drain",
},
{
"@type": "Thing",
name: "Timberborn badwater routing",
},
{
"@type": "Thing",
name: "Timberborn floodgate defense",
},
{
"@type": "Thing",
name: "Timberborn trapped badwater",
},
{
"@type": "Thing",
name: "Timberborn channel capacity",
},
{
"@type": "Thing",
name: "Timberborn badwater source",
},
{
"@type": "Thing",
name: "Timberborn Badwater Pump",
},
{
"@type": "Thing",
name: "Timberborn Centrifuge",
},
{
"@type": "Thing",
name: "Timberborn Extract production",
},
{
"@type": "Thing",
name: "Timberborn Contamination Barrier",
},
{
"@type": "Thing",
name: "Timberborn Irrigation Barrier",
},
{
"@type": "Thing",
name: "Timberborn Badwater Discharge",
},
{
"@type": "Thing",
name: "Timberborn badwater automation",
},
{
"@type": "Thing",
name: "Timberborn Contamination Sensor",
},
{
"@type": "Thing",
name: "Timberborn badtide weather logic",
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
      title="Timberborn Badwater & Badtide Guide"
      description="Stop badwater from poisoning your colony with safe toxic-water routes, Badtide Drain checks, contamination fixes, trapped-water prevention, Extract production and automation timing."
      gameTitle="Timberborn"
      gameHref="/timberborn"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 22, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <BadwaterGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
