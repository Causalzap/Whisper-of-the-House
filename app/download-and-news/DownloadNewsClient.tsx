// app/download-and-news/DownloadNewsClient.tsx
'use client';

import React, { useState } from 'react';
import '../../styles/globals.css';

const DownloadNewsClient = () => {
  const [activeTab, setActiveTab] = useState<'download' | 'news'>('download');

  // 新闻数据（与你之前的一致）
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
            <img 
            height="267" width="400"
            src="/images/whisper_of_the_house_real_estate_evergreen_house_ui_preview.png" 
            alt="UI preview of the Whisper of the House Evergreen House real estate feature with plant-themed rooms and balance details." 
            loading="lazy" 
            />,
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
    <div className="download-news-container">
      <div className="header">
        <h1>Download & News</h1>
        <p className="subtitle">Get the latest version and stay updated with game developments</p>
      </div>

      {/* 标签切换 */}
      <div className="tab-switcher">
        <button
          className={`tab-button ${activeTab === 'download' ? 'active' : ''}`}
          onClick={() => setActiveTab('download')}
        >
          Download
        </button>
        <button
          className={`tab-button ${activeTab === 'news' ? 'active' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          News
        </button>
      </div>

      {/* 下载部分 */}
      {activeTab === 'download' && (
        <div className="download-section">
          <div className="download-card">
            <div className="download-info">
              <h2>Download Whisper of the House</h2>
              <p>Experience the unique puzzle-solving adventure on Steam</p>

              <a
                href="https://store.steampowered.com/app/2589500/Whisper_of_the_House/"
                className="steam-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="steam-icon">🎮</span>
                Download on Steam
              </a>

              <div className="features-section">
                <h3>Game Features:</h3>
                <div className="features-grid">
                  <div className="feature-column">
                    <ul>
                      <li>Unpacking and organizing tasks</li>
                      <li>Cleaning cluttered homes and shops</li>
                      <li>Arranging furniture with creative freedom</li>
                      <li>Over 1800 unique furniture pieces</li>
                      <li>Interactive furniture with custom sound effects</li>
                      <li>Task-driven with daily new requests</li>
                      <li>Discovering secrets and hidden storylines</li>
                      <li>Character-driven narrative with various townsfolk</li>
                      <li>Unlocking and decorating multiple homes</li>
                    </ul>
                  </div>
                  <div className="feature-column">
                    <ul>
                      <li>Collecting vouchers and exchanging them for furniture</li>
                      <li>Photo mode with stickers and filters</li>
                      <li>Exploring the town and collecting trinkets</li>
                      <li>Recycling objects for rewards</li>
                      <li>Robot assistant to help with tasks</li>
                      <li>Time-travel themed storyline elements</li>
                      <li>Multiple endings and secret collectibles</li>
                      <li>Cozy pixel art and soothing soundtrack</li>
                      <li>Dynamic, lived-in environments with attention to detail</li>
                      <li>No wrong answer decorating style</li>
                      <li>Museum collectibles and puzzles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="system-requirements">
              <h3>System Requirements</h3>

              <div className="platform-card">
                <div className="platform-header">
                  <div className="platform-icon">💻</div>
                  <h4>Windows</h4>
                </div>
                <div className="requirements">
                  <div className="minimal">
                    <h5>Minimum:</h5>
                    <ul>
                      <li>Requires a 64-bit processor and operating system</li>
                      <li>OS *: Windows 7 64bit</li>
                      <li>Processor: Intel Core i3</li>
                      <li>Memory: 4 GB RAM</li>
                      <li>Graphics: Intel UHD 630</li>
                      <li>Storage: 2 GB available space</li>
                    </ul>
                  </div>
                  <div className="recommended">
                    <h5>Recommended:</h5>
                    <ul>
                      <li>Requires a 64-bit processor and operating system</li>
                      <li>* Starting January 1st, 2024, the Steam Client will only support Windows 10 and later versions.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="platform-card">
                <div className="platform-header">
                  <div className="platform-icon">🍎</div>
                  <h4>macOS</h4>
                </div>
                <div className="requirements">
                  <div className="minimal">
                    <h5>Minimum:</h5>
                    <ul>
                      <li>OS: macOS 10.13+</li>
                      <li>Processor: Any Intel or Apple Silicon processor</li>
                      <li>Memory: 4 GB RAM</li>
                      <li>Storage: 2 GB available space</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 新闻部分 */}
      {activeTab === 'news' && (
        <div className="news-section">
          {newsItems.map((news) => (
            <div key={news.id} className="news-card">
              <div className="news-header">
                <h2>{news.title}</h2>
                <span className="news-date">{news.date}</span>
              </div>

              <div className="news-content">
                <ul>
                  {news.content.map((item, index) => (
                    <li key={index}>
                      <span className="bullet">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {news.note && (
                  <div className="news-note">
                    <p>{news.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .download-news-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          color: #e0e0e0;
          font-family: 'Poppins', sans-serif;
        }
        .header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 2rem 0;
          background: linear-gradient(135deg, #1a2a6c, #2a4b8c);
          border-radius: 12px;
        }
        .header h1 {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #aaa;
          max-width: 600px;
          margin: 0 auto;
        }
        .tab-switcher {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
          border-bottom: 1px solid #444;
          padding-bottom: 1rem;
        }
        .tab-button {
          background: none;
          border: none;
          padding: 0.8rem 2rem;
          font-size: 1.1rem;
          color: var(--text-light);
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          border-radius: 30px;
          margin: 0 0.5rem;
        }
        .tab-button:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .tab-button.active {
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
        }
        .download-section {
          padding: 2rem 0;
        }
        .download-card {
          background: rgba(35, 35, 50, 0.7);
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .download-info {
          margin-bottom: 3rem;
        }
        .download-info h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .download-info h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--accent);
        }
        .download-info p {
          color: var(--text-gray);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          max-width: 600px;
        }
        .steam-button {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(to right, #1b2838, #2a475e);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          margin: 1rem 0 2rem;
          font-size: 1.1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .steam-button:hover {
          background: linear-gradient(to right, #2a475e, #1b2838);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        .steam-icon {
          margin-right: 0.8rem;
          font-size: 1.2rem;
        }
        .features-section {
          margin-top: 2rem;
        }
        .features-section h3 {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: var(--accent);
          position: relative;
          padding-left: 1.5rem;
        }
        .features-section h3::before {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .feature-column ul {
          list-style: none;
          padding-left: 0;
        }
        .feature-column li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          line-height: 1.6;
        }
        .feature-column li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }
        .system-requirements {
          background: rgba(30, 30, 40, 0.8);
          border-radius: 12px;
          padding: 2rem;
        }
        .system-requirements h3 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.5rem;
          color: white;
          position: relative;
        }
        .system-requirements h3::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: var(--accent);
        }
        .platform-card {
          background: rgba(40, 40, 50, 0.6);
          border-radius: 10px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        .platform-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .platform-icon {
          font-size: 1.8rem;
        }
        .platform-header h4 {
          color: var(--accent);
          margin: 0;
          font-size: 1.3rem;
        }
        .requirements {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .minimal, .recommended {
          background: rgba(50, 50, 60, 0.5);
          border-radius: 8px;
          padding: 1.5rem;
        }
        .minimal h5, .recommended h5 {
          color: #6c63ff;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .minimal ul, .recommended ul {
          list-style: none;
          padding-left: 0;
        }
        .minimal li, .recommended li {
          margin-bottom: 0.5rem;
          color: var(--text-gray);
          font-size: 0.95rem;
          padding-left: 1.5rem;
          position: relative;
        }
        .minimal li::before, .recommended li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #6c63ff;
        }
        .news-section {
          padding: 2rem 0;
        }
        .news-card {
          background: rgba(35, 35, 50, 0.7);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .news-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #444;
        }
        .news-header h2 {
          font-size: 1.5rem;
          color: white;
          margin: 0;
        }
        .news-date {
          color: #aaa;
          font-size: 0.9rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
        }
        .news-content ul {
          list-style: none;
          padding-left: 0;
        }
        .news-content li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.8rem;
          color: #ccc;
          line-height: 1.6;
        }
        .bullet {
          color: var(--accent);
          position: absolute;
          left: 0;
          font-size: 1.2rem;
        }
        .news-note {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(78, 204, 163, 0.1);
          border-left: 3px solid var(--accent);
          border-radius: 8px;
        }
        .news-note p {
          color: #ccc;
          font-style: italic;
          margin: 0;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .download-news-container { padding: 1rem; }
          .header { padding: 1.5rem; }
          .header h1 { font-size: 2rem; }
          .tab-button { padding: 0.6rem 1.5rem; font-size: 1rem; }
          .download-card { padding: 1.5rem; }
          .features-grid { grid-template-columns: 1fr; }
          .requirements { grid-template-columns: 1fr; }
          .download-info h2 { font-size: 1.8rem; }
        }
        @media (max-width: 480px) {
          .tab-switcher { flex-direction: column; align-items: center; gap: 0.5rem; }
          .tab-button { width: 100%; margin: 0.3rem 0; }
          .news-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
          .news-date { align-self: flex-start; }
          .header h1 { font-size: 1.8rem; }
          .subtitle { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default DownloadNewsClient;
