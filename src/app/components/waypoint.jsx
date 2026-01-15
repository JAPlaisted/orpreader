'use client';

import { useRef, useEffect, useState } from 'react';

const Waypoint = ({
  children,
  onEnter = () => {},
  onExit = () => {},
  threshold = 0.5,
  rootMargin = '0px',
  activeClass = '',
  inactiveClass = '',
  once = false, // if true, onEnter only fires once and exit is ignored after leaving
}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [enteredOnce, setEnteredOnce] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= threshold;

        if (visible) {
          if (!inView) {
            setInView(true);
            if (!once || (once && !enteredOnce)) {
              onEnter();
              setEnteredOnce(true);
            }
          }
        } else {
          if (inView) {
            setInView(false);
            if (!once) {
              onExit();
            }
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [onEnter, onExit, threshold, rootMargin, once, inView, enteredOnce]);

  const className = inView || (once && enteredOnce) ? activeClass : inactiveClass;

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Waypoint;
