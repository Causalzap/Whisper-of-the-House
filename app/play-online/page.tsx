// app/play-online/page.tsx
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import HotGames from '@/components/HotGames';
import HomeDesignGuide from '@/content/guides/home-design.mdx';
import { ALL_GAMES } from '@/lib/games';



export const metadata: Metadata = {
  title: 'Play Home Design Small House Online',
  description: 'Play Home Design Small House and other cozy games directly in your browser. No downloads needed. Plus, get expert tips and strategies.',
};

export default function PlayOnlinePage() {
  const currentSlug = 'home-design';
  const otherGames = ALL_GAMES.filter(g => g.slug !== currentSlug);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <header className="text-center mb-8 mt-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
              Play Home Design Small House
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Design your dream home in this creative puzzle game. No downloads required - play directly in your browser!
            </p>
          </header>

          <section className="mb-12 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="bg-black rounded-xl overflow-hidden border-2 border-indigo-500/30">
              <iframe
                src="https://www.jopi.com/embed.php?game=home-design-small-house"
                className="w-full h-96 md:h-[500px]"
                title="Home Design Small House Game"
                allowFullScreen
              />
            </div>
          </section>

          <section className="mb-16">
            <HotGames games={otherGames} />
          </section>

          <section className="mb-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                Home Design Small House: Complete Guide
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Master the art of home design with our expert tips, strategies, and walkthroughs
              </p>
            </div>
            <div className="prose prose-invert max-w-none">
              <HomeDesignGuide />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
