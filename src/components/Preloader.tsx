import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 600);
    }, 1700);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.08, 1], opacity: [0, 1, 1] }}
            transition={{ duration: 0.9, times: [0, 0.6, 1] }}
            className="font-display text-[120px] leading-none text-signal md:text-[160px]"
            style={{ textShadow: '0 0 60px rgba(246,18,29,0.55)' }}
          >
            J
          </motion.div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.55em' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 font-display text-xl text-bone md:text-2xl"
          >
            JAGADEESHWARA
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="mt-6 h-[3px] w-48 origin-left bg-signal"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
