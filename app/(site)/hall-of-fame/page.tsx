import { list, listPublished, str } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { Icon } from '@/lib/ui';
import { PageHero, SectionHead } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Hall of Fame',
  path: '/hall-of-fame',
  description: 'MPCS champions, MVPs and championship history.',
});

const AWARDS = [
  { award: 'Champion', icon: 'trophy', text: 'The team that wins the grand final.' },
  { award: 'Finals MVP', icon: 'star', text: 'The standout player of the grand final series.' },
  { award: 'Season MVP', icon: 'chart', text: 'The most valuable player across the season.' },
];

export default async function HallOfFamePage() {
  const site = currentSite();
  const [honors, seasons] = await Promise.all([listPublished(site, 'honor'), listPublished(site, 'season')]);
  const seasonNames = Array.from(new Set([...honors.map((h) => str(h, 'season')), ...seasons.map((s) => s.title)]));
  return (
    <>
      <PageHero eyebrow="Hall of Fame" title="Legacy" intro="Every champion and MVP, recorded permanently. The first names will be added after the Season 1 grand final." />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Recognition" title="Awards" />
          <ul className="award-grid">
            {AWARDS.map((a) => (
              <li key={a.award} className="award" data-reveal>
                <Icon name={a.icon} size={30} />
                <h3>{a.award}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-panel">
        <div className="wrap">
          <SectionHead eyebrow="Championship history" title="By season" />
          {seasonNames.map((season) => {
            const entries = honors.filter((h) => str(h, 'season') === season);
            return (
              <div key={season} className="hof-season" data-reveal>
                <h3>{season}</h3>
                <ul className="hof-row">
                  {AWARDS.map((a) => {
                    const winner = entries.find((h) => str(h, 'award') === a.award);
                    return (
                      <li key={a.award} className={`hof-slot ${winner ? 'is-filled' : ''}`}>
                        <span className="hof-award">{a.award}</span>
                        {winner ? (
                          <>
                            <strong>{winner.title}</strong>
                            {winner.summary && <p>{winner.summary}</p>}
                            {list(winner, 'roster').length > 0 && <p className="hof-roster">{list(winner, 'roster').join(' · ')}</p>}
                          </>
                        ) : (
                          <strong className="hof-tbd">To be decided</strong>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

