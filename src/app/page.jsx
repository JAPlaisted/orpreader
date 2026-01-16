'use client';

import { useEffect, useRef, useState } from 'react';

/* ---------- Sample Text (short, restored) ---------- */

const DEFAULT_TEXT = ` The Call of the Wild by Jack London

Chapter 1: Into the Primitive

Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost.

Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge Miller’s place, it was called. It stood back from the road, half hidden among the trees, through which glimpses could be caught of the wide cool veranda that ran around its four sides. The house was approached by gravelled driveways which wound about through wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more spacious scale than at the front. There were great stables, where a dozen grooms and boys held forth, rows of vine-clad servants’ cottages, an endless and orderly array of outhouses, long grape arbors, green pastures, orchards, and berry patches. Then there was the pumping plant for the artesian well, and the big cement tank where Judge Miller’s boys took their morning plunge and kept cool in the hot afternoon.

And over this great demesne Buck ruled. Here he was born, and here he had lived the four years of his life. It was true, there were other dogs. There could not but be other dogs on so vast a place, but they did not count. They came and went, resided in the populous kennels, or lived obscurely in the recesses of the house after the fashion of Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange creatures that rarely put nose out of doors or set foot to ground. On the other hand, there were the fox terriers, a score of them at least, who yelped fearful promises at Toots and Ysabel looking out of the windows at them and protected by a legion of housemaids armed with brooms and mops.

But Buck was neither house-dog nor kennel-dog. The whole realm was his. He plunged into the swimming tank or went hunting with the Judge’s sons; he escorted Mollie and Alice, the Judge’s daughters, on long twilight or early morning rambles; on wintry nights he lay at the Judge’s feet before the roaring library fire; he carried the Judge’s grandsons on his back, or rolled them in the grass, and guarded their footsteps through wild adventures down to the fountain in the stable yard, and even beyond, where the paddocks were, and the berry patches. Among the terriers he stalked imperiously, and Toots and Ysabel he utterly ignored, for he was king,—king over all creeping, crawling, flying things of Judge Miller’s place, humans included.

His father, Elmo, a huge St. Bernard, had been the Judge’s inseparable companion, and Buck bid fair to follow in the way of his father. He was not so large,—he weighed only one hundred and forty pounds,—for his mother, Shep, had been a Scotch shepherd dog. Nevertheless, one hundred and forty pounds, to which was added the dignity that comes of good living and universal respect, enabled him to carry himself in right royal fashion.

During the four years since his puppyhood he had lived the life of a sated aristocrat; he had a fine pride in himself, was even a trifle egotistical, as country gentlemen sometimes become because of their insular situation. But he had saved himself by not becoming a mere pampered house-dog. Hunting and kindred outdoor delights had kept down the fat and hardened his muscles; and to him, as to the cold-tubbing races, the love of water had been a tonic and a health preserver.`;

/* ---------- Helpers ---------- */

function splitWords(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
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

/* ---------- Page ---------- */

export default function ORPReader() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);
  const [wpm, setWpm] = useState(300);
  const [playing, setPlaying] = useState(false);
  const progress = words.length ? (index + 1) / words.length : 0;

  const raf = useRef(null);
  const last = useRef(null);
  const acc = useRef(0);

  const baseDelay = 60000 / wpm;

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

      const delay = getWordDelay(words[index], baseDelay);

      if (acc.current >= delay) {
        acc.current = 0;
        setIndex((i) => {
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
  }, [playing, index, words, baseDelay]);

  const word = words[index] || '';
  const orp = getORPIndex(word);

  return (
    <main className="rsvp-root">
      {!playing && (
        <div className="box rsvp-controls">
          <div className="eyebrow mb-2">ORP Reader</div>
          <h1 className="heading mb-2">Read faster without losing focus</h1>
          <p className="body mb-4">
            One word at a time. Keep your eyes on the red letter. Adjust speed and tap start.
          </p>

          <textarea
            className="rsvp-textarea body"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-4">
            <div className="subheading--s mb-4">Speed: {wpm} WPM</div>
            <input
              type="range"
              className='w-full'
              min="150"
              max="900"
              step="10"
              value={wpm}
              onChange={(e) => setWpm(Number(e.target.value))}
            />
          </div>

          <button className="button btn btn-secondary mt-4" onClick={start}>
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

            {/* ORP letter – FIXED center */}
            <div className="rsvp-orp heading--l">{word[orp]}</div>

            {/* Prefix / suffix */}
            <div className="rsvp-word heading--l">
              <span className="pre">{word.slice(0, orp)}</span>
              <span className="post">{word.slice(orp + 1)}</span>
            </div>

            {/* Vertical guides */}
            <div className="rsvp-guide up" />
            <div className="rsvp-guide down" />

            <div className="rsvp-rail bottom" />
          </div>

          <div className="rsvp-bottom">
            <div className="body--s">Speed: {wpm} WPM</div>
            <button className="button btn--s btn-secondary" onClick={stop}>
              Stop
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
