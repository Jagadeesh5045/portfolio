import { motion } from 'framer-motion';
import { PROFILE } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-5 text-center"
      >
        <h2 className="font-display text-5xl text-bone md:text-6xl">READY WHEN YOU ARE</h2>
        <p className="mt-4 text-lg text-ash">
          AI Engineer, immediately available. {PROFILE.rightToWork}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded bg-signal px-8 py-3 text-base font-bold text-white transition-colors hover:bg-signalDark"
          >
            Email me
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-smoke px-8 py-3 text-base font-semibold text-bone transition-colors hover:bg-white/15"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-smoke px-8 py-3 text-base font-semibold text-bone transition-colors hover:bg-white/15"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
