import { getSettings, listPublished, setting } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { forPage, NotifyBand, PageHero, Sections } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'About the league',
  path: '/about',
  description: 'The background, mission, competitive philosophy, structure and long-term goals of the Minecraft PvP Championship Series.',
});

export default async function AboutPage() {
  const site = currentSite();
  const [sections, settings] = await Promise.all([listPublished(site, 'section'), getSettings(site)]);
  return (
    <>
      <PageHero eyebrow="About MPCS" title="The league" intro={site.description} />
      <section className="section">
        <div className="wrap mv-grid">
          <div className="mv" data-reveal>
            <p className="eyebrow">Mission</p>
            <p className="mv-text">{setting(settings, 'mission')}</p>
          </div>
          <div className="mv" data-reveal>
            <p className="eyebrow">Vision</p>
            <p className="mv-text">{setting(settings, 'vision')}</p>
          </div>
        </div>
      </section>
      <section className="section section-panel">
        <div className="wrap">
          <Sections entries={forPage(sections, 'about')} numbered />
        </div>
      </section>
      <NotifyBand title="Follow the build to Season 1" text="League announcements and registration news by email." />
    </>
  );
}

