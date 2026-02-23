import React from 'react';

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { label: 'Mortgage Operations', href: '#services-mortgage' },
  { label: 'Customer Support', href: '#services-support' },
  { label: 'Technology & Cloud', href: '#services-cloud' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="site-footer-grid">
          {/* Company */}
          <div className="site-footer-col site-footer-col--company">
            <h3 className="site-footer-heading">Auttonotech</h3>
            <p className="site-footer-tagline">Scale your business with Auttono Tech</p>
            <div className="site-footer-social" aria-label="Social links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="site-footer-social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="site-footer-social-link" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="site-footer-col">
            <h3 className="site-footer-heading">Quick Links</h3>
            <ul className="site-footer-links">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="site-footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="site-footer-col">
            <h3 className="site-footer-heading">Services</h3>
            <ul className="site-footer-links">
              {SERVICES.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="site-footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="site-footer-col">
            <h3 className="site-footer-heading">Contact</h3>
            <ul className="site-footer-contact">
              <li className="site-footer-contact-item">
                <LocationIcon />
                <span>Delaware, USA (HQ)</span>
              </li>
              <li className="site-footer-contact-item">
                <LocationIcon />
                <span>Bangalore, India (Delivery Center)</span>
              </li>
              <li className="site-footer-contact-item">
                <PhoneIcon />
                <a href="tel:+918123085846" className="site-footer-link">+91 81230 85846</a>
              </li>
              <li className="site-footer-contact-item">
                <EmailIcon />
                <a href="mailto:info@auttonotech.com" className="site-footer-link">info@auttonotech.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p className="site-footer-copyright">
            © {year} Auttonotech LLC. All rights reserved.
          </p>
          <div className="site-footer-legal">
            <a href="#privacy" className="site-footer-legal-link">Privacy Policy</a>
            <a href="#terms" className="site-footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
