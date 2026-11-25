import { listPublished } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import Link from 'next/link';
import { DraftDiagram, forPage, KitCard, PageHero, Sections, SectionHead } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Competition format',
  path: '/format',
  description: 'How MPCS works: seven competitive kits, a pick/ban draft, best-of-seven series, 4v4 team play, scoring and regulations.',
});

export default async function FormatPage() {
  const site = currentSite();
  const [kits, sections] = await Promise.all([listPublished(site, 'kit'), listPublished(site, 'section')]);
  return (
    <>
      <PageHero
        eyebrow="Competition format"
        title="Seven kits. One draft. First to four."
        intro="The planned competitive structure for MPCS. Details may be refined before Season 1 — the rulebook is the source of truth."
      >
        <ul className="format-facts">
          <li>
            <strong>4v4</strong> team play
          </li>
          <li>
            <strong>{kits.length || 7}</strong> kits
          </li>
          <li>
            <strong>Bo7</strong> series
          </li>
          <li>
            <strong>2</strong> bans
          </li>
        </ul>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Kit pool" title="Seven competitive kits" intro="Every kit can be played once per series. Proposed pool — final pool to be confirmed with the Season 1 rulebook." />
          <ul className="kit-grid">
            {kits.map((k, i) => (
              <KitCard key={k.id} kit={k} index={i} />
            ))}
          </ul>
        </div>
      </section>
      <section className="section section-panel">
        <div className="wrap">
          <SectionHead eyebrow="Pick / ban" title="The draft" intro="Before game 1, captains run the draft. Bans come back to decide long series." />
          <DraftDiagram />
          <div className="legend-row">
            <span className="lg lg-a">Team A</span>
            <span className="lg lg-b">Team B</span>
            <span className="lg lg-ban">Ban</span>
            <span className="lg lg-dec">Decider (if needed)</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Sections entries={forPage(sections, 'format')} />
          <p className="more-link">
            Full match rules, regulations and dispute procedures are in the <Link href="/rules">official rulebook</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

