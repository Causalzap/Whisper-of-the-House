'use client';

import React, { useState } from 'react';
import Layout from '../../components/Layout'; // 导入 Layout 组件

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 这里模拟提交表单的行为，可以连接API来处理提交
    setFormStatus('Thank you for reaching out! We will get back to you shortly.');
    
    // 清空表单数据
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <Layout>
      <div className="container">
        <section className="contact-form">
          <h1>Contact Us</h1>
          <p>If you have any questions, feel free to reach out to us!</p>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
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
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>

          {formStatus && <p className="form-status">{formStatus}</p>}

          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you need immediate assistance, you can reach us at:</p>
            <p>Email: <a href="mailto:support@whisperofthehouse.com">support@whisperofthehouse.com</a></p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .contact-form {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #a78bfa;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.8rem;
          border-radius: 4px;
          border: 1px solid #ccc;
          background: transparent;
          color: white;
        }

        textarea {
          resize: vertical;
          height: 150px;
        }

        .submit-btn {
          background: #a78bfa;
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #8e6cda;
        }

        .form-status {
          margin-top: 1rem;
          color: #a78bfa;
        }

        .contact-info {
          margin-top: 2rem;
        }

        .contact-info a {
          color: #a78bfa;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;
