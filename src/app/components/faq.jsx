'use client';

import {useRef, useState} from 'react';

export default function FAQ({
  items = [],                          
  allowMultiple = false,    
}) {
  const [openSet, setOpenSet] = useState(() => new Set());
  const btnRefs = useRef([]);
  const panelRefs = useRef([]);

  const isOpen = (i) => openSet.has(i);

  const toggle = (i) => {
    setOpenSet((prev) => {
      if (allowMultiple) {
        const next = new Set(prev);
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      } else {
        if (prev.has(i)) return new Set();
        return new Set([i]);
      }
    });
  };

  const onHeaderKey = (e, i) => {
    const count = items.length;
    if (!count) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      btnRefs.current[(i + 1) % count]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      btnRefs.current[(i - 1 + count) % count]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      btnRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      btnRefs.current[count - 1]?.focus();
    }
  };

  return (
    <section className="faq">
      <div className="faq__list">
        {items.map((it, i) => {
          const qId = `faq-q-${i}`;
          const aId = `faq-a-${i}`;
          const open = isOpen(i);
          const maxH = open ? (panelRefs.current[i]?.scrollHeight ?? 0) : 0;

          return (
            <div className={`faq__item ${open ? 'is-open' : ''}`} key={qId}>
              <h3 className="faq__q">
                <button
                  ref={(el) => (btnRefs.current[i] = el)}
                  id={qId}
                  className="faq__button"
                  aria-expanded={open}
                  aria-controls={aId}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => onHeaderKey(e, i)}
                >
                  <span className="faq__label subheading--s">{it.question}</span>
                  <span className="faq__chevron" aria-hidden="true" />
                </button>
              </h3>

              <div
                ref={(el) => (panelRefs.current[i] = el)}
                id={aId}
                role="region"
                aria-labelledby={qId}
                className="faq__panel"
                style={{ maxHeight: maxH }}
              >
                <div className="faq__answer body--s">{it.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}