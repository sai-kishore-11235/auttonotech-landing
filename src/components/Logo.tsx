import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
}

function LogoArt() {
  return (
    <>
      <img
        className="brand-logo-img brand-logo-img--on-light"
        src="/logo-transparent.png"
        alt="Auttono Tech"
        width={1024}
        height={210}
      />
      <img
        className="brand-logo-img brand-logo-img--on-dark"
        src="/logo-on-dark.png"
        alt=""
        width={1024}
        height={210}
        aria-hidden="true"
      />
    </>
  );
}

export function Logo({ className = '', linkToHome = true }: LogoProps) {
  const mark = (
    <span className={`brand-logo${className ? ` ${className}` : ''}`}>
      <LogoArt />
    </span>
  );

  if (!linkToHome) {
    return mark;
  }

  return (
    <Link to="/" className="brand-logo-link" aria-label="Auttonotech home">
      {mark}
    </Link>
  );
}
