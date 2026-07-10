'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Menu, X } from 'lucide-react';
import { profile } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setActiveSection(hash);
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', syncFromHash);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-base/70 backdrop-blur-xl border-b border-white/8 shadow-[0_10px_40px_rgba(0,0,0,0.18)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-3">
        <div className={`rounded-full border border-white/8 ${scrolled ? 'glass' : 'bg-base/35 backdrop-blur-md'} px-4 sm:px-6 h-16 flex items-center justify-between gap-3`}>
          <a
            href="#top"
            className="font-display font-semibold text-sm tracking-[0.18em] text-ink-primary"
          >
            M. AZEEM<span className="text-accent-indigo">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-ink-primary'
                      : 'text-ink-muted hover:text-ink-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
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
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-3xl glass border border-base-line/80 p-3">
            <div className="grid gap-2">
              {links.map((link) => {
                const isActive = activeSection === link.href.slice(1);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition-colors duration-200 ${
                      isActive
                        ? 'bg-accent-indigo/15 text-ink-primary border border-accent-indigo/30'
                        : 'text-ink-muted hover:text-ink-primary hover:bg-base-surface/80 border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`h-2 w-2 rounded-full ${isActive ? 'bg-accent-signal' : 'bg-base-line'}`} />
                  </a>
                );
              })}

              <a
                href={`mailto:${profile.email}`}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-ink-muted hover:text-ink-primary hover:bg-base-surface/80 border border-base-line/60 transition-colors duration-200"
              >
                <span>Email</span>
                <Mail size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
