import React from 'react';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  accent: 'teal' | 'orange';
}

const STATS: StatItem[] = [
  { id: 'team', value: '15+', label: 'Team Members', accent: 'teal' },
  { id: 'years', value: '6+', label: 'Years Experience', accent: 'teal' },
  { id: 'hours', value: '24/7', label: 'Eastern Time Hours', accent: 'orange' },
  { id: 'attrition', value: '<10%', label: 'Attrition Rate', accent: 'teal' },
];

export function NumbersSection() {
  return (
    <section className="numbers-section" aria-label="Key statistics">
      <div className="numbers-section-pattern" aria-hidden="true" />
      <div className="numbers-section-inner">
        <div className="numbers-grid">
          {STATS.map(({ id, value, label, accent }) => (
            <div key={id} className="numbers-stat">
              <span className={`numbers-value numbers-value--${accent}`}>{value}</span>
              <span className="numbers-label">{label}</span>
            </div>
          ))}
        </div>
        <p className="numbers-tagline">
          Serving small and mid-size US businesses since 2019
        </p>
      </div>
    </section>
  );
}
