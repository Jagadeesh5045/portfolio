import { motion } from 'framer-motion';
import { HERO, type Title } from '../data/content';

export default function Hero({ onMoreInfo }: { onMoreInfo: (t: Title) => void }) {
  return (
    <section id="top" className="relative flex min-h-[94vh] items-end overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 65% at 70% 20%, rgba(246,18,29,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(124,45,18,0.25), transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #101014 50%, #0a0a0a 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-24 pt-40 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-display text-3xl text-signal">J</span>
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-ash">
              Original Series
            </span>
          </div>
          <h1 className="font-display text-[64px] leading-[0.95] text-bone md:text-[120px]">
            CODE SAGE AI
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-bone/90 md:text-xl">{HERO.tagline}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ash">
            <span className="font-semibold text-signal">Featured build</span>
            <span>2026</span>
            <span className="rounded border border-ash/40 px-1.5 py-0.5 text-xs">MSc Dissertation</span>
            <span>Python</span>
            <span>RAG</span>
            <span>LLM evals</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={HERO.links[0].url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded bg-signal px-7 py-3 text-base font-bold text-white transition-all hover:bg-signalDark"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
              View Project
            </a>
            <button
              onClick={() => onMoreInfo(HERO)}
              className="flex items-center gap-2 rounded bg-smoke/80 px-7 py-3 text-base font-semibold text-bone backdrop-blur transition-colors hover:bg-smoke"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" strokeLinecap="round" />
              </svg>
              More Info
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
