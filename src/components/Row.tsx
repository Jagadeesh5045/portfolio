import { useRef } from 'react';
import type { Row, Title } from '../data/content';
import TitleCard from './TitleCard';

export default function ContentRow({
  row,
  onSelect,
}: {
  row: Row;
  onSelect: (t: Title) => void;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id={row.id} className="relative mb-10 scroll-mt-24 md:mb-14">
      <div className="mx-auto mb-3 flex max-w-[1400px] items-baseline justify-between px-5 md:px-10">
        <div>
          <h2 className="text-xl font-bold text-bone md:text-2xl">{row.title}</h2>
          <p className="text-sm text-ash">{row.subtitle}</p>
        </div>
      </div>
      <div className="group/row relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-gradient-to-r from-ink to-transparent text-bone opacity-0 transition-opacity group-hover/row:opacity-100 md:flex"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x gap-3 overflow-x-auto scroll-smooth px-5 py-4 md:gap-4 md:px-10"
        >
          {row.items.map((t) => (
            <TitleCard key={t.id} title={t} onSelect={onSelect} />
          ))}
        </div>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-0 z-30 hidden h-full w-12 items-center justify-center bg-gradient-to-l from-ink to-transparent text-bone opacity-0 transition-opacity group-hover/row:opacity-100 md:flex"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
