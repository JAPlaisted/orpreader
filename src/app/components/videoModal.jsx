'use client';

import {useEffect, useRef, useState} from 'react';
import VideoBlock from '../components/videoBlock';

export default function ModalVideo({
  triggerLabel = 'Watch Video',
  triggerTheme = 'btn-primary',     
  triggerSize = 'btn',            
  title = 'Featured Video',
  video = { youTubeUrl: '', thumbnailUrl: '', playIconUrl: '' }, 
  closeLabel = 'Close',
  closeTheme = 'btn-primary',
  closeSize = 'btn--s',

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

  useEffect(() => {
    if (!isOpen) return;
    const {overflow} = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
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
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 mb-4">
              <h2 id="video-modal-title" className="heading--l">{title}</h2>
              <button
                className={`button ${closeSize} ${closeTheme}`}
                onClick={() => setIsOpen(false)}
              >
                {closeLabel}
              </button>
            </div>

            <VideoBlock {...video} />
          </div>
        </div>
      )}
    </div>
  );
}