'use client';

import React from 'react';
import Layout from '../../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <main className="privacy-page">
        <section className="privacy-card">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: May 19, 2026</p>

          <p>
            At Whisper of the House, we respect your privacy. This Privacy Policy explains what
            information we collect, how we use it, how we protect it, and how third-party services
            may process information when you visit our website.
          </p>

          <p>
            Whisper of the House is an independent PC and Steam game guide website that publishes
            walkthroughs, beginner guides, puzzle solutions, troubleshooting articles, and
            gaming-related recommendations.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us, such as your name,
            email address, subject line, and message content when you contact us through forms or
            email.
          </p>

          <p>
            We may also collect non-personal or technical information automatically, such as your
            browser type, device type, operating system, referring pages, pages visited, approximate
            location, IP address, and how you interact with our website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>

          <ul>
            <li>Operate, maintain, and improve our website</li>
            <li>Respond to your questions, messages, or correction requests</li>
            <li>Understand how visitors use our content</li>
            <li>Improve our guides, recommendations, and user experience</li>
            <li>Monitor website performance and technical issues</li>
            <li>Detect, prevent, and address fraud, abuse, or security issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar technologies to improve your browsing experience,
            understand website traffic, remember preferences, analyze how visitors use our site,
            and support affiliate tracking where applicable.
          </p>

          <p>
            Cookies are small data files stored on your device. You can disable cookies through your
            browser settings, but some parts of the website may not function properly if cookies are
            disabled.
          </p>

          <h2>4. Analytics</h2>
          <p>
            We may use analytics tools, such as Google Analytics or similar services, to understand
            website traffic, popular pages, visitor behavior, referral sources, and technical
            performance.
          </p>

          <p>
            These tools may collect information such as device type, browser type, approximate
            location, referral source, pages visited, session duration, and other usage data.
          </p>

          <h2>5. Affiliate Links and Tracking</h2>
          <p>
            Some pages on Whisper of the House may contain affiliate links. If you click an affiliate
            link and make a purchase or complete another qualifying action, we may earn a commission
            at no additional cost to you.
          </p>

          <p>
            We may participate in affiliate programs, including programs operated by Awin and other
            affiliate networks. These networks, advertisers, and merchants may use cookies, tracking
            links, or similar technologies to record clicks, referrals, purchases, commissions, and
            other performance-related information.
          </p>

          <p>
            This information may be used for attribution, reporting, payment, fraud prevention,
            analytics, and compliance purposes. You can learn more about Awin&apos;s data practices
            by reviewing Awin&apos;s own privacy information.
          </p>

          <p>
            We aim to clearly disclose affiliate relationships on pages that contain affiliate links.
            Our editorial content and game guides are created independently, and affiliate
            commissions do not control our opinions, rankings, or recommendations.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may link to third-party websites, including official game stores, Steam
            pages, publisher websites, affiliate advertisers, retailers, software providers, and
            other external resources.
          </p>

          <p>
            We are not responsible for the privacy practices, content, products, services, prices,
            availability, or policies of third-party websites. When you leave our website and visit
            a third-party website, your activity is governed by that third party&apos;s privacy policy
            and terms.
          </p>

          <h2>7. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share limited information with service
            providers that help us operate the website, such as hosting providers, analytics tools,
            security services, email providers, and affiliate networks.
          </p>

          <p>
            We may also disclose information if required by law, to protect our rights, to prevent
            fraud or abuse, or to comply with legal processes.
          </p>

          <h2>8. Data Security</h2>
          <p>
            We take reasonable steps to protect information from unauthorized access, loss, misuse,
            alteration, or disclosure. However, no method of transmission over the internet or method
            of electronic storage is completely secure.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect
            personal information from children under 13.
          </p>

          <p>
            If you believe that a child has provided us with personal information, please contact us
            so we can take appropriate action.
          </p>

          <h2>10. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have the right to access, correct, update, or request
            deletion of your personal information. You may also have the right to object to or
            restrict certain types of processing.
          </p>

          <p>
            You can manage cookies through your browser settings. You may also be able to opt out of
            certain analytics or advertising tracking through tools provided by your browser, device,
            or applicable third-party services.
          </p>

          <p>
            To make a privacy-related request, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com" className="privacy-link">
              support@whisperofthehouse.com
            </a>.
          </p>

          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated &quot;Last updated&quot; date.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com" className="privacy-link">
              support@whisperofthehouse.com
            </a>.
          </p>
        </section>
      </main>

      <style jsx>{`
        .privacy-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .privacy-card {
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

        .privacy-link {
          color: #6d28d9;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .privacy-link:hover {
          color: #4c1d95;
        }

        @media (max-width: 640px) {
          .privacy-page {
            padding: 2rem 1rem;
          }

          .privacy-card {
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

export default PrivacyPolicy;