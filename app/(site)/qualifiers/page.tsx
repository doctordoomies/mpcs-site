import { listPublished } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import Link from 'next/link';
import { forPage, NotifyBand, PageHero, Sections } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Qualifiers',
  path: '/qualifiers',
  description: 'How teams qualify for MPCS: open qualifiers, invited teams and the qualification process.',
});

export default async function QualifiersPage() {
  const sections = forPage(await listPublished(currentSite(), 'section'), 'qualifiers');
  return (
    <>
      <PageHero eyebrow="Qualifiers" title="Earn your place" intro="Qualifiers have not opened. This is how they are planned to work.">
        <div className="hero-actions">
          <Link href="/teams?form=team_interest#register" className="btn">
            Register team interest
          </Link>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <Sections entries={sections} numbered />
        </div>
      </section>
      <NotifyBand title="Get the qualifier announcement" text="Captains and players on the list hear first when qualifiers open." />
    </>
  );
}

