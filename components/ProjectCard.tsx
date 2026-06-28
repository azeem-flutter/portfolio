'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, PlayCircle, FileText } from 'lucide-react';
import type { Project } from '@/lib/data';
import MediaFrame from './MediaFrame';
import Lightbox from './Lightbox';

const statusConfig = {
  active: { label: 'Active', dot: 'bg-accent-signal' },
  shipped: { label: 'Shipped', dot: 'bg-accent-indigo' },
  archived: { label: 'Archived', dot: 'bg-ink-faint' },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const status = statusConfig[project.status];
  const links = project.links ?? {};
  const hasLinks = links.demo || links.video || links.repo || links.caseStudy;
  const isPhoneGallery = project.media[0]?.frame === 'phone';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      className={`group relative rounded-2xl glass p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
        project.highlight
          ? 'border-accent-indigo/30 hover:shadow-glow lg:col-span-2'
          : 'hover:shadow-glow-purple hover:border-accent-purple/30'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent-purple mb-2">
            {project.category}
          </p>
          <h3 className="font-display font-semibold text-xl text-ink-primary leading-snug">
            {project.title}
          </h3>
        </div>
        <span className="flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-full bg-base-raised border border-base-line text-[11px] font-mono text-ink-muted">
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse-slow`} />
          {status.label}
        </span>
      </div>

      <p className="text-ink-muted text-sm leading-relaxed mb-4">{project.tagline}</p>

      {/* Visual proof strip */}
      {project.media.length > 0 && (
        <div
          className={
            isPhoneGallery
              ? 'mb-4 flex gap-3 overflow-x-auto pb-1 -mx-1 px-1'
              : 'mb-4 grid grid-cols-2 gap-3'
          }
        >
          {project.media
            .slice(0, project.highlight ? 4 : isPhoneGallery ? 3 : 2)
            .map((m, i) => (
              <div key={m.src} className={isPhoneGallery ? 'shrink-0 w-28' : ''}>
                <MediaFrame media={m} onClick={() => setLightboxIndex(i)} />
              </div>
            ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md bg-base-raised border border-base-line text-[11px] font-mono text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Proof links — only rendered when real URLs exist in lib/data.ts */}
      {hasLinks && (
        <div className="flex flex-wrap gap-2 mb-4">
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent-indigo/15 border border-accent-indigo/30 text-xs font-medium text-ink-primary hover:bg-accent-indigo/25 transition-colors duration-200"
            >
              <ExternalLink size={12} />
              Live demo
            </a>
          )}
          {links.video && (
            <a
              href={links.video}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-base-raised border border-base-line text-xs font-medium text-ink-muted hover:text-ink-primary hover:border-accent-indigo/40 transition-colors duration-200"
            >
              <PlayCircle size={12} />
              Watch demo
            </a>
          )}
          {links.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-base-raised border border-base-line text-xs font-medium text-ink-muted hover:text-ink-primary hover:border-accent-indigo/40 transition-colors duration-200"
            >
              <Github size={12} />
              Source
            </a>
          )}
          {links.caseStudy && (
            <a
              href={links.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-base-raised border border-base-line text-xs font-medium text-ink-muted hover:text-ink-primary hover:border-accent-indigo/40 transition-colors duration-200"
            >
              <FileText size={12} />
              Case study
            </a>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-sm font-medium text-accent-indigo hover:text-accent-purple transition-colors duration-200"
      >
        {open ? 'Hide details' : 'View details'}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={15} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-ink-muted text-sm leading-relaxed mt-4">{project.description}</p>
            {project.features && (
              <ul className="mt-4 space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                    <span className="text-accent-signal mt-1.5 shrink-0">▸</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Lightbox
        items={project.media}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(next) => setLightboxIndex(next)}
      />
    </motion.article>
  );
}
