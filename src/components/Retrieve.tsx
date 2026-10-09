import StageBadge from './StageBadge';
import { projects } from '../data/portfolio';

export default function Retrieve() {
  return (
    <section id="retrieve" className="mx-auto max-w-5xl px-4 py-16">
      <StageBadge num="02" name="RETRIEVE" blurb="selected work" />
      <p className="mt-4 max-w-2xl text-dim">
        Top-k results, ranked by evidence. Every project ships with code, tests, and real numbers.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`stage-card flex flex-col rounded-xl border bg-panel p-6 ${
              p.featured ? 'border-signal/50 md:col-span-2' : 'border-line'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <span className="shrink-0 font-mono text-xs text-signal">{p.tag}</span>
            </div>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.metrics.map((m) => (
                <span key={m} className="rounded bg-signal/10 px-2 py-1 font-mono text-xs text-signal">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded border border-line px-2 py-1 font-mono text-xs text-dim">
                  {s}
                </span>
              ))}
            </div>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1 font-mono text-sm text-signal hover:underline"
            >
              view source <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
