'use client';

import {useEffect, useMemo, useRef, useState} from 'react';
import Card from './card';

export default function CardRow({
  items = [],
  perPage = 3,      // desktop/tablet pages
  slideBy = 3,
  showDots = true,
  buttonThemeOverride,
}) {
  const [isMobile, setIsMobile] = useState(false);

  // keep in sync with your SCSS breakpoint: max-width: 767px
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const effectivePerPage = isMobile ? 1 : perPage;
  const effectiveSlideBy = isMobile ? 1 : Math.ceil(slideBy / perPage);

  const pages = useMemo(() => {
    const out = [];
    for (let i = 0; i < items.length; i += effectivePerPage) {
      out.push(items.slice(i, i + effectivePerPage));
    }
    return out;
  }, [items, effectivePerPage]);

  const [page, setPage] = useState(0);
  const lastPage = Math.max(pages.length - 1, 0);

  useEffect(() => {
    // clamp if breakpoint change shrinks number of pages
    setPage((p) => Math.min(Math.max(p, 0), lastPage));
  }, [lastPage]);

  const canPrev = page > 0;
  const canNext = page < lastPage;

  const goTo = (p) => setPage(Math.min(Math.max(p, 0), lastPage));
  const prev = () => goTo(page - effectiveSlideBy);
  const next = () => goTo(page + effectiveSlideBy);

  // drag/swipe (mobile-first but works on desktop too)
  const trackRef = useRef(null);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const startTranslate = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || dragging.current) return;
    track.style.transition = 'transform .25s ease';
    track.style.transform = `translateX(-${page * 100}%)`;
  }, [page]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const viewport = track.parentElement;
    const width = () => viewport.getBoundingClientRect().width;

    const down = (e) => {
      // allow drag anywhere; feels nice on mobile
      isPointerDown.current = true;
      dragging.current = false;
      track.style.transition = 'none';
      startX.current = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      currentX.current = startX.current;
      startTranslate.current = -page * width();
    };
    const move = (e) => {
      if (!isPointerDown.current) return;
      const x = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const dx = x - startX.current;
      currentX.current = x;
      if (Math.abs(dx) > 5) dragging.current = true;

      const maxTranslate = 0;
      const minTranslate = -lastPage * width();
      let nextTranslate = startTranslate.current + dx;
      if (nextTranslate > maxTranslate) nextTranslate = maxTranslate + (nextTranslate - maxTranslate) * 0.2;
      if (nextTranslate < minTranslate) nextTranslate = minTranslate + (nextTranslate - minTranslate) * 0.2;

      track.style.transform = `translateX(${nextTranslate}px)`;
      if (e.cancelable) e.preventDefault();
    };
    const up = () => {
      if (!isPointerDown.current) return;
      isPointerDown.current = false;
      const dx = currentX.current - startX.current;
      const threshold = width() * 0.2;
      if (dragging.current) {
        if (dx > threshold) goTo(page - 1);
        else if (dx < -threshold) goTo(page + 1);
        else {
          track.style.transition = 'transform .2s ease';
          track.style.transform = `translateX(-${page * 100}%)`;
        }
      }
      dragging.current = false;
    };

    // Mouse
    viewport.addEventListener('mousedown', down);
    window.addEventListener('mousemove', move, { passive: false });
    window.addEventListener('mouseup', up);
    // Touch
    viewport.addEventListener('touchstart', down, { passive: true });
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', up);

    return () => {
      viewport.removeEventListener('mousedown', down);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      viewport.removeEventListener('touchstart', down);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
  }, [page, lastPage]);

  // Dots: per-card on mobile, per-page otherwise
  const dotCount = isMobile ? items.length : pages.length;
  const activeDotIndex = isMobile ? page /* one card per page */ : page;

  return (
    <section className="card-row">
      <div className="card-row__viewport" aria-roledescription="carousel" aria-live="polite">
        <div className="card-row__track" ref={trackRef} style={{ transform: `translateX(-${page * 100}%)` }}>
          {pages.map((group, i) => (
            <div className="card-row__page" key={`page-${i}`} aria-label={`Slide ${i + 1} of ${pages.length}`}>
              <div className="card-row__grid">
                {group.map((card, idx) => (
                  <Card key={`card-${i}-${idx}`} {...card} buttonTheme={buttonThemeOverride} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows hidden on mobile via CSS */}
      <button className="card-row__nav card-row__nav--prev" onClick={prev} aria-label="Previous" disabled={!canPrev}>‹</button>
      <button className="card-row__nav card-row__nav--next" onClick={next} aria-label="Next" disabled={!canNext}>›</button>

      {showDots && dotCount > 1 && (
        <div className="card-row__dots" role="tablist" aria-label="Slides">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={`dot-${i}`}
              className={`card-row__dot ${i === activeDotIndex ? 'is-active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === activeDotIndex}
              role="tab"
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
