import './styles/portfolio.css';

import Hero from './components/Hero';
import Band from './components/Band';
import CaseList from './components/CaseList';
import CampaignBlock from './components/CampaignBlock';
import EngagementBlock from './components/EngagementBlock';

import {
  profile,
  statement,
  aiSection,
  designSection,
  tools,
  footer,
} from './data/content';
import { campaigns } from './data/campaigns';

const tones = ['ink', 'paper'] as const;

export default function App() {
  return (
    <div className="pf">
      <Hero />

      <main className="sheet">
        {/* Opening statement */}
        <Band tone="paper">
          <p className="statement">{statement.headline}</p>
          <p className="statement-body">{statement.body}</p>
        </Band>

        {/* Recruitment campaign */}
        {campaigns.slice(0, 1).map((c) => (
          <CampaignBlock key={c.id} campaign={c} tone="ink" />
        ))}

        {/* Member engagement */}
        <EngagementBlock tone="paper" />

        {/* Remaining campaigns */}
        {campaigns.slice(1).map((c, i) => (
          <CampaignBlock key={c.id} campaign={c} tone={tones[i % tones.length]} />
        ))}

        {/* AI enablement */}
        <Band id={aiSection.id} tone="dim" title={aiSection.title} lead={aiSection.lead}>
          <CaseList items={aiSection.items} />
        </Band>

        {/* Design */}
        <Band
          id={designSection.id}
          tone="paper"
          title={designSection.title}
          lead={designSection.lead}
        >
          <h3 style={{ marginBottom: '0.6rem' }}>{designSection.lobTitle}</h3>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            {designSection.lobBody}
          </p>
          <div className="gal gal--wide">
            {designSection.lobShots.map((s) => (
              <img key={s.src} src={s.src} alt={s.alt} loading="lazy" />
            ))}
          </div>
        </Band>

        {/* Tools + contact */}
        <section className="band band--ink foot">
          <div className="wrap">
            <div className="tools" style={{ marginBottom: '3.5rem' }}>
              {tools.map((t) => (
                <span className="tool" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="foot__grid">
              <div>
                <h2 style={{ maxWidth: '18ch' }}>{footer.headline}</h2>
              </div>
              <div>
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
                <p style={{ margin: '0.4rem 0 0' }}>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </p>
              </div>
            </div>

            <p className="foot__note">{footer.note}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
