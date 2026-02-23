import React from 'react';

const strokeWidth = 2;

function HouseIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export interface ServiceDivisionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  accent: 'green' | 'orange';
}

const DIVISIONS: ServiceDivisionItem[] = [
  {
    id: 'mortgage',
    icon: <HouseIcon />,
    title: 'Mortgage & Real Estate Operations',
    description:
      'Full-cycle loan processing, post-closing, title support, and underwriting assistance for US lenders and brokers.',
    href: '#services-mortgage',
    accent: 'green',
  },
  {
    id: 'customer-support',
    icon: <HeadphonesIcon />,
    title: 'Customer Support & Back Office',
    description:
      'Voice and non-voice support, data entry, CRM management, and documentation processing for growing businesses.',
    href: '#services-support',
    accent: 'green',
  },
  {
    id: 'technology',
    icon: <CloudIcon />,
    title: 'Technology & Cloud Services',
    description:
      "Azure cloud infrastructure, AVD deployment, remote work security, and custom web development. 'In Pursuit of Binary Excellence'",
    href: '#services-cloud',
    accent: 'orange',
  },
];

export function ServicesDivisionsSection() {
  return (
    <section
      className="divisions-section"
      aria-labelledby="divisions-heading"
    >
      <div className="divisions-inner">
        <h2 id="divisions-heading" className="divisions-title">
          Three service divisions. One commitment: execution excellence.
        </h2>
        <div className="divisions-grid">
          {DIVISIONS.map((item) => (
            <article
              key={item.id}
              className={`divisions-card divisions-card--${item.accent}`}
              aria-labelledby={`divisions-card-title-${item.id}`}
            >
              <div className="divisions-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 id={`divisions-card-title-${item.id}`} className="divisions-card-title">
                {item.title}
              </h3>
              <p className="divisions-card-desc">{item.description}</p>
              <a href={item.href} className="divisions-card-link">
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
