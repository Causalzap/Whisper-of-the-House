'use client';

import React, { useState } from 'react';
import Layout from '../../components/Layout';

const CONTACT_EMAIL = 'support@whisperofthehouse.com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailSubject = formData.subject || 'Message from Whisper of the House';
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;

    setFormStatus(
      'Your email app should open shortly. If it does not, please email us directly at support@whisperofthehouse.com.'
    );
  };

  return (
    <Layout>
      <main className="contact-page">
        <section className="contact-card">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              Have a question, correction request, business inquiry, or affiliate-related
              question? You can contact the Whisper of the House team using the form below
              or by emailing us directly.
            </p>
          </div>

          <div className="contact-grid">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Question, correction, partnership, or general inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Open Email App
              </button>

              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>

            <aside className="contact-info">
              <h2>Contact Information</h2>

              <div className="info-block">
                <h3>Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>

              <div className="info-block">
                <h3>What to Contact Us About</h3>
                <ul>
                  <li>Game guide corrections or update requests</li>
                  <li>General website questions</li>
                  <li>Affiliate or advertising inquiries</li>
                  <li>Copyright, trademark, or content concerns</li>
                  <li>Technical issues with the website</li>
                </ul>
              </div>

              <div className="info-note">
                <p>
                  Whisper of the House is an independent PC and Steam game guide website.
                  We are not affiliated with Steam, Valve, or any game publisher unless
                  specifically stated.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <style jsx>{`
        .contact-page {
          width: 100%;
          padding: 3rem 1rem;
        }

        .contact-card {
          max-width: 1050px;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.96);
          color: #111827;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .contact-header {
          max-width: 780px;
          margin-bottom: 2rem;
        }

        h1 {
          margin-bottom: 0.75rem;
          color: #6d28d9;
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .contact-header p {
          color: #374151;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.8fr);
          gap: 2rem;
          align-items: start;
        }

        .form {
          display: grid;
          gap: 1.25rem;
        }

        .form-group {
          display: grid;
          gap: 0.5rem;
        }

        label {
          color: #1f2937;
          font-weight: 700;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          background: #ffffff;
          color: #111827;
          padding: 0.85rem 1rem;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        input:focus,
        textarea:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
        }

        textarea {
          resize: vertical;
          min-height: 160px;
        }

        .submit-btn {
          width: fit-content;
          border: none;
          border-radius: 10px;
          background: #6d28d9;
          color: #ffffff;
          padding: 0.85rem 1.4rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .submit-btn:hover {
          background: #4c1d95;
          transform: translateY(-1px);
        }

        .form-status {
          color: #6d28d9;
          font-weight: 600;
          line-height: 1.6;
        }

        .contact-info {
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          background: #f9fafb;
          padding: 1.5rem;
        }

        .contact-info h2 {
          margin-bottom: 1rem;
          color: #1f2937;
          font-size: 1.4rem;
          font-weight: 800;
        }

        .info-block {
          margin-top: 1.25rem;
        }

        .info-block h3 {
          margin-bottom: 0.5rem;
          color: #374151;
          font-size: 1rem;
          font-weight: 700;
        }

        .info-block a {
          color: #6d28d9;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
          word-break: break-all;
        }

        ul {
          margin: 0;
          padding-left: 1.25rem;
          color: #4b5563;
          line-height: 1.7;
        }

        li {
          margin-bottom: 0.4rem;
        }

        .info-note {
          margin-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
          padding-top: 1rem;
        }

        .info-note p {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-page {
            padding: 2rem 1rem;
          }

          .contact-card {
            padding: 1.5rem;
            border-radius: 12px;
          }

          h1 {
            font-size: 1.9rem;
          }

          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;