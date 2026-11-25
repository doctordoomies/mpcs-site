import { listPublished, str } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { EmailContact } from '@/lib/ui';
import { forPage, PageHero, Sections, SectionHead } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Partners',
  path: '/partners',
  description: 'MPCS partners and sponsors, sponsorship opportunities and sponsor inquiries.',
});

export default async function PartnersPage() {
  const site = currentSite();
  const [partners, sections] = await Promise.all([listPublished(site, 'partner'), listPublished(site, 'section')]);
  return (
    <>
      <PageHero eyebrow="Partners" title="Partner with the championship" intro="Confirmed partners and sponsors of MPCS, and how to become one." />
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Confirmed partners" title="Partners & sponsors" />
          {partners.length ? (
            <ul className="partner-grid">
              {partners.map((p) => (
                <li key={p.id} className="partner" data-reveal>
                  {str(p, 'logo') ? <img src={str(p, 'logo')} alt={p.title} loading="lazy" /> : <strong>{p.title}</strong>}
                  <span className="status-pill">{str(p, 'tier')}</span>
                  {p.summary && <p>{p.summary}</p>}
                  {str(p, 'website') && (
                    <a href={str(p, 'website')} target="_blank" rel="noopener noreferrer">
                      Website
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="archive-empty" data-reveal>
              <span>No partners announced yet</span>
              <p>Partners are listed only once agreements are confirmed.</p>
            </div>
          )}
        </div>
      </section>
      <section className="section section-panel">
        <div className="wrap">
          <Sections entries={forPage(sections, 'partners')} />
        </div>
      </section>
      <section className="section" id="inquiry">
        <div className="wrap wrap-narrow">
          <SectionHead eyebrow="Inquiries" title="Start a conversation" />
          <div className="form-card">
            <EmailContact sponsorship />
          </div>
        </div>
      </section>
    </>
  );
}

