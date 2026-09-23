import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollReveal } from '../components/ScrollReveal';

const AUDIENCE_TAGS = [
  'Mortgage Lenders',
  'Mortgage Brokers',
  'Correspondent Lenders',
  'Title Companies',
];

const CHALLENGES = [
  'High processor salaries ($60K-80K/year + benefits)',
  'Volume spikes that internal teams can\'t absorb',
  '40% annual attrition in offshore teams',
  'Unpredictable quality from offshore vendors',
];

const SOLUTIONS = [
  '$300-500/file or $3,500-5,000/month FTE',
  'Flexible capacity—scale up/down as needed',
  '<10% attrition—your team stays and compounds',
  'Dual QC process, SLA guarantees',
];

const SERVICE_ITEMS = [
  { title: 'Loan Processing', desc: 'Full-cycle processing from application through investor delivery with Encompass LOS expertise.' },
  { title: 'Underwriting Support', desc: 'Pre-underwriting review, condition clearing, and investor guideline compliance.' },
  { title: 'Title & Escrow Support', desc: 'Title search coordination, escrow management, and closing document preparation.' },
  { title: 'Post-Closing & QC', desc: 'Trailing docs, investor delivery, QC audits, and compliance reporting.' },
];

const STEPS = [
  {
    num: 1,
    title: 'Discovery Call (15-30 min)',
    desc: 'We understand your workflow, LOS, investor requirements, and volume.',
  },
  {
    num: 2,
    title: 'Onboarding (24-48 hours)',
    desc: 'NDA signed. Access provisioned. Team assigned. SOPs reviewed.',
  },
  {
    num: 3,
    title: 'Trial Period (5-10 files)',
    desc: 'We process files at discounted rate. You evaluate quality and turnaround.',
  },
  {
    num: 4,
    title: 'Go-Live (Week 2)',
    desc: 'Full volume processing begins. Daily status updates. Slack/email communication.',
  },
  {
    num: 5,
    title: 'Optimization (Ongoing)',
    desc: 'Monthly check-ins. Process refinement. Capacity scaling as needed.',
  },
];

const FAQS = [
  {
    q: 'How do I trust offshore with sensitive loan data?',
    a: 'We operate under strict NDAs, role-based access controls, and encrypted environments. SOC 2 compliance is in progress, and we follow US mortgage industry data handling standards.',
  },
  {
    q: 'What LOS systems do you support?',
    a: 'We are Encompass LOS experts and also support Calyx, BytePro, and other major platforms. Our team adapts to your existing workflow.',
  },
  {
    q: 'How do we communicate with your team?',
    a: 'Your dedicated team is available during Eastern Time business hours (8 AM–5 PM ET) via Slack, email, and scheduled video calls.',
  },
  {
    q: 'What if there\'s a quality issue?',
    a: 'Every file goes through our dual QC process. If an issue is found, we correct it at no additional cost and document root cause for process improvement.',
  },
  {
    q: 'How fast can you scale if volume spikes?',
    a: 'With our flexible capacity model, we can add processors within 48-72 hours. FTE retainer clients get priority scaling.',
  },
  {
    q: 'Do you work with small lenders (1-20 loans/month)?',
    a: 'Yes. Our per-file pricing model is designed for lenders of all sizes, including boutique and correspondent lenders with variable volume.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`mortgage-faq-item${open ? ' mortgage-faq-item--open' : ''}`}>
      <button
        type="button"
        className="mortgage-faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className="mortgage-faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mortgage-faq-answer">{answer}</p>}
    </div>
  );
}

export function MortgageServicesPage() {
  return (
    <div className="page page--mortgage">
      <div className="mortgage-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="mortgage-hero" aria-labelledby="mortgage-heading">
        <div className="mortgage-hero-inner">
          <nav className="mortgage-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">&gt;</span>
            <span>Services</span>
            <span aria-hidden="true">&gt;</span>
            <span aria-current="page">Mortgage Operations</span>
          </nav>

          <h1 id="mortgage-heading" className="mortgage-hero-title">
            Offshore Mortgage Processing &amp; Title Operations
          </h1>
          <p className="mortgage-hero-desc">
            Full-cycle loan processing from application through investor delivery. 6+ years experience.
            Encompass LOS experts. Eastern Time hours.
          </p>

          <ul className="mortgage-audience-tags" aria-label="Who we serve">
            {AUDIENCE_TAGS.map((tag) => (
              <li key={tag}>
                <span className="mortgage-tag-check" aria-hidden="true">✓</span>
                {tag}
              </li>
            ))}
          </ul>

          <div className="mortgage-hero-cta">
            <Link className="btn-mortgage-primary" to="/contact">Get Pricing</Link>
            <Link className="btn-mortgage-outline" to="/contact">Schedule Call</Link>
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="mortgage-problem" aria-labelledby="problem-heading">
        <div className="mortgage-section-inner">
          <h2 id="problem-heading" className="mortgage-section-title scroll-reveal-child">
            The Problem We Solve
          </h2>
          <div className="mortgage-problem-grid">
            <div className="mortgage-problem-card mortgage-problem-card--challenge scroll-reveal-child">
              <h3 className="mortgage-problem-card-title">❌ Common Challenges</h3>
              <ul className="mortgage-problem-list">
                {CHALLENGES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mortgage-problem-card mortgage-problem-card--solution scroll-reveal-child">
              <h3 className="mortgage-problem-card-title">✓ Auttonotech Solution</h3>
              <ul className="mortgage-problem-list">
                {SOLUTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="mortgage-services" aria-labelledby="services-heading">
        <div className="mortgage-section-inner">
          <h2 id="services-heading" className="mortgage-section-title scroll-reveal-child">
            Our Services
          </h2>
          <div className="mortgage-services-grid">
            {SERVICE_ITEMS.map((item) => (
              <article key={item.title} className="mortgage-service-card scroll-reveal-child">
                <h3 className="mortgage-service-card-title">{item.title}</h3>
                <p className="mortgage-service-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="mortgage-how" aria-labelledby="how-heading">
        <div className="mortgage-section-inner">
          <h2 id="how-heading" className="mortgage-section-title scroll-reveal-child">
            How It Works
          </h2>
          <ol className="mortgage-steps">
            {STEPS.map((step) => (
              <li key={step.num} className="mortgage-step scroll-reveal-child">
                <span className="mortgage-step-num">{step.num}</span>
                <div className="mortgage-step-content">
                  <h3 className="mortgage-step-title">{step.title}</h3>
                  <p className="mortgage-step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="mortgage-faq" aria-labelledby="faq-heading">
        <div className="mortgage-section-inner mortgage-section-inner--narrow">
          <h2 id="faq-heading" className="mortgage-section-title scroll-reveal-child">
            Frequently Asked Questions
          </h2>
          <div className="mortgage-faq-list">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="mortgage-cta" aria-labelledby="mortgage-cta-heading">
        <div className="mortgage-cta-inner">
          <h2 id="mortgage-cta-heading" className="mortgage-cta-title scroll-reveal-child">
            Ready to Scale Your Lending Operations?
          </h2>
          <p className="mortgage-cta-desc scroll-reveal-child">
            Start with a risk-free 5-file trial. No long-term contract. No upfront payment.
            Just quality work you can evaluate.
          </p>
          <div className="mortgage-cta-buttons scroll-reveal-child">
            <Link className="btn-mortgage-primary" to="/contact">Schedule Discovery Call</Link>
            <Link className="btn-mortgage-outline-light" to="/contact">Get Custom Pricing</Link>
          </div>
          <ul className="mortgage-cta-badges scroll-reveal-child" aria-label="Trust indicators">
            <li>SOC 2 Compliant</li>
            <li>US-Registered LLC</li>
            <li>6+ Years Experience</li>
            <li>&lt;10% Attrition</li>
          </ul>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
