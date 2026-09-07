import { hero, profile } from '../data/content';

export default function Hero() {
  return (
    <header className="hero">
      <video
        className="hero__media"
        src={hero.video}
        poster={hero.poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero__scrim" />

      <div className="hero__inner">
        <div className="wrap">
          <h1 className="hero__name">{hero.headline}</h1>
          <p className="hero__line">{hero.line}</p>

          <div className="hero__meta">
            <span className="cap cap--signal">{profile.name}</span>
            {hero.tags.map((t) => (
              <span className="cap cap--ghost" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__cue">Scroll</div>
    </header>
  );
}
