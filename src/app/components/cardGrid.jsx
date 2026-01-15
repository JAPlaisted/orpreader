'use client';

import {useMemo, useState} from 'react';
import Card from './card';

export default function CardGrid({
  items = [],
  initial = 6,      
  step = 6,         
  max = Infinity,   
  showLoadMore = true,
  align = 'center',
  buttonThemeOverride,
}) {
  const cap = useMemo(() => Math.min(items.length, max), [items.length, max]);
  const [visible, setVisible] = useState(Math.min(initial, cap));
  const canLoadMore = showLoadMore && visible < cap;

  const loadMore = () => setVisible((v) => Math.min(v + step, cap));

  const alignCls = align === 'left' ? 'card-grid--left' : 'card-grid--center';

  return (
    <section className={`card-grid ${alignCls}`}>

      <div className="card-grid__grid">
        {items.slice(0, visible).map((card, i) => (
          <Card key={`grid-card-${i}`} {...card} buttonTheme={buttonThemeOverride} />
        ))}
      </div>

      {canLoadMore && (
        <div className="card-grid__more">
          <button className="button btn btn-primary" onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
