import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideArticlePage from "@/components/guides/GuideArticlePage";
import NoviciateCorporationUnlockContent from "@/data/spacecraft/noviciate-corporation-unlock.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/spacecraft/noviciate-corporation-unlock`;

const imageUrls = [
`${siteUrl}/images/spacecraft/spacecraft-rakmu-clerk-ingrid-noviciate.webp`,
`${siteUrl}/images/spacecraft/spacecraft-noviciate-rank-required-for-corpo.webp`,
`${siteUrl}/images/spacecraft/spacecraft-noviciate-testing-facility.webp`,
`${siteUrl}/images/spacecraft/spacecraft-novician-title-corpo-interface.webp`,
`${siteUrl}/images/spacecraft/spacecraft-corpo-create-or-join.webp`,
`${siteUrl}/images/spacecraft/spacecraft-first-corpo-request.webp`,
`${siteUrl}/images/spacecraft/spacecraft-corpo-permit-tabs.webp`,
`${siteUrl}/images/spacecraft/spacecraft-corpo-permits-effects.webp`,
];

const toc = [
{
id: "spacecraft-noviciate-corporation-unlock",
label: "Unlock route",
},
{
id: "start-ingrid-noviciate-test",
label: "Start Ingrid's test",
},
{
id: "noviciate-test-walkthrough",
label: "Noviciate test walkthrough",
},
{
id: "corpo-unlock-prerequisites",
label: "Unlock prerequisites",
},
{
id: "create-or-join-corpo",
label: "Create or join corpo",
},
{
id: "first-corpo-request",
label: "First corpo request",
},
{
id: "license-points-corpo-permits",
label: "Licenses and permits",
},
{
id: "when-wholesale-contracts-unlock",
label: "Wholesale contracts",
},
{
id: "common-blockers",
label: "Common blockers",
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
href: "/spacecraft",
label: "SpaceCraft Guide Hub",
},
{
href: "/spacecraft/scanalyzer-alpha-ftl-engine",
label: "SpaceCraft Scanalyzer Alpha and FTL Guide",
},
{
href: "/spacecraft/beginner-guide",
label: "SpaceCraft Beginner Guide",
},
{
href: "/spacecraft/ship-upgrades-cargo-inventory",
label: "SpaceCraft Ship Upgrades Guide",
},
{
href: "/spacecraft/resources-locations",
label: "SpaceCraft Resources Guide",
},
{
href: "/spacecraft/base-building-automation",
label: "SpaceCraft Base Building and Automation Guide",
},
{
href: "/spacecraft/permits-knowledge-unlock",
label: "SpaceCraft Permits and Knowledge Unlock Guide",
},
];

export const metadata: Metadata = {
title: "SpaceCraft Noviciate Guide: Unlock Corpo Access",
description:
"Pass the SpaceCraft Noviciate test, unlock corporation access, create or join a corpo, complete the first request, and understand licenses and permits.",
alternates: {
canonical: pageUrl,
},
openGraph: {
title:
"SpaceCraft Noviciate and Corporation Unlock Guide",
description:
"Pass Ingrid's Noviciate test in SpaceCraft, solve the cognitive and physical assessment, unlock corpo access, create or join a corporation, and start corpo requests.",
url: pageUrl,
siteName: "Whisper of the House",
type: "article",
images: [
{
url: imageUrls[0],
width: 1600,
height: 900,
alt: "RakMu Station Clerk explaining Ingrid, Noviciate rank, and corporation access in SpaceCraft.",
},
],
},
twitter: {
card: "summary_large_image",
title: "SpaceCraft Noviciate Guide",
description:
"Unlock corporation access by passing Ingrid's Noviciate test, then create or join a corpo and start the first request.",
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
name: "SpaceCraft Guide",
item: `${siteUrl}/spacecraft`,
},
{
"@type": "ListItem",
position: 3,
name: "SpaceCraft Noviciate and Corporation Unlock Guide",
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
"SpaceCraft Noviciate and Corporation Unlock Guide: Ingrid Test, Corpo Access, First Request, Licenses and Permits",
description:
"A player-focused SpaceCraft Noviciate and corporation unlock guide covering RakMu, Instructor Ingrid Alvares, the cognitive handprint-panel test, the physical ladder and platform route, Noviciate rank, corporation access, create-or-join corpo choices, first corpo request, Module Kit Sample pressure, Cargo Accommodation advice, license points, corpo credits, Corpo Permits tab, request-series upgrades, capacity-series upgrades, and wholesale contract unlock timing.",
image: imageUrls,
inLanguage: "en",
datePublished: "2026-06-16",
dateModified: "2026-06-16",
articleSection: "Guides",
about: [
{
"@type": "VideoGame",
name: "SpaceCraft",
},
{
"@type": "Thing",
name: "SpaceCraft Noviciate",
},
{
"@type": "Thing",
name: "SpaceCraft Noviciate test",
},
{
"@type": "Thing",
name: "SpaceCraft Ingrid Alvares",
},
{
"@type": "Thing",
name: "SpaceCraft RakMu",
},
{
"@type": "Thing",
name: "SpaceCraft corporation",
},
{
"@type": "Thing",
name: "SpaceCraft corpo",
},
{
"@type": "Thing",
name: "SpaceCraft license points",
},
{
"@type": "Thing",
name: "SpaceCraft corpo permits",
},
{
"@type": "Thing",
name: "SpaceCraft wholesale contracts",
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
name: "What is Noviciate in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Noviciate is the rank route that unlocks corporation access. Talk to Ingrid at RakMu and pass the cognitive and physical assessment.",
},
},
{
"@type": "Question",
name: "How do I pass the cognitive test in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Use the handprint panels to unlock all required doors. If a door stays locked, backtrack and find the missing panel.",
},
},
{
"@type": "Question",
name: "How do I pass the physical test in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Hold crouch when prompted, then continue to the final ladder and platform jumps. The exit route is upward near the end.",
},
},
{
"@type": "Question",
name: "Why can't I join or fund a corpo in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Finish Ingrid's Noviciate test first. If the option is still locked, finish remaining early onboarding, refined-ore sale, blueprint access, or Knowledge-route steps.",
},
},
{
"@type": "Question",
name: "Is Novician the same as Novvician in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"In Early Access, you may see Novician, Novvician, or Noviciate-related wording in different places. Treat them as the same corporation-access rank route unless a later patch changes the rank system.",
},
},
{
"@type": "Question",
name: "Should I create a solo corpo in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"Yes, if you want control. The confirmed early pressure is not a huge startup material cost; it is the ongoing need for corpo credits, request materials, license choices, and production.",
},
},
{
"@type": "Question",
name: "What should I do right after unlocking corpo access?",
acceptedAnswer: {
"@type": "Answer",
text:
"Create or join a corpo, complete the first corpo request, and strongly consider Cargo Accommodation or Small Cargo Hold if cargo is already slowing down your deliveries.",
},
},
{
"@type": "Question",
name: "Are corpo permits the same as Knowledge permits in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"No. Knowledge permits are personal unlocks like Modular Systems, Electromagnetism, Cargo Accommodation, Personal Factory, and Automated Factories. Corpo permits are corporation-side upgrades tied to corpo credits, licenses, requests, shared ships, shared bases, and storage.",
},
},
{
"@type": "Question",
name: "When do wholesale contracts appear in SpaceCraft?",
acceptedAnswer: {
"@type": "Answer",
text:
"They appear after early corporation request progression in the captured build. Finish the first corpo request, check Licenses or Corpo Permits, then return to the corporation desk.",
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
      title="Unlock Corporation Access After RakMu"
      description="Pass Ingrid's Noviciate test, clear the cognitive and physical assessment, create or join a corpo, and start the first corporation request."
      gameTitle="SpaceCraft"
      gameHref="/spacecraft"
      breadcrumbBaseHref="/"
      breadcrumbBaseLabel="Home"
      updatedAt="June 16, 2026"
      toc={toc}
      relatedLinks={relatedLinks}
    >
      <NoviciateCorporationUnlockContent />
    </GuideArticlePage>
  </main>
  <Footer />
</>

);
}
