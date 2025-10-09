import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import HotGames from '@/components/HotGames';
import { getGame, getGuide, getStaticParams, ALL_GAMES } from '@/lib/games';
import YouTubeClient from '@/components/YouTubeClient'; // 导入 YouTubeClient 组件

// 预渲染 slug
export async function generateStaticParams() {
  return getStaticParams();
}

// SEO（Next 15：params 是 Promise，需 await）
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const conf = getGame(slug);
  if (!conf) return {};
  return {
    title: `Play Online - ${conf.title}`,
    description: conf.description,
    alternates: {
      canonical: `https://www.whisperofthehouse.com/play-online/${slug}`,
    },
    openGraph: {
      title: conf.title,
      description: conf.description,
      type: 'website',
      images: [{ url: conf.thumbnail, width: 800, height: 600, alt: conf.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: conf.title,
      description: conf.description,
      images: [conf.thumbnail],
    },
  };
}

// 页面组件
export default async function GamePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const conf = getGame(slug);
  if (!conf) return notFound();

  const Guide = getGuide(slug);
  if (!Guide) return notFound();

  const videoId = conf.videoId; // 从配置中获取 videoId
  const videoTitle = conf.videoTitle; // 获取视频标题


  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* 标题 */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              {conf.title}
            </h1>
          </header>

          {/* 游戏 iframe */}
          <section className="mb-12 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="bg-black rounded-xl overflow-hidden border-2 border-indigo-500/30">
              <iframe
                src={conf.iframe}
                title={conf.title}
                allowFullScreen
                className="w-full h-96 md:h-[500px]"
              />
            </div>

            {/* 标签 */}
            <div className="mt-4 flex flex-wrap gap-2">
              {conf.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-sm rounded-full border border-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* 推荐游戏 */}
          <section className="mb-8">
            <HotGames games={ALL_GAMES.filter(g => g.slug !== slug)} />
          </section>

          {/* 攻略 */}
          <section className="mb-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                {conf.title} Complete Guide
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Master the game with our expert tips, strategies, and walkthroughs
              </p>
            </div>
            <div className="prose prose-invert max-w-none">
              <Guide />
            </div>
          </section>

          {/* YouTube 视频（条件渲染） */}
          {videoId && (
            <section className="mb-12 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <h2 className="text-2xl font-bold text-center mb-4">{videoTitle}</h2>
              <YouTubeClient videoId={videoId} />
            </section>
          )}

        </div>
      </div>
    </Layout>
  );
}
