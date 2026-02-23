import React from 'react';
import { BuiltForSection } from '../components/BuiltForSection';
import { Header } from '../components/Header';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { ServicesDivisionsSection } from '../components/ServicesDivisionsSection';
import { NumbersSection } from '../components/NumbersSection';

const iconStroke = 3;

function TargetIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
      <circle cx="24" cy="24" r="6" fill="currentColor" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <rect x="10" y="22" width="28" height="20" rx="2" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
      <path d="M14 22V16a10 10 0 0 1 20 0v6" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <path d="M12 38 L12 24 L18 16 L24 14" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 38 L36 24 L30 16 L24 14" stroke="currentColor" strokeWidth={iconStroke} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="24" cy="14" rx="6" ry="4" stroke="currentColor" strokeWidth={iconStroke} fill="none" />
    </svg>
  );
}

export function LandingPage() {
  return (
    <div className="page">
      <div className="top-stripe" aria-hidden="true" />
      <Header />

      <section className="hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-tagline">GLOBAL EXECUTION. LOCAL EXCELLENCE.</p>
          <h1 className="hero-headline">Scale Your Business with Offshore Operations</h1>
          <p className="hero-desc">
            Specialized offshore operations for US businesses across mortgage processing,
            customer support, and cloud infrastructure — structured workflows, enterprise-grade
            security, US business hours.
          </p>
          <div className="hero-cta">
            <a className="btn-hero-primary" href="#discovery">Schedule Discovery Call</a>
            <a className="btn-hero-outline" href="#services">View Our Services</a>
          </div>
          <ul className="hero-benefits" aria-label="Key benefits">
            <li><span className="hero-check" aria-hidden="true">✓</span> SOC 2 Compliant</li>
            <li><span className="hero-check" aria-hidden="true">✓</span> US-Registered LLC</li>
            <li><span className="hero-check" aria-hidden="true">✓</span> 6+ Years Experience</li>
            <li><span className="hero-check" aria-hidden="true">✓</span> &lt;10% Attrition</li>
          </ul>
        </div>
      </section>

      <section className="scale-section" aria-labelledby="scale-heading">
        <div className="scale-section-bar scale-section-bar--top" aria-hidden="true" />
        <div className="scale-section-inner">
          <h2 id="scale-heading" className="scale-heading">Scale Without the Chaos</h2>
          <p className="scale-body">
            Auttonotech delivers specialized offshore operations for US businesses. We&apos;re not
            a generic BPO—we&apos;re domain experts in mortgage processing, customer support, and
            cloud infrastructure. Delaware-registered LLC with India delivery center.
          </p>
          <p className="scale-tagline">
            Three service divisions. One commitment: execution excellence.
          </p>
        </div>
        <div className="scale-section-bar scale-section-bar--bottom" aria-hidden="true" />
      </section>

      <ServicesDivisionsSection />
      <NumbersSection />

      <section className="what-sets-apart" aria-labelledby="what-sets-apart-heading">
        <div className="what-sets-apart-inner">
          <h2 id="what-sets-apart-heading" className="what-sets-apart-title">What Sets Us Apart</h2>
          <div className="what-sets-apart-grid">
            <article className="what-sets-apart-card">
              <div className="what-sets-apart-icon" aria-hidden="true"><TargetIcon /></div>
              <h3 className="what-sets-apart-card-title">Domain Expertise</h3>
              <p className="what-sets-apart-card-desc">
                Not generalists—specialists. Mortgage processors with 6+ years experience.
                Cloud engineers with Azure certifications. Support teams trained on your industry.
              </p>
            </article>
            <article className="what-sets-apart-card">
              <div className="what-sets-apart-icon" aria-hidden="true"><LockIcon /></div>
              <h3 className="what-sets-apart-card-title">Enterprise Security</h3>
              <p className="what-sets-apart-card-desc">
                SOC 2 compliance in progress. End-to-end encryption. Role-based access controls.
                US-registered entity with full legal compliance.
              </p>
            </article>
            <article className="what-sets-apart-card">
              <div className="what-sets-apart-icon" aria-hidden="true"><HandshakeIcon /></div>
              <h3 className="what-sets-apart-card-title">US Business Hours</h3>
              <p className="what-sets-apart-card-desc">
                Eastern Time availability (8 AM–5 PM ET). Real-time collaboration. No timezone
                friction. Seamless extension of your team.
              </p>
            </article>
          </div>
        </div>
      </section>

      <BuiltForSection />
      <CtaSection />

      <main className="shell">
        <section className="content-below">{/* Additional sections */}</section>
      </main>
      <Footer />
    </div>
  );
}
