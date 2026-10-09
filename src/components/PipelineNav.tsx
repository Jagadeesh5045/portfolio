import { stages } from '../data/portfolio';

interface Props {
  active: string;
}

export default function PipelineNav({ active }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a href="#ingest" className="flex items-center gap-2 font-mono text-sm font-bold text-white">
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
          JAGADEESHWARA<span className="text-signal">_</span>PIPELINE
        </a>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Pipeline stages">
          {stages.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded px-2 py-1 font-mono text-xs transition-colors ${
                active === s.id ? 'bg-signal/15 text-signal' : 'text-dim hover:text-white'
              }`}
            >
              {s.num} {s.name}
            </a>
          ))}
        </nav>
        <span className="font-mono text-xs text-dim sm:hidden">{active.toUpperCase()}</span>
      </div>
    </header>
  );
}
