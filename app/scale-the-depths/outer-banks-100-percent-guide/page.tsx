import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import OuterBanksContent from "@/data/scale-the-depths/outer-banks-100-percent-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/scale-the-depths/outer-banks-100-percent-guide`;

const imageUrls = [
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-lost-dimetrodon-location.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-rat-king-plush.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-drop-boulder.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-compass-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-bio-specimen-containment-unit.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-sonar-receiver-artifact.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-canned-bread.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-spring-bait.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-spanish-doubloon-blue-switch-1.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-cosmetic-2.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-boat-blueprint.webp`,
`${siteUrl}/images/scale-the-depths/scale-the-depths-outer-banks-lost-dimetrodon-prep.webp`,
];

const toc = [
{ id: "before-you-start", label: "Before you start" },
{ id: "outer-banks-100-checklist", label: "100% checklist" },
{ id: "recommended-route", label: "Recommended route" },
{ id: "opening-route", label: "Opening route" },
{ id: "compass-and-bio-specimen", label: "Compass and Bio-specimen" },
{
id: "first-cosmetic-and-sonar-receiver",
label: "First cosmetic and Sonar Receiver",
},
{ id: "artifacts-and-baits", label: "Artifacts and baits" },
{ id: "shortcuts-and-blue-switches", label: "Shortcuts and Blue Switches" },
{ id: "cosmetics-and-boat-blueprint", label: "Cosmetics and boat blueprint" },
{ id: "lost-dimetrodon", label: "Lost Dimetrodon" },
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
href: "/scale-the-depths/point-nemo-100-percent-guide",
label: "Point Nemo 100% Guide",
},
{
href: "/scale-the-depths/huatulco-100-percent-guide",
label: "Huatulco 100% Guide",
},
{
href: "/scale-the-depths/loch-ness-100-percent-guide",
label: "Loch Ness 100% Guide",
},
{
href: "/scale-the-depths/all-collectibles-secrets",
label: "All Collectibles and Secrets Guide",
},
{
href: "/scale-the-depths/achievement-guide",
label: "Scale the Depths Achievement Guide",
},
];

export const metadata: Metadata = {
title: "Scale the Depths Outer Banks 100% Guide & All Secrets",
description:
"Get 100% in Outer Banks! Find all 6 hidden artifacts (like Sonar Receiver), 5 messages, baits, cosmetics, and catch the Lost Dimetrodon legendary fish.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scale the Depths Outer Banks 100% Guide: Sonar Receiver, Lost Dimetrodon and Boat Blueprint",
description:
"Clear Outer Banks with the full 100% route, including 5 messages, 6 artifacts, Compass, Spring, cosmetics, boat blueprint and Lost Dimetrodon.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Scale the Depths Outer Banks Lost Dimetrodon legendary fish location.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scale the Depths Outer Banks 100% Guide",
description:
"Complete Outer Banks with every message, artifact, bait, cosmetic, switch, boat blueprint and Lost Dimetrodon prep.",
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
name: "Outer Banks 100% Guide",
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
"Scale the Depths Outer Banks 100% Guide: Messages, Artifacts, Sonar Receiver, Boat Blueprint and Lost Dimetrodon",
description:
"A player-focused Scale the Depths Outer Banks 100% guide explaining how to collect 5 messages in bottles, 6 artifacts, Compass bait, Spring bait, both cosmetics, the boat blueprint, Blue Switch 1/2 and Blue Switch 2/2, unlock the shortcut routes, find the Sonar Receiver before the southwestern path shortcut, catch and prep Lost Dimetrodon, and troubleshoot missing completion or a locked Point Nemo route.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-01",
dateModified: "2026-06-01",
articleSection: "Guides",
about: [
{ "@type": "VideoGame", name: "Scale the Depths" },
{ "@type": "Thing", name: "Outer Banks" },
{ "@type": "Thing", name: "Outer Banks 100% completion" },
{ "@type": "Thing", name: "Outer Banks messages in bottles" },
{ "@type": "Thing", name: "Rat King Plush" },
{ "@type": "Thing", name: "Bio-specimen Containment Unit" },
{ "@type": "Thing", name: "Sonar Receiver" },
{ "@type": "Thing", name: "Jar of Dirt" },
{ "@type": "Thing", name: "Canned Bread" },
{ "@type": "Thing", name: "Spanish Doubloon" },
{ "@type": "Thing", name: "Compass bait" },
{ "@type": "Thing", name: "Spring bait" },
{ "@type": "Thing", name: "Blue Switches" },
{ "@type": "Thing", name: "Boat Blueprint" },
{ "@type": "Thing", name: "Lost Dimetrodon" },
{ "@type": "Thing", name: "Legendary fish" },
{ "@type": "Thing", name: "Point Nemo unlock" },
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
name: "Why is Outer Banks not showing 100%?",
acceptedAnswer: {
"@type": "Answer",
text:
"Outer Banks is usually missing a hidden or late-route item instead of a normal fish. Recheck Sonar Receiver, Spring bait, Spanish Doubloon, both cosmetics, the boat blueprint and Lost Dimetrodon prep.",
},
},
{
"@type": "Question",
name: "How many messages are in Outer Banks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Outer Banks has 5 messages in bottles. If the message count is incomplete, rerun the opening route, the blue-switch route and the late boat-blueprint route.",
},
},
{
"@type": "Question",
name: "Where is the Sonar Receiver?",
acceptedAnswer: {
"@type": "Answer",
text:
"The Sonar Receiver is before the southwestern path shortcut, after the first cosmetic and before the Jar of Dirt and Canned Bread chain. Clear the full bush pocket in that extra-line section.",
},
},
{
"@type": "Question",
name: "Where is the first cosmetic in Outer Banks?",
acceptedAnswer: {
"@type": "Answer",
text:
"The first cosmetic is after the Lost Dimetrodon route marker and before the Sonar Receiver bush pocket. If you reached Sonar Receiver without collecting a cosmetic, backtrack through that section.",
},
},
{
"@type": "Question",
name: "Why can't I reach some Outer Banks pickups?",
acceptedAnswer: {
"@type": "Answer",
text:
"You probably need more line length. Prioritize rod upgrades for cleanup, especially Industrial Rod V6 when it becomes available, before assuming you missed a puzzle step.",
},
},
{
"@type": "Question",
name: "Does Lost Dimetrodon count as done when I catch it?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Catch Lost Dimetrodon, then finish the prep step. If you only catch it and leave, legendary fish progress may still feel incomplete.",
},
},
{
"@type": "Question",
name: "Why is Point Nemo still grey or locked?",
acceptedAnswer: {
"@type": "Answer",
text:
"Recheck Outer Banks completion. The boat blueprint, Sonar Receiver and Lost Dimetrodon prep are the first things to verify before assuming Point Nemo is bugged.",
},
},
{
"@type": "Question",
name: "Should I catch Lost Dimetrodon as soon as I find it?",
acceptedAnswer: {
"@type": "Answer",
text:
"Usually no. Find the route early, but save the real catch for the end after clearing baits, artifacts, cosmetics, switches and the boat blueprint.",
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
       title="How Do You 100% Outer Banks?"
       description="Grab 5 messages, 6 artifacts, Compass, Spring, both cosmetics, the boat blueprint, then catch and prep Lost Dimetrodon without missing Sonar Receiver."
       gameTitle="Scale the Depths"
       gameHref="/scale-the-depths"
       breadcrumbBaseHref="/"
       breadcrumbBaseLabel="Home"
       updatedAt="June 1, 2026"
       toc={toc}
       relatedLinks={relatedLinks}
     > <OuterBanksContent /> </GuideArticlePage> </main> <Footer />
</>
);
}
