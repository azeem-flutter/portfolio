'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { profile } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-base-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-sm tracking-wide text-ink-primary"
        >
          M. AZEEM<span className="text-accent-indigo">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-ink-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="hidden sm:flex p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
