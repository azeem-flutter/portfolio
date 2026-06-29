'use client';

import { useState } from 'react';
import { ImagePlus, PlayCircle } from 'lucide-react';
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
  const isVideo = media.type === 'video';

  const innerContent = isVideo ? (
    onClick ? (
      // Card grid — thumbnail image with play overlay (or fallback icon)
      <div className="absolute inset-0">
        {media.thumbnail ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media.thumbnail}
              alt={`${media.alt} thumbnail`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle
                size={48}
                className="text-white drop-shadow-lg group-hover:text-accent-indigo transition-colors duration-200"
                strokeWidth={1.5}
              />
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-base-raised flex flex-col items-center justify-center gap-2">
            <PlayCircle
              size={36}
              className="text-accent-indigo group-hover:text-accent-purple transition-colors duration-200"
              strokeWidth={1.5}
            />
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-muted text-center px-3">
              {media.alt}
            </p>
          </div>
        )}
      </div>
    ) : (
      // Lightbox — full video player
      <video
        src={media.src}
        title={media.alt}
        controls
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-contain bg-black"
      />
    )
  ) : !errored ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.src}
      alt={media.alt}
      onError={() => setErrored(true)}
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
  ) : (
    <PlaceholderArt frame={media.frame} />
  );

  const handleClick = isVideo && !onClick ? undefined : onClick;
  const Tag = handleClick ? 'button' : 'div';

  if (media.frame === 'browser') {
    return (
      <Tag
        onClick={handleClick}
        aria-label={handleClick ? `View larger: ${media.alt}` : undefined}
        className={`group relative block w-full rounded-lg overflow-hidden border border-base-line bg-base-raised text-left ${className}`}
      >
        <div className="flex items-center gap-1.5 px-3 py-2 bg-base-surface border-b border-base-line">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="relative w-full aspect-[16/10]">{innerContent}</div>
      </Tag>
    );
  }

  if (media.frame === 'phone') {
    return (
      <Tag
        onClick={handleClick}
        aria-label={handleClick ? `View larger: ${media.alt}` : undefined}
        className={`group relative block rounded-[1.4rem] overflow-hidden border-[3px] border-base-line bg-base-raised text-left mx-auto ${className}`}
        style={{ width: '100%', maxWidth: 180 }}
      >
        <div className="relative w-full aspect-[9/19.5]">
          <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
            <div className="w-14 h-3 rounded-b-lg bg-base-line" />
          </div>
          {innerContent}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      onClick={handleClick}
      aria-label={handleClick ? `View larger: ${media.alt}` : undefined}
      className={`group relative block w-full rounded-lg overflow-hidden border border-base-line bg-base-raised text-left ${className}`}
    >
      <div className="relative w-full aspect-[16/10]">{innerContent}</div>
    </Tag>
  );
}
