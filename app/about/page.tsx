'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main className="about-page">
        <section className="about-card">
          <h1>About Whisper of the House</h1>

          <p className="intro">
            Whisper of the House is an independent PC and Steam game guide website focused on
            practical walkthroughs, beginner tips, puzzle solutions, troubleshooting articles,
            and gaming-related recommendations.
          </p>

          <h2>Who We Are</h2>
          <p>
            Whisper of the House was founded in 2025 by an independent PC game enthusiast
            and game content creator. The website originally started as a dedicated guide site for
            the game <em>Whisper of the House</em>, then gradually expanded into a broader game
            guide website covering multiple PC and Steam titles.
          </p>

          <p>
            Today, Whisper of the House covers indie games, strategy games, survival games, puzzle
            games, adventure games, simulation games, and other player-focused PC titles. Our goal
            is to help players find clear, practical, and easy-to-follow information when they are
            stuck, exploring a new game, comparing options, or looking for helpful gaming resources.
          </p>

          <h2>What We Publish</h2>
          <p>We publish content such as:</p>

          <ul>
            <li>Game walkthroughs and progression guides</li>
            <li>Beginner guides and quick-start tips</li>
            <li>Puzzle solutions and route explanations</li>
            <li>Troubleshooting articles for common game issues</li>
            <li>Steam and PC game information pages</li>
            <li>Gaming-related recommendations and resource pages</li>
          </ul>

          <h2>Our Editorial Approach</h2>
          <p>
            We aim to create useful, readable, and accurate content for players. Our guides may be
            based on gameplay experience, editorial research, official game pages, developer
            announcements, patch notes, publicly available information, and community knowledge.
          </p>

          <p>
            When possible, we focus on practical information that helps players solve a specific
            problem, understand a game system, complete a route, compare options, or make a more
            informed decision.
          </p>

          <p>
            Games can change over time through updates, patches, balance changes, new releases, or
            publisher decisions. We do our best to keep important pages updated, but some information
            may change after publication.
          </p>

          <h2>Why the Website Is Called Whisper of the House</h2>
          <p>
            The website name comes from our original focus on the game <em>Whisper of the House</em>.
            As the site grew, we kept the name as our publishing brand while expanding the content
            into a wider independent PC and Steam game guide website.
          </p>

          <p>
            Because of this history, some older pages may still focus on <em>Whisper of the House</em>,
            while newer pages may cover other games. Our current editorial direction is broader:
            independent PC and Steam game guides for players looking for practical help.
          </p>

          <h2>Independent Website Disclaimer</h2>
          <p>
            Whisper of the House is an independent website. Unless specifically stated, we are not
            affiliated with Steam, Valve, any game publisher, developer, or official game brand
            mentioned on this website.
          </p>

          <p>
            All game titles, logos, images, trademarks, and related materials belong to their
            respective owners. References to games and third-party brands are used for
            identification, guide, commentary, review, or informational purposes.
          </p>

          <h2>No Pirated Files or Unauthorized Downloads</h2>
          <p>
            We do not host, distribute, or promote pirated files, cracks, cheats, malware,
            unauthorized downloads, or illegal copies of games or software.
          </p>

          <p>
            When we link to games, software, or related products, we aim to link to official stores,
            official publisher pages, Steam pages, or other legitimate sources.
          </p>

          <h2>Affiliate Relationships</h2>
          <p>
            Some pages on this website may contain affiliate links. If you click an affiliate link
            and make a purchase or complete another qualifying action, we may earn a commission at no
            additional cost to you.
          </p>

          <p>
            We may participate in affiliate programs, including programs operated by Awin and other
            affiliate networks. Affiliate commissions help support the website, but they do not
            control our editorial opinions, guide information, rankings, or recommendations.
          </p>

          <p>
            You can learn more on our{' '}
            <Link href="/affiliate-disclosure" className="about-link">
              Affiliate Disclosure
            </Link>{' '}
            page.
          </p>

          <h2>Corrections and Updates</h2>
          <p>
            If you notice outdated information, incorrect details, broken links, or content that
            should be updated, please contact us. We welcome correction requests and feedback from
            readers.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions, feedback, correction requests, copyright concerns, or business
            inquiries, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com" className="about-link">
              support@whisperofthehouse.com
            </a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .about-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .about-card {
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.96);
          color: #111827;
          line-height: 1.7;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        h1 {
          margin-bottom: 1rem;
          color: #6d28d9;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .intro {
          margin-bottom: 1.5rem;
          color: #374151;
          font-size: 1.1rem;
        }

        h2 {
          margin-top: 1.8rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
          font-size: 1.35rem;
          font-weight: 700;
        }

        p {
          margin-bottom: 1rem;
          color: #374151;
        }

        ul {
          margin: 0 0 1rem 1.5rem;
          padding-left: 1rem;
          color: #374151;
          list-style-type: disc;
        }

        li {
          margin-bottom: 0.5rem;
        }

        .about-link {
          color: #6d28d9;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .about-link:hover {
          color: #4c1d95;
        }

        @media (max-width: 640px) {
          .about-page {
            padding: 2rem 1rem;
          }

          .about-card {
            padding: 1.5rem;
            border-radius: 12px;
          }

          h1 {
            font-size: 1.9rem;
          }

          h2 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AboutPage;