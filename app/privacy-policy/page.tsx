'use client';

import React from 'react';
import Layout from '../../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container">
        <section className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: May 19, 2026</p>

          <p>
            At Whisper of the House, we respect your privacy. This Privacy Policy explains what
            information we collect, how we use it, and how we protect it when you visit our website.
          </p>

          <p>
            Whisper of the House is an independent PC and Steam game guide website that publishes
            walkthroughs, beginner guides, puzzle solutions, troubleshooting articles, and
            gaming-related recommendations.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us, such as your name,
            email address, and message content when you contact us through forms or email.
          </p>

          <p>
            We may also collect non-personal information automatically, such as your browser type,
            device type, referring pages, pages visited, approximate location, and how you interact
            with our website.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul>
            <li>Operate and improve our website</li>
            <li>Respond to your questions or messages</li>
            <li>Understand how visitors use our content</li>
            <li>Improve our guides, recommendations, and user experience</li>
            <li>Detect, prevent, and address technical or security issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar technologies to improve your browsing experience,
            understand website traffic, remember preferences, and analyze how visitors use our site.
          </p>

          <p>
            Cookies are small data files stored on your device. You can disable cookies through your
            browser settings, but some parts of the website may not function properly if cookies are
            disabled.
          </p>

          <h2>4. Analytics</h2>
          <p>
            We may use analytics tools, such as Google Analytics or similar services, to understand
            website traffic, popular pages, visitor behavior, and technical performance. These tools
            may collect information such as device type, browser type, approximate location, referral
            source, and pages visited.
          </p>

          <h2>5. Affiliate Links and Tracking</h2>
          <p>
            Some pages on Whisper of the House may contain affiliate links. If you click an affiliate
            link and make a purchase or complete another qualifying action, we may earn a commission
            at no additional cost to you.
          </p>

          <p>
            Affiliate networks and advertisers may use cookies, tracking links, or similar
            technologies to record clicks, referrals, purchases, commissions, and other
            performance-related information. This information may be used for attribution, reporting,
            payment, fraud prevention, and compliance purposes.
          </p>

          <p>
            We aim to clearly disclose affiliate relationships on pages that contain affiliate links.
            Our editorial content and game guides are created independently, and affiliate
            commissions do not control our opinions or recommendations.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may link to third-party websites, including official game stores, Steam pages,
            publisher websites, affiliate advertisers, and other external resources. We are not
            responsible for the privacy practices, content, or policies of third-party websites.
          </p>

          <p>
            When you leave our website and visit a third-party website, your activity is governed by
            that third party&apos;s privacy policy and terms.
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
            personal information from children under 13. If you believe that a child has provided us
            with personal information, please contact us so we can take appropriate action.
          </p>

          <h2>10. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have the right to access, correct, update, or request
            deletion of your personal information. You may also have the right to object to or restrict
            certain types of processing.
          </p>

          <p>
            To make a privacy-related request, please contact us at{' '}
            <a href="mailto:support@whisperofthehouse.com">
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
            <a href="mailto:support@whisperofthehouse.com">
              support@whisperofthehouse.com
            </a>.
          </p>
        </section>
      </div>

      <style jsx>{`
        .privacy-policy {
          max-width: 900px;
          margin: 2rem auto;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          color: #111827;
          line-height: 1.7;
        }

        h1 {
          font-size: 2.25rem;
          color: #6d28d9;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .last-updated {
          color: #6b7280;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 1.4rem;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
          font-weight: 700;
        }

        p {
          margin-bottom: 1rem;
        }

        ul {
          margin: 0 0 1rem 1.5rem;
          padding-left: 1rem;
          list-style-type: disc;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #6d28d9;
          text-decoration: underline;
        }

        a:hover {
          color: #4c1d95;
        }
      `}</style>
    </Layout>
  );
};

export default PrivacyPolicy;