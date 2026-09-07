import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { engagement } from '../data/engagement';

type Lightbox = { type: 'video' | 'image'; src: string; poster?: string; alt?: string };

function PlayIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" aria-hidden="true">
      <path d="M14 7.63 1.5.42v16.16L14 9.37a1 1 0 0 0 0-1.74Z" fill="currentColor" />
    </svg>
  );
}

export default function EngagementBlock({ tone = 'paper' }: { tone?: 'paper' | 'ink' | 'dim' }) {
  const [box, setBox] = useState<Lightbox | null>(null);

  useEffect(() => {
    if (!box) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setBox(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [box]);

  return (
    <section id={engagement.id} className={`band band--${tone}`}>
      <div className="wrap">
        <div className="head">
          <div className="head__row">
            <h2>{engagement.title}</h2>
          </div>
          <p className="lead">{engagement.lead}</p>
        </div>

        <div className="split">
          {engagement.sides.map((s) => (
            <div className="split__col" key={s.id}>
              <div className="split__label">
                <span className="split__index">{s.index}</span>
                <span>{s.label}</span>
              </div>

              <h3 className="split__title">{s.title}</h3>

              {s.body.map((p, i) => (
                <p className="split__body" key={i}>
                  {p}
                </p>
              ))}

              {s.kpis && (
                <div className="kpis split__kpis">
                  {s.kpis.map((k) => (
                    <div className="kpi" key={k.l}>
                      <span className="kpi__n">{k.n}</span>
                      <span className="kpi__l">{k.l}</span>
                    </div>
                  ))}
                </div>
              )}

              {s.video && (
                <button
                  className="split__video"
                  onClick={() =>
                    setBox({ type: 'video', src: s.video!.src, poster: s.video!.poster })
                  }
                  aria-label={`Play ${s.title}`}
                >
                  <img src={s.video.poster} alt="" loading="lazy" />
                  <span className="cap vcard__badge">{s.video.badge}</span>
                  <span className="cap vcard__dur">{s.video.duration}</span>
                  <span className="vcard__play">
                    <span>
                      <PlayIcon />
                    </span>
                  </span>
                </button>
              )}

              {s.gallery && (
                <div className="split__gal">
                  {s.gallery.map((g) => (
                    <button
                      key={g.src}
                      className="split__shot"
                      onClick={() => setBox({ type: 'image', src: g.src, alt: g.alt })}
                      aria-label={g.alt}
                    >
                      <img src={g.src} alt={g.alt} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              <div className="split__foot">
                {s.tools && <span className="split__tools">{s.tools}</span>}
                {s.note && <span className="cap cap--paper">{s.note}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {box && (
        <div className={`lb ${box.type === 'image' ? 'lb--wide' : ''}`} role="dialog" aria-modal="true" onClick={() => setBox(null)}>
          <button className="lb__close" onClick={() => setBox(null)}>
            Close
          </button>
          {box.type === 'video' ? (
            <video
              src={box.src}
              poster={box.poster}
              controls
              autoPlay
              playsInline
              onClick={(e: MouseEvent<HTMLVideoElement>) => e.stopPropagation()}
            />
          ) : (
            <img
              src={box.src}
              alt={box.alt ?? ''}
              onClick={(e: MouseEvent<HTMLImageElement>) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </section>
  );
}
