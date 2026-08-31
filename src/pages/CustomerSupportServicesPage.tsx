import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollReveal } from '../components/ScrollReveal';
import { ServiceBreadcrumbs } from '../components/services/serviceShared';

const INDUSTRY_TAGS = [
  'E-commerce',
  'SaaS',
  'Healthcare',
  'Financial Services',
  'Real Estate',
];

const VOICE_SECTIONS = [
  {
    title: 'Inbound Support',
    items: [
      'Customer inquiries & troubleshooting',
      'Order status & tracking',
      'Technical support (Level 1)',
      'Account management',
    ],
  },
  {
    title: 'Outbound Support',
    items: [
      'Appointment setting & scheduling',
      'Follow-up calls & confirmations',
      'Collections & payment reminders',
      'Customer satisfaction surveys',
    ],
  },
  {
    title: 'Helpdesk Operations',
    items: [
      'Ticket management (Zendesk, Freshdesk)',
      'Escalation handling',
      'Knowledge base maintenance',
    ],
  },
];

const NON_VOICE_SECTIONS = [
  {
    title: 'Email & Chat Support',
    items: [
      'Email response management (< 2 hour SLA)',
      'Live chat support',
      'Social media response',
    ],
  },
  {
    title: 'Data Entry & Documentation',
    items: [
      'CRM data entry (Salesforce, HubSpot, Zoho)',
      'Invoice processing',
      'Spreadsheet management',
      'Document digitization',
    ],
  },
  {
    title: 'Back Office Operations',
    items: [
      'Order processing',
      'Inventory management',
      'Refund & return processing',
      'Database cleanup',
    ],
  },
];

const INDUSTRY_SOLUTIONS = [
  {
    title: 'E-COMMERCE',
    quote: 'Handle peak season surges without hiring full-time',
    desc: 'Order processing, customer inquiries, returns management',
  },
  {
    title: 'SAAS',
    quote: 'Scale support as your user base grows',
    desc: 'Technical support, onboarding assistance, billing questions',
  },
  {
    title: 'HEALTHCARE',
    quote: 'HIPAA-compliant patient support',
    desc: 'Appointment scheduling, insurance verification, billing inquiries',
  },
  {
    title: 'REAL ESTATE',
    quote: 'Focus on closings, we handle coordination',
    desc: 'Lead qualification, appointment setting, transaction coordination',
  },
];

function SupportBlock({
  title,
  sections,
  pricing,
}: {
  title: string;
  sections: { title: string; items: string[] }[];
  pricing: string;
}) {
  return (
    <article className="support-block scroll-reveal-child">
      <h3 className="support-block-title">{title}</h3>
      <div className="support-block-sections">
        {sections.map((section) => (
          <div key={section.title} className="support-block-section">
            <h4 className="support-block-section-title">{section.title}</h4>
            <ul className="support-block-list">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="support-block-pricing">{pricing}</p>
      <Link className="btn-mortgage-pricing" to="/contact">Get Quote</Link>
    </article>
  );
}

export function CustomerSupportServicesPage() {
  return (
    <div className="page page--service">
      <div className="service-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="service-hero" aria-labelledby="support-heading">
        <div className="service-hero-inner">
          <ServiceBreadcrumbs current="Customer Support" />
          <h1 id="support-heading" className="service-hero-title">
            Customer Support &amp; Back Office Operations
          </h1>
          <p className="service-hero-desc">
            Voice and non-voice support that scales with your business
          </p>
          <ul className="service-audience-tags" aria-label="Industries served">
            {INDUSTRY_TAGS.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="service-hero-cta">
            <a className="btn-mortgage-primary" href="#pricing">Get Pricing</a>
            <Link className="btn-mortgage-outline" to="/contact">Schedule Call</Link>
          </div>
        </div>
      </section>

      <ScrollReveal as="section" id="pricing" className="support-offerings" aria-labelledby="offerings-heading">
        <div className="service-section-inner">
          <h2 id="offerings-heading" className="visually-hidden">Support offerings</h2>
          <div className="support-offerings-grid">
            <SupportBlock
              title="Voice Support"
              sections={VOICE_SECTIONS}
              pricing="$8-12/hour per agent | $1,200-2,000/month per FTE"
            />
            <SupportBlock
              title="Non-Voice Support"
              sections={NON_VOICE_SECTIONS}
              pricing="$6-10/hour per agent | $1,000-1,600/month per FTE"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="support-industries" aria-labelledby="industries-heading">
        <div className="service-section-inner">
          <h2 id="industries-heading" className="service-section-title scroll-reveal-child">
            Industry Solutions
          </h2>
          <div className="support-industries-grid">
            {INDUSTRY_SOLUTIONS.map((item) => (
              <article key={item.title} className="support-industry-card scroll-reveal-child">
                <h3 className="support-industry-title">{item.title}</h3>
                <p className="support-industry-quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="support-industry-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="service-cta" aria-labelledby="support-cta-heading">
        <div className="service-cta-inner">
          <h2 id="support-cta-heading" className="service-cta-title scroll-reveal-child">
            Scale Your Support Team Today
          </h2>
          <p className="service-cta-desc scroll-reveal-child">
            Start with a pilot program. No long-term contracts required.
          </p>
          <Link className="btn-mortgage-primary scroll-reveal-child" to="/contact">
            Get Started
          </Link>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
