// app/guides/page.tsx
import Layout from '../../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

// 在服务器端设置元数据 - 与首页相同的方式
export const metadata: Metadata = {
  title: 'Complete Walkthroughs & Tips',
  description: 'Explore comprehensive Whisper of the House guides including beginner tips, progression walkthroughs, hidden secrets, and expert strategies.',
  alternates: {
    canonical: 'https://whisperofthehouse.com/guides',
  },
  openGraph: {
    title: 'Whisper of the House Guides - Complete Walkthroughs & Tips',
    description: 'Explore comprehensive Whisper of the House guides including beginner tips, progression walkthroughs, hidden secrets, and expert strategies.',
    type: 'website',
    url: 'https://whisperofthehouse.com/guides',
  },
};

export default function GuidesPage() {
  return (
    <Layout>
      <div className="container">
        <div className="main-content">
          <div className="content">
            <section className="hero">
              <h1>Whisper of the House Guide - Complete Walkthrough & Tips</h1>
              <p>Discover step-by-step walkthroughs, tips, tricks, and hidden secrets to help you progress through Whisper of the House.</p>
            </section>

            <section id="beginner-guide" className="guide-section">
              <h2>Beginner's Guide</h2>
              <p>Start your journey with a comprehensive guide to the basics of Whisper of the House...</p>
              <Link href="/guides/beginner-guide" className="read-more-link">Read More</Link>
            </section>

            <section id="progression-guide" className="guide-section">
              <h2>Progression Guide</h2>
              <p>Learn how to advance through the game effectively, unlocking new areas and items...</p>
              <Link href="/guides/game-progression-guide" className="read-more-link">Read More</Link>
            </section>

            <section id="tips-tricks" className="guide-section">
              <h2>Top Tips & Tricks</h2>
              <p>Discover the best strategies to get ahead in Whisper of the House...</p>
              <Link href="/guides/top-tips-and-tricks" className="read-more-link">Read More</Link>
            </section>

            <section id="hidden-secrets" className="guide-section">
              <h2>Hidden Secrets Guide</h2>
              <p>Uncover the hidden mysteries and secret rooms of the mansion...</p>
              <Link href="/guides/hidden-secrets" className="read-more-link">Read More</Link>
            </section>
          </div>

          <div className="sidebar">
            <div className="toc-card">
              <h2>Table of Contents</h2>
              <ul className="toc-list">
                <li><a href="#beginner-guide">Beginner's Guide</a></li>
                <li><a href="#progression-guide">Progression Guide</a></li>
                <li><a href="#tips-tricks">Top Tips & Tricks</a></li>
                <li><a href="#hidden-secrets">Hidden Secrets Guide</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* 添加平滑滚动脚本 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              document.addEventListener('click', function(e) {
                const target = e.target;
                const anchor = target.closest('a[href^="#"]');
                
                if (anchor) {
                  e.preventDefault();
                  const targetId = anchor.getAttribute('href');
                  
                  if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth',
                      });
                      
                      // 更新URL哈希（可选）
                      window.history.pushState(null, '', targetId);
                    }
                  }
                }
              });
            });
          `,
        }}
      />
    </Layout>
  );
}