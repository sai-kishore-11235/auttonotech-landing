import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

export function CtaSection() {
  return (
    <ScrollReveal as="section" className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section-inner">
        <h2 id="cta-heading" className="cta-heading scroll-reveal-child">
          Ready to Scale Your Operations?
        </h2>
        <p className="cta-desc scroll-reveal-child">
          Partner with Auttonotech to optimize your operations, reduce costs, and focus on growth.
          Risk-free trials available for all service lines.
        </p>
        <div className="cta-buttons scroll-reveal-child">
          <Link className="cta-btn cta-btn--outline" to="/contact">Get a Custom Quote</Link>
          <Link className="cta-btn cta-btn--solid" to="/contact">Book Discovery Call</Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
