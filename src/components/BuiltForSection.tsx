import React from 'react';

const iconStroke = 3;

/** Building icon — multi-story with windows */
function BuildingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="18" width="32" height="22" rx="1" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
      <path d="M24 18V10l8-4v12" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 26h4v4h-4zM22 26h4v4h-4zM28 26h4v4h-4zM16 32h4v4h-4zM22 32h4v4h-4zM28 32h4v4h-4z" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
    </svg>
  );
}

/** Briefcase icon */
function BriefcaseIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
      <path d="M8 24h32" stroke="currentColor" strokeWidth={iconStroke} />
      <path d="M18 16V14a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Document with lines and dog-ear */
function DocumentIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 8h18l10 10v22H12V8z" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinejoin="round" />
      <path d="M30 8v10h10" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinejoin="round" />
      <path d="M16 24h16M16 30h16M16 36h10" stroke="currentColor" strokeWidth={iconStroke} strokeLinecap="round" />
    </svg>
  );
}

/** Upward trending chart with arrow */
function ChartUpIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8 36V20l8 8 8-12 8 8 8-16" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 12v6h-6" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface BuiltForCardItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BUILT_FOR_ITEMS: BuiltForCardItem[] = [
  {
    id: 'mortgage-lenders',
    icon: <BuildingIcon />,
    title: 'Mortgage Lenders',
    description: 'Small to mid-size lenders needing scalable processing capacity',
  },
  {
    id: 'mortgage-brokers',
    icon: <BriefcaseIcon />,
    title: 'Mortgage Brokers',
    description: 'Brokerages requiring overflow support during volume spikes',
  },
  {
    id: 'title-companies',
    icon: <DocumentIcon />,
    title: 'Title Companies',
    description: 'Title firms seeking efficient back-office operations',
  },
  {
    id: 'growing-businesses',
    icon: <ChartUpIcon />,
    title: 'Growing Businesses',
    description: 'Companies needing reliable customer support and IT infrastructure',
  },
];

interface BuiltForCardProps {
  item: BuiltForCardItem;
}

function BuiltForCard({ item }: BuiltForCardProps) {
  return (
    <article
      className="built-for-card"
      role="listitem"
      aria-labelledby={`built-for-title-${item.id}`}
    >
      <div className="built-for-card-icon" aria-hidden="true">
        {item.icon}
      </div>
      <h3 id={`built-for-title-${item.id}`} className="built-for-card-title">
        {item.title}
      </h3>
      <p className="built-for-card-desc">{item.description}</p>
    </article>
  );
}

export function BuiltForSection() {
  return (
    <section
      className="built-for"
      aria-labelledby="built-for-heading"
    >
      <div className="built-for-inner">
        <h2 id="built-for-heading" className="built-for-title">
          Built For
        </h2>
        <div className="built-for-grid" role="list">
          {BUILT_FOR_ITEMS.map((item) => (
            <BuiltForCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
