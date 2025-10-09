// app/download-and-news/DownloadNewsClient.tsx
'use client';

import React, { useState } from 'react';

const DownloadNewsClient = () => {
  const [activeTab, setActiveTab] = useState<'download' | 'news'>('download');

  // 新闻数据
  const newsItems = [
    {
        id: 4,
        title: 'Progress Report (Sept 1 – Sept 5) & Delay of House Purchase Feature',
        date: '2025-09-05',
        content: [
            'Over the past week, our updates have mainly focused on:',
            'Fixing certain quest flows that could get stuck.',
            'Correcting object sizes and properties that caused issues.',
            'Improving parts of the UI display and localization.',
            'Optimizing certain operations and prompts.',
            'Replaced problematic and questionable assets.',
            'However, we’re sorry to say that the workload has exceeded our expectations.',
            'The house purchase feature, originally scheduled for this week, is not ready yet and will be delayed.',
            'We hope to bring the house purchase feature to you as soon as possible.',
            <div className="my-4">
              
            </div>,
            'In the meantime, we’ve received over 70 replies in our feedback thread this past week—thank you so much!',
            'Your comments made us realize there’s still room to refine the details of the current version.',
            'Therefore, for this month, our updates will mainly focus on:',
            'Better quest guidance.',
            'Furniture search & categorization.',
            'Completing furniture sets.',
            'Thank you again for your patience and understanding.',
            'We’re excited to keep improving the game with your support!'
        ]
        
    },
    {
      id: 3,
      title: 'Official Statement on Garden Assets Issue',
      date: '2025-09-03',
      content: [
        'Hello everyone, this is Zhicheng, the producer from GD Studio.',
        'Recently, we received feedback from the Moonfrost development team, pointing out that several garden assets in our project—the grass, bench, flowers, and lamp—appeared to have originated from their work.',
        'When we received this message, we acted immediately: we contacted the Moonfrost team and began reviewing the assets in question.',
        'After this review, I want to extend my most sincere apology to everyone—the Moonfrost team, their artists, and those who have been following Whisper of the House.',
        'The assets in question were provided by a former contractor who was involved in the early phase of the project, and whose collaboration ended more than 1.5 years ago.',
        'Although the issue originated from the contractor\'s misconduct, I bear full responsibility as the producer.',
        'I failed to properly review the sources of the assets and did not identify that they included material of problematic origin. For this, I am truly sorry.',
        'We have now completely removed all of this contractor\'s work from our project, including the problematic assets, and we will not collaborate with this artist again in the future.',
        'We will continue to conduct a thorough review of all our assets to ensure that no questionable materials remain.',
        'Once again, I sincerely apologize, and I am deeply sorry for this incident.'
      ],
      isOfficial: true
    },
    {
      id: 1,
      title: 'v1.0.0.7 Patch Notes',
      date: '2025-09-03',
      content: [
        'Fixed collision in 54 * 36 Ideal Home Showroom.',
        'Fixed missing interaction hint for the Fishie\'s lamp.',
        'Fixed material update error for snow in the main scene.',
        'Fixed incorrect fire hydrant interaction effect in the main scene.',
        'Presets now store recolor states.',
        'Adjusted size of Orange Blossom Perfume.',
        'Added four-way rotation for the Mini Fan.',
        'Fixed collision issue when the cabinet door in Hospital Room 205 was open and the player switched rooms.',
        'Timeline display is now enabled by default.',
        'After controlling the weather, daily weather refresh will no longer occur.'
      ]
    },
    {
      id: 2,
      title: 'v1.0.0.6 Patch Notes',
      date: '2025-09-03',
      content: [
        'Replaced problematic and questionable assets',
        'Added fine-tuning sensitivity option; holding LT on controller switches sensitivity.',
        'Fixed an issue where custom interaction keys were not working.',
        'Added keyboard controls for camera zoom in/out.',
        'Added custom key bindings: Zoom In, Zoom Out.',
        'Removed time display from the weather UI; weather panel now auto-hides.',
        'Fixed an issue in Ideal Home where saves loaded too late, causing features to miss loading (stacking left only one book).',
        'Fixed right joystick scrolling in the storage being too slow.',
        'Fixed localization error when putting potted plants into the storage.',
        'Fixed errors when placing containers in Subspace or Luna\'s secret room.',
        'Added long-press hint for the bakery mirror.',
        'Fixed priority logic error in the upper-left display of sand piles.',
        'Added setting to display timeline.',
        'Fixed an extra record appearing in the collection.',
        'Fixed preset blank slot count increasing too quickly.',
        'Fixed some localization issues.',
        'Fixed incorrect inventory deduction when loading presets requiring combined items (e.g., mattress composition reading error).',
        'Presets will no longer clear items when there are insufficient items in the warehouse.',
        'Fixed an issue where, after cleaning garbage, running it off screen before the UI animation finished would cause it to remain uncleared.',
        'Fixed preset images displaying incorrectly; local images now delete properly when presets are removed.',
        'Adjusted volume (size) of the kitchen knife.',
        'Fixed issue where Jane\'s deletion timing was not correct, causing two Janes to appear.'
      ],
      note: 'We sincerely apologize to the Moonfrost team, their artists, and those who have been following Whisper of the House for the misused assets. We will continue to conduct a thorough review of all our assets to ensure that no questionable materials remain.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* 头部 */}
        <div className="text-center mb-10 py-8 bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Download & News
          </h1>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Get the latest version and stay updated with game developments
          </p>
        </div>

        {/* 标签切换 */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 rounded-full p-1 flex">
            <button
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'download' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('download')}
            >
              Download
            </button>
            <button
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeTab === 'news' 
                  ? 'bg-indigo-600 text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setActiveTab('news')}
            >
              News
            </button>
          </div>
        </div>

        {/* 下载部分 */}
        {activeTab === 'download' && (
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Download Whisper of the House</h2>
                <p className="text-gray-300 mb-6">
                  Experience the unique puzzle-solving adventure on Steam
                </p>

                <a
                  href="https://store.steampowered.com/app/2589500/Whisper_of_the_House/"
                  className="inline-flex items-center bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg mb-8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-3">🎮</span>
                  Download on Steam
                </a>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300 border-b border-indigo-700 pb-2">
                    Game Features:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Unpacking and organizing tasks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Cleaning cluttered homes and shops</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Arranging furniture with creative freedom</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Over 1800 unique furniture pieces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Interactive furniture with custom sound effects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Task-driven with daily new requests</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Discovering secrets and hidden storylines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Character-driven narrative with various townsfolk</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Unlocking and decorating multiple homes</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Collecting vouchers and exchanging them for furniture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Photo mode with stickers and filters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Exploring the town and collecting trinkets</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Recycling objects for rewards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Robot assistant to help with tasks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Time-travel themed storyline elements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Multiple endings and secret collectibles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Cozy pixel art and soothing soundtrack</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Dynamic, lived-in environments with attention to detail</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>No wrong answer decorating style</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">•</span>
                        <span>Museum collectibles and puzzles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-indigo-700 pb-2">
                  System Requirements
                </h3>

                <div className="mb-8 bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">💻</div>
                    <h4 className="text-xl font-semibold text-blue-300">Windows</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-green-400 mb-2">Minimum:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>Requires a 64-bit processor and operating system</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>OS *: Windows 7 64bit</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>Processor: Intel Core i3</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>Memory: 4 GB RAM</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>Graphics: Intel UHD 630</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2">-</span>
                          <span>Storage: 2 GB available space</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-400 mb-2">Recommended:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">-</span>
                          <span>Requires a 64-bit processor and operating system</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">-</span>
                          <span>* Starting January 1st, 2024, the Steam Client will only support Windows 10 and later versions.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">🍎</div>
                    <h4 className="text-xl font-semibold text-pink-300">macOS</h4>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-400 mb-2">Minimum:</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">-</span>
                        <span>OS: macOS 10.13+</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">-</span>
                        <span>Processor: Any Intel or Apple Silicon processor</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">-</span>
                        <span>Memory: 4 GB RAM</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">-</span>
                        <span>Storage: 2 GB available space</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 新闻部分 */}
        {activeTab === 'news' && (
          <div className="space-y-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-4 border-b border-gray-700">
                  <h2 className="text-2xl font-bold text-white">{news.title}</h2>
                  <span className="text-indigo-300 bg-indigo-900/30 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                    {news.date}
                  </span>
                </div>

                <div className="prose prose-invert max-w-none">
                  <ul className="space-y-3">
                    {news.content.map((item, index) => (
                      <li key={index} className="text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {news.note && (
                    <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-800">
                      <p className="text-blue-300 italic">{news.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadNewsClient;