'use client';

import { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import type { Media } from '@/lib/data';

function PlaceholderArt({ frame }: { frame: Media['frame'] }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-base-raised/60 border-2 border-dashed border-base-line text-ink-faint">
      <ImagePlus size={frame === 'phone' ? 22 : 28} strokeWidth={1.5} />
      <p className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 text-center">
        Screenshot pending
      </p>
    </div>
  );
}

/**
 * Renders one screenshot. If the file at `media.src` doesn't exist yet
 * (which is true by default — see lib/data.ts), this quietly falls back to a
 * labelled placeholder instead of a broken image icon, so the gallery always
 * looks intentional even before real screenshots are added.
 */
export default function MediaFrame({
  media,
  onClick,
  className = '',
}: {
  media: Media;
  onClick?: () => void;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);

  const image = !errored ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.src}
      alt={media.alt}
      onError={() => setErrored(true)}
      className="w-full h-full object-cover object-top"
    />
  ) : (
    <PlaceholderArt frame={media.frame} />
  );

  const content = <div className="absolute inset-0">{image}</div>;

  const Wrapper = onClick ? 'button' : 'div';

  if (media.frame === 'browser') {
    return (
      <Wrapper
        onClick={onClick}
        aria-label={onClick ? `View larger: ${media.alt}` : undefined}
        className={`relative block w-full rounded-lg overflow-hidden border border-base-line bg-base-raised text-left ${className}`}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-base-surface border-b border-base-line">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="relative w-full aspect-[16/10]">{content}</div>
      </Wrapper>
    );
  }

  if (media.frame === 'phone') {
    return (
      <Wrapper
        onClick={onClick}
        aria-label={onClick ? `View larger: ${media.alt}` : undefined}
        className={`relative block rounded-[1.4rem] overflow-hidden border-[3px] border-base-line bg-base-raised text-left mx-auto ${className}`}
        style={{ width: '100%', maxWidth: 180 }}
      >
        <div className="relative w-full aspect-[9/19.5]">
          <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
            <div className="w-14 h-3 rounded-b-lg bg-base-line" />
          </div>
          {content}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      onClick={onClick}
      aria-label={onClick ? `View larger: ${media.alt}` : undefined}
      className={`relative block w-full rounded-lg overflow-hidden border border-base-line bg-base-raised text-left ${className}`}
    >
      <div className="relative w-full aspect-[16/10]">{content}</div>
    </Wrapper>
  );
}
