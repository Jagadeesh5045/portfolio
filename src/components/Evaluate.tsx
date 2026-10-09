import StageBadge from './StageBadge';
import { profile } from '../data/portfolio';

const checks = [
  { label: 'claims cite real repos', pass: true },
  { label: 'metrics match READMEs', pass: true },
  { label: 'no invented employers', pass: true },
  { label: 'no tutorial projects', pass: true },
];

export default function Evaluate() {
  return (
    <section id="evaluate" className="mx-auto max-w-5xl px-4 py-16">
      <StageBadge num="05" name="EVALUATE" blurb="verify, then contact" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-signal/40 bg-panel p-6">
          <p className="font-mono text-xs font-bold tracking-widest text-signal">GROUNDEDNESS REPORT</p>
          <p className="mt-2 font-mono text-5xl font-bold text-white">
            1.00<span className="text-xl text-dim">/1.00</span>
          </p>
          <ul className="mt-4 space-y-2">
            {checks.map((c) => (
              <li key={c.label} className="flex items-center gap-2 font-mono text-sm text-gray-300">
                <span className="text-signal" aria-hidden="true">✓</span> {c.label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-dim">
            Every claim on this page traces to a real repo, a real README, or a real number. That is the whole point.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-panel p-6">
          <p className="font-mono text-xs font-bold tracking-widest text-white">CONTACT</p>
          <div className="mt-4 space-y-3 text-[15px]">
            <a href={`mailto:${profile.email}`} className="block text-signal hover:underline">
              {profile.email}
            </a>
            <p className="text-gray-300">{profile.phone}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-4 py-2 font-mono text-sm text-white hover:border-signal"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-4 py-2 font-mono text-sm text-white hover:border-signal"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="mt-5 font-mono text-xs leading-relaxed text-dim">
            {profile.relocate}
            <br />
            {profile.workAuth}
          </p>
        </div>
      </div>
      <footer className="mt-14 border-t border-line pt-6 text-center font-mono text-xs text-dim">
        <p>pipeline run complete · 5/5 stages passed · no hallucinations detected</p>
        <p className="mt-1">© 2026 {profile.name} · built with React + TypeScript + Vite</p>
      </footer>
    </section>
  );
}
