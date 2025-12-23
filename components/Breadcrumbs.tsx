// components/Breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
  // 生成 Google 爬虫喜欢的结构化数据
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://whisperofthehouse.com${item.href}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-col gap-4">
      {/* JSON-LD 注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ol className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
        <li className="flex items-center gap-2">
          <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Home size={10} /> HOME
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight size={10} className="text-zinc-800" />
            {index === items.length - 1 ? (
              <span className="text-zinc-300 font-bold">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-cyan-400 transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
      <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
    </nav>
  );
}