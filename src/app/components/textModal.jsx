'use client';

import {useEffect, useRef, useState} from 'react';

export default function textModal({
  triggerLabel = 'Open Modal',
  triggerTheme = 'btn-primary',      
  triggerSize = 'btn',              
  title = 'Popup Modal',
  body = 'This is a simple text modal.',
  closeLabel = 'Close',
  closeTheme = 'btn-secondary',
  closeSize = 'btn',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const focusable = modalRef.current?.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const onTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first?.focus();
      }
    };

    document.addEventListener('keydown', onTab);
    first?.focus();

    return () => document.removeEventListener('keydown', onTab);
  }, [isOpen]);

  return (
    <div>
      <button
        className={`button ${triggerSize} ${triggerTheme}`}
        onClick={() => setIsOpen(true)}
      >
        {triggerLabel}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="modal-title" className="heading--l mb-4">{title}</h2>
            <p className="body mb-6">{body}</p>

            <div className="flex gap-3">
              <button
                className={`button ${closeSize} ${closeTheme}`}
                onClick={() => setIsOpen(false)}
              >
                {closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
