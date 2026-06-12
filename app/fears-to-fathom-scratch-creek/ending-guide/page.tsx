import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import EndingGuideContent from "@/data/fears-to-fathom-scratch-creek/ending-guide.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/fears-to-fathom-scratch-creek/ending-guide`;

const imageUrls = [
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-trailer-too-heavy.webp`,
`${siteUrl}/images/fears-to-fathom-scratch-creek/scratch-creek-unhook-trailer.webp`,
];

const toc = [
{ id: "scratch-creek-ending-guide", label: "Ending guide" },
{ id: "what-to-do-at-the-ending", label: "Final escape steps" },
{ id: "why-the-car-does-not-escape", label: "Why the car fails" },
{ id: "do-not-leave-on-foot", label: "Do not leave on foot" },
{ id: "how-to-unhook-the-trailer", label: "Unhook the trailer" },
{ id: "checkpoint-and-prompt-fixes", label: "Prompt fixes" },
{ id: "best-co-op-role-split", label: "Co-op roles" },
{ id: "common-ending-mistakes", label: "Common mistakes" },
{ id: "what-happens-after-you-escape", label: "After escape" },
{ id: "ending-explained", label: "Ending explained" },
{ id: "all-endings-note", label: "All endings note" },
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
href: "/fears-to-fathom-scratch-creek/achievements-guide",
label: "Fears to Fathom Scratch Creek Achievements Guide",
},
];

export const metadata: Metadata = {
title: "Scratch Creek Ending Guide: Unhook Trailer & Escape",
description:
"Stuck at the Scratch Creek ending? Unhook the trailer, fix the hitch prompt, split co-op roles, avoid failed escapes, and understand the ending in one guide.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"Scratch Creek Ending Guide: How to Unhook the Trailer, Fix the Prompt, and Escape",
description:
"Solve the Fears to Fathom Scratch Creek ending with the final car escape steps, trailer hitch prompt fixes, co-op role split, checkpoint advice, common failed attempts, and ending explanation.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "Fears to Fathom Scratch Creek ending showing the car cannot escape because the trailer is too heavy.",
},
],
},
twitter: {
card: "summary_large_image",
title: "Scratch Creek Ending Guide",
description:
"Unhook the trailer, fix the hitch prompt, split co-op roles, and escape the Scratch Creek ending.",
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
name: "Scratch Creek Ending Guide",
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
"Scratch Creek Ending Guide: Final Car Escape, Trailer Hitch Prompt, Co-op Roles, Checkpoint Fixes and Ending Explained",
description:
"A player-focused Fears to Fathom Scratch Creek ending guide explaining the survival ending route, why the car cannot escape while the trailer is attached, how to find and use the trailer hitch prompt, what to do if the unhook prompt does not appear, how Marcus and Tessa should split final escape roles, when to reload the nearest checkpoint, which common mistakes cause failed attempts, and what the Scratch Creek ending means after both players escape.",
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
name: "Scratch Creek ending guide",
},
{
"@type": "Thing",
name: "Fears to Fathom Scratch Creek ending",
},
{
"@type": "Thing",
name: "Scratch Creek final escape",
},
{
"@type": "Thing",
name: "Scratch Creek trailer",
},
{
"@type": "Thing",
name: "Scratch Creek unhook trailer",
},
{
"@type": "Thing",
name: "Scratch Creek hitch prompt",
},
{
"@type": "Thing",
name: "Scratch Creek car escape",
},
{
"@type": "Thing",
name: "Scratch Creek ending explained",
},
{
"@type": "Thing",
name: "Scratch Creek checkpoint",
},
{
"@type": "Thing",
name: "Scratch Creek survival ending",
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
name: "Why do I keep getting caught after unhooking the trailer in Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"You are probably taking too long after the interaction. Once the trailer is disconnected, the hitch player should return to the car immediately and both players should leave.",
},
},
{
"@type": "Question",
name: "What should I do if the unhook prompt does not appear?",
acceptedAnswer: {
"@type": "Answer",
text:
"Back away from the hitch, stop button-spamming, re-approach the connection point from a cleaner angle, and wait for the prompt. If the scene truly stops advancing, reload the nearest checkpoint.",
},
},
{
"@type": "Question",
name: "Is there a different ending if I fail Scratch Creek?",
acceptedAnswer: {
"@type": "Answer",
text:
"Failed attempts usually lead to death, a restart, or a checkpoint retry. This guide focuses on the survival ending route, not a full all-deaths catalog.",
},
},
{
"@type": "Question",
name: "Is this a Scratch Creek all endings guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. This page covers the survival ending and common final escape failures. If distinct alternate endings are confirmed later, they should be handled in an all-endings guide or added as a separate section.",
},
},
{
"@type": "Question",
name: "What should I read after the Scratch Creek ending guide?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the full walkthrough if you are stuck before the ending, or the achievements guide if you want to clean up hidden achievements after finishing the story.",
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
      title="Unhook the Trailer and Escape Scratch Creek"
      description="Fix the final car escape, handle the hitch prompt, split co-op roles, and understand what the ending means."
      gameTitle="Fears to Fathom - Scratch Creek"
      gameHref="/fears-to-fathom-scratch-creek"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 12, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <EndingGuideContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
