'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';
import WorkflowGraph from './WorkflowGraph';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid-pattern bg-[size:48px_48px]"
    >
      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.2em] uppercase text-accent-signal mb-6 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-signal animate-pulse-slow" />
              Available for new builds
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink-primary"
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
              className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {profile.hook}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 mt-9"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-indigo text-white text-sm font-medium shadow-glow hover:bg-accent-indigo/90 transition-colors duration-200"
              >
                See the work
                <ArrowDown size={14} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-base-line text-ink-primary text-sm font-medium hover:border-accent-indigo/50 hover:bg-base-surface transition-colors duration-200"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-base-line text-ink-primary text-sm font-medium hover:border-accent-indigo/50 hover:bg-base-surface transition-colors duration-200"
              >
                <Mail size={14} />
                Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mt-6 text-sm text-ink-faint font-mono"
            >
              <Phone size={13} />
              {profile.phone}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl glass p-4 sm:p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint mb-2 px-1">
              Workflow · running
            </p>
            <WorkflowGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
