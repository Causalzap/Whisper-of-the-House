'use client';

import React from 'react';
import Layout from '../../components/Layout'; // 导入 Layout 组件

const TermsOfService = () => {
  return (
    <Layout>
      <div className="terms-of-service">
        <h1>Terms of Service</h1>
        <p>
          Welcome to Whisper of the House! By accessing or using our service, you agree to comply with the following Terms of Service and our Privacy Policy. Please read these terms carefully.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Whisper of the House website or any associated services (the “Service”), you agree to be bound by these Terms of Service. If you do not agree with these terms, you may not access or use the Service.
        </p>

        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to update, change, or modify these Terms of Service at any time. Any changes will be effective immediately upon posting the revised Terms of Service on this page. We encourage you to check this page periodically for any updates.
        </p>

        <h2>3. User Responsibilities</h2>
        <p>
          You agree to use the Service only for lawful purposes. You are prohibited from using the Service to:
        </p>
        <ul>
          <li>Violate any local, state, or international laws or regulations.</li>
          <li>Engage in any activity that disrupts or interferes with the functionality of the Service.</li>
          <li>Upload or distribute harmful or malicious software or data.</li>
          <li>Harass, abuse, or harm others through the Service.</li>
        </ul>

        <h2>4. Privacy Policy</h2>
        <p>
          Your use of the Service is also governed by our <a href="/privacy-policy" className="footer-link">Privacy Policy</a>. Please review it to understand how we collect, use, and protect your information.
        </p>

        <h2>5. Account Security</h2>
        <p>
          If you create an account with Whisper of the House, you are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use or breach of security related to your account.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content, graphics, logos, designs, and trademarks on the Service are the property of Whisper of the House or its licensors. You may not use any content from the Service without our prior written consent, except as permitted by these Terms of Service.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event will Whisper of the House be liable for any indirect, special, incidental, or consequential damages arising out of or in connection with your use or inability to use the Service, even if we have been advised of the possibility of such damages.
        </p>

        <h2>8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, if you violate these Terms of Service or engage in any activity that could harm the Service or other users.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms of Service will be governed by and construed in accordance with the laws of the jurisdiction in which Whisper of the House operates, without regard to its conflict of law principles.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:support@causalzap.com" className="footer-link">support@causalzap.com</a>
        </p>

        <style jsx>{`
          .terms-of-service {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
            color: black;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: black;
          }

          h2 {
            font-size: 1.5rem;
            margin-top: 1.5rem;
            color: black;
          }

          p {
            color: black;
          }

          ul {
            color: black;
          }

          .footer-link {
            color: #a78bfa;
            text-decoration: none;
          }

          .footer-link:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default TermsOfService;
