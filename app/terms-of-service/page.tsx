'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <main className="terms-page">
        <section className="terms-card">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: May 19, 2026</p>

          <p>
            Welcome to Whisper of the House. By accessing or using this website, you agree to
            these Terms of Service. If you do not agree with these terms, please do not use
            this website.
          </p>

          <p>
            Whisper of the House is an independent PC and Steam game guide website. We publish
            walkthroughs, beginner guides, puzzle solutions, troubleshooting articles, and
            gaming-related recommendations.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Whisper of the House, you agree to be bound by these Terms of
            Service and our Privacy Policy. These terms apply to all visitors and users of the
            website.
          </p>

          <h2>2. Independent Website Disclaimer</h2>
          <p>
            Whisper of the House is an independent website. Unless specifically stated, we are not
            affiliated with Steam, Valve, any game publisher, developer, or official game brand
            mentioned on this website.
          </p>

          <p>
            All game titles, logos, images, trademarks, and related materials belong to their
            respective owners. Any references to games, platforms, or third-party brands are used
            for identification, commentary, guide, review, or informational purposes.
          </p>

          <h2>3. Website Content</h2>
          <p>
            We aim to provide helpful and accurate game guides, walkthroughs, tips, and related
            information. However, games may be updated, patched, changed, removed, or modified by
            their developers or publishers at any time.
          </p>

          <p>
            We do not guarantee that all information on the website will always be complete,
            accurate, current, or suitable for every user. You use the information on this website
            at your own discretion.
          </p>

          <h2>4. No Unauthorized Downloads</h2>
          <p>
            We do not host, distribute, or promote pirated files, cracks, cheats, malware,
            unauthorized downloads, or illegal copies of games or software.
          </p>

          <p>
            When we link to games, software, or related products, we aim to link to official stores,
            official publisher pages, Steam pages, or other legitimate sources.
          </p>

          <h2>5. Affiliate Links and Advertising</h2>
          <p>
            Some pages on this website may contain affiliate links provided through affiliate
            networks, which may include Awin and similar programs. If you click an affiliate link
            and make a purchase or complete another qualifying action, we may earn a commission at
            no additional cost to you.
          </p>

          <p>
            Affiliate commissions help support the website, but they do not control our editorial
            content, opinions, rankings, or guide information. For more details, please review our{' '}
            <Link href="/affiliate-disclosure" className="terms-link">
              Affiliate Disclosure
            </Link>
            .
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites, including Steam pages, official
            game stores, publisher websites, advertisers, affiliate partners, and other external
            resources.
          </p>

          <p>
            We are not responsible for the content, policies, privacy practices, availability,
            pricing, products, services, or actions of any third-party websites. Visiting third-party
            websites is at your own risk.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            The original text, layout, design, structure, and website content created by Whisper of
            the House are owned by us or used with permission, unless otherwise stated.
          </p>

          <p>
            You may not copy, reproduce, republish, scrape, sell, or redistribute our original
            content without our prior written permission, except where permitted by applicable law.
          </p>

          <h2>8. User Responsibilities</h2>
          <p>You agree to use this website only for lawful purposes. You agree not to:</p>

          <ul>
            <li>Use the website for unlawful, harmful, abusive, or fraudulent purposes.</li>
            <li>Attempt to disrupt, hack, overload, or interfere with the website.</li>
            <li>Upload, distribute, or link to malware, viruses, cracks, cheats, or illegal files.</li>
            <li>Copy, scrape, or republish our content at scale without permission.</li>
            <li>Misrepresent your relationship with Whisper of the House or any third-party brand.</li>
            <li>Use the website in a way that violates applicable laws or regulations.</li>
          </ul>

          <h2>9. Privacy Policy</h2>
          <p>
            Your use of this website is also governed by our{' '}
            <Link href="/privacy-policy" className="terms-link">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect information.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Whisper of the House will not be liable for any
            direct, indirect, incidental, consequential, special, or punitive damages arising from
            your use of, or inability to use, this website.
          </p>

          <p>
            This includes, but is not limited to, errors in content, outdated information, website
            interruptions, third-party links, product availability, pricing changes, or any actions
            you take based on information found on this website.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Any changes will be posted on
            this page with an updated &quot;Last updated&quot; date. Your continued use of the
            website after changes are posted means you accept the updated terms.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms of Service are governed by applicable laws, without regard to conflict of
            law principles.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com" className="terms-link">
              support@whisperofthehouse.com
            </a>
            .
          </p>
        </section>
      </main>

      <style jsx>{`
        .terms-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .terms-card {
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

        ul {
          margin: 0 0 1rem 1.5rem;
          padding-left: 1rem;
          color: #374151;
          list-style-type: disc;
        }

        li {
          margin-bottom: 0.5rem;
        }

        .terms-link {
          color: #6d28d9;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .terms-link:hover {
          color: #4c1d95;
        }

        @media (max-width: 640px) {
          .terms-page {
            padding: 2rem 1rem;
          }

          .terms-card {
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

export default TermsOfService;