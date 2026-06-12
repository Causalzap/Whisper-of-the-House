import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import ScratchCreekContent from "@/data/fears-to-fathom-scratch-creek/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fears-to-fathom-scratch-creek`;

const imageUrls = [
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-title-screen.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-moving-out-house.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-unhook-trailer.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-cow-clicker-phone.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-miss-julia-parsonage.webp`,
];

const toc = [
{
id: "fears-to-fathom-scratch-creek-guide",
label: "Guide",
},
{ id: "which-guide-to-read", label: "Which guide" },
{ id: "spoiler-light-route", label: "Route overview" },
{ id: "how-long-is-scratch-creek", label: "Playtime" },
{ id: "co-op-basics", label: "Co-op basics" },
{ id: "moving-out-and-trailer", label: "Moving out" },
{ id: "road-trip-and-repair-route", label: "Road trip" },
{ id: "miss-julia-parsonage", label: "Parsonage" },
{ id: "ending-trailer-escape", label: "Ending" },
{ id: "all-achievements", label: "Achievements" },
{ id: "common-stuck-points", label: "Stuck points" },
{ id: "bugs-and-soft-locks", label: "Bugs and soft-locks" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/fears-to-fathom-scratch-creek/walkthrough",
label: "Fears to Fathom Scratch Creek Walkthrough",
},
{
href: "/fears-to-fathom-scratch-creek/ending-guide",
label: "Scratch Creek Ending Guide",
},
{
href: "/fears-to-fathom-scratch-creek/achievements-guide",
label: "Fears to Fathom Scratch Creek Achievements Guide",
},
];

export const metadata: Metadata = {
title: "Fears to Fathom Scratch Creek Guide & Walkthrough",
description:
"Start the Scratch Creek guide hub for the walkthrough, ending escape, trailer fix, co-op route, achievements, Cow Clicker, and parsonage help.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Fears to Fathom Scratch Creek Guide: Walkthrough, Ending, Achievements, Co-op Route and Trailer Escape",
description:
"Use the Fears to Fathom Scratch Creek guide hub to find the full walkthrough, survival ending guide, trailer unhook solution, co-op route tips, Miss Julia parsonage help, Holy Cow, Down in the Dark, Eavesdropper, and all achievements.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Fears to Fathom Scratch Creek title screen for the co-op horror episode.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Fears to Fathom Scratch Creek Guide",
description:
"Find the full Scratch Creek walkthrough, ending escape, trailer fix, achievements, and co-op route help.",
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
name: "Fears to Fathom Scratch Creek Guide",
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
"Fears to Fathom Scratch Creek Guide Hub: Walkthrough, Ending Guide, Trailer Escape, Achievements and Co-op Route Help",
description:
"A player-focused Fears to Fathom Scratch Creek guide hub that directs players to the full walkthrough, survival ending guide, trailer unhook solution, achievements guide, co-op route help, playtime estimates, common stuck points, checkpoint-style reload advice, Miss Julia parsonage help, Holy Cow, Down in the Dark, Eavesdropper, Who's Watching, The Drifter, Come In, and the final car escape.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-12",
dateModified: "2026-06-12",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Fears to Fathom - Scratch Creek",
},
{
"@type": "Thing",
name: "Fears to Fathom Scratch Creek guide",
},
{
"@type": "Thing",
name: "Scratch Creek walkthrough",
},
{
"@type": "Thing",
name: "Scratch Creek ending guide",
},
{
"@type": "Thing",
name: "Scratch Creek achievements",
},
{
"@type": "Thing",
name: "Scratch Creek co-op route",
},
{
"@type": "Thing",
name: "Scratch Creek trailer escape",
},
{
"@type": "Thing",
name: "Scratch Creek unhook trailer",
},
{
"@type": "Thing",
name: "Scratch Creek Miss Julia parsonage",
},
{
"@type": "Thing",
name: "Scratch Creek Holy Cow",
},
{
"@type": "Thing",
name: "Scratch Creek Down in the Dark",
},
{
"@type": "Thing",
name: "Scratch Creek Eavesdropper",
},
{
"@type": "Thing",
name: "Scratch Creek Who's Watching",
},
{
"@type": "Thing",
name: "Scratch Creek The Drifter",
},
],
publisher: {
"@type": "Organization",
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
name: "What should I read first in the Fears to Fathom Scratch Creek guide cluster?",
acceptedAnswer: {
"@type": "Answer",
text:
"Read the walkthrough first if you have not finished the episode. Read the ending guide if you are already at the final car section. Read the achievements guide if you are cleaning up unlocks.",
},
},
{
"@type": "Question",
name: "How long is Fears to Fathom Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"A normal first clear usually takes about 1.5 to 2.5 hours. A clean replay can be closer to 60 to 90 minutes, while achievement cleanup can push the run toward 3 to 4 hours.",
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
      title="Fears to Fathom Scratch Creek Guide Hub"
      description="Choose the right Scratch Creek guide for the walkthrough, ending escape, trailer fix, achievements, co-op route, and parsonage stuck points."
      gameTitle="Fears to Fathom - Scratch Creek"
      gameHref="/fears-to-fathom-scratch-creek"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 12, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <ScratchCreekContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
