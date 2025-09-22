'use client';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function PlayOnlineClient() {
  return (
    <Layout>
      <div className="guide-container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li className="current">Play Online</li>
          </ol>
        </nav>

        {/* Page Title and Description */}
        <div className="guide-header">
          <h1>Play Home Design Small House Online</h1>
          <p className="guide-subtitle">
            Experience the cozy and relaxing gameplay of <strong>Home Design Small House</strong>. 
            Organize rooms, uncover secrets, and design the perfect space—all without downloading anything.
          </p>
        </div>

        {/* Game Container */}
        <div className="game-content">
          <div className="game-frame-wrapper">
            <iframe
              src="https://www.jopi.com/embed.php?game=home-design-small-house"
              frameBorder="0"
              scrolling="no"
              title="Play Home Design Small House - Whisper of the House"
              allowFullScreen
            ></iframe>
          </div>

          {/* Game Tips */}
          <div className="game-tips">
            <div className="tip">
              <div className="tip-icon">🎮</div>
              <p>Use your mouse to drag and drop items to organize and design the rooms.</p>
            </div>
            <div className="tip">
              <div className="tip-icon">🔍</div>
              <p>Look for hidden secrets and Easter eggs throughout the game.</p>
            </div>
            <div className="tip">
              <div className="tip-icon">🔄</div>
              <p>Right-click to rotate items for better placement.</p>
            </div>
          </div>
        </div>

        {/* Game Information Section */}
        <div className="game-info-grid">
          <section className="game-info-section">
            <h2>Overview</h2>
            <p>
              <strong>Home Design Small House</strong> is a game where players take on the role of a house manager, 
              organizing and categorizing items in various rooms to make the space neat and orderly. 
              The game is simple, fun, and visually charming, ideal for relaxing and entertaining players 
              with an interest in design.
            </p>
          </section>

          <section className="game-info-section">
            <h2>What is it?</h2>
            <p>
              This game allows players to unleash their inner interior designer by dragging and dropping items 
              to organize and decorate rooms, creating a comfortable and well-organized living space.
            </p>
          </section>

          <section className="game-info-section">
            <h2>How to Play</h2>
            <p>
              The game is controlled by dragging and placing items in their proper positions using the mouse. 
              Click on items to select them, and once placed properly, click the "Done" button to finish your design. 
              The game also includes an undo feature to reverse actions.
            </p>
            <p>
              The game can be played directly in your browser without needing any downloads.
            </p>
          </section>

          <section className="game-info-section">
            <h2>Who Will Love This Game?</h2>
            <p>
              <strong>Detail-oriented decorating enthusiasts</strong> – those who appreciate cozy aesthetics, serene environments, and intuitive creative tasks (especially girls).
            </p>

            <p>
              <strong>Organization lovers</strong> – players who find calm and joy in sorting, categorizing, and thoughtfully arranging items.
            </p>
          </section>

          <section className="game-info-section">
            <h2>Game Release Information</h2>
            <p>Simplegame developed Home Design: Small House.</p>
          </section>
        </div>

        {/* Back to Guides Link */}
        <div className="back-to-guides-container">
          <Link href="/" className="read-more-link">
            &larr; Back to Home
          </Link>
        </div>
      </div>

      <style jsx>{`
        .guide-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
          color: #e6e6e6;
        }

        .breadcrumb {
          margin-bottom: 2rem;
        }

        .breadcrumb ol {
          display: flex;
          list-style: none;
          padding: 0;
          gap: 0.75rem;
        }

        .breadcrumb li {
          display: flex;
          align-items: center;
        }

        .breadcrumb li:not(:last-child)::after {
          content: "›";
          margin-left: 0.75rem;
          color: #a5a5a5;
        }

        .breadcrumb a {
          color: #a5a5a5;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .breadcrumb a:hover {
          color: #4ecca3;
        }

        .breadcrumb .current {
          color: #4ecca3;
          font-weight: 600;
        }

        .guide-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: rgba(26, 26, 46, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .guide-header h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #fff;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .guide-subtitle {
          font-size: 1.1rem;
          color: #a5a5a5;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .game-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .game-info-section {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .game-info-section:hover {
          border-color: rgba(78, 204, 163, 0.3);
          transform: translateY(-3px);
        }

        .game-info-section h2 {
          font-size: 1.4rem;
          color: #4ecca3;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(78, 204, 163, 0.3);
        }

        .game-info-section p {
          color: #e6e6e6;
          line-height: 1.6;
        }

        .game-content {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
          transition: all 0.3s ease;
        }

        .game-content:hover {
          border-color: rgba(78, 204, 163, 0.3);
        }

        .game-frame-wrapper {
          position: relative;
          width: 100%;
          padding-top: 75%; /* 4:3 aspect ratio */
          border-radius: 8px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          margin-bottom: 1.5rem;
        }

        .game-frame-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .game-tips {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .tip {
          display: flex;
          align-items: flex-start;
          background: rgba(78, 204, 163, 0.1);
          border-radius: 8px;
          padding: 1rem;
          border: 1px solid rgba(78, 204, 163, 0.2);
        }

        .tip-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .tip p {
          margin: 0;
          color: #e6e6e6;
          line-height: 1.5;
        }

        .back-to-guides-container {
          text-align: center;
          margin-top: 1rem;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          color: #6495ed;
          text-decoration: none;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          background: rgba(30, 136, 229, 0.1);
          border: 1px solid rgba(30, 136, 229, 0.3);
        }

        .read-more-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .read-more-link:hover::before {
          left: 100%;
        }

        .read-more-link:hover {
          color: #fff;
          background: #6495ed;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 136, 229, 0.4);
          border-color: #6495ed;
        }

        .read-more-link::after {
          content: '→';
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .read-more-link:hover::after {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .guide-header h1 {
            font-size: 1.8rem;
          }

          .guide-subtitle {
            font-size: 1rem;
          }

          .game-content {
            padding: 1.5rem;
          }

          .game-frame-wrapper {
            padding-top: 56.25%; /* 16:9 aspect ratio for mobile */
          }

          .game-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
