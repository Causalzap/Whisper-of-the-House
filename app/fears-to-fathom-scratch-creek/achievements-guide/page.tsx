import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import AchievementsGuideContent from "@/data/fears-to-fathom-scratch-creek/achievements-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fears-to-fathom-scratch-creek/achievements-guide`;

const imageUrls = [
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-cow-clicker-phone.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-whos-watching-porch.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-abandoned-gas-station.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-down-in-dark-stairs.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-henry-door.webp`,
];

const toc = [
{
id: "fears-to-fathom-scratch-creek-achievements-guide",
label: "Achievements guide",
},
{ id: "all-achievements-list", label: "All achievements" },
{ id: "best-cleanup-order", label: "Cleanup order" },
{ id: "texter", label: "Texter" },
{ id: "all-hitched-up", label: "All Hitched Up" },
{ id: "out-of-sight", label: "Out of Sight" },
{ id: "holy-cow", label: "Holy Cow" },
{ id: "whos-watching", label: "Who's Watching?" },
{ id: "the-drifter", label: "The Drifter" },
{ id: "parsonage-role-split", label: "Role split" },
{ id: "eavesdropper", label: "Eavesdropper" },
{ id: "down-in-the-dark", label: "Down in the Dark" },
{ id: "come-in", label: "Come In" },
{ id: "survivor", label: "Survivor" },
{ id: "can-you-get-all-achievements-in-one-run", label: "One-run plan" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/fears-to-fathom-scratch-creek",
label: "Fears to Fathom Scratch Creek Guide Hub",
},
{
href: "/fears-to-fathom-scratch-creek/walkthrough",
label: "Fears to Fathom Scratch Creek Walkthrough",
},
{
href: "/fears-to-fathom-scratch-creek/ending-guide",
label: "Scratch Creek Ending Guide",
},
];

export const metadata: Metadata = {
title: "Fears to Fathom Scratch Creek Achievements Guide",
description:
"Unlock all Scratch Creek achievements, including Holy Cow, Down in the Dark, Eavesdropper, Come In, The Drifter, Out of Sight, and Survivor, with role tips.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Fears to Fathom Scratch Creek Achievements Guide: All 10 Unlocks, Hidden Achievements, and Cleanup Route",
description:
"Find every Fears to Fathom Scratch Creek achievement, including Holy Cow, Down in the Dark, Eavesdropper, Come In, The Drifter, Out of Sight, Who's Watching, and Survivor.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Fears to Fathom Scratch Creek Cow Clicker phone game used for the Holy Cow achievement.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Fears to Fathom Scratch Creek Achievements Guide",
description:
"Get all 10 Scratch Creek achievements, including Holy Cow, Down in the Dark, Eavesdropper, Come In, and Survivor.",
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
item: `${siteUrl}/fears-to-fathom-scratch-creek`,
},
{
"@type": "ListItem",
position: 3,
name: "Fears to Fathom Scratch Creek Achievements Guide",
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
"Fears to Fathom Scratch Creek Achievements Guide: All 10 Achievements, Hidden Unlocks, Role Split, Holy Cow, Down in the Dark and Eavesdropper",
description:
"A player-focused Fears to Fathom Scratch Creek achievements guide covering all 10 unlocks, Steam global unlock-rate context, the best cleanup order, Marcus and Tessa role split, Holy Cow Cow Clicker planning, Who's Watching, Out of Sight, The Drifter, Come In, Down in the Dark, Eavesdropper, and Survivor. The guide explains when to use Marcus, when Tessa should wait during the parsonage route, how to handle the early trailer and abandoned gas station achievements, and how to finish the final trailer escape for Survivor.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-11",
dateModified: "2026-06-11",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "Fears to Fathom - Scratch Creek",
},
{
"@type": "Thing",
name: "Fears to Fathom Scratch Creek achievements",
},
{
"@type": "Thing",
name: "Scratch Creek achievements guide",
},
{
"@type": "Thing",
name: "Scratch Creek hidden achievements",
},
{
"@type": "Thing",
name: "Scratch Creek Holy Cow",
},
{
"@type": "Thing",
name: "Scratch Creek Cow Clicker",
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
name: "Scratch Creek Come In",
},
{
"@type": "Thing",
name: "Scratch Creek The Drifter",
},
{
"@type": "Thing",
name: "Scratch Creek Out of Sight",
},
{
"@type": "Thing",
name: "Scratch Creek Who's Watching",
},
{
"@type": "Thing",
name: "Scratch Creek Survivor",
},
{
"@type": "Thing",
name: "Marcus towel objective",
},
{
"@type": "Thing",
name: "Tessa parsonage route",
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
name: "Which Scratch Creek achievement is easiest to miss?",
acceptedAnswer: {
"@type": "Answer",
text:
"Down in the Dark and Eavesdropper are the easiest to miss. Down in the Dark needs Marcus to check under the stairs during the towel objective, while Eavesdropper needs you to slow down and listen to staff chatter in the parsonage.",
},
},
{
"@type": "Question",
name: "Which player should do Down in the Dark?",
acceptedAnswer: {
"@type": "Answer",
text:
"Marcus should do Down in the Dark. During the towel objective, Marcus must go through the church basement route and check under the stairs before returning.",
},
},
{
"@type": "Question",
name: "How long does Holy Cow take in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"Plan around 30 to 45 minutes of steady Cow Clicker progress if you start early and keep buying upgrades. If you start late or miss stronger upgrades lower in the list, it can take longer.",
},
},
{
"@type": "Question",
name: "Why is Eavesdropper so rare?",
acceptedAnswer: {
"@type": "Answer",
text:
"Eavesdropper is rare because most players leave parsonage chatter points too quickly. Stay close until each staff conversation fully finishes.",
},
},
{
"@type": "Question",
name: "Should I do Come In on my first run?",
acceptedAnswer: {
"@type": "Answer",
text:
"Only do Come In on a first run if you are comfortable choosing the risky Henry option. For a blind first survival route, you can skip it and return later for achievement cleanup.",
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
      title="Unlock Every Scratch Creek Achievement"
      description="Get all 10 achievements, including Holy Cow, Down in the Dark, Eavesdropper, Come In, The Drifter, and Survivor."
      gameTitle="Fears to Fathom - Scratch Creek"
      gameHref="/fears-to-fathom-scratch-creek"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 11, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <AchievementsGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
