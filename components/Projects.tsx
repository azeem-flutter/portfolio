'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-t border-base-line">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent-purple mb-3">
            03 — Projects
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink-primary">
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
