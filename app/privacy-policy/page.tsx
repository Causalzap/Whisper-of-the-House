'use client';

import React from 'react';
import Layout from '../../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container">
        <section className="privacy-policy">
          <h1>Privacy Policy</h1>
          <p>At Whisper of the House, we are committed to protecting your privacy. This privacy policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard it.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide to us when using the site, such as your name, email address, and other relevant data that you voluntarily submit through contact forms or sign-up forms.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your information may be used to improve our services, respond to your inquiries, send newsletters, or provide you with content and updates about Whisper of the House.</p>

          <h2>3. Data Protection</h2>
          <p>We take necessary measures to protect your data from unauthorized access, alteration, or destruction. Your information is stored securely, and we use encryption technologies to keep it safe.</p>

          <h2>4. Sharing Your Information</h2>
          <p>We do not sell, rent, or share your personal data with third parties without your explicit consent, except as required by law or to protect our rights.</p>

          <h2>5. Cookies</h2>
          <p>We use cookies to improve your experience on our website. Cookies are small data files stored on your device to help us understand how you interact with our site.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, modify, or delete any personal data we have collected from you. If you wish to exercise any of these rights, please contact us at support@causalzap.com.</p>

          <h2>7. Changes to this Policy</h2>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page, and the date of the most recent update will be shown at the bottom.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions or concerns about this privacy policy, please contact us at <a href="mailto:support@causalzap.com">support@causalzap.com</a>.</p>
        </section>
      </div>
      <style jsx>{`
        .privacy-policy {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: black;
        }
        
        h1 {
          font-size: 2rem;
          color: #a78bfa;
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        a {
          color: #a78bfa;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
};

export default PrivacyPolicy;
