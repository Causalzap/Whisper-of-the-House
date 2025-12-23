import { Terminal, ShieldAlert, Eye, ChevronRight } from 'lucide-react';
import InteractiveMissionLog from '@/components/InteractiveMissionLog';
import { MissionVisualCard, MissionFAQ } from '@/components/MissionSidebar';
import { CHAPTERS_CONTENT } from '../Content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';

// 1. 固定页面的 SEO Metadata
export const metadata: Metadata = {
  title: `Routine Guide: Chapter 03 Re-Create Stealth Walkthrough`,
  description: `Complete the final chapter of Routine. Learn how to initiate the Core shutdown, synchronize randomized nodes, and find the White Fish.`,
  alternates: {
    canonical: `https://www.whisperofthehouse.com/routine-guide/chapter-3-re-create-stealth-walkthrough`,
  }
};

export default function Chapter3Page() {
  // 定义当前页面的唯一 ID，用于从 Content.ts 取值
  const currentSlug = "chapter-3-re-create-stealth-walkthrough";
  const content = CHAPTERS_CONTENT[currentSlug];
  
  if (!content) return <div className="text-white p-20 font-mono text-center">DATA_STREAM_INTERRUPTED: TACTICAL_FILE_MISSING</div>;

  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-cyan-500/30">
      <Header />

      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        {/* 1. 面包屑导航：提升 SEO 权重与用户路径 */}
        <Breadcrumbs items={[
          { label: 'ROUTINE GUIDES', href: '/routine-guide' },
          { label: `CHAPTER ${content.chapterNumber}: ${content.title}`, href: `/routine-guide/${currentSlug}` }
        ]} />

        {/* 2. Header: 战术标题区域 */}
        <header className="mb-12 border-l-4 border-cyan-500 pl-6 animate-in fade-in slide-in-from-left duration-700 mt-8">
          <div className="flex items-center gap-3 text-cyan-500 mb-3">
            <Terminal size={18} />
            <span className="text-xs font-mono uppercase tracking-[0.4em]">Tactical Data File</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            Chapter {content.chapterNumber}: {content.title} <br />
            <span className="text-zinc-700 text-3xl md:text-5xl">{content.subTitle}</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed">
            {content.description}
          </p>
        </header>

        {/* 3. Grid Layout: 核心内容网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* 左侧栏 (7/12): 任务日志与内链集群 */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <InteractiveMissionLog 
                chapterNumber={content.chapterNumber}
                title={content.title}
                phases={content.phases}
              />
              
              {/* Survival Priorities */}
              <div className="mt-8 p-6 bg-zinc-900/20 border border-zinc-800 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <ShieldAlert size={18} className="text-red-500" /> 
                  Survival Priorities (Field Protocol)
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  {content.priorities.map((item) => (
                    <li key={item.id} className="flex gap-3">
                      <span className="text-cyan-500 font-mono font-bold">{item.id}.</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. 关联协议中继：让攻略串联成内容集群 */}
            <section className="pt-8 border-t border-zinc-900/50">
              <h3 className="text-zinc-600 text-[10px] uppercase tracking-widest mb-6 font-mono">
                Linked Protocol Modules / Tactical Relays
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.values(CHAPTERS_CONTENT)
                  .filter(item => item.slug !== currentSlug) // 过滤掉当前章节
                  .map(rel => (
                    <a key={rel.slug} href={`/routine-guide/${rel.slug}`} className="group p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg hover:border-cyan-500/50 transition-all hover:bg-zinc-900">
                      <span className="text-zinc-600 text-[9px] uppercase font-mono">Chapter {rel.chapterNumber}</span>
                      <div className="text-zinc-300 font-bold group-hover:text-cyan-400 flex items-center justify-between mt-1">
                        {rel.title} <ChevronRight size={14} />
                      </div>
                    </a>
                  ))}
              </div>
            </section>
          </div>

          {/* 右侧栏 (5/12): 视觉情报与 FAQ */}
          <div className="lg:col-span-5 space-y-10">
            <section className="sticky top-24">
              <h2 className="text-zinc-500 text-xs uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-2">
                <Eye size={16} /> Visual Intel / Tactical Imagery
              </h2>
              <div className="space-y-8">
                {content.visualIntel.map((intel, index) => (
                  <MissionVisualCard key={index} intel={intel} />
                ))}
              </div>

              {/* FAQ 模块集成在侧边栏底部 */}
              {content.faq && (
                <div className="mt-12">
                  <MissionFAQ faq={content.faq} />
                </div>
              )}
            </section>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}