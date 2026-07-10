'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer id="contact" className="section-padding border-t border-base-line relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[680px] h-[320px] bg-accent-indigo/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto rounded-[2rem] glass border border-base-line/80 p-8 sm:p-10"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent-purple mb-3">
            04 — Contact
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink-primary mb-4">
            Let&apos;s build something that feels premium.
          </h2>
          <p className="text-ink-muted text-base leading-relaxed mb-9">
            Open to backend, mobile, and AI-automation work. The fastest way to reach me is email.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-indigo text-white text-sm font-medium shadow-glow hover:bg-accent-indigo/90 transition-colors duration-200">
              <Mail size={14} />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-base-line text-ink-primary text-sm font-medium hover:border-accent-indigo/50 hover:bg-base-surface transition-colors duration-200"
            >
              <Github size={14} />
              {profile.githubLabel}
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-ink-faint text-sm font-mono mb-10">
            <Phone size={13} />
            {profile.phone}
          </div>
        </motion.div>

        <div className="pt-8 border-t border-base-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint font-mono">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
