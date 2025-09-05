"use client";

import React from "react";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* ===== 主内容区域（美化后） ===== */}
        <div className="footer-content">
          {/* 左：品牌信息 */}
          <section className="brand-section fancy-card">
            <div className="logo-container">
              <div className="logo">
                Whisper of the <span className="logo-accent">House</span>
              </div>
            </div>
            <p className="brand-description">
              Your ultimate resource for guides, furniture, secrets, and
              stories in the enchanting world of Whisper of the House.
            </p>
          </section>

          {/* 中：导航/资源 */}
          <nav className="links-section">
            <div className="links-group fancy-card">
              <h3 className="group-title">
                <i className="dot" />
                Navigation
              </h3>
              <ul className="links-list">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/guides" className="footer-link">Guides</Link></li>
                <li><Link href="/collection" className="footer-link">Collection</Link></li>
                <li><Link href="/abnormal-points-collection" className="footer-link">Abnormal Points Collection</Link></li>
                <li><Link href="/download-and-news" className="footer-link">Downloads & News</Link></li>
              </ul>
            </div>

            <div className="links-group fancy-card">
              <h3 className="group-title">
                <i className="dot" />
                Resources
              </h3>
              <ul className="links-list">
                <li><Link href="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="footer-link">Terms of Service</Link></li>
                <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
              </ul>
            </div>
          </nav>

          {/* 右：联系信息 */}
          <section className="contact-section fancy-card">
            <h3 className="group-title">
              <i className="dot" />
              Contact Us
            </h3>
            <a href="mailto:support@whisperofthehouse.com" className="email-chip">
              <span className="mail-icon">✉️</span>
              support@causalzap.com
            </a>
          </section>
        </div>

        {/* ===== 版权信息（不改结构） ===== */}
        <div className="copyright-section">
          <div className="copyright-text">
            &copy; 2025 Whisper of the House. All Rights Reserved.
          </div>
          <div className="disclaimer">
            This is an unofficial fan site. Whisper of the House is a registered trademark of its respective owners.
          </div>
        </div>
      </div>

      <style jsx>{`
        /* 基础 */
        .site-footer {
          --bg: #0d0e12;
          --fg: #e9e9ef;
          --muted: #a8a8b3;
          --line: rgba(255,255,255,0.08);
          --accent: #4da6ff;   /* 琥珀主色 */
          --accent-2: #1e90ff; /* 悬停色 */
          --card: rgba(255,255,255,0.03);
          --glass: blur(8px);
          background: radial-gradient(1200px 600px at 20% -20%, #1b1f2a 0%, transparent 60%) , var(--bg);
          padding: 4rem 1.25rem 1.75rem;
          border-top: 1px solid var(--line);
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          gap: 2rem;
        }

        /* 主内容：三列栅格（手机自动堆叠） */
        .footer-content {
          display: grid;
          grid-template-columns: 1.4fr auto 1.2fr;
          gap: 1.25rem;
        }
        @media (max-width: 980px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }

        /* 小卡片质感 */
        .fancy-card {
          background: var(--card);
          -webkit-backdrop-filter: var(--glass);
          backdrop-filter: var(--glass);
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 1.25rem 1.25rem 1.35rem;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .fancy-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.14);
          box-shadow: 0 10px 30px rgba(0,0,0,.25);
        }

        /* 品牌 */
        .brand-section { color: var(--fg); }
        .logo {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: .2px;
          color: #fff;
        }
        .logo-accent {
          color: var(--accent);
          text-shadow: 0 0 18px rgba(255,205,77,.25);
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: .75rem;
        }
        .logo-badge {
          padding: .25rem .6rem;
          font-size: .75rem;
          border-radius: 999px;
          background: rgba(77,166,255,0.12);
          color: var(--accent);
          border: 1px solid rgba(255,205,77,.35);
        }
        .brand-description {
          color: var(--muted);
          line-height: 1.7;
          max-width: 32ch;
        }
        @media (max-width: 980px) {
          .brand-description { max-width: none; }
        }

        /* 列表区 */
        .links-section {
          display: grid;
          grid-template-columns: max-content max-content;
          gap: 1.25rem;
        }
        @media (max-width: 520px) {
          .links-section { grid-template-columns: 1fr; }
        }
        .group-title {
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: .5rem;
          margin-bottom: .75rem;
          position: relative;
        }
        .group-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 44px;
          height: 2px;
          background: linear-gradient(90deg,var(--accent),transparent);
          border-radius: 2px;
        }
        .dot {
          width: .55rem;
          height: .55rem;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 3px rgba(77,166,255,.15);
          display: inline-block;
        }
        .links-list {
          list-style: none;
          padding: .5rem 0 0;
          margin: 0;
          display: grid;
          gap: .35rem;
        }

        /* 链接样式（更克制的动画） */
        .footer-link {
          color: var(--fg);
          text-decoration: none;
          font-weight: 500;
          padding: .25rem 0;
          display: inline-flex;
          align-items: center;
          gap: .45rem;
          position: relative;
          transition: color .25s ease, transform .25s ease;
        }
        .footer-link::before {
          content: "›";
          font-size: .9rem;
          color: rgba(255,255,255,.35);
          transform: translateX(-4px);
          opacity: .6;
          transition: transform .25s ease, opacity .25s ease, color .25s ease;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg,var(--accent),var(--accent-2));
          border-radius: 2px;
          transition: width .3s ease;
        }
        .footer-link:hover {
          color: var(--accent);
          transform: translateX(2px);
        }
        .footer-link:hover::before {
          color: var(--accent);
          transform: translateX(0);
          opacity: 1;
        }
        .footer-link:hover::after { width: 100%; }

        /* 联系方式 */
        .contact-section { color: var(--fg); }
        .email-chip {
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: .65rem .85rem;
          border-radius: 12px;
          background: rgba(255,205,77,.12);
          color: #fff;
          border: 1px solid rgba(255,205,77,.35);
          text-decoration: none;
          font-weight: 600;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .email-chip:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(255,152,0,.15);
          border-color: rgba(255,152,0,.6);
        }
        .mail-icon { filter: drop-shadow(0 0 8px rgba(255,205,77,.3)); }
        .contact-note {
          color: var(--muted);
          margin-top: .75rem;
          font-size: .9rem;
        }

        /* 版权（保持不变，仅微调视觉承接） */
        .copyright-section {
          border-top: 1px solid var(--line);
          padding-top: 1.5rem;
          text-align: center;
        }
        .copyright-text { color: #fff; font-size: .9rem; margin-bottom: .35rem; }
        .disclaimer { color: var(--muted); font-size: .82rem; line-height: 1.4; }
      `}</style>
    </footer>
  );
};

export default Footer;
