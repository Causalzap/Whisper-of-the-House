import type { Metadata } from "next";
import Link from "next/link"; // 新增 Link 引入
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IAmJesusChristHubContent from "@/data/i-am-jesus-christ/index.mdx";

const siteUrl = "https://www.whisperofthehouse.com";
const pageUrl = `${siteUrl}/i-am-jesus-christ`;

export const metadata: Metadata = {
  title: "I Am Jesus Christ Game Guide Hub: Walkthrough & Tips",
  description:
    "Master the I Am Jesus Christ game! Explore our complete story walkthrough, miracle tutorials, all 12 apostle locations, and honest buying advice.",
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
          name: "I Am Jesus Christ",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#collection`,
      url: pageUrl,
      name: "I Am Jesus Christ Guide Hub",
      description:
        "A guide hub for I Am Jesus Christ covering walkthroughs, miracle systems, apostle recruitment, and who should play the game.",
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
      hasPart: [
        {
          "@type": "Article",
          name: "I Am Jesus Christ full walkthrough: story route and ending guide",
          url: `${siteUrl}/i-am-jesus-christ/walkthrough`,
        },
        {
          "@type": "Article",
          name: "I Am Jesus Christ miracles list: categories, uses, and system guide",
          url: `${siteUrl}/i-am-jesus-christ/miracles-list`,
        },
        {
          "@type": "Article",
          name: "I Am Jesus Christ 12 apostles locations: recruitment order and triggers",
          url: `${siteUrl}/i-am-jesus-christ/apostles-locations`,
        },
        {
          "@type": "Article",
          name: "Who should play I Am Jesus Christ?",
          url: `${siteUrl}/i-am-jesus-christ/who-should-play`,
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          
          {/* 视觉面包屑导航 */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors dark:hover:text-slate-200">
                  Home
                </Link>
              </li>
              <li>
                <span className="select-none text-slate-400 dark:text-slate-500">/</span>
              </li>
              <li aria-current="page" className="text-slate-900 dark:text-slate-200">
                I Am Jesus Christ
              </li>
            </ol>
          </nav>

          <div className="prose prose-slate max-w-none dark:prose-invert">
            <IAmJesusChristHubContent />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}