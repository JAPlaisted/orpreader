'use client';

import {useEffect, useRef, useState} from 'react';

function Logo({title = 'Your Brand'}) {
  return (
    <a href="/" className="nav__logo" aria-label={title}>
      <svg width="32" height="32" viewBox="0 0 48 48" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0E131F" />
            <stop offset="1" stopColor="#3E896C" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#g)" />
        <path d="M14 30l10-16 10 16h-6l-4-6-4 6z" fill="#fff" />
      </svg>
      <span className="nav__brand">{title}</span>
    </a>
  );
}

export default function Navbar({
  brandTitle = 'Your Brand',
  navItems = [
    {label: 'Home', href: '/'},
    {label: 'Features', href: '/features'},
    {label: 'Pricing', href: '/pricing'},
    {label: 'Docs', href: '/docs'},
    {label: 'About', href: '/about'},
  ],
  login = {label: 'Log in', href: '/login', theme: 'btn-primary', size: 'btn'},
  sticky = true,
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <header className={`site-nav ${sticky ? 'site-nav--sticky' : ''}`}>
      <div className="container nav__bar">
        <Logo title={brandTitle} />

        <nav className="nav__links" aria-label="Main">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav__link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a href={login.href} className={`button ${login.size || 'btn'} ${login.theme || 'btn-primary'}`}>
            {login.label}
          </a>
        </div>

        <button
          className="nav__hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          ref={btnRef}
        >
          <span className="nav__hamburger-bar" />
          <span className="nav__hamburger-bar" />
          <span className="nav__hamburger-bar" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`nav__panel ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
      >
        <div className="nav__panel-inner" onClick={(e) => e.stopPropagation()}>
          <nav aria-label="Mobile">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav__link" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={login.href}
            className={`button ${login.size || 'btn'} ${login.theme || 'btn-primary'} mt-4`}
            onClick={() => setOpen(false)}
          >
            {login.label}
          </a>
        </div>
      </div>
    </header>
  );
}