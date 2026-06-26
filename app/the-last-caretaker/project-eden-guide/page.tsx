import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import TheLastCaretakerProjectEdenContent from "@/data/the-last-caretaker/project-eden-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/the-last-caretaker/project-eden-guide`;

const imageUrls = [
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-new-horizons-pishon-marker.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-pishon-eden-frame-platform.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-eden-frame-material-requirements.webp`,
`${siteUrl}/images/the-last-caretaker/the-last-caretaker-eden-frame-water-power-oxygen-inputs.webp`,
];

export const metadata: Metadata = {
title: "The Last Caretaker Project Eden Guide - First Roots",
description:
  "Start Project Eden at Pishon, craft Stainless Steel with oil, place Eden Frame, build Farming Platform, connect water/power, add soil and grow first roots.",
  
alternates: {
canonical: pageUrl,
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
name: "The Last Caretaker Guide",
item: `${siteUrl}/the-last-caretaker`,
},
{
"@type": "ListItem",
position: 3,
name: "Project Eden Guide",
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
"The Last Caretaker Project Eden Guide: Pishon, Eden Frame, Stainless Steel, Farming Platform, Water, Power, Soil, and First Roots",
description:
"This The Last Caretaker Project Eden guide explains how to start the First Roots route at Pishon, place Eden Frame - Small 1, craft Stainless Steel with Iron and oil, fix sensitive frame placement, build the Farming Platform, connect the Water Purifier to the lower Frame Water Pump, power the frame, add soil and seeds, and avoid common Project Eden mistakes.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-26",
dateModified: "2026-06-26",
about: [
{
"@type": "VideoGame",
name: "The Last Caretaker",
},
{
"@type": "Thing",
name: "Project Eden",
},
{
"@type": "Thing",
name: "Pishon",
},
{
"@type": "Thing",
name: "First Roots",
},
{
"@type": "Thing",
name: "Eden Frame - Small 1",
},
{
"@type": "Thing",
name: "Farming Platform",
},
{
"@type": "Thing",
name: "Stainless Steel",
},
{
"@type": "Thing",
name: "Fabricator",
},
{
"@type": "Thing",
name: "Water Purifier",
},
{
"@type": "Thing",
name: "Water Pump",
},
{
"@type": "Thing",
name: "Connection Ports",
},
{
"@type": "Thing",
name: "Power Routing",
},
{
"@type": "Thing",
name: "Seeds",
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
},
{
"@type": "FAQPage",
"@id": `${pageUrl}#faq`,
mainEntity: [
{
"@type": "Question",
name: "Where does Project Eden start?",
acceptedAnswer: {
"@type": "Answer",
text: "Project Eden starts at Pishon. Follow the Pishon marker, find the platform, and place Eden Frame - Small 1 there.",
},
},
{
"@type": "Question",
name: "How do I make Stainless Steel?",
acceptedAnswer: {
"@type": "Answer",
text: "Make Stainless Steel in the Fabricator with 1 Iron and 10L oil. Bring enough oil before committing to the Eden build chain.",
},
},
{
"@type": "Question",
name: "Why can’t I place the Eden Frame?",
acceptedAnswer: {
"@type": "Answer",
text: "Move closer to the platform, check the build surface, clear nearby floating crates or panels, and try a different angle around the support structure. Eden Frame placement can be sensitive.",
},
},
{
"@type": "Question",
name: "What comes after Eden Frame - Small 1?",
acceptedAnswer: {
"@type": "Answer",
text: "Build the Farming Platform on the frame walkway, then connect water and power, add soil, and plant seeds so the first roots step can progress.",
},
},
{
"@type": "Question",
name: "How much Stainless Steel does the Farming Platform need?",
acceptedAnswer: {
"@type": "Answer",
text: "Plan around Stainless Steel x8 for the Farming Platform, then confirm the current in-game prompt before building.",
},
},
{
"@type": "Question",
name: "Where do I connect power?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the available socket on the frame or platform setup. Place wind or solar nearby if needed, then connect the power route into the frame system.",
},
},
{
"@type": "Question",
name: "How do I water the Farming Platform?",
acceptedAnswer: {
"@type": "Answer",
text: "Connect a Water Purifier to the Water Pump on the lower part of the Frame. Once the freshwater route is connected to the main frame, watering is automatic.",
},
},
{
"@type": "Question",
name: "Do I need the Oil Whale before Project Eden?",
acceptedAnswer: {
"@type": "Answer",
text: "Not for the first frame or Farming Platform. Oil Whale can help later if you need more oil, but the early Eden route mainly needs Stainless Steel, support parts, water, power, soil, and seeds.",
},
},
{
"@type": "Question",
name: "What should I read next?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Power and Fuel Wall Outlets Guide if your ship routing is messy, or the New Horizons Guide for the full Update 5 route.",
},
},
],
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
title="The Last Caretaker Project Eden Guide"
description="Start the Project Eden First Roots route at Pishon: place Eden Frame - Small 1, craft Stainless Steel, add the Farming Platform, connect Water Purifier and power, then plant seeds so the first roots step can progress."
gameTitle="The Last Caretaker"
gameHref="/the-last-caretaker"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 26, 2026"
toc={[
{
id: "where-project-eden-starts",
label: "Where Eden starts",
},
{
id: "what-to-bring",
label: "What to bring",
},
{
id: "stainless-steel",
label: "Stainless Steel",
},
{
id: "find-the-pishon-platform",
label: "Find Pishon platform",
},
{
id: "eden-frame-materials",
label: "Frame materials",
},
{
id: "build-the-first-frame",
label: "Build Eden Frame",
},
{
id: "farming-platform",
label: "Farming Platform",
},
{
id: "water-power-soil-seeds",
label: "Water & seeds",
},
{
id: "power-and-routing",
label: "Power & routing",
},
{
id: "what-can-wait",
label: "What can wait",
},
{
id: "common-mistakes",
label: "Common mistakes",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/the-last-caretaker",
label: "The Last Caretaker Guide Hub",
},
{
href: "/the-last-caretaker/new-horizons-guide",
label: "New Horizons Guide",
},
{
href: "/the-last-caretaker/power-fuel-wall-outlets",
label: "Power & Fuel Wall Outlets Guide",
},
{
href: "/the-last-caretaker/oil-whale-guide",
label: "Oil Whale Guide",
},
{
href: "/the-last-caretaker/research-outpost-theta-9-guide",
label: "Research Outpost Theta 9 Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <TheLastCaretakerProjectEdenContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
