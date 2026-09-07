import { useState } from 'react';
import type { CaseItem } from '../data/content';

export default function CaseList({ items }: { items: CaseItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="cases">
      {items.map((c) => {
        const isOpen = openId === c.id;
        return (
          <section className="case" data-open={isOpen} key={c.id}>
            <button
              className="case__btn"
              onClick={() => setOpenId(isOpen ? null : c.id)}
              aria-expanded={isOpen}
            >
              <img className="case__thumb" src={c.thumb} alt="" loading="lazy" />
              <span className="case__head">
                <span className="case__title">{c.title}</span>
                <span className="case__sub">{c.sub}</span>
              </span>
              <span className="case__sign" aria-hidden="true">
                +
              </span>
            </button>

            {isOpen && (
              <div className="case__panel">
                <div className="case__facts">
                  <div>
                    <div className="fact__label">The situation</div>
                    <p className="fact__value">{c.context}</p>
                  </div>

                  <div>
                    <div className="fact__label">What I did</div>
                    <p className="fact__value">{c.action}</p>
                  </div>

                  <div>
                    <div className="fact__label">What came out of it</div>
                    <p className="fact__value">{c.outcome}</p>
                  </div>

                  {c.metrics && (
                    <div className="metrics">
                      {c.metrics.map((m) => (
                        <div className="metric" key={m.l}>
                          <span className="metric__n">{m.n}</span>
                          <span className="metric__l">{m.l}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {c.tools && (
                    <div>
                      <div className="fact__label">Tools</div>
                      <p className="fact__value">{c.tools}</p>
                    </div>
                  )}

                  {c.note && <span className="cap cap--paper">{c.note}</span>}
                </div>

                <div className="case__visual">
                  {c.visuals?.map((v, i) =>
                    v.type === 'video' ? (
                      <video key={i} src={v.src} poster={v.poster} controls playsInline />
                    ) : (
                      <img key={i} src={v.src} alt="" loading="lazy" />
                    )
                  )}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
