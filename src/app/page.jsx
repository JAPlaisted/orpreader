'use client';

import {useEffect, useState} from 'react';
import Navbar from './components/nav';
import Hero from './components/hero';
import MediaBlock from './components/mediaBlock';
import CardRow from './components/cardRow';
import FAQ from './components/faq';
import Footer from './components/footer';
import Waypoint from './components/waypoint';

/* ---------- Data (same as before) ---------- */

const navbarData = {
  brandTitle: 'Sommet',
  navItems: [
    {label: 'Home', href: '/'},
    {label: 'Components', href: '/components-library'},
    {label: 'Docs', href: '/docs'},
  ],
  login: {label: 'Log in', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  sticky: true,
};

const heroData = {
  bgType: 'video',
  videoSrc: '/video/hero.mp4',    
  videoPoster: '/img/hero-poster.webp',
  overlay: true,
  overlayOpacity: 0.4,
  overline: 'Indie Hacker Starter',
  heading: 'Ship frontends fast',
  body: 'Next.js boilerplate with a basic component library, a few options for components, and some pretty neat code.',
  button: { label: 'Explore Components', link: '/components-library', theme: 'btn-primary', size: 'btn--l' },
  align: 'center',
};

const featureBlock = {
  imageUrl: 'https://picsum.photos/seed/stack/800/600',
  eyebrow: 'What’s in the box?',
  heading: 'Reuseable components, no extra bs',
  body: 'Cards, sliders, media blocks, modals, heroes, FAQ — all with examples in the component library.',
  isReversed: false,
  buttons: [
    {label: 'Fork in GitHub', link: 'https://github.com/JAPlaisted/my-template', theme: 'btn-primary'},
    {label: 'Read Docs', link: '/docs', theme: 'btn-secondary--outline'},
  ],
};

const cards = [
  {
    imageUrl: 'https://picsum.photos/seed/a/800/450',
    eyebrow: 'Release',
    heading: 'Filler Content',
    body: 'Here is some filler content since you are still here.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/b/800/450',
    eyebrow: 'Guide',
    heading: 'Free boilerplate',
    body: 'Yeah it\'s free, do whatever you want with it. Enjoy.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/c/800/450',
    eyebrow: 'Case Study',
    heading: 'Random Headline',
    body: 'All of this will be deleted, so I\'m not putting that much thought into it.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary--outline', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/d/800/450',
    eyebrow: 'Tutorial',
    heading: 'Random Headline',
    body: 'Seriously, there is no need to read this text. You will get nothing from it. I promise.',
    button: {label: 'Components', href: '/components-library', theme: 'btn-primary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/e/800/450',
    eyebrow: 'Announcement',
    heading: 'Random Headline',
    body: 'Ok, waste your time, what do I care?',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary', size: 'btn--s'},
  },
  {
    imageUrl: 'https://picsum.photos/seed/f/800/450',
    eyebrow: 'Blog',
    heading: 'Random Headline',
    body: 'You could be building already. You know that?',
    button: {label: 'Components', href: '/components-library', theme: 'btn-secondary--outline', size: 'btn--s'},
  },
];

const cardRowData = {
  items: cards,
  perPage: 3,
  slideBy: 3,
  showDots: true,
  buttonThemeOverride: 'btn-secondary',
};

const faqData = {
  allowMultiple: false,
  defaultOpen: [0],
  items: [
    {
      question: 'Can I use this for projects?',
      answer: 'Sure, go ahead. Client work, your own product, whatever.',
    },
    {
      question: 'Where do I see every component?',
      answer: 'The component library at /components-library.',
    },
    {
      question: 'How do I use this template?',
      answer: 'Fork it in Github, and build build build.',
    },
  ],
};

export const footerData = {
  brandTitle: 'Sommet',
  description: 'Building robots, tools, and ideas for a smarter world.',
  linkColumns: [
    {
      heading: 'Globals',
      links: [
        {label: 'Typography', href: '/components-library#typography'},
        {label: 'Links', href: '/components-library#links'},
        {label: 'Color Palette', href: '/components-library#color-palette'},
      ],
    },
    {
      heading: 'More Globals',
      links: [
        {label: 'Responsive Mixins', href: '/components-library#responsive-mixins'},
        {label: 'Buttons', href: '/components-library#buttons'},
        {label: 'Layout', href: '/components-library#layout'},
      ],
    },
    {
      heading: 'Components',
      links: [
        {label: 'Media Block', href: '/components-library#media-block'},
        {label: 'Video Block', href: '/components-library#video-block'},
        {label: 'Modals', href: '/components-library#modals'},
      ],
    },
  ],
  socials: [
    {icon: '𝕏', label: 'X', href: 'https://x.com/jonsommet'},
  ],
  copyright: `© ${new Date().getFullYear()} Sommet. All rights reserved.`,
  legalLinks: [
    {label: 'Privacy Policy', href: '/components-library#privacy-policy'},
    {label: 'Terms of Service', href: '/components-library#terms-of-service'},
  ],
};


/* ---------- Progress dots ---------- */

const SECTIONS = [
  { id: 'hero',    label: 'Hero' },
  { id: 'feature', label: 'Features' },
  { id: 'cards',   label: 'Cards' },
  { id: 'stats',   label: 'Stats' },
  { id: 'faq',     label: 'FAQ' },
];

function Counter({to = 100, duration = 900, start = false}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, startTs;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min(1, (ts - startTs) / duration);
      setVal(Math.round(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);
  return <span>{val}</span>;
}

/* ---------- Page ---------- */

export default function Home() {
  const [progressStep, setProgressStep] = useState(0);
  const [statsActive, setStatsActive] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  return (
    <main>
      <Navbar {...navbarData} />

      {/* HERO (full-bleed; no bg-swap needed) */}
      <Waypoint
        threshold={0.6}
        onEnter={() => { setProgressStep(0); }}
      >
        <section id="hero">
          <Hero {...heroData} />
        </section>
      </Waypoint>

      {/* FEATURES — apply bg swap to the MediaBlock surface ONLY */}
      <section id="feature" className="pt-24">
        <div className="container">
          <Waypoint
            threshold={1}
            onEnter={() => setProgressStep(1)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <MediaBlock {...featureBlock} />
          </Waypoint>
        </div>
      </section>

      {/* CARDS ROW — add subtle surface + elevate on active */}
      <section id="cards" className="pt-24">
        <div className="container">
          <Waypoint
            threshold={1}
            onEnter={() => setProgressStep(2)}
            activeClass="bg-white transition-colors duration-600 in-view"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <div className="bg-off-white">
              <CardRow {...cardRowData} />
            </div>
          </Waypoint>
        </div>
      </section>

      {/* STATS — light -> white swap on the inner box; counters start on enter */}
      <section id="stats" className="pt-24">
        <div className="container">
          <Waypoint
            threshold={1}
            onEnter={() => { setStatsActive(true); setProgressStep(3); }}
            activeClass="bg-light transition-colors duration-600"
            inactiveClass="bg-white transition-colors duration-600"
          >
            <div className="box text-center">
              <div className="heading mb-12">Built to move fast —<br></br>without breaking nice things</div> 
              <div className="row justify-evenly">
                <div>
                  <div className="subheading--s">Components</div>
                  <div className="heading--xl"><Counter to={18} start={statsActive} /></div>
                </div>
                <div>
                  <div className="subheading--s">KB CSS</div>
                  <div className="heading--xl"><Counter to={12} start={statsActive} /></div>
                </div>
                <div>
                  <div className="subheading--s">Setup (min)</div>
                  <div className="heading--xl"><Counter to={5} start={statsActive} /></div>
                </div>
              </div>
              <div className="body mt-12">*I made these numbers up, they don't actually mean anything.</div>
            </div>
          </Waypoint>
        </div>
      </section>

      {/* FAQ — soft surface swap */}
      <section id="faq" className="pt-24">
        <div className="container">
          <h2 className="heading mb-4">FAQ</h2>
          <Waypoint
            threshold={1}
            onEnter={() => setProgressStep(7)}
            activeClass="bg-white transition-colors duration-600"
            inactiveClass="bg-off-white transition-colors duration-600"
          >
            <div className="box bg-off-white">
              <FAQ {...faqData} />
            </div>
          </Waypoint>
        </div>
      </section>

      <section className="container py-24">
        <div className="box flex flex-col items-center">
          <div className="eyebrow">End of the line</div>
          <div className="heading">CTA Callout</div>
          <div className="body mt-2 text-center max-w-700">
            Well, this is it. The CTA Callout. The only thing left is the footer and, let’s be honest, you can see that already.
            Do you like what you see or not? Stop wasting your time already. Start shipping.
          </div>
        </div>

        <div className="mt-2 text-center">
          <a className="button btn btn-primary" href="/components-library">Open the Components Library</a>
        </div>
      </section>

      <Footer {...footerData} />

      {/* Progress rail (clickable) */}
      <nav
        aria-label="Page sections"
        style={{
          position: 'fixed',
          right: 18,
          top: '40%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 30,
        }}
      >
        {SECTIONS.map((s, i) => {
          const active = i <= progressStep;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              title={s.label}
              aria-label={`Jump to ${s.label}`}
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: active ? 'currentColor' : 'transparent',
                border: '1px solid currentColor',
                opacity: active ? 1 : 0.45,
                cursor: 'pointer',
              }}
              className="text-primary"
            />
          );
        })}
      </nav>
    </main>
  );
}
