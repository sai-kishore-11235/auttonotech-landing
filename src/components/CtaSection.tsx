import React from 'react';

export function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="cta-section-inner">
        <h2 id="cta-heading" className="cta-heading">
          Ready to Scale Your Operations?
        </h2>
        <p className="cta-desc">
          Partner with Auttonotech to optimize your operations, reduce costs, and focus on growth.
          Risk-free trials available for all service lines.
        </p>
        <div className="cta-buttons">
          <a className="cta-btn cta-btn--outline" href="#quote">Get a Custom Quote</a>
          <a className="cta-btn cta-btn--solid" href="#discovery">Book Discovery Call</a>
        </div>
      </div>
    </section>
  );
}
