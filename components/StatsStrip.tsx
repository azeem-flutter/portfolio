'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

export default function StatsStrip() {
  return (
    <section className="border-y border-base-line/80 bg-gradient-to-b from-base-surface/50 via-base-raised/40 to-base-surface/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-6 sm:py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl glass px-4 py-5 sm:px-6 text-center border border-base-line/80"
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
