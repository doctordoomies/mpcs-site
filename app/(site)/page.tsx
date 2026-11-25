import { flag, getSettings, listPublished, setting, str } from '@/lib/content';
import { currentSite } from '@/lib/site';
import { Icon } from '@/lib/ui';
import Link from 'next/link';
import { KitCard, NewsCard, Scoreboard, SectionHead } from '../_components/blocks';

const PILLARS = [
  { icon: 'users', title: 'Team league', text: '4v4 rosters with substitutes, captains and transfer windows.' },
  { icon: 'sword', title: 'Seven kits', text: 'A competitive pool that rewards complete, versatile teams.' },
  { icon: 'shield', title: 'Pick / ban', text: 'A draft before every series turns preparation into strategy.' },
  { icon: 'trophy', title: 'Best of seven', text: 'Long series where the better team wins — first to four.' },
];

export default async function Home() {
  const site = currentSite();
  const [settings, kits, seasons, news, partners] = await Promise.all([
    getSettings(site),
    listPublished(site, 'kit'),
    listPublished(site, 'season'),
    listPublished(site, 'news', 3),
    listPublished(site, 'partner'),
  ]);
  const season = seasons[0];

  return (
    <>
      {/* -------------------------------------------------------------- hero */}
      <section className="hero">
        <div className="hero-glow" aria-hidden />
        <div className="wrap hero-grid">
          <div className="crest-tile" aria-hidden>
            <img src="/brand/symbol-mono-black.svg" alt="" width={260} height={260} />
            <span>Championship crest</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">{setting(settings, 'hero_eyebrow')}</p>
            <h1 className="hero-wordmark">
              <img src="/brand/wordmark-dark.svg" alt="MPCS" width={520} height={159} />
              <span className="hero-sub">Minecraft PvP Championship Series</span>
            </h1>
            <p className="hero-headline">{setting(settings, 'hero_headline')}</p>
            <p className="lede">{setting(settings, 'hero_intro')}</p>
            <div className="hero-actions">
              <Link href="/teams#register" className="btn">
                Discuss participation
              </Link>
              <Link href="/format" className="btn btn-ghost">
                The format
              </Link>
            </div>
          </div>
        </div>
        <div className="wrap">
          <Scoreboard kits={kits} />
        </div>
      </section>

      {/* ----------------------------------------------------- coming soon */}
      <section className="soon">
        <div className="wrap soon-inner" data-reveal>
          <span className="soon-tag">Coming soon</span>
          <div>
            <h2>{setting(settings, 'coming_soon_title')}</h2>
            <p>{setting(settings, 'coming_soon_text')}</p>
          </div>
          <div className="soon-form" id="notify">
            <Link href="/news" className="btn">Read announcements</Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- mission / vision */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="The championship" title="A professional stage for Minecraft PvP." />
          <div className="mv-grid">
            <div className="mv" data-reveal>
              <p className="eyebrow">Mission</p>
              <p className="mv-text">{setting(settings, 'mission')}</p>
            </div>
            <div className="mv" data-reveal>
              <p className="eyebrow">Vision</p>
              <p className="mv-text">{setting(settings, 'vision')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- format */}
      {flag(settings, 'show_format') && (
        <section className="section section-panel">
          <div className="wrap">
            <div className="section-row">
              <SectionHead eyebrow="Competitive format" title="Built like a real league." />
              <Link href="/format" className="btn btn-ghost">
                Full format
              </Link>
            </div>
            <ul className="pillar-grid">
              {PILLARS.map((p) => (
                <li key={p.title} className="pillar" data-reveal>
                  <Icon name={p.icon} size={28} />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
            {kits.length > 0 && (
              <>
                <h3 className="sub-title">The kit pool</h3>
                <ul className="kit-grid">
                  {kits.map((k, i) => (
                    <KitCard key={k.id} kit={k} index={i} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- season */}
      {flag(settings, 'show_season') && season && (
        <section className="section">
          <div className="wrap season-feature" data-reveal>
            <div>
              <p className="eyebrow">Planned season</p>
              <h2>{season.title}</h2>
              <p className="lede">{season.summary}</p>
              <Link href="/seasons" className="btn btn-ghost">
                Season details
              </Link>
            </div>
            <dl className="season-facts">
              {[
                ['Status', str(season, 'status')],
                ['Dates', str(season, 'dates')],
                ['Teams', str(season, 'teams')],
                ['Qualification', str(season, 'qualification')],
                ['Prize pool', str(season, 'prize_pool')],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------- participate */}
      <section className="section section-panel">
        <div className="wrap">
          <SectionHead eyebrow="Participation" title="Players and teams" center />
          <div className="join-grid">
            <Link href="/teams?form=player_interest#register" className="join-card" data-reveal>
              <Icon name="star" size={30} />
              <h3>Players</h3>
              <p>Free agents and rostered players can email league operations about participating. We plan to help free agents find teams before qualifiers.</p>
              <span className="join-cta">
                Player interest <Icon name="arrow" size={16} />
              </span>
            </Link>
            <Link href="/teams?form=team_interest#register" className="join-card" data-reveal>
              <Icon name="users" size={30} />
              <h3>Teams</h3>
              <p>Captains can email their roster’s interest in Season 1 qualifiers. Rosters are four starters plus up to three subs.</p>
              <span className="join-cta">
                Team interest <Icon name="arrow" size={16} />
              </span>
            </Link>
            <Link href="/contact?type=organisation" className="join-card" data-reveal>
              <Icon name="globe" size={30} />
              <h3>Organisations</h3>
              <p>Esports organisations interested in fielding or acquiring a roster can start a conversation with league operations.</p>
              <span className="join-cta">
                Organisation inquiry <Icon name="arrow" size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- news */}
      {flag(settings, 'show_news') && (
        <section className="section">
          <div className="wrap">
            <div className="section-row">
              <SectionHead eyebrow="Development updates" title="Announcements" />
              <Link href="/news" className="btn btn-ghost">
                All announcements
              </Link>
            </div>
            <div className="news-grid">
              {news.map((n) => (
                <NewsCard key={n.id} entry={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------- partners */}
      {flag(settings, 'show_partners') && (
        <section className="section section-panel">
          <div className="wrap partner-cta" data-reveal>
            <div>
              <p className="eyebrow">Partnerships</p>
              <h2>{partners.length ? 'Our partners' : 'Become a founding partner.'}</h2>
              <p className="lede">
                {partners.length
                  ? partners.map((p) => p.title).join(' · ')
                  : 'No partners have been announced yet. League, season and prize-pool partnerships are open for discussion.'}
              </p>
            </div>
            <Link href="/partners" className="btn">
              Partnership opportunities
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

