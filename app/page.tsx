import Layout from '../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';
import WhisperOfTheHouseGuide from '@/components/WhisperOfTheHouseGuide';
import LatestUpdates from '@/components/LatestUpdates';

export const metadata: Metadata = {
  title: 'Whisper of the House Game Guides: Cozy Games, GRIME II & The Long Dark Episode 5',
  description:
    'Explore Whisper of the House guides, hidden secrets, furniture lists, and story details, plus tips and updates for Retro Rewind, GRIME II,The Long Dark Episode 5 and other games.',
  alternates: {
    canonical: 'https://www.whisperofthehouse.com/',
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
              alt="Whisper of the House guide and game tips"
              className="w-full max-w-md rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex-1 space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Whisper of the House Game Guides & Tips
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Explore in-depth guides, hidden secrets, furniture collections, and story details for
              Whisper of the House, along with fresh tips and updates for Retro Rewind, GRIME II,
              The Long Dark Episode 5, Road To Vostok, Soulmask, Sol Cesto , The Occultist and other games.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
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

              <Link
                href="/grime-2"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore GRIME II
              </Link>

              <Link
                href="/the-long-dark-episode-5"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore The Long Dark Episode 5
              </Link>

              <Link
                href="/i-am-jesus-christ"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Explore I Am Jesus Christ
              </Link>

              <Link
                href="/i-am-jesus-christ"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                All Will Fall Guides
              </Link>

              <Link
                href="/the-occultist"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                View The Occultist Guides
              </Link>

              <Link
                href="/soulmask"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                View Soulmask Guides
              </Link>

              <Link
                href="/crystalfall"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                View Crystalfall Guides
              </Link>

              <Link
                href="/sol-cesto"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                View Sol Cesto Guides
              </Link>
   
              <Link
                href="/pokemon-champions"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Pokemon Champions
              </Link>

              <Link
                href="/road-to-vostok"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Road To Vostok Guide
              </Link>

              <Link
                href="/mouse-pi-for-hire"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Mouse P.I. For Hire Collectibles Guide
              </Link>

              <Link
                href="/pragmata"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Pragmata Guide
              </Link>

              <Link
                href="/sintopia"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Sintopia Guide
              </Link>

              <Link
                href="/airborne-empire"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Airborne Empire Guide
              </Link>

              <Link
                href="/lucky-tower-ultimate"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Lucky Tower Ultimate Guide
              </Link>
              
              <Link
                href="/vampire-crawlers"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Vampire Crawlers Guide
              </Link>

              <Link
                href="/vampire-crawlers"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                HoloVillage: Our Cozy Days Guide
              </Link>

              <Link
                href="/shapez-2"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                shapez 2 - Factory Guide
              </Link>

              <Link
                href="/fracture-field"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Fracture Field Walkthrough
              </Link>

              <Link
                href="/moomintroll"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Moomintroll: Winter's Warmth Guide
              </Link>

              <Link
                href="/far-far-west"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Far Far West Guide
              </Link>

              <Link
                href="/olden-era"
                className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                Heroes of Might and Magic: Olden Era Guide
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* 2. 直接用这短短一行，替换掉之前几百行的那段 section */}
      <LatestUpdates />

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
              Browse game guides, collections, secrets, and updates across Whisper of the House and other games.
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
                Stay updated with the latest guides, news, and notable content across your favorite games.
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

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">GRIME II</h3>
              <p className="text-gray-600 flex-grow">
                Boss guides, early weapons, route help, and sequel comparisons in one place.
              </p>
              <Link
                href="/grime-2"
                className="mt-4 bg-emerald-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
              >
                Explore GRIME II
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">The Long Dark Episode 5</h3>
              <p className="text-gray-600 flex-grow">
                Walkthroughs, missing people locations, ending help, and Astrid&apos;s hardcase answers.
              </p>
              <Link
                href="/the-long-dark-episode-5"
                className="mt-4 bg-sky-500 text-white text-center font-medium py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300"
              >
                Explore Episode 5
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}