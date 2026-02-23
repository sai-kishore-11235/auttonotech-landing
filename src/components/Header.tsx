import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export interface HeaderProps {
  variant?: 'light' | 'dark';
}

export function Header({ variant = 'light' }: HeaderProps) {
  const headerClass = `header header--${variant}`;

  return (
    <header className={headerClass}>
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Auttonotech
        </Link>
        <nav className="header-nav" aria-label="Primary">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
            }
          >
            About
          </NavLink>
          <a className="header-nav-link header-nav-link--dropdown" href="#services">
            Services
            <span className="header-nav-caret" aria-hidden="true">▾</span>
          </a>
          <a className="header-nav-link" href="#pricing">Pricing</a>
          <a className="header-nav-link" href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#quote">Get a Quote</a>
      </div>
    </header>
  );
}
