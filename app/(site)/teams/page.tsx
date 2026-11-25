import { listPublished } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { EmailContact } from '@/lib/ui';
import { forPage, PageHero, Sections, SectionHead } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Teams',
  path: '/teams',
  description: 'MPCS team eligibility, roster requirements and how to register player or team interest for Season 1.',
});

export default async function TeamsPage() {
  const sections = await listPublished(currentSite(), 'section');
  return (
    <>
      <PageHero eyebrow="Teams" title="Build your roster" intro="Who can compete, how rosters work and how to get on the list for Season 1." />
      <section className="section">
        <div className="wrap">
          <Sections entries={forPage(sections, 'teams')} numbered />
        </div>
      </section>
      <section className="section section-panel" id="register">
        <div className="wrap register-grid">
          <SectionHead
            eyebrow="Interest registration"
            title="Discuss participation"
            intro="This is not a confirmed entry into the league. Email league operations to discuss your interest in Season 1."
          />
          <div className="form-card">
            <EmailContact />
          </div>
        </div>
      </section>
    </>
  );
}

