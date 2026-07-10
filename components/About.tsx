'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/data';

const facts = [
  { label: 'Background', value: 'Software Engineering, National Textile University' },
  { label: 'Focus', value: 'Mobile apps, backend APIs, and AI automation' },
  { label: 'Currently building', value: 'n8n-driven AI workflows & FastAPI services' },
];

export default function About() {
  return (
    <section id="about" className="section-padding border-t border-base-line relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-indigo/60 to-transparent" />
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent-purple mb-3">
              01 — About
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink-primary leading-tight">
              Three layers,
              <br />
              one engineer.
            </h2>
          </div>

          <div>
            <div className="rounded-3xl glass p-6 sm:p-8 border border-base-line/80">
              <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
                {profile.about}
              </p>

              <dl className="grid sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-base-line">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl bg-base-raised/70 border border-base-line p-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint mb-2">
                      {fact.label}
                    </dt>
                    <dd className="text-ink-primary text-sm leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
