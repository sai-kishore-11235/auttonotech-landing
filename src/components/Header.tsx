import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICE_LINKS, ServiceIcon } from './services/serviceShared';
import { Logo } from './Logo';

export interface HeaderProps {
  variant?: 'light' | 'dark';
}

export function Header({ variant = 'light' }: HeaderProps) {
  const headerClass = `header header--${variant}`;
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!dropdownOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  function closeDropdown() {
    setDropdownOpen(false);
  }

  return (
    <header className={headerClass}>
      <div className="header-inner">
        <Logo />
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

          <div
            ref={dropdownRef}
            className={`header-nav-dropdown${dropdownOpen ? ' header-nav-dropdown--open' : ''}`}
          >
            <button
              type="button"
              className={`header-nav-link header-nav-link--dropdown header-nav-dropdown-trigger${isServicesActive ? ' header-nav-link--active' : ''}`}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Services
              <span className="header-nav-caret" aria-hidden="true">▾</span>
            </button>
            <div className="header-dropdown-menu" role="menu">
              {SERVICE_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="header-dropdown-item"
                  role="menuitem"
                  onClick={closeDropdown}
                >
                  <span className="header-dropdown-icon">
                    <ServiceIcon type={item.icon} />
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `header-nav-link${isActive ? ' header-nav-link--active' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>
        <Link to="/contact" className="header-cta">Get a Quote</Link>
      </div>
    </header>
  );
}
