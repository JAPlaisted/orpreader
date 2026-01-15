'use client';

function Logo({title = 'Your Brand'}) {
  return (
    <a href="/" className="footer__logo" aria-label={title}>
      <svg width="32" height="32" viewBox="0 0 48 48" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="fg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#0E131F" />
            <stop offset="1" stopColor="#3E896C" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#fg)" />
        <path d="M14 30l10-16 10 16h-6l-4-6-4 6z" fill="#fff" />
      </svg>
      <span className="footer__brand">{title}</span>
    </a>
  );
}

export default function Footer({
  brandTitle = 'Your Brand',
  description = 'A short description of your company or project can go here.',
  linkColumns = [],
  socials = [],
  copyright = `© ${new Date().getFullYear()} Your Brand. All rights reserved.`,
  legalLinks = [
    {label: 'Privacy Policy', href: '/privacy'},
    {label: 'Terms of Service', href: '/terms'},
  ],
}) {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">

        <div className="footer__left">
          <Logo title={brandTitle} />
          <p className="body mt-4 text-dark/80">{description}</p>
        </div>

        <div className="footer__middle">
          {linkColumns.map((col) => (
            <div key={col.heading} className="footer__col">
              <h4 className="subheading--s mb-3">{col.heading}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__right">
          <div className="footer__copyright body--s mb-4">{copyright}</div>
          <div className="footer__socials flex gap-3 mb-4">
            {socials.map((s) => (
              <a key={s.href} href={s.href} aria-label={s.label} className="footer__social">
                <span role="img" aria-hidden="true">{s.icon}</span>
              </a>
            ))}
          </div>
          <div className="footer__legal flex flex-col body--s ">
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer__link">{l.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}