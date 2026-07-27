"use client";

import React from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import IgdbAttribution from "@/components/site/IgdbAttribution";

const AboutPage = () => {
  return (
    <Layout>
      <main className="about-page">
        <article className="about-card">
          <header className="about-header">
            <p className="about-eyebrow">
              Independent PC & Indie Game Guides
            </p>

            <h1>About Whisper of the House</h1>

            <p className="intro">
              Whisper of the House is an independent PC and Steam game guide
              website focused on practical walkthroughs, beginner tips, puzzle
              solutions, troubleshooting articles, and gaming recommendations.
            </p>
          </header>

          <section aria-labelledby="about-who-we-are">
            <h2 id="about-who-we-are">Who We Are</h2>

            <p>
              Whisper of the House was founded in 2025 by an independent PC
              game enthusiast and game content creator. The website originally
              started as a dedicated guide site for the game{" "}
              <em>Whisper of the House</em>, then gradually expanded into a
              broader guide website covering multiple PC and Steam titles.
            </p>

            <p>
              Today, we cover indie games, strategy games, survival games,
              puzzle games, adventure games, simulation games, and other
              player-focused PC titles. Our goal is to help players find clear,
              practical, and easy-to-follow information when they are stuck,
              exploring a new game, comparing options, or looking for useful
              gaming resources.
            </p>
          </section>

          <section aria-labelledby="about-what-we-publish">
            <h2 id="about-what-we-publish">What We Publish</h2>

            <p>Our coverage includes:</p>

            <ul>
              <li>Game walkthroughs and progression guides</li>
              <li>Beginner guides and quick-start tips</li>
              <li>Puzzle solutions and route explanations</li>
              <li>Troubleshooting articles for common game issues</li>
              <li>Steam and PC game information pages</li>
              <li>Gaming recommendations and discovery tools</li>
            </ul>
          </section>

          <section aria-labelledby="about-editorial-approach">
            <h2 id="about-editorial-approach">Our Editorial Approach</h2>

            <p>
              We aim to create useful, readable, and accurate content for
              players. Our guides may draw from gameplay experience, editorial
              research, official game pages, developer announcements, patch
              notes, publicly available information, and community knowledge.
            </p>

            <p>
              Whenever possible, we focus on practical details that help
              players solve a specific problem, understand a game system,
              complete a route, compare options, or make a more informed
              decision.
            </p>

            <p>
              Games can change through updates, balance adjustments, new
              releases, and publisher decisions. We do our best to keep
              important pages current, but some details may change after
              publication.
            </p>

            <div className="igdb-credit">
              <IgdbAttribution
                variant="about"
                tone="light"
              />
            </div>
          </section>

          <section aria-labelledby="about-name">
            <h2 id="about-name">
              Why the Website Is Called Whisper of the House
            </h2>

            <p>
              The website name comes from our original focus on the game{" "}
              <em>Whisper of the House</em>. As the site grew, we kept the name
              as our publishing brand while expanding into a wider independent
              PC and Steam game guide website.
            </p>

            <p>
              Because of this history, some older pages may still focus on{" "}
              <em>Whisper of the House</em>, while newer pages cover other
              games. Our current direction is broader: independent PC and Steam
              game guides for players looking for practical help.
            </p>
          </section>

          <section aria-labelledby="about-independent-disclaimer">
            <h2 id="about-independent-disclaimer">
              Independent Website Disclaimer
            </h2>

            <p>
              Whisper of the House is an independent website. Unless
              specifically stated, we are not affiliated with Steam, Valve, or
              any game publisher, developer, or official game brand mentioned
              on this website.
            </p>

            <p>
              Game titles, logos, images, trademarks, and related materials
              belong to their respective owners. References to games and
              third-party brands are used for identification, guides,
              commentary, reviews, or informational purposes.
            </p>
          </section>

          <section aria-labelledby="about-download-policy">
            <h2 id="about-download-policy">
              No Pirated Files or Unauthorized Downloads
            </h2>

            <p>
              We do not host, distribute, or promote pirated files, cracks,
              malware, unauthorized downloads, or illegal copies of games or
              software.
            </p>

            <p>
              When we link to games, software, or related products, we aim to
              use official stores, publisher pages, Steam pages, or other
              legitimate sources.
            </p>
          </section>

          <section aria-labelledby="about-affiliates">
            <h2 id="about-affiliates">Affiliate Relationships</h2>

            <p>
              Some pages may contain affiliate links. If you click an
              affiliate link and make a purchase or complete another qualifying
              action, we may earn a commission at no additional cost to you.
            </p>

            <p>
              We may participate in affiliate programs operated by Awin and
              other affiliate networks. Affiliate commissions help support the
              website, but they do not control our editorial opinions, guide
              information, rankings, or recommendations.
            </p>

            <p>
              You can learn more on our{" "}
              <Link
                href="/affiliate-disclosure"
                className="about-link"
              >
                Affiliate Disclosure
              </Link>{" "}
              page.
            </p>
          </section>

          <section aria-labelledby="about-corrections">
            <h2 id="about-corrections">Corrections and Updates</h2>

            <p>
              If you notice outdated information, incorrect details, broken
              links, or content that should be updated, please contact us. We
              welcome correction requests and reader feedback.
            </p>
          </section>

          <section aria-labelledby="about-contact">
            <h2 id="about-contact">Contact Us</h2>

            <p>
              For questions, feedback, correction requests, copyright concerns,
              or business inquiries, contact us at{" "}
              <a
                href="mailto:support@whisperofthehouse.com"
                className="about-link"
              >
                support@whisperofthehouse.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>

      <style jsx>{`
        .about-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .about-card {
          max-width: 900px;
          margin: 0 auto;
          padding: 2.25rem;
          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.97);
          color: #111827;
          line-height: 1.75;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
        }

        .about-header {
          padding-bottom: 0.5rem;
        }

        .about-eyebrow {
          margin-bottom: 0.7rem;
          color: #0369a1;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0 0 1rem;
          color: #6d28d9;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .intro {
          margin-bottom: 1.4rem;
          color: #374151;
          font-size: 1.08rem;
          line-height: 1.8;
        }

        section + section {
          margin-top: 2rem;
        }

        h2 {
          margin: 0 0 0.75rem;
          color: #1f2937;
          font-size: 1.35rem;
          font-weight: 750;
          line-height: 1.35;
        }

        p {
          margin: 0 0 1rem;
          color: #374151;
        }

        ul {
          margin: 0 0 1rem 1.25rem;
          padding-left: 1rem;
          color: #374151;
          list-style-type: disc;
        }

        li {
          margin-bottom: 0.5rem;
        }

        .igdb-credit {
          margin-top: 1.75rem;
        }

        .about-link {
          color: #6d28d9;
          font-weight: 650;
          text-decoration: underline;
          text-decoration-color: rgba(109, 40, 217, 0.35);
          text-underline-offset: 3px;
          transition:
            color 160ms ease,
            text-decoration-color 160ms ease;
        }

        .about-link:hover {
          color: #4c1d95;
          text-decoration-color: currentColor;
        }

        .about-link:focus-visible {
          border-radius: 3px;
          outline: 2px solid #7c3aed;
          outline-offset: 3px;
        }

        @media (max-width: 640px) {
          .about-page {
            padding: 2rem 1rem;
          }

          .about-card {
            padding: 1.5rem;
            border-radius: 14px;
          }

          h1 {
            font-size: 1.9rem;
          }

          h2 {
            font-size: 1.2rem;
          }

          section + section {
            margin-top: 1.65rem;
          }

          .igdb-credit {
            margin-top: 1.4rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AboutPage;