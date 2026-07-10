'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Bot, Github, Layers3, Mail, Phone, Sparkles } from 'lucide-react';
import { profile } from '@/lib/data';

const highlights = [
  'Flutter experiences that feel polished and fast',
  'FastAPI backends built for real traffic and clean handoffs',
  'n8n automations that quietly remove repetitive work',
];

const strengths = [
  { label: 'Mobile', value: 'Flutter + Dart' },
  { label: 'Backend', value: 'FastAPI + Python' },
  { label: 'Automation', value: 'n8n + AI workflows' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid-pattern bg-[size:48px_48px]"
    >
      <div className="absolute top-24 -left-24 w-[460px] h-[460px] bg-accent-indigo/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[520px] h-[520px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-base/90 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 xl:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.22em] uppercase text-accent-signal mb-6 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse-slow" />
              Available for new builds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-semibold text-4xl sm:text-5xl lg:text-[4rem] leading-[1.02] tracking-tight text-ink-primary max-w-[10ch]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-lg sm:text-xl text-gradient mt-3 mb-6"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {profile.hook}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="flex flex-wrap gap-3 mt-7"
            >
              {['Flutter', 'FastAPI', 'n8n', 'AI Automation'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-surface/85 border border-base-line text-[11px] uppercase tracking-[0.14em] text-ink-muted"
                >
                  <Sparkles size={11} className="text-accent-signal" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap items-center gap-3 mt-9"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent-indigo text-white text-sm font-medium shadow-glow hover:bg-accent-indigo/90 transition-colors duration-200"
              >
                See the work
                <ArrowDown size={14} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-base-line text-ink-primary text-sm font-medium hover:border-accent-indigo/50 hover:bg-base-surface transition-colors duration-200"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-base-line text-ink-primary text-sm font-medium hover:border-accent-indigo/50 hover:bg-base-surface transition-colors duration-200"
              >
                <Mail size={14} />
                Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex items-center gap-2 mt-6 text-sm text-ink-faint font-mono"
            >
              <Phone size={13} />
              {profile.phone}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative rounded-[1.75rem] glass p-5 sm:p-7 overflow-hidden border border-base-line/80 shadow-2xl shadow-black/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo/10 via-transparent to-accent-purple/10 pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-accent-indigo/15 blur-3xl pointer-events-none" />

            <div className="relative flex items-start justify-between gap-4 mb-7">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint mb-2">
                  Selected strengths
                </p>
                <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink-primary">
                  Built to ship cleanly.
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-base-raised border border-base-line text-[11px] font-mono text-ink-muted">
                <Bot size={13} className="text-accent-signal" />
                AI-ready systems
              </div>
            </div>

            <div className="relative grid gap-3">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.18 + index * 0.08 }}
                  className="rounded-2xl bg-base-surface/90 border border-base-line p-4 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint mb-1">
                        {item.label}
                      </p>
                      <p className="font-display text-lg sm:text-xl text-ink-primary">
                        {item.value}
                      </p>
                    </div>
                    <Layers3 size={16} className="text-accent-indigo/80 shrink-0" />
                  </div>
                </motion.div>
              ))}

              <div className="rounded-2xl bg-base-raised/80 border border-accent-indigo/25 p-4 sm:p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-signal mb-2">
                  What companies see
                </p>
                <ul className="space-y-2 text-sm text-ink-muted leading-relaxed">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-signal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
