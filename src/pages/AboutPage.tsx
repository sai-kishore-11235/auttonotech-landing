import React from 'react';
import { Header } from '../components/Header';

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
    </div>
  );
}
