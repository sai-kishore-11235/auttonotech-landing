import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollReveal } from '../components/ScrollReveal';
import { ServiceBreadcrumbs } from '../components/services/serviceShared';

const TABS = [
  { id: 'cloud', label: 'Cloud & Infrastructure' },
  { id: 'it', label: 'IT Support' },
  { id: 'web', label: 'Web Services' },
] as const;

type TabId = (typeof TABS)[number]['id'];

const CLOUD_SERVICES = [
  { title: 'Azure Cloud Setup', desc: 'End-to-end Azure architecture design, deployment, and migration for secure, scalable infrastructure.' },
  { title: 'Azure Virtual Desktop (AVD)', desc: 'Remote work enablement with secure virtual desktops, session management, and user provisioning.' },
  { title: 'Security & Compliance', desc: 'Role-based access, encryption, network security, and compliance-ready configurations.' },
  { title: 'Monitoring & Support', desc: '24/7 infrastructure monitoring, incident response, and proactive performance optimization.' },
];

const IT_SERVICES = [
  { title: 'Helpdesk & End-User Support', desc: 'Level 1 and Level 2 IT support for your team with ticket management and SLA tracking.' },
  { title: 'Device & Endpoint Management', desc: 'Laptop provisioning, patch management, and remote troubleshooting for distributed teams.' },
  { title: 'Network Administration', desc: 'VPN setup, firewall configuration, and network performance monitoring.' },
  { title: 'Backup & Disaster Recovery', desc: 'Automated backups, recovery planning, and business continuity testing.' },
];

const WEB_SERVICES = [
  { title: 'Custom Web Development', desc: 'Responsive web applications built with modern frameworks tailored to your business needs.' },
  { title: 'API Integration', desc: 'Connect your systems with third-party services, CRMs, and payment gateways.' },
  { title: 'Website Maintenance', desc: 'Ongoing updates, security patches, performance optimization, and content support.' },
  { title: 'UI/UX Design', desc: 'User-centered design for dashboards, portals, and customer-facing applications.' },
];

const TAB_CONTENT: Record<TabId, { title: string; items: { title: string; desc: string }[] }> = {
  cloud: { title: 'Cloud & Infrastructure', items: CLOUD_SERVICES },
  it: { title: 'IT Support', items: IT_SERVICES },
  web: { title: 'Web Services', items: WEB_SERVICES },
};

export function TechnologyServicesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('cloud');
  const content = TAB_CONTENT[activeTab];

  return (
    <div className="page page--service">
      <div className="service-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="service-hero" aria-labelledby="tech-heading">
        <div className="service-hero-inner">
          <ServiceBreadcrumbs current="Technology & Cloud" />
          <p className="service-hero-eyebrow">In Pursuit of Binary Excellence</p>
          <h1 id="tech-heading" className="service-hero-title">
            Technology &amp; Cloud Services
          </h1>
          <p className="service-hero-desc">
            Azure cloud infrastructure • AVD deployment • Web development • IT support
          </p>
          <div className="service-hero-cta">
            <a className="btn-mortgage-primary" href="#pricing">Get Pricing</a>
            <Link className="btn-mortgage-outline" to="/contact">Schedule Call</Link>
          </div>
        </div>
      </section>

      <ScrollReveal as="section" className="tech-services" aria-labelledby="tech-services-heading">
        <div className="service-section-inner">
          <div className="tech-tabs scroll-reveal-child" role="tablist" aria-label="Technology service categories">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`tech-tab${activeTab === tab.id ? ' tech-tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" aria-labelledby="tech-services-heading">
            <h2 id="tech-services-heading" className="visually-hidden">{content.title}</h2>
            <div className="tech-services-grid">
              {content.items.map((item) => (
                <article key={item.title} className="tech-service-card scroll-reveal-child">
                  <h3 className="tech-service-card-title">{item.title}</h3>
                  <p className="tech-service-card-desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" id="pricing" className="tech-pricing" aria-labelledby="tech-pricing-heading">
        <div className="service-section-inner service-section-inner--narrow">
          <h2 id="tech-pricing-heading" className="service-section-title scroll-reveal-child">
            Pricing
          </h2>
          <p className="tech-pricing-desc scroll-reveal-child">
            Custom based on infrastructure size
          </p>
          <Link className="btn-mortgage-pricing scroll-reveal-child" to="/contact">
            Get Quote
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="service-cta" aria-labelledby="tech-cta-heading">
        <div className="service-cta-inner">
          <h2 id="tech-cta-heading" className="service-cta-title scroll-reveal-child">
            Transform Your IT Infrastructure
          </h2>
          <p className="service-cta-desc scroll-reveal-child">
            Let us handle the technology so you can focus on growing your business.
          </p>
          <Link className="btn-mortgage-primary scroll-reveal-child" to="/contact">
            Schedule a Consultation
          </Link>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
