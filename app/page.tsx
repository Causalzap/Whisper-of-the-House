import Layout from '../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import WhisperOfTheHouseGuide from '@/components/WhisperOfTheHouseGuide';

export const metadata: Metadata = {
  title: 'Whisper of the House Guides & Cozy Simulation Game Tips',
  description:
    'Explore Whisper of the House guides, hidden secrets, furniture lists, and story details, plus tips and updates for Retro Rewind and other cozy simulation games.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com',
  },
};

export default function Home() {
  return (
    <Layout>
      <section className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-1 flex justify-center">
            <img
              src="/images/whisper-of-the-house-game-cover.webp"
              alt="Whisper of the House guide and cozy simulation game tips"
              className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex-1 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Whisper of the House Guides & Cozy Simulation Game Tips
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore in-depth guides, hidden secrets, furniture collections, and story details for
              Whisper of the House, along with fresh tips and updates for Retro Rewind and other
              cozy simulation games.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/guides"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Whisper Guides
              </Link>

              <Link
                href="/retro-rewind"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Browse Retro Rewind
              </Link>

              <Link
                href="/guides/hozy"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore Hozy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 md:-mt-10 px-4 pt-16">
  <div className="container mx-auto max-w-6xl">
    <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-4 md:p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          Latest Updates
        </h2>
        <span className="text-xs text-gray-400">New guides & articles</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

        {/* ===== Retro Rewind ===== */}

        <Link
          href="/retro-rewind/custom-videos"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">
              Custom Videos Guide
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            How custom videos work and how to use them effectively.
          </p>
        </Link>

        <Link
          href="/retro-rewind/community"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">
              Community Insights
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Tips and strategies from the community.
          </p>
        </Link>

        <Link
          href="/retro-rewind/is-the-black-market-worth-it"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">
              Black Market Worth It?
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Risks, rewards, and when to use it.
          </p>
        </Link>

        <Link
          href="/retro-rewind/when-to-replace-damaged-tape"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-purple-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-purple-500 font-semibold">Retro Rewind</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">
              Replace Damaged Tape
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            When replacing improves progress.
          </p>
        </Link>

        {/* ===== Hozy ===== */}

        <Link
          href="/guides/hozy/cafe-layout-tips"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">
              Cafe Layout Tips
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Keep the Cafe cozy without clutter.
          </p>
        </Link>

        <Link
          href="/guides/hozy/hardest-levels-ranked"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">
              Hardest Levels Ranked
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Which rooms feel toughest to finish.
          </p>
        </Link>

        <Link
          href="/guides/hozy/penthouse-layout-guide"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">
              Penthouse Layout Guide
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Balance the large space effectively.
          </p>
        </Link>

        <Link
          href="/guides/hozy/dreams-explained"
          className="group rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 transition-all hover:-translate-y-0.5 hover:shadow-sm hover:border-indigo-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-indigo-500 font-semibold">Hozy</span>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700">
              Dreams Explained
            </h3>
          </div>
          <p className="mt-1 text-xs text-gray-600">
            Why the level feels so strange.
          </p>
        </Link>

      </div>
    </div>
  </div>
</section>

      <section id="guide-content" className="pt-20 pb-16 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Ultimate Guide to Whisper of the House
            </h2>
            <p className="text-lg text-gray-600">
              Master organization, uncover hidden secrets, collect furniture, and achieve better scores.
            </p>
          </div>

          <WhisperOfTheHouseGuide />
        </div>
      </section>

      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore More</h2>
            <p className="text-lg text-gray-600">
              Browse game guides, collections, secrets, and updates across Whisper of the House and other cozy games.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Guides</h3>
              <p className="text-gray-600 flex-grow">
                Step-by-step walkthroughs, tips, and strategies to help you progress faster and play smarter.
              </p>
              <Link
                href="/guides"
                className="mt-4 bg-blue-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Guides
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Collection</h3>
              <p className="text-gray-600 flex-grow">
                Explore furniture, collectibles, and useful in-game items with details and practical tips.
              </p>
              <Link
                href="/collection"
                className="mt-4 bg-green-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                Explore Collection
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Play Online</h3>
              <p className="text-gray-600 flex-grow">
                Discover browser-friendly games and enjoy fun, cozy experiences directly online.
              </p>
              <Link
                href="/play-online"
                className="mt-4 bg-orange-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Play Now
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Abnormal Points Collection</h3>
              <p className="text-gray-600 flex-grow">
                Find hidden items, unusual discoveries, secret rooms, and mysterious details worth collecting.
              </p>
              <Link
                href="/abnormal-points-collection"
                className="mt-4 bg-purple-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
              >
                Discover Secrets
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">News & Updates</h3>
              <p className="text-gray-600 flex-grow">
                Stay updated with the latest guides, news, and notable content across your favorite cozy games.
              </p>
              <Link
                href="/news"
                className="mt-4 bg-red-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Read News
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Retro Rewind</h3>
              <p className="text-gray-600 flex-grow">
                Explore fresh Retro Rewind tips, community insights, and strategy guides in one place.
              </p>
              <Link
                href="/retro-rewind"
                className="mt-4 bg-indigo-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
              >
                View Retro Rewind
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}