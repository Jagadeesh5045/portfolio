import { motion } from 'framer-motion';
import { PROFILE } from '../data/content';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/10 bg-coal/40 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-[320px_1fr] md:gap-14 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-lg ring-2 ring-signal/60">
            <img
              src={PROFILE.photo}
              alt="Portrait of Jagadeeswara Rao Padala"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-center text-sm text-ash">
            {PROFILE.name} <span className="text-ash/60">|</span> {PROFILE.location}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display text-4xl text-bone md:text-5xl">ABOUT THE ENGINEER</h2>
          <div className="mt-4 space-y-4 text-bone/85 leading-relaxed">
            {PROFILE.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {PROFILE.stats.map((s) => (
              <div key={s.label} className="rounded-lg bg-smoke/60 p-4">
                <p className="font-display text-3xl text-signal">{s.value}</p>
                <p className="mt-1 text-xs text-ash">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-ash">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROFILE.skills.map((s) => (
                <span key={s} className="rounded-full border border-white/15 px-3 py-1 text-sm text-bone/85">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
