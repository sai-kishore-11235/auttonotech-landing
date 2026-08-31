import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const SERVICE_OPTIONS = [
  'Mortgage Operations',
  'Customer Support',
  'Technology & Cloud',
  'Multiple Services',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  volume: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  volume: '',
  message: '',
};

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page page--contact">
      <div className="contact-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="contact-hero" aria-labelledby="contact-heading">
        <div className="contact-hero-inner">
          <h1 id="contact-heading" className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Ready to scale your operations? Let&apos;s talk.
          </p>
        </div>
      </section>

      <section className="contact-main" aria-labelledby="contact-form-heading">
        <div className="contact-main-inner">
          <div className="contact-info">
            <h2 id="contact-form-heading" className="contact-info-title">Get in Touch</h2>
            <p className="contact-info-desc">
              Ready to scale your operations? Schedule a discovery call or send us a message.
            </p>

            <ul className="contact-info-list">
              <li className="contact-info-item">
                <PhoneIcon />
                <a href="tel:+918123085846">+91 81230 85846</a>
              </li>
              <li className="contact-info-item">
                <EmailIcon />
                <a href="mailto:info@auttonotech.com">info@auttonotech.com</a>
              </li>
              <li className="contact-info-item">
                <LocationIcon />
                <span>
                  Delaware, USA (Headquarters)
                  <br />
                  Bangalore, India (Delivery Center)
                </span>
              </li>
              <li className="contact-info-item">
                <ClockIcon />
                <span>
                  Eastern Time: 8 AM – 5 PM
                  <br />
                  India Time: 6 PM – 3 AM
                </span>
              </li>
            </ul>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="status">
                <h3 className="contact-success-title">Message sent!</h3>
                <p className="contact-success-desc">
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="name">
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    className="contact-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    className="contact-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="phone">
                    Phone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    className="contact-input"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="company">
                    Company <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="company"
                    className="contact-input"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    autoComplete="organization"
                  />
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="service">
                    Service Interested In <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="service"
                    className="contact-input contact-select"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="volume">
                    Monthly Volume/Budget
                  </label>
                  <input
                    id="volume"
                    className="contact-input"
                    type="text"
                    name="volume"
                    value={form.volume}
                    onChange={handleChange}
                    placeholder="e.g. 20 files/month or $5,000 budget"
                  />
                </div>

                <div className="contact-form-row">
                  <label className="contact-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="contact-input contact-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
