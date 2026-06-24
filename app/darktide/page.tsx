import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import DarktideSkitariiHubContent from "@/data/darktide/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/darktide`;

const imageUrls = [
`${siteUrl}/images/darktide/darktide-skitarii-starting-weapons.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-servo-skull-objective.webp`,
`${siteUrl}/images/darktide/darktide-skitarii-redline-capacitors-tooltip.webp`,
];

export const metadata: Metadata = {
title: "Darktide Skitarii Guide: Builds, Weapons & Servo Skull",
description:
"Start Darktide Skitarii with first-hour basics: Cog Tree, Servo Skull inputs, Capacitance, Redline flow, then choose build, weapon or Servo Skull guides.",
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
name: "Darktide Skitarii Guide",
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
"Darktide Skitarii Guide Hub: First-Hour Basics, Builds, Weapons, Servo Skull, and Capacitance",
description:
"This Darktide Skitarii guide hub helps new Skitarii players understand the first-hour learning order: Basic Training weapons, Servo Skull input rules, Capacitance and Redline charge flow, the radial Cog Tree, and which deeper guide to read next for builds, weapons, or Servo Skull troubleshooting.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-24",
dateModified: "2026-06-24",
about: [
{
"@type": "VideoGame",
name: "Warhammer 40,000: Darktide",
},
{
"@type": "Thing",
name: "Darktide Skitarii guide",
},
{
"@type": "Thing",
name: "Skitarii first hour",
},
{
"@type": "Thing",
name: "Skitarii Cog Tree",
},
{
"@type": "Thing",
name: "Skitarii Servo Skull",
},
{
"@type": "Thing",
name: "Skitarii Capacitance",
},
{
"@type": "Thing",
name: "Skitarii Redline Capacitors",
},
{
"@type": "Thing",
name: "Skitarii weapons",
},
{
"@type": "Thing",
name: "Skitarii builds",
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
name: "What should I learn first as Skitarii?",
acceptedAnswer: {
"@type": "Answer",
text: "Learn Basic Training weapons, Servo Skull inputs, and Capacitance / Redline charge flow first. Those three systems explain most first-hour confusion.",
},
},
{
"@type": "Question",
name: "What weapons does Skitarii start with?",
acceptedAnswer: {
"@type": "Answer",
text: "Skitarii starts with Brutus Arc Maul and Echios Galvanic Rifle after Basic Training. For weapon decisions beyond that, use the Skitarii Weapons Guide.",
},
},
{
"@type": "Question",
name: "Why does Skitarii feel confusing at first?",
acceptedAnswer: {
"@type": "Answer",
text: "Skitarii combines a radial Cog Tree, multiple Servo Skull inputs, and Capacitance resource management very early, so the first hour can feel busy.",
},
},
{
"@type": "Question",
name: "Where should I go for the best Skitarii build?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Best Skitarii Builds Guide for Redline Capacitors, Surge-Extension, Power Overload, Arc Rifle, Chordclaw, shield route, Curios, and difficulty changes.",
},
},
{
"@type": "Question",
name: "Where should I go for Skitarii weapons?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Skitarii Weapons Guide for Arc Maul, Phosphor Blast Pistol, Galvanic Rifle, Arc Rifle, Transonic Blades, Power Sword, blessings, and upgrade timing.",
},
},
{
"@type": "Question",
name: "Where should I go if Servo Skull is not working?",
acceptedAnswer: {
"@type": "Answer",
text: "Use the Skitarii Servo Skull Guide. Most Servo Skull problems come from mixing up double-tap Tag and Blitz input.",
},
},
{
"@type": "Question",
name: "Should I read a Penances guide first?",
acceptedAnswer: {
"@type": "Answer",
text: "No. Learn the class route first. Penances make more sense after the weapons, build, and Servo Skull inputs are stable.",
},
},
{
"@type": "Question",
name: "What should I read after this hub?",
acceptedAnswer: {
"@type": "Answer",
text: "Read the builds guide for talent routes, the weapons guide for weapon choice, or the Servo Skull guide for input and troubleshooting.",
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
title="Warhammer 40,000: Darktide - Skitarii Class Guide Hub"
description="Use this first-hour Skitarii map to understand Basic Training, Servo Skull inputs, Capacitance, Redline charge flow, and which deeper guide to read next."
gameTitle="Darktide"
gameHref="/darktide"
breadcrumbBaseHref="/"
breadcrumbBaseLabel="Home"
updatedAt="June 24, 2026"
toc={[
{
id: "start-here",
label: "Start here",
},
{
id: "guide-route",
label: "Guide route",
},
{
id: "basic-training",
label: "Basic Training",
},
{
id: "servo-skull-first-hour",
label: "Servo Skull basics",
},
{
id: "capacitance-and-cog-tree",
label: "Capacitance and Cog Tree",
},
{
id: "first-specialization-choice",
label: "Specialization choice",
},
{
id: "what-this-hub-does-not-do",
label: "What this hub does not do",
},
{
id: "early-mistakes",
label: "Early mistakes",
},
{
id: "what-to-read-next",
label: "What to read next",
},
{
id: "faq",
label: "FAQ",
},
]}
relatedLinks={[
{
href: "/darktide/best-skitarii-builds",
label: "Best Skitarii Builds Guide",
},
{
href: "/darktide/skitarii-weapons",
label: "Skitarii Weapons Guide",
},
{
href: "/darktide/skitarii-servo-skull",
label: "Skitarii Servo Skull Guide",
},
{
href: "/#all-game-guides",
label: "All Game Guides",
},
]}
> <DarktideSkitariiHubContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
