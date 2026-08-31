import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollReveal } from '../components/ScrollReveal';

const MORTGAGE_PRICING = [
  { service: 'Full-Cycle Processing', perFile: '$300-500', monthlyFte: '$3,500-4,500' },
  { service: 'Post-Closing', perFile: '$200-300', monthlyFte: '$3,000-4,000' },
  { service: 'Title Support', perFile: '$150-250', monthlyFte: '$2,500-3,500' },
  { service: 'Underwriting Support', perFile: '$200-350', monthlyFte: '$3,000-4,000' },
];

const SUPPORT_PRICING = [
  { service: 'Voice Support', hourly: '$8-12/hr', monthlyFte: '$1,200-2,000' },
  { service: 'Non-Voice Support', hourly: '$6-10/hr', monthlyFte: '$1,000-1,600' },
];

const TECH_PRICING = [
  { service: 'Cloud Infrastructure', pricing: 'Custom quote' },
  { service: 'IT Support (up to 50 endpoints)', pricing: '$1,500-3,000/month' },
  { service: 'Web Development', pricing: '$2,000-10,000/project' },
  { service: 'Website Maintenance', pricing: '$500-1,500/month' },
];

interface PricingTableProps {
  title: string;
  headers: string[];
  rows: Record<string, string>[];
  rowKeys: string[];
}

function PricingTable({ title, headers, rows, rowKeys }: PricingTableProps) {
  return (
    <div className="pricing-table-block scroll-reveal-child">
      <h2 className="pricing-table-title">{title}</h2>
      <div className="pricing-table-wrap">
        <table className="pricing-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[rowKeys[0]]}>
                {rowKeys.map((key) => (
                  <td key={key}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <div className="page page--pricing">
      <div className="pricing-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="pricing-hero" aria-labelledby="pricing-heading">
        <div className="pricing-hero-inner">
          <h1 id="pricing-heading" className="pricing-hero-title">Transparent Pricing</h1>
          <p className="pricing-hero-subtitle">
            No hidden fees. Choose what works for your business.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="pricing-main" aria-label="Pricing tables">
        <div className="pricing-main-inner">
          <PricingTable
            title="Mortgage Services"
            headers={['Service', 'Per-File', 'Monthly FTE']}
            rowKeys={['service', 'perFile', 'monthlyFte']}
            rows={MORTGAGE_PRICING}
          />

          <PricingTable
            title="Customer Support"
            headers={['Service', 'Hourly', 'Monthly FTE']}
            rowKeys={['service', 'hourly', 'monthlyFte']}
            rows={SUPPORT_PRICING}
          />

          <PricingTable
            title="Technology Services"
            headers={['Service', 'Pricing']}
            rowKeys={['service', 'pricing']}
            rows={TECH_PRICING}
          />

          <div className="pricing-cta-wrap scroll-reveal-child">
            <Link className="btn-pricing-cta" to="/contact">
              Get Custom Quote for Your Needs
            </Link>
          </div>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
