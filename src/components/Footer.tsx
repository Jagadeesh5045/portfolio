import { PROFILE } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl tracking-[0.18em] text-signal">JAGADEESHWARA</p>
            <p className="mt-2 max-w-md text-sm text-ash">
              {PROFILE.role} in {PROFILE.location}. {PROFILE.rightToWork}
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-ash transition-colors hover:text-bone">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-ash transition-colors hover:text-bone">
              LinkedIn
            </a>
            <a href="https://medium.com/@padalajagadeesh578" target="_blank" rel="noreferrer" className="text-ash transition-colors hover:text-bone">
              Medium
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 text-xs text-ash/70 md:flex-row">
          <p>Copyright 2026 {PROFILE.name}. All rights reserved.</p>
          <p>Built with React, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
