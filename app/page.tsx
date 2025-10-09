// app/page.tsx 
import Layout from '../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import '../styles/globals.css';
import WhisperOfTheHouseGuide from '@/components/WhisperOfTheHouseGuide';

export const metadata: Metadata = {
  title: 'Whisper of the House',
  description: 'Explore Whisper of the House—detailed guides, hidden secrets, furniture lists, and the full storyline. Uncover all the hidden gems in this captivating world.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com',
  }
};

export default function Home() {
  return (
    <Layout>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 py-12">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* 游戏封面图 */}
            <div className="flex-1 flex justify-center">
              <img 
                src="/images/whisper-of-the-house-game-cover.webp" 
                alt="Whisper of the House Game Cover" 
                className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1 space-y-6 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Whisper of the House — Guides, Furniture, Secrets & Full Story
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Explore comprehensive guides, uncover hidden secrets, browse the complete furniture list, and dive deep into the full story of Whisper of the House.
              </p>
              <Link 
                href="/guides" 
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        </section>

        {/* 文章内容部分 */}
        <section id="guide-content" className="py-16 bg-white px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ultimate Guide to Whisper of the House: High-Score Tips, Furniture Collection & Hidden Secrets</h2>
              <p className="text-lg text-gray-600">Master Organization, Unlock Secrets, and Achieve Perfect Scores</p>
            </div>

            {/* 引用文章组件 */}
            <WhisperOfTheHouseGuide />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-100 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Guides Feature Card */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Guides</h2>
                <p className="text-gray-600 flex-grow">Step-by-step walkthroughs to help you progress through the game, from the basics to advanced strategies.</p>
                <Link href="/guides" className="mt-4 bg-blue-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  View Guides
                </Link>
              </div>

              {/* Furniture Feature Card */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Collection</h2>
                <p className="text-gray-600 flex-grow">Explore a complete list of furniture, with detailed stats, uses, and tips for decoration and functionality.</p>
                <Link href="/collection" className="mt-4 bg-green-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                  Explore Collection
                </Link>
              </div>

              {/* Play Online Feature Card */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Play Online</h2>
                <p className="text-gray-600 flex-grow">Dive into a fun and interactive online game. Play, relax, and enjoy a cozy gaming experience with friends!</p>
                
                {/* Change button color and ensure consistent size */}
                <Link href="/play-online" className="mt-4 bg-orange-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Play Now
                </Link>
              </div>


              {/* Secrets & Story Feature Card */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Abnormal Points Collection</h2>
                <p className="text-gray-600 flex-grow">Discover hidden items, secret rooms, and mysteries waiting to be solved in the Whisper of the House world.</p>
                <Link href="/abnormal-points-collection" className="mt-4 bg-purple-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                  Discover Secrets
                </Link>
              </div>

              {/* News Feature Card */}
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Downloads & News</h2>
                <p className="text-gray-600 flex-grow">Stay updated with the latest news, events, and uncover the full lore of Whisper of the House.</p>
                <Link href="/news" className="mt-4 bg-red-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300">
                  Read News
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}