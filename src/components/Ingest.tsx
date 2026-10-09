import StageBadge from './StageBadge';
import { profile, about } from '../data/portfolio';

export default function Ingest() {
  return (
    <section id="ingest" className="mx-auto max-w-5xl px-4 pb-16 pt-14">
      <StageBadge num="01" name="INGEST" blurb="who I am" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1fr_240px] md:items-start">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-lg text-signal">{profile.title}</p>
          <p className="mt-4 max-w-xl text-lg text-dim">{profile.tagline}</p>
          <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-gray-300">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            <span className="rounded-full border border-signal/40 px-3 py-1 text-signal">{profile.availability}</span>
            <span className="rounded-full border border-line px-3 py-1 text-dim">{profile.workAuth}</span>
            <span className="rounded-full border border-line px-3 py-1 text-dim">{profile.location}</span>
          </div>
        </div>
        <div className="mx-auto w-48 md:w-full">
          <img
            src={profile.photo}
            alt={profile.name}
            className="aspect-square w-full rounded-2xl border border-line object-cover"
            loading="eager"
          />
          <p className="mt-2 text-center font-mono text-xs text-dim">input.jpg — verified</p>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.metrics.map((m) => (
          <div key={m.label} className="stage-card rounded-xl border border-line bg-panel p-4">
            <p className="font-mono text-2xl font-bold text-signal">{m.value}</p>
            <p className="mt-1 text-sm text-dim">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
