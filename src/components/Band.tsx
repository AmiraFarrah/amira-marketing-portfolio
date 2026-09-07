import type { ReactNode } from 'react';

type Props = {
  id?: string;
  tone?: 'paper' | 'ink' | 'dim';
  title?: string;
  count?: string;
  lead?: string;
  children: ReactNode;
};

export default function Band({ id, tone = 'paper', title, count, lead, children }: Props) {
  return (
    <section id={id} className={`band band--${tone}`}>
      <div className="wrap">
        {title && (
          <div className="head">
            <div className="head__row">
              <h2>{title}</h2>
              {count && <span className="head__count">{count}</span>}
            </div>
            {lead && <p className="lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
