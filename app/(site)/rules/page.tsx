import { getSettings, listPublished, setting, str } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { Markdown } from '@/lib/ui';
import { PageHero } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Official rulebook',
  path: '/rules',
  description: 'The MPCS rulebook: competitive regulations, match procedures, player eligibility, conduct and dispute procedures.',
});

export default async function RulesPage() {
  const site = currentSite();
  const [rules, settings] = await Promise.all([listPublished(site, 'rule'), getSettings(site)]);
  const id = (n: string) => `section-${n.replace(/[^0-9a-z]/gi, '')}`;
  return (
    <>
      <PageHero eyebrow="Rulebook" title="Official rules">
        <div className="rule-status">
          <span className="status-pill">{setting(settings, 'rulebook_version')}</span>
          <p>{setting(settings, 'rulebook_status')}</p>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap rules-layout">
          <nav className="rules-toc" aria-label="Rulebook sections">
            <p className="eyebrow">Contents</p>
            <ol>
              {rules.map((r) => (
                <li key={r.id}>
                  <a href={`#${id(str(r, 'number'))}`}>
                    <span>{str(r, 'number')}</span> {r.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="rules-body">
            {rules.map((r) => (
              <section key={r.id} id={id(str(r, 'number'))} className="rule">
                <h2>
                  <span className="rule-n">{str(r, 'number')}</span>
                  {r.title}
                </h2>
                <Markdown>{r.body}</Markdown>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

