import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import PointNemoContent from "@/data/scale-the-depths/point-nemo-100-percent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/point-nemo-100-percent-guide`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-door-puzzle-hint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-door-switches.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-blue-switch-1.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-loaded-support-sphere.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-sextant-artifact.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-toy-submarine.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-magnet-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-sewing-needle-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-boat-blueprint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-red-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-yellow-switch.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-apophis-99942.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-point-nemo-legendary-fish-prep.webp`,
];

const toc = [
{ id: "before-you-start", label: "Before you start" },
{ id: "point-nemo-100-checklist", label: "100% checklist" },
{ id: "recommended-route", label: "Recommended route" },
{ id: "base-door-puzzle", label: "Door puzzle" },
{ id: "blue-switches", label: "Blue Switches" },
{
id: "artifacts-baits-collectibles",
label: "Collectibles",
},
{ id: "red-switch-shortcut", label: "Red Switch shortcut" },
{ id: "yellow-switch", label: "Yellow Switch" },
{ id: "apophis-99942", label: "Apophis 99942" },
{ id: "final-check", label: "Troubleshooting" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
  {
    href: "/scale-the-depths/artifacts-guide",
    label: "Scale the Depths Artifacts Guide",
  },
{
href: "/scale-the-depths",
label: "Scale the Depths Complete Guide",
},
{
href: "/scale-the-depths/achievement-guide",
label: "Scale the Depths Achievement Guide",
},
{
href: "/scale-the-depths/all-collectibles-secrets",
label: "All Collectibles and Secrets Guide",
},
{
href: "/scale-the-depths/huatulco-100-percent-guide",
label: "Huatulco 100% Guide",
},
{
href: "/scale-the-depths/outer-banks-100-percent-guide",
label: "Outer Banks 100% Guide",
},
{
href: "/scale-the-depths/loch-ness-100-percent-guide",
label: "Loch Ness 100% Guide",
},
];

export const metadata: Metadata = {
title: "Scale the Depths Point Nemo 100% Guide & Door Puzzle",
description:
"Get 100% in Point Nemo! Learn how to solve the 3-hint door puzzle, find hidden artifacts like the Sextant, and catch the legendary Apophis 99942.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Point Nemo 100% Guide: Door Puzzle, Sextant and Apophis 99942",
description:
"Clear Point Nemo with the three-hint door puzzle, 5 messages, artifacts, baits, switches, boat blueprint, cosmetic and Apophis prep.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Point Nemo door puzzle visual hint showing a white dot position.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Point Nemo 100% Guide",
description:
"Find every Point Nemo message, artifact, bait, switch and collectible, then catch and prep Apophis 99942.",
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
name: "Scale the Depths Guide",
item: `${siteUrl}/scale-the-depths`,
},
{
"@type": "ListItem",
position: 3,
name: "Point Nemo 100% Guide",
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
"Scale the Depths Point Nemo 100% Guide: Door Puzzle, Messages, Sextant, Toy Submarine, Switches and Apophis 99942",
description:
"A player-focused Scale the Depths Point Nemo 100% guide explaining how to solve the three-hint door puzzle by finding white-dot sea clues and pressing the matching left, middle and right door switches, collect 5 messages in bottles, Loaded Support Sphere, Sextant, Toy Submarine, Magnet bait, Sewing Needle bait, the boat blueprint and cosmetic, activate Blue Switch 1/3, 2/3 and 3/3, Red Switch 1/2 and 2/2, the Yellow Switch shortcut, catch and prep Apophis 99942, and troubleshoot missing completion, Sextant pickup issues, door puzzle resets and line snapping during the legendary fish fight.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-01",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Point Nemo" },
{ "@type": "Thing", name: "Point Nemo 100% completion" },
{ "@type": "Thing", name: "Point Nemo door puzzle" },
{ "@type": "Thing", name: "White-dot hint puzzle" },
{ "@type": "Thing", name: "5 messages in bottles" },
{ "@type": "Thing", name: "Loaded Support Sphere" },
{ "@type": "Thing", name: "Sextant" },
{ "@type": "Thing", name: "Toy Submarine" },
{ "@type": "Thing", name: "Magnet bait" },
{ "@type": "Thing", name: "Sewing Needle bait" },
{ "@type": "Thing", name: "Blue Switches" },
{ "@type": "Thing", name: "Red Switch shortcut" },
{ "@type": "Thing", name: "Yellow Switch shortcut" },
{ "@type": "Thing", name: "Boat Blueprint" },
{ "@type": "Thing", name: "Point Nemo cosmetic" },
{ "@type": "Thing", name: "Apophis 99942" },
{ "@type": "Thing", name: "Legendary fish" },
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
mainEntity: [
{
"@type": "Question",
name: "How do I get 100% in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text:
"Solve the three-hint door puzzle, activate all blue, red and yellow switches, collect 5 messages, artifacts, Magnet, Sewing Needle, the boat blueprint and cosmetic, then catch and prep Apophis 99942.",
},
},
{
"@type": "Question",
name: "Is the Point Nemo door puzzle the same for everyone?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Find the three visual hints in your own Point Nemo route, record the white-dot positions, then press the left, middle and right door switches in that order.",
},
},
{
"@type": "Question",
name: "How do I reset the Point Nemo door puzzle?",
acceptedAnswer: {
"@type": "Answer",
text:
"If you press the wrong switch sequence, leave the area and come back. Then recheck the three hints and enter the sequence again.",
},
},
{
"@type": "Question",
name: "How many messages are in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text:
"Point Nemo has 5 messages in bottles. If your message count is incomplete, recheck the opening route, blue-switch route and late boat-blueprint route.",
},
},
{
"@type": "Question",
name: "Where is the Sextant in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text:
"Sextant is in a dim magenta-lit side room near the downward shortcut, between Loaded Support Sphere and Toy Submarine. If debris blocks the pickup, move your line away and approach from a cleaner angle.",
},
},
{
"@type": "Question",
name: "Where is the Toy Submarine in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text:
"Toy Submarine is deeper on the same long descent after the Sextant room. Do not turn back after the magenta-lit side room; keep following the deeper collectible path until the pickup appears.",
},
},
{
"@type": "Question",
name: "What do the red switches do?",
acceptedAnswer: {
"@type": "Answer",
text:
"The red switches unlock the middle container shortcut. You need both Red Switch 1/2 and Red Switch 2/2 for the shortcut route.",
},
},
{
"@type": "Question",
name: "What does the Yellow Switch do?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Yellow Switch unlocks a shortcut to the top exit of the legendary fish nest, which helps with Apophis 99942 attempts and final cleanup.",
},
},
{
"@type": "Question",
name: "What is the legendary fish in Point Nemo?",
acceptedAnswer: {
"@type": "Answer",
text: "The Point Nemo legendary fish is Apophis 99942.",
},
},
{
"@type": "Question",
name: "Why does my line snap while fighting Apophis 99942?",
acceptedAnswer: {
"@type": "Answer",
text:
"Apophis is deeper than normal fish and can strain the line during the chase. Back off when the line is close to snapping, reposition, and upgrade hook damage or line length if the fight keeps dragging on.",
},
},
{
"@type": "Question",
name: "Should I catch Apophis 99942 before collecting everything else?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Open shortcuts and bank nearby messages, artifacts, baits, the boat blueprint and cosmetic first. Save Apophis for the final focused route.",
},
},
{
"@type": "Question",
name: "Why am I still missing Point Nemo completion?",
acceptedAnswer: {
"@type": "Answer",
text:
"You probably missed a switch, bait, message, artifact, boat blueprint, cosmetic or the Apophis prep step. Use the troubleshooting table to check the fastest likely blockers first.",
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
/> <GuideArticlePage
       title="How Do You 100% Point Nemo?"
       description="Solve the three-hint door puzzle, grab 5 messages, Sextant, Toy Submarine, Magnet, Sewing Needle, then catch and prep Apophis 99942."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <PointNemoContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
