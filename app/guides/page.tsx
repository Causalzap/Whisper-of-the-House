// app/guides/page.tsx
'use client';

import Layout from '../../components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import type { Metadata } from 'next';

export default function GuidesPage() {
  // 平滑滚动效果
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 120,
              behavior: 'smooth',
            });
            
            // 更新URL哈希
            window.history.pushState(null, '', targetId);
          }
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900">
          <div className="container mx-auto max-w-6xl text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Whisper of the House Guide
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Discover step-by-step walkthroughs, tips, tricks, and hidden secrets to help you progress through Whisper of the House.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-1/4">
              <div className="sticky top-24 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/10">
                <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#beginner-guide" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      Beginner's Guide
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#progression-guide" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      Progression Guide
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#tips-tricks" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      Top Tips & Tricks
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#hidden-secrets" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      Hidden Secrets Guide
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#organize-secrets" 
                      className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3"
                    >
                      Organize and Discover Secrets
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:w-3/4">
              {/* Beginner's Guide */}
              <section id="beginner-guide" className="guide-section bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Beginner's Guide</h2>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Start your journey with a comprehensive guide to the basics of Whisper of the House. Learn the core mechanics, 
                  controls, and essential tips to get started on the right foot.
                </p>
                <Link 
                  href="/guides/beginner-guide" 
                  className="inline-flex items-center bg-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </section>

              {/* Progression Guide */}
              <section id="progression-guide" className="guide-section bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Progression Guide</h2>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Learn how to advance through the game effectively, unlocking new areas and items. This guide covers the optimal 
                  path to maximize your progress and avoid common pitfalls.
                </p>
                <Link 
                  href="/guides/game-progression-guide" 
                  className="inline-flex items-center bg-green-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </section>

              {/* Top Tips & Tricks */}
              <section id="tips-tricks" className="guide-section bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Top Tips & Tricks</h2>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Discover the best strategies to get ahead in Whisper of the House. From time-saving shortcuts to advanced techniques, 
                  these tips will help you master the game more efficiently.
                </p>
                <Link 
                  href="/guides/top-tips-and-tricks" 
                  className="inline-flex items-center bg-purple-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </section>

              {/* Hidden Secrets Guide */}
              <section id="hidden-secrets" className="guide-section bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">4</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Hidden Secrets Guide</h2>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Uncover the hidden mysteries and secret rooms of the mansion. This guide reveals locations and methods to discover 
                  the game's most elusive content.
                </p>
                <Link 
                  href="/guides/hidden-secrets" 
                  className="inline-flex items-center bg-red-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </section>

              {/* Organize and Discover Secrets */}
              <section id="organize-secrets" className="guide-section bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">5</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Organize and Discover Secrets</h2>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Dive deep into the world of <strong className="text-white">Whisper of the House</strong> as you uncover hidden rooms, mysterious objects, and the
                  secrets that lie within the mansion. Whether you're a beginner or an advanced player, learning the best strategies to 
                  discover these secrets will enhance your gameplay experience. In this guide, we'll show you how to organize the house 
                  while uncovering its hidden mysteries.
                </p>
                <Link 
                  href="/guides/organize-and-uncover-secrets" 
                  className="inline-flex items-center bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </section>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
}