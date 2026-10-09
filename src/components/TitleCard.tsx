import type { Title } from '../data/content';

export default function TitleCard({
  title,
  onSelect,
}: {
  title: Title;
  onSelect: (t: Title) => void;
}) {
  return (
    <div
      onClick={() => onSelect(title)}
      className="group relative w-[240px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-md bg-coal transition-all duration-300 hover:z-20 hover:scale-[1.07] hover:shadow-2xl hover:shadow-black/70 md:w-[300px]"
    >
      <div className="relative aspect-video overflow-hidden" style={{ background: title.art }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute left-3 top-3 rounded bg-ink/70 px-2 py-0.5 text-[11px] font-bold uppercase tracking-widest text-bone backdrop-blur">
          {title.badge}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="font-display text-3xl leading-none text-white drop-shadow-lg md:text-4xl">
            {title.name}
          </h3>
          <p className="mt-1 text-xs text-white/70">{title.year}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bone text-ink transition-transform hover:scale-110">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {title.links[0] && (
              <a
                href={title.links[0].url}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Open ${title.name} link`}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ash/70 text-bone transition-all hover:border-bone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" />
                </svg>
              </a>
            )}
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ash/70 text-bone transition-all hover:border-bone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-medium text-bone">{title.tagline}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {title.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded bg-smoke px-2 py-0.5 text-[11px] text-ash">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
