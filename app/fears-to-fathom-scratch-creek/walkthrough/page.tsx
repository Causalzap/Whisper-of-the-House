import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import WalkthroughContent from "@/data/fears-to-fathom-scratch-creek/walkthrough.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fears-to-fathom-scratch-creek/walkthrough`;

const imageUrls = [
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-moving-out-house.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-suitcase-trunk.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-road-gps-drive.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-fallen-tree-stop.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-whos-watching-porch.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-abandoned-gas-station.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-bill-charlotte-house.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-miss-julia-parsonage.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-down-in-dark-stairs.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-henry-door.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-unhook-trailer.webp`,
];

const toc = [
{
id: "fears-to-fathom-scratch-creek-walkthrough",
label: "Walkthrough",
},
{ id: "full-route-overview", label: "Route overview" },
{ id: "how-long-is-scratch-creek", label: "Playtime" },
{ id: "checkpoints-and-reloads", label: "Checkpoints" },
{ id: "start-as-marcus-and-tessa", label: "Marcus and Tessa" },
{ id: "moving-out", label: "Moving out" },
{ id: "connect-the-trailer", label: "Trailer setup" },
{ id: "put-suitcase-in-trunk", label: "Suitcase" },
{ id: "follow-gps", label: "GPS drive" },
{ id: "fallen-tree-stop", label: "Fallen tree" },
{ id: "car-trouble-and-shop", label: "Car trouble" },
{ id: "abandoned-gas-station", label: "Gas station" },
{ id: "bill-and-charlotte", label: "Bill and Charlotte" },
{ id: "co-op-role-split", label: "Co-op roles" },
{ id: "miss-julia-parsonage", label: "Parsonage" },
{ id: "towel-sequence", label: "Towels" },
{ id: "down-in-the-dark-window", label: "Down in the Dark" },
{ id: "henry-at-the-door", label: "Henry" },
{ id: "final-escape-short-version", label: "Final escape" },
{ id: "common-stuck-points", label: "Stuck points" },
{ id: "what-to-read-next", label: "Next guides" },
{ id: "faq", label: "FAQ" },
];

const relatedLinks = [
{
href: "/fears-to-fathom-scratch-creek",
label: "Fears to Fathom Scratch Creek Guide Hub",
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
title: "Fears to Fathom Scratch Creek Walkthrough & Ending",
description:
"Follow the full Scratch Creek walkthrough, from trailer setup and GPS driving to Who's Watching, parsonage, Down in the Dark, and final escape.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Fears to Fathom Scratch Creek Walkthrough: Full Co-op Route, Achievements, Parsonage and Ending",
description:
"Follow the full Fears to Fathom Scratch Creek route with co-op role tips, achievement windows, checkpoint advice, trailer setup, fallen-tree stop, Who's Watching, The Drifter, Miss Julia's parsonage, Down in the Dark, Henry, and the final trailer escape.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Fears to Fathom Scratch Creek moving out section with Marcus and Tessa loading furniture into the trailer.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Fears to Fathom Scratch Creek Walkthrough",
description:
"Clear Scratch Creek with the full co-op route, achievement windows, parsonage tips, and final trailer escape.",
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
name: "Fears to Fathom Scratch Creek Walkthrough",
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
"Fears to Fathom Scratch Creek Walkthrough: Full Co-op Route, Achievement Windows, Checkpoints, Parsonage and Final Trailer Escape",
description:
"A player-focused Fears to Fathom Scratch Creek walkthrough covering the full Marcus and Tessa co-op route from moving out, trailer setup, suitcase loading, GPS driving, the fallen-tree stop, Who's Watching, car trouble, the abandoned gas station, The Drifter, Bill and Charlotte, Miss Julia's parsonage, staff chatter, Marcus's towel route, Down in the Dark, Henry at the door, checkpoint-style reload advice, common stuck points, and the final escape where both players must unhook the trailer before driving away.",
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
name: "Fears to Fathom Scratch Creek walkthrough",
},
{
"@type": "Thing",
name: "Scratch Creek full walkthrough",
},
{
"@type": "Thing",
name: "Scratch Creek co-op route",
},
{
"@type": "Thing",
name: "Scratch Creek trailer setup",
},
{
"@type": "Thing",
name: "Scratch Creek suitcase trunk",
},
{
"@type": "Thing",
name: "Scratch Creek fallen tree",
},
{
"@type": "Thing",
name: "Scratch Creek Who's Watching",
},
{
"@type": "Thing",
name: "Scratch Creek The Drifter",
},
{
"@type": "Thing",
name: "Scratch Creek Miss Julia parsonage",
},
{
"@type": "Thing",
name: "Scratch Creek Down in the Dark",
},
{
"@type": "Thing",
name: "Scratch Creek Henry door",
},
{
"@type": "Thing",
name: "Scratch Creek checkpoints",
},
{
"@type": "Thing",
name: "Scratch Creek final escape",
},
{
"@type": "Thing",
name: "Scratch Creek unhook trailer",
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
name: "How long is Fears to Fathom Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"A normal first clear usually takes about 1.5 to 2.5 hours. A clean replay can be closer to 60 to 90 minutes, while achievement cleanup can push the run toward 3 to 4 hours.",
},
},
{
"@type": "Question",
name: "What do I do first at the house in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"Load the important items, connect the trailer, put the suitcase in the trunk, and leave when both players are ready.",
},
},
{
"@type": "Question",
name: "Why will the trailer not connect in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"The car is probably not close enough to the hitch. Back up slowly and line the car up with the trailer until the connection registers.",
},
},
{
"@type": "Question",
name: "Where is the Who's Watching achievement window?",
acceptedAnswer: {
"@type": "Answer",
text:
"After the fallen-tree stop, look toward the roadside house or porch area. If you see the figure watching you, approach and confront it before continuing the drive.",
},
},
{
"@type": "Question",
name: "Should I explore the abandoned gas station in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you want The Drifter achievement. Talk to the man living at the abandoned gas station before leaving the area.",
},
},
{
"@type": "Question",
name: "Where are the towels in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"Miss Julia sends Marcus to get clean towels from the temple or church basement area out back.",
},
},
{
"@type": "Question",
name: "How do I get Down in the Dark during the walkthrough?",
acceptedAnswer: {
"@type": "Answer",
text:
"During Marcus's towel objective, check the area under the stairs in the church basement route before returning to Tessa.",
},
},
{
"@type": "Question",
name: "Should Tessa open the door for Henry?",
acceptedAnswer: {
"@type": "Answer",
text:
"For a cautious first survival route, wait and confirm what is happening. For the Come In achievement, Tessa needs to let Henry into the room.",
},
},
{
"@type": "Question",
name: "Can I leave on foot at the end of Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. The intended survival route uses the car after the trailer is disconnected.",
},
},
{
"@type": "Question",
name: "What should I do if Scratch Creek soft-locks?",
acceptedAnswer: {
"@type": "Answer",
text:
"Reload the nearest checkpoint if the scene truly stops advancing. Checkpoints can send you back farther than expected, so use them for real progression problems rather than every small mistake.",
},
},
],
},
],
};

export default function Page() 
{
return (
<> <Header /> <main>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
    <GuideArticlePage
      title="Finish Scratch Creek Without Missing the Big Windows"
      description="Follow Marcus and Tessa through the full route, key achievement windows, parsonage split, checkpoints, and final trailer escape."
      gameTitle="Fears to Fathom - Scratch Creek"
      gameHref="/fears-to-fathom-scratch-creek"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 12, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <WalkthroughContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>
);
}