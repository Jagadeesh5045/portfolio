import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Title } from '../data/content';

export default function DetailModal({
  title,
  onClose,
}: {
  title: Title | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (title) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [title, onClose]);

  return (
    <AnimatePresence>
      {title && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-2xl overflow-hidden rounded-lg bg-coal shadow-2xl shadow-black"
          >
            <div className="relative h-52 md:h-64" style={{ background: title.art }}>
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-bone transition-colors hover:bg-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="rounded bg-signal px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white">
                  {title.badge}
                </span>
                <h2 className="mt-2 font-display text-5xl leading-none text-white md:text-6xl">
                  {title.name}
                </h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ash">
                <span className="font-semibold text-signal">{title.year}</span>
                <span>{title.tagline}</span>
              </div>
              <p className="mt-4 leading-relaxed text-bone/90">{title.description}</p>
              {title.metrics.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-ash">By the numbers</h3>
                  <ul className="mt-2 space-y-1.5">
                    {title.metrics.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm text-bone/85">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ash">Tech stack</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {title.tags.map((t) => (
                    <span key={t} className="rounded-full bg-smoke px-3 py-1 text-xs font-medium text-bone">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {title.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {title.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded bg-signal px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-signalDark"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
