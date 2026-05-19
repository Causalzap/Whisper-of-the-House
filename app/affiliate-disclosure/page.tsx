'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const AffiliateDisclosurePage = () => {
  return (
    <Layout>
      <main className="disclosure-page">
        <section className="disclosure-card">
          <h1>Affiliate Disclosure</h1>
          <p className="last-updated">Last updated: May 19, 2026</p>

          <p>
            Some pages on Whisper of the House may contain affiliate links. This means that if you
            click an affiliate link and make a purchase or complete another qualifying action, we may
            earn a commission at no additional cost to you.
          </p>

          <h2>What Are Affiliate Links?</h2>
          <p>
            Affiliate links are special tracking links provided by advertisers, affiliate networks,
            or partner programs. These links help identify when a visitor from our website visits a
            third-party website and completes a qualifying action, such as making a purchase.
          </p>

          <p>
            Affiliate commissions help support the operation of this website, including hosting,
            research, content creation, maintenance, and future guide updates.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            Our editorial content, game guides, walkthroughs, tips, and recommendations are created
            independently. Affiliate commissions do not control our opinions, rankings, guide
            information, or the topics we choose to cover.
          </p>

          <p>
            We aim to recommend products, services, games, tools, or resources that are relevant to
            our readers. However, you should always review the product, service, price, terms, and
            official information before making a purchase.
          </p>

          <h2>No Extra Cost to You</h2>
          <p>
            Clicking an affiliate link does not increase the price you pay. If we receive a
            commission, it is paid by the advertiser, merchant, or affiliate network.
          </p>

          <h2>Affiliate Networks and Advertisers</h2>
          <p>
            We may work with affiliate networks, advertisers, merchants, or partner programs. These
            third parties may use cookies, tracking links, or similar technologies to record clicks,
            referrals, purchases, commissions, and other performance-related information.
          </p>

          <p>
            This tracking may be used for attribution, reporting, payment, fraud prevention,
            analytics, and compliance purposes.
          </p>

          <h2>Third-Party Websites</h2>
          <p>
            Affiliate links may take you to third-party websites, including official game stores,
            Steam pages, publisher websites, software providers, retailers, advertisers, or other
            external services.
          </p>

          <p>
            We are not responsible for the content, policies, prices, availability, products,
            services, or privacy practices of third-party websites. Once you leave Whisper of the
            House, your activity is governed by the third party&apos;s own terms and privacy policy.
          </p>

          <h2>Product Information and Availability</h2>
          <p>
            Product prices, discounts, availability, features, release dates, and terms may change
            without notice. We try to provide useful information, but we cannot guarantee that all
            third-party details are always current or accurate.
          </p>

          <h2>Our Commitment to Transparency</h2>
          <p>
            We aim to clearly disclose affiliate relationships on pages that contain affiliate links.
            When a page includes affiliate links, we may include a short disclosure near the relevant
            content or before the links.
          </p>

          <p>
            You can also review our{' '}
            <Link href="/privacy-policy" className="disclosure-link">
              Privacy Policy
            </Link>{' '}
            to learn more about cookies, analytics, affiliate tracking, and third-party links.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Affiliate Disclosure, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com" className="disclosure-link">
              support@whisperofthehouse.com
            </a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .disclosure-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .disclosure-card {
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
          margin-bottom: 0.5rem;
          color: #6d28d9;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .last-updated {
          margin-bottom: 1.5rem;
          color: #6b7280;
          font-size: 0.95rem;
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

        .disclosure-link {
          color: #6d28d9;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .disclosure-link:hover {
          color: #4c1d95;
        }

        @media (max-width: 640px) {
          .disclosure-page {
            padding: 2rem 1rem;
          }

          .disclosure-card {
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

export default AffiliateDisclosurePage;