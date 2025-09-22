// app/guides/organize-uncover-secrets-guide.tsx
'use client';
import Layout from '../../components/Layout';
import Link from 'next/link';
import React from 'react';

const OrganizeAndUncoverSecretsGuide = () => {
  return (
    <Layout>
      <div className="guide-container">
        {/* 面包屑导航 */}
        <nav className="breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/guides">Guides</Link></li>
            <li className="current">Organize & Uncover Secrets</li>
          </ol>
        </nav>

        {/* 指南标题和描述 */}
        <div className="guide-header">
          <h1>Ultimate Organization & Secrets Guide - Whisper of the House</h1>
          <p className="guide-subtitle">Master the art of cleaning, organizing, and uncovering the dark mysteries hidden within Whisper Town. Your complete walkthrough for efficient gameplay and secret discovery.</p>
        </div>

        <div className="guide-content">
          {/* 视频部分 */}
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Gameplay Overview & First Steps</h2>
            </div>
            
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/nNHye90q7lM?si=HM8bQQUZascpGRUe"
                title="Organize houses and uncover their secrets - Whisper of the House"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Getting Started with Mark</h3>
              <p className="subsection-content">
                Your journey begins with Mark the Cargobot (ID: 4411). He will help you move your initial items into your new home at 16 Whisper Court. Start by unpacking boxes and familiarizing yourself with the drag-and-drop mechanics.
              </p>
            </div>
          </section>

          {/* 核心整理策略部分 */}
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Core Organization Strategies</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Room-by-Room Approach</h3>
              <p className="subsection-content">
                Tackle one room at a time. The game tracks completion percentage for each room (e.g., Living Room 100%). Start with the living room, then bathroom, kitchen, and finally bedrooms. This method prevents overwhelm and ensures you don't miss items.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Inventory & Storage Management</h3>
              <p className="subsection-content">
                Your backpack space is limited. Use your personal storage chest (accessed via the house icon) to store unused items, empty boxes, or furniture you don't want to place immediately. You can also recycle unwanted items in the basement bin for vouchers.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Layer Switching</h3>
              <p className="subsection-content">
                Use the "Switch Layer" button to place items on different vertical levels (e.g., on shelves, tables, or the floor). This is crucial for maximizing space in cramped areas like Cheryl's Bakery.
              </p>
            </div>
          </section>

          {/* 秘密与发现部分 */}
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Secrets & Hidden Content</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Luna's Secret Chamber</h3>
              <p className="subsection-content">
                <strong>Location:</strong> Upstairs hallway, behind a movable panel or crack in the wall.
                <br /><strong>Discovery:</strong> This hidden room contains evidence of a squatter - a sleeping bag, food cans, tally marks on the wall ("456 days"), a work badge, and a pizza box. Cleaning the filthy handprints and footprints (by right-clicking) is part of Luna's request.
                <br /><strong>Outcome:</strong> Reported in the "Whisper Daily" newspaper. The room is later renovated into an expanded bedroom space for Luna and her bestie.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">The Mysterious Cracked Wall</h3>
              <p className="subsection-content">
                <strong>Location:</strong> Southeast corner of the map (initially blocked by a barrier).
                <br /><strong>Discovery:</strong> Interacting with the crack reveals a counter showing "39" secrets remaining to be found. This is a central hub for tracking your progress in uncovering the town's mysteries.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Cheryl's Cursed Mirror & Crystal Ball</h3>
              <p className="subsection-content">
                <strong>Location:</strong> Cheryl's Bakery bathroom.
                <br /><strong>Discovery:</strong> The mirror displays the message "Don't keep staring at me." Interacting with the crystal ball in her bedroom can "Use magic to make it snow," triggering unique visual effects and potentially unlocking hidden lore.
              </p>
            </div>
          </section>

          {/* 任务攻略部分 */}
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Character Request Walkthroughs</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Luna's Moving Help</h3>
              <p className="subsection-content">
                <strong>Task:</strong> Unpack and organize items in Luna's house, and clean the mysterious footprints leading to the secret chamber.
                <br /><strong>Tip:</strong> Nyla, her dog, will be running around. Place the dog bed thoughtfully. The secret chamber is key to completing this request fully.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Cheryl's Bakery Setup</h3>
              <p className="subsection-content">
                <strong>Task:</strong> Organize a overwhelming amount of baking supplies, ingredients, and decor in a very small shop space.
                <br /><strong>Tip:</strong> Use vertical space wisely! Stack items like napkins, use shelves for ingredients, and place menus on the door. The theme is "champagne gold" for a wedding client.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Jane's Punk Rock Store</h3>
              <p className="subsection-content">
                <strong>Task:</strong> Help move in a piano, speakers, drum set, and guitars for an underground show honoring "The Rolling Bones."
                <br /><strong>Tip:</strong> This request becomes available after reaching "Skilled Organizer" rank and comes with a 1000-voucher reward.
              </p>
            </div>
          </section>

          {/* 进阶提示部分 */}
          <section className="guide-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Pro Tips & Advanced Mechanics</h2>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Renovation & Customization</h3>
              <p className="subsection-content">
                After completing initial tasks, you can renovate your own house. Change wall colors, patterns (like starry night sky), and floor tiles to personalize your space. This is purely cosmetic but adds to the cozy feel.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Map & Pinning System</h3>
              <p className="subsection-content">
                Use the map to fast travel to discovered locations like the Bus Stop or Garden Shop. You can pin points of interest and even change the pin colors to categorize tasks, secrets, or resource locations.
              </p>
            </div>
            
            <div className="subsection">
              <h3 className="subsection-title">Sleep & Time Progression</h3>
              <p className="subsection-content">
                Sleep in your bed to advance time to the next day (6:00 AM). This triggers new mail deliveries, daily requests from townsfolk, and progresses certain events.
              </p>
            </div>
          </section>

          {/* 结论部分 */}
          <section className="guide-conclusion">
            <h2>Become the Ultimate Organizer</h2>
            <p>
              <strong>Whisper of the House</strong> masterfully blends cozy organization with a intriguing undercurrent of mystery. By methodically solving each request and keeping a keen eye for environmental details—like cracks in walls, suspicious footprints, and interactive objects—you'll gradually peel back the layers of Whisper Town's secrets. Remember to check your mail and the Whisper Daily newspaper regularly for new leads and requests. Happy organizing and secret hunting!
            </p>
          </section>
        </div>

      </div>

      <style jsx>{`
        .guide-container {
          max-width: 900px;
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
          transition: color 0.2s;
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
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(26, 26, 46, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        
        .guide-header h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fff;
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .guide-subtitle {
          font-size: 1.2rem;
          color: #a5a5a5;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .guide-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .guide-section {
          background: rgba(26, 26, 46, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .guide-section:hover {
          border-color: rgba(100, 149, 237, 0.3);
          transform: translateY(-3px);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #4ecca3;
        }
        
        .section-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #4ecca3;
          color: #1a1a2e;
          border-radius: 50%;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 1rem;
        }
        
        .guide-section h2 {
          font-size: 1.8rem;
          color: #fff;
          margin: 0;
        }
        
        .video-container {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          margin: 1.5rem 0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        
        .subsection {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(100, 149, 237, 0.5);
        }
        
        .subsection-title {
          font-size: 1.3rem;
          color: #4ecca3;
          margin-bottom: 0.5rem;
        }
        
        .subsection-content {
          color: #e6e6e6;
          line-height: 1.6;
        }
        
        .subsection-content strong {
          color: #4ecca3;
          font-weight: 600;
        }
        
        .guide-conclusion {
          background: rgba(78, 204, 163, 0.1);
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(78, 204, 163, 0.3);
          text-align: center;
        }
        
        .guide-conclusion h2 {
          font-size: 1.8rem;
          color: #4ecca3;
          margin-bottom: 1rem;
        }
        
        .guide-conclusion p {
          color: #e6e6e6;
          line-height: 1.6;
        }
        
        .guide-conclusion strong {
          color: #a78bfa;
        }
        
        .back-to-guides-container {
          text-align: center;
          margin-top: 2rem;
        }
        
        .back-to-guides {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: rgba(78, 204, 163, 0.2);
          color: #4ecca3;
          text-decoration: none;
          border-radius: 6px;
          border: 1px solid rgba(78, 204, 163, 0.5);
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .back-to-guides:hover {
          background: rgba(78, 204, 163, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(78, 204, 163, 0.2);
        }
        
        @media (max-width: 768px) {
          .guide-header h1 {
            font-size: 2rem;
          }
          
          .guide-subtitle {
            font-size: 1rem;
          }
          
          .guide-section {
            padding: 1.5rem;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .section-number {
            margin-bottom: 0.5rem;
          }
          
          .guide-section h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default OrganizeAndUncoverSecretsGuide;