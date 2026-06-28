'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

export default function StatsStrip() {
  return (
    <section className="border-y border-base-line bg-base-surface/40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
        <div className="grid grid-cols-3 divide-x divide-base-line">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center px-2"
            >
              <p className="font-display font-semibold text-3xl sm:text-4xl text-gradient">
                {stat.value}
              </p>
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.08em] text-ink-faint mt-1.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
