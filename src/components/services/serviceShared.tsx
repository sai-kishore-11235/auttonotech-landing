import { Link } from 'react-router-dom';

export const SERVICE_LINKS = [
  {
    to: '/services/mortgage',
    label: 'Mortgage Operations',
    icon: 'house' as const,
  },
  {
    to: '/services/customer-support',
    label: 'Customer Support',
    icon: 'headphones' as const,
  },
  {
    to: '/services/technology',
    label: 'Technology & Cloud',
    icon: 'cloud' as const,
  },
];

export function ServiceIcon({ type }: { type: 'house' | 'headphones' | 'cloud' }) {
  const strokeWidth = 2;
  if (type === 'house') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }
  if (type === 'headphones') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

export function ServiceBreadcrumbs({ current }: { current: string }) {
  return (
    <nav className="service-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span aria-hidden="true">&gt;</span>
      <span>Services</span>
      <span aria-hidden="true">&gt;</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}
