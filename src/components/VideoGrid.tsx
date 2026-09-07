import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import type { VideoItem } from '../data/content';

function PlayIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" aria-hidden="true">
      <path d="M14 7.63 1.5.42v16.16L14 9.37a1 1 0 0 0 0-1.74Z" fill="#16202B" />
    </svg>
  );
}

export default function VideoGrid({ items }: { items: VideoItem[] }) {
  const [open, setOpen] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="vgrid">
        {items.map((v) => (
          <article className="vcard" key={v.id}>
            <button
              className="vcard__frame"
              onClick={() => setOpen(v)}
              aria-label={`Play ${v.title}`}
            >
              <img src={v.poster} alt="" loading="lazy" />
              {v.badge && <span className="cap vcard__badge">{v.badge}</span>}
              {v.duration && <span className="cap vcard__dur">{v.duration}</span>}
              <span className="vcard__play">
                <span>
                  <PlayIcon />
                </span>
              </span>
            </button>

            <div className="vcard__body">
              <h3 className="vcard__title">{v.title}</h3>
              <p className="vcard__meta">{v.meta}</p>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <button className="lb__close" onClick={() => setOpen(null)}>
            Close
          </button>
          <video
            src={open.src}
            poster={open.poster}
            controls
            autoPlay
            playsInline
            onClick={(e: MouseEvent<HTMLVideoElement>) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
