import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Asset, Campaign } from '../data/campaigns';

type Box = { type: 'video' | 'image'; src: string; poster?: string; alt?: string };

function PlayIcon() {
  return (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" aria-hidden="true">
      <path d="M14 7.63 1.5.42v16.16L14 9.37a1 1 0 0 0 0-1.74Z" fill="currentColor" />
    </svg>
  );
}

export default function CampaignBlock({
  campaign,
  tone,
}: {
  campaign: Campaign;
  tone: 'paper' | 'ink' | 'dim';
}) {
  const [box, setBox] = useState<Box | null>(null);

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

  const openVideo = (a: Asset) =>
    setBox({ type: 'video', src: a.src, poster: a.poster });

  return (
    <section id={campaign.id} className={`band band--${tone} cmp`}>
      <div className="wrap">
        <div className="cmp__head">
          <span className="cap cap--signal">{campaign.org}</span>
          <h2>{campaign.title}</h2>
          <span className="cmp__period">{campaign.period}</span>
        </div>

        <div className="cmp__brief">
          <div className="cmp__facts">
            <div>
              <div className="fact__label">Objective</div>
              <p className="fact__value">{campaign.objective}</p>
            </div>
            <div>
              <div className="fact__label">Audience</div>
              <p className="fact__value">{campaign.audience}</p>
            </div>
            <div>
              <div className="fact__label">Approach</div>
              <p className="fact__value">{campaign.approach}</p>
            </div>
          </div>

          <div className="cmp__side">
            <div className="fact__label">Results</div>
            <div className="kpis">
              {campaign.kpis.map((k) => (
                <div className="kpi" key={k.l}>
                  <span className="kpi__n">{k.n}</span>
                  <span className="kpi__l">{k.l}</span>
                </div>
              ))}
            </div>

            {campaign.timeline.length > 0 && (
              <>
                <div className="fact__label" style={{ marginTop: '1.6rem' }}>
                  Timeline
                </div>
                <ol className="tl">
                  {campaign.timeline.map((t) => (
                    <li className="tl__step" key={t.when}>
                      <span className="tl__when">{t.when}</span>
                      <span className="tl__what">{t.what}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {campaign.note && (
              <span className="cap cap--paper" style={{ marginTop: '1.4rem' }}>
                {campaign.note}
              </span>
            )}
          </div>
        </div>

        {campaign.photos && campaign.photos.length > 0 && (
          <div className="cmp__photos">
            {campaign.photos.map((p) => (
              <button
                key={p.src}
                className="cmp__photo"
                onClick={() => setBox({ type: 'image', src: p.src, alt: p.alt })}
                aria-label={p.alt}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {campaign.assets.length > 0 && (
          <div className="vgrid cmp__assets">
            {campaign.assets.map((a) => (
              <article className="vcard" key={a.id}>
                <button
                  className="vcard__frame"
                  onClick={() => openVideo(a)}
                  aria-label={`Play ${a.title}`}
                >
                  <img src={a.poster} alt="" loading="lazy" />
                  {a.badge && <span className="cap vcard__badge">{a.badge}</span>}
                  {a.duration && <span className="cap vcard__dur">{a.duration}</span>}
                  <span className="vcard__play">
                    <span>
                      <PlayIcon />
                    </span>
                  </span>
                </button>
                <div className="vcard__body">
                  <h3 className="vcard__title">{a.title}</h3>
                  <p className="vcard__why">{a.why}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {campaign.materials && campaign.materials.length > 0 && (
          <div className="mats">
            <div className="fact__label mats__label">Materials</div>
            <div className="mats__grid">
              {campaign.materials.map((m) => (
                <figure className="mat" key={m.src}>
                  <button
                    className="mat__thumb"
                    onClick={() => setBox({ type: 'image', src: m.src, alt: m.caption })}
                    aria-label={m.caption}
                  >
                    <img src={m.src} alt="" loading="lazy" />
                  </button>
                  <figcaption className="mat__cap">{m.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>

      {box && (
        <div
          className={`lb ${box.type === 'image' ? 'lb--wide' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={() => setBox(null)}
        >
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