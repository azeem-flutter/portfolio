'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Media } from '@/lib/data';
import MediaFrame from './MediaFrame';

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: Media[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const open = index !== null;
  const current = open ? items[index!] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && index !== null) onNavigate((index + 1) % items.length);
      if (e.key === 'ArrowLeft' && index !== null) onNavigate((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
          >
            <X size={18} />
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! - 1 + items.length) % items.length);
                }}
                aria-label="Previous screenshot"
                className="absolute left-4 sm:left-8 p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((index! + 1) % items.length);
                }}
                aria-label="Next screenshot"
                className="absolute right-4 sm:right-8 p-2 rounded-full border border-base-line text-ink-muted hover:text-ink-primary hover:border-accent-indigo/50 transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl"
          >
            <MediaFrame media={current} />
            <p className="text-center text-ink-muted text-sm mt-4 font-mono">{current.alt}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
