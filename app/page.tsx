// app/page.tsx  —— Server Component（不要 'use client'）
import Layout from '../components/Layout';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whisper of the House',
  description:
    'Explore Whisper of the House—detailed guides, hidden secrets, furniture lists, and the full storyline. Uncover all the hidden gems in this captivating world.',
  alternates: {
      canonical: 'https://www.whisperofthehouse.com',
  }
  };

export default function Home() {
  return (
    <Layout>
      {/* 你的原有内容（Hero、Features 等） */}
      <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          {/* 游戏封面图 */}
          <div className="hero-image">
            <img src="/images/whisper-of-the-house-game-cover.webp" alt="Whisper of the House Game Cover" />
          </div>
          <h1 className="hero-title">Whisper of the House — Guides, Furniture, Secrets & Full Story</h1>
          <p className="hero-description">
            Explore comprehensive guides, uncover hidden secrets, browse the complete furniture list, and dive deep into the full story of Whisper of the House.
          </p>
          <Link href="/guides" className="cta-button">Start Exploring</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {/* Guides Feature Card */}
            <div className="feature-card">
              <h2>Guides</h2>
              <p>Step-by-step walkthroughs to help you progress through the game, from the basics to advanced strategies.</p>
              <Link href="/guides" className="card-button">View Guides</Link>
            </div>

            {/* Furniture Feature Card */}
            <div className="feature-card">
              <h2>Collection</h2>
              <p>Explore a complete list of furniture, with detailed stats, uses, and tips for decoration and functionality.</p>
              <Link href="/collection" className="card-button">Explore Collection</Link>
            </div>

            {/* Secrets & Story Feature Card */}
            <div className="feature-card">
              <h2>Abnormal Points Collection</h2>
              <p>Discover hidden items, secret rooms, and mysteries waiting to be solved in the Whisper of the House world.</p>
              <Link href="/abnormal-points-collection" className="card-button">Discover Secrets</Link>
            </div>

            {/* News Feature Card */}
            <div className="feature-card">
              <h2>Downloads & News</h2>
              <p>Stay updated with the latest news, events, and uncover the full lore of Whisper of the House.</p>
              <Link href="/news" className="card-button">Read News</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
      {/* ... 其余内容、样式不变 ... */}
    </Layout>
  );
}
