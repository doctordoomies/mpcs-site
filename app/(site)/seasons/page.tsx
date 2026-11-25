import { listPublished, str } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { Markdown } from '@/lib/ui';
import { forPage, NotifyBand, PageHero, Sections, SectionHead } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Seasons',
  path: '/seasons',
  description: 'The MPCS seasonal structure, planned Season 1 information, qualification and the season archive.',
});

export default async function SeasonsPage() {
  const site = currentSite();
  const [seasons, sections] = await Promise.all([listPublished(site, 'season'), listPublished(site, 'section')]);
  const current = seasons.filter((s) => str(s, 'status') !== 'Completed');
  const archive = seasons.filter((s) => str(s, 'status') === 'Completed');
  return (
    <>
      <PageHero eyebrow="Seasons" title="The road to the title" intro="Every season runs from qualifiers to a best-of-seven grand final." />
      <section className="section">
        <div className="wrap">
          <Sections entries={forPage(sections, 'seasons').slice(0, 1)} />
        </div>
      </section>
      {current.map((season) => (
        <section key={season.id} className="section section-panel">
          <div className="wrap season-detail">
            <div>
              <span className="status-pill">{str(season, 'status')}</span>
              <h2 className="season-title">{season.title}</h2>
              <p className="lede">{season.summary}</p>
              <Markdown>{season.body}</Markdown>
            </div>
            <dl className="season-facts">
              {[
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
              <p className="fine">All details are planned and subject to confirmation.</p>
            </dl>
          </div>
        </section>
      ))}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Archive" title="Season archive" intro={forPage(sections, 'seasons')[1]?.body} />
          {archive.length ? (
            <ul className="archive-grid">
              {archive.map((s) => (
                <li key={s.id} className="archive-card" data-reveal>
                  <h3>{s.title}</h3>
                  <p>Champion: {str(s, 'champion') || '—'}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="archive-empty" data-reveal>
              <span>No completed seasons yet</span>
              <p>The archive opens after the Season 1 grand final.</p>
            </div>
          )}
        </div>
      </section>
      <NotifyBand title="Be first to hear Season 1 dates" text="We will announce confirmed dates, teams and prizes by email." />
    </>
  );
}

