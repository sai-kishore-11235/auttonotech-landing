import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SERVICE_LINKS, ServiceIcon } from './services/serviceShared';
import { Logo } from './Logo';

export interface HeaderProps {
  variant?: 'light' | 'dark';
}

const MOBILE_NAV_MQ = '(max-width: 768px)';

export function Header({ variant = 'light' }: HeaderProps) {
  const headerClass = `header header--${variant}`;
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
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

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = mobilePanelRef.current;
    const getFocusables = () =>
      panel
        ? Array.from(
            panel.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]):not([hidden]), [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((el) => !el.closest('[hidden]'))
        : [];

    getFocusables()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuToggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = getFocusables();
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_MQ);

    function handleChange(event: MediaQueryListEvent) {
      if (!event.matches) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    }

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  function closeDropdown() {
    setDropdownOpen(false);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  function renderServiceLinks(itemClassName: string) {
    return SERVICE_LINKS.map((item) => {
      const content = (
        <>
          <span className="header-dropdown-icon">
            <ServiceIcon type={item.icon} />
          </span>
          {item.label}
        </>
      );

      if ('href' in item) {
        return (
          <a
            key={item.href}
            href={item.href}
            className={itemClassName}
            role="menuitem"
            onClick={() => {
              closeDropdown();
              closeMobileMenu();
            }}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          key={item.to}
          to={item.to}
          className={itemClassName}
          role="menuitem"
          onClick={() => {
            closeDropdown();
            closeMobileMenu();
          }}
        >
          {content}
        </Link>
      );
    });
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
              {renderServiceLinks('header-dropdown-item')}
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
        <Link to="/contact" className="header-cta header-cta--desktop">
          Get a Quote
        </Link>
        <button
          ref={menuToggleRef}
          type="button"
          className={`header-menu-toggle${mobileOpen ? ' header-menu-toggle--open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="header-mobile-nav"
          onClick={() =>
            setMobileOpen((open) => {
              const next = !open;
              if (!next) setMobileServicesOpen(false);
              return next;
            })
          }
        >
          <span className="header-menu-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className="header-mobile-overlay"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => {
            closeMobileMenu();
            menuToggleRef.current?.focus();
          }}
        />
      ) : null}

      <nav
        ref={mobilePanelRef}
        id="header-mobile-nav"
        className={`header-mobile-nav${mobileOpen ? ' header-mobile-nav--open' : ''}`}
        aria-label="Mobile"
        hidden={!mobileOpen}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `header-mobile-link${isActive ? ' header-mobile-link--active' : ''}`
          }
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `header-mobile-link${isActive ? ' header-mobile-link--active' : ''}`
          }
          onClick={closeMobileMenu}
        >
          About
        </NavLink>

        <div className={`header-mobile-accordion${mobileServicesOpen ? ' header-mobile-accordion--open' : ''}`}>
          <button
            type="button"
            className={`header-mobile-link header-mobile-accordion-trigger${isServicesActive ? ' header-mobile-link--active' : ''}`}
            aria-expanded={mobileServicesOpen}
            aria-controls="header-mobile-services"
            onClick={() => setMobileServicesOpen((open) => !open)}
          >
            Services
            <span className="header-nav-caret" aria-hidden="true">▾</span>
          </button>
          <div
            id="header-mobile-services"
            className="header-mobile-submenu"
            role="menu"
            hidden={!mobileServicesOpen}
          >
            {renderServiceLinks('header-dropdown-item header-mobile-submenu-item')}
          </div>
        </div>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `header-mobile-link${isActive ? ' header-mobile-link--active' : ''}`
          }
          onClick={closeMobileMenu}
        >
          Contact
        </NavLink>
        <Link to="/contact" className="header-cta header-mobile-cta" onClick={closeMobileMenu}>
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
