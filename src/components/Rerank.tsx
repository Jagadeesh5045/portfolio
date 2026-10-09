import StageBadge from './StageBadge';
import { experience, education } from '../data/portfolio';

export default function Rerank() {
  return (
    <section id="rerank" className="mx-auto max-w-5xl px-4 py-16">
      <StageBadge num="03" name="RERANK" blurb="experience, ordered by relevance" />
      <div className="mt-8 space-y-5">
        {experience.map((r, i) => (
          <div key={r.company} className="stage-card rounded-xl border border-line bg-panel p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-white">
                {r.title} <span className="text-dim">· {r.company}</span>
              </h3>
              <span className="font-mono text-xs text-signal">rank #{i + 1}</span>
            </div>
            <p className="mt-1 font-mono text-xs text-dim">
              {r.period} · {r.location}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-gray-300">
              {r.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="mt-10 font-mono text-sm font-bold tracking-widest text-white">EDUCATION</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.degree} className="rounded-xl border border-line bg-panel p-5">
            <p className="font-bold text-white">{e.degree}</p>
            <p className="mt-1 text-sm text-dim">{e.school}</p>
            <p className="mt-1 font-mono text-xs text-dim">{e.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
