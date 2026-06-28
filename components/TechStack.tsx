'use client';

import { motion } from 'framer-motion';
import { stack } from '@/lib/data';

export default function TechStack() {
  return (
    <section id="stack" className="section-padding border-t border-base-line bg-base-surface/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent-purple mb-3">
            02 — Stack
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink-primary">
            What it&apos;s built with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stack.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative rounded-xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow hover:border-accent-indigo/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint mb-1">
                {category.eyebrow}
              </p>
              <h3 className="font-display font-semibold text-lg text-ink-primary mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-base-raised border border-base-line text-xs font-mono text-ink-muted transition-colors duration-200 group-hover:border-accent-indigo/30 hover:!text-ink-primary hover:!border-accent-purple/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
