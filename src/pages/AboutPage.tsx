import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ScrollReveal } from '../components/ScrollReveal';

const WHY_CHOOSE_US = [
  {
    title: 'Domain Expertise',
    desc: 'Not generalists—specialists. Mortgage processors with 6+ years experience. Cloud engineers with Azure certifications.',
  },
  {
    title: 'Enterprise Security',
    desc: 'SOC 2 compliance in progress. End-to-end encryption. Role-based access controls.',
  },
  {
    title: 'US Business Hours',
    desc: 'Eastern Time availability (8 AM–5 PM ET). Real-time collaboration. No timezone friction.',
  },
];

const VALUES = [
  {
    title: 'Excellence Over Speed',
    desc: "We'd rather deliver one perfect file than ten mediocre ones.",
  },
  {
    title: 'Radical Transparency',
    desc: 'Clear pricing, honest timelines, and open communication at every step.',
  },
  {
    title: 'Client Obsession',
    desc: 'Your success is our success. We measure ourselves by your outcomes.',
  },
  {
    title: 'Retention Culture',
    desc: 'Competitive compensation, equity participation, and clear career paths keep our team strong.',
  },
];

export function AboutPage() {
  return (
    <div className="page page--about">
      <div className="about-page-pattern" aria-hidden="true" />
      <Header variant="dark" />

      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-hero-inner">
          <h1 id="about-heading" className="about-hero-title">
            About Auttonotech
          </h1>
          <p className="about-hero-subtitle">
            Empowering US businesses through specialized offshore operations
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="about-story" aria-labelledby="story-heading">
        <div className="about-section-inner about-section-inner--narrow">
          <h2 id="story-heading" className="about-section-title scroll-reveal-child">
            Our Story
          </h2>
          <div className="about-story-body scroll-reveal-child">
            <p>
              Founded in 2019, Auttonotech was built on a simple principle: offshore operations
              should be specialized, not generic. While most BPOs claim to do everything, we focus
              on what we do best—mortgage processing, customer support, technology, and infrastructure.
            </p>
            <p>
              We&apos;re a Delaware-registered LLC with operations in Bangalore, India. Our team
              brings deep domain expertise: 6+ years in mortgage operations, Azure-certified cloud
              engineers, and support specialists trained on US business practices.
            </p>
            <p>
              What sets us apart is our commitment to retention. While the industry average is 40%
              annual attrition, we maintain less than 10% through competitive compensation, equity
              participation, and clear career paths.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="about-why" aria-labelledby="why-heading">
        <div className="about-section-inner">
          <h2 id="why-heading" className="about-section-title scroll-reveal-child">
            Why Choose Us
          </h2>
          <div className="about-why-grid">
            {WHY_CHOOSE_US.map((item) => (
              <article key={item.title} className="about-why-card scroll-reveal-child">
                <h3 className="about-why-card-title">{item.title}</h3>
                <p className="about-why-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="about-team" aria-labelledby="team-heading">
        <div className="about-section-inner about-section-inner--narrow">
          <h2 id="team-heading" className="about-section-title scroll-reveal-child">
            Our Team
          </h2>
          <p className="about-team-desc scroll-reveal-child">
            Our team of 15+ professionals works Eastern Time hours (8 AM–5 PM ET) to ensure
            seamless collaboration with US clients.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="about-values" aria-labelledby="values-heading">
        <div className="about-section-inner">
          <h2 id="values-heading" className="about-section-title scroll-reveal-child">
            Our Values
          </h2>
          <div className="about-values-grid">
            {VALUES.map((item) => (
              <article key={item.title} className="about-values-card scroll-reveal-child">
                <h3 className="about-values-card-title">{item.title}</h3>
                <p className="about-values-card-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className="about-cta" aria-labelledby="about-cta-heading">
        <div className="about-cta-inner">
          <h2 id="about-cta-heading" className="about-cta-title scroll-reveal-child">
            Ready to Partner With Us?
          </h2>
          <Link className="btn-about-cta scroll-reveal-child" to="/contact">
            Schedule a Call
          </Link>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
