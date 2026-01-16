'use client';

import { useEffect, useRef, useState } from 'react';

/* ---------- Sample Text ---------- */

const DEFAULT_TEXT = `Take a breath. Relax your eyes. You are not about to read faster by trying harder. You are about to read faster by doing less.

Traditional reading forces your eyes to jump. From word to word. From line to line. Those tiny movements cost time. They break focus. They add fatigue.

RSVP solves this.

RSVP stands for Rapid Serial Visual Presentation. Instead of scanning across a page, words appear one at a time in the same place. Your eyes stay still. Your brain stays engaged. Comprehension improves while speed increases.

But there is a catch.

Not all letters are equal.

Your brain naturally locks onto a specific point in every word. This is called the Optimal Recognition Point, or ORP. When that letter is aligned consistently, recognition becomes faster and more reliable.

That is why one letter is red.

Your eyes do not chase words anymore. They wait. The words come to you. Calmly. Precisely. One after another.

And now something interesting happens.

You stop subvocalizing.
You stop drifting.
You stop rereading.

You start flowing.

At first, the pace is comfortable. Then it gently increases. This is intentional. Your brain adapts faster than you expect. Much faster.

Shorter sentences.
Less friction.
More momentum.

You are still understanding everything.

This is what focus feels like.

This is what speed feels like.

And this is only the beginning.

Adjust the speed. Try the ramp. Paste in something longer. Something challenging. Let the system do the work.

When you are ready—

Press start.

And don’t blink.
`;

/* ---------- Helpers ---------- */

function splitWords(text) {
  return text.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
}

function getORPIndex(word) {
  const len = word.length;
  if (len <= 1) return 0;
  if (len <= 5) return 1;
  if (len <= 9) return 2;
  if (len <= 13) return 3;
  return Math.floor(len / 2);
}

function getWordDelay(word, base) {
  let delay = base;
  if (/[.!?]$/.test(word)) delay *= 1.8;
  else if (/[,;:]$/.test(word)) delay *= 1.3;
  if (word.length > 8) delay *= Math.min(1.6, word.length / 6);
  return delay;
}

/* ---------- Dual Slider ---------- */

function DualSpeedSlider({
  min,
  max,
  minValue,
  maxValue,
  useRamp,
  onChangeMin,
  onChangeMax,
}) {
  const trackRef = useRef(null);
  const activeThumb = useRef(null);

  function percent(val) {
    return ((val - min) / (max - min)) * 100;
  }

  function onPointerDown(e, thumb) {
    activeThumb.current = thumb;
    trackRef.current.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!activeThumb.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const value =
      min + Math.round((x / rect.width) * (max - min) / 10) * 10;

    if (activeThumb.current === 'min') {
      onChangeMin(useRamp ? Math.min(value, maxValue - 10) : value);
    } else {
      onChangeMax(Math.max(value, minValue + 10));
    }
  }

  function onPointerUp() {
    activeThumb.current = null;
  }

  return (
    <div
      ref={trackRef}
      className="dual-slider"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div className="dual-track" />

      <div
        className="dual-range"
        style={{
          left: `${percent(minValue)}%`,
          width: `${percent(maxValue) - percent(minValue)}%`,
          opacity: useRamp ? 1 : 0,
        }}
      />

      <div
        className="dual-thumb min"
        style={{ left: `${percent(minValue)}%` }}
        onPointerDown={(e) => onPointerDown(e, 'min')}
      />

      {useRamp && (
        <div
          className="dual-thumb max"
          style={{ left: `${percent(maxValue)}%` }}
          onPointerDown={(e) => onPointerDown(e, 'max')}
        />
      )}
    </div>
  );
}

/* ---------- Page ---------- */

export default function ORPReader() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Variable speed
  const [useRamp, setUseRamp] = useState(true);
  const [minWpm, setMinWpm] = useState(300);
  const [maxWpm, setMaxWpm] = useState(600);

  const raf = useRef(null);
  const last = useRef(null);
  const acc = useRef(0);

  const progress = words.length ? index / (words.length - 1) : 0;

  const currentWpm = useRamp
    ? Math.round(minWpm + (maxWpm - minWpm) * progress)
    : minWpm;

  function start() {
    const w = splitWords(text);
    if (!w.length) return;
    setWords(w);
    setIndex(0);
    acc.current = 0;
    last.current = null;
    setPlaying(true);
  }

  function stop() {
    setPlaying(false);
    cancelAnimationFrame(raf.current);
    raf.current = null;
    last.current = null;
  }

  useEffect(() => {
    if (!playing || !words.length) return;

    function tick(ts) {
      if (!last.current) {
        last.current = ts;
        raf.current = requestAnimationFrame(tick);
        return;
      }

      acc.current += ts - last.current;
      last.current = ts;

      const delay = getWordDelay(words[index], 60000 / currentWpm);

      if (acc.current >= delay) {
        acc.current = 0;
        setIndex(i => {
          if (i >= words.length - 1) {
            stop();
            return i;
          }
          return i + 1;
        });
      }

      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, index, words, currentWpm]);

  const word = words[index] || '';
  const orp = getORPIndex(word);

  return (
    <main className="rsvp-root">
      {!playing && (
        <div className="box rsvp-controls">
          <div className="eyebrow mb-2">ORP Reader</div>
          <h1 className="heading mb-2">Read faster without losing focus</h1>

          <textarea
            className="rsvp-textarea body"
            value={text}
            onChange={e => setText(e.target.value)}
          />

          {/* Variable Speed Controls */}
          <div className="mt-6">
            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={useRamp}
                onChange={(e) => setUseRamp(e.target.checked)}
              />
              <span className="body--s">Ramp speed</span>
            </label>

            <DualSpeedSlider
              min={150}
              max={900}
              minValue={minWpm}
              maxValue={maxWpm}
              useRamp={useRamp}
              onChangeMin={setMinWpm}
              onChangeMax={setMaxWpm}
            />

            <div className="flex justify-between body--s mt-2">
              <span>{minWpm} WPM</span>
              <span>{useRamp ? `${maxWpm} WPM` : 'Fixed speed'}</span>
            </div>
          </div>

          <button className="button btn btn-secondary mt-6" onClick={start}>
            Start Reading
          </button>
        </div>
      )}

      {playing && (
        <div className="rsvp-display">
          <div className="reader-progress">
            <div
              className="reader-progress__bar"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          <div className="rsvp-frame">
            <div className="rsvp-rail top" />

            <div className="rsvp-orp heading--l">{word[orp]}</div>

            <div className="rsvp-word heading--l">
              <span className="pre">{word.slice(0, orp)}</span>
              <span className="post">{word.slice(orp + 1)}</span>
            </div>

            <div className="rsvp-guide up" />
            <div className="rsvp-guide down" />
            <div className="rsvp-rail bottom" />
          </div>

          <div className="rsvp-bottom">
            <div className="body--s">
              Word {index + 1} of {words.length} • {currentWpm} WPM
            </div>

            <button className="button btn--s btn-secondary" onClick={stop}>
              Stop
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
