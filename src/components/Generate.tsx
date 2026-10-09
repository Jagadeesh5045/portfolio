import StageBadge from './StageBadge';
import { writing, skills } from '../data/portfolio';

export default function Generate() {
  return (
    <section id="generate" className="mx-auto max-w-5xl px-4 py-16">
      <StageBadge num="04" name="GENERATE" blurb="writing, grounded in real builds" />
      <div className="mt-8 space-y-5">
        {writing.map((w) => (
          <article key={w.title} className="stage-card rounded-xl border border-line bg-panel p-6">
            <p className="font-mono text-xs text-signal">{w.venue}</p>
            <h3 className="mt-2 text-xl font-bold leading-snug text-white">{w.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-300">{w.description}</p>
            <a
              href={w.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1 font-mono text-sm text-signal hover:underline"
            >
              read article <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
      <h3 className="mt-10 font-mono text-sm font-bold tracking-widest text-white">TOOLKIT</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {skills.map((s) => (
          <div key={s.category} className="rounded-xl border border-line bg-panel p-5">
            <p className="font-mono text-xs font-bold tracking-widest text-signal">{s.category.toUpperCase()}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="rounded border border-line px-2 py-1 text-sm text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
