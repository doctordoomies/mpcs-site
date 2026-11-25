import { getSettings, setting } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { EmailContact, Icon } from '@/lib/ui';
import { PageHero } from '../../_components/blocks';

export const metadata = pageMetadata({
  title: 'Contact',
  path: '/contact',
  description: 'Contact MPCS league operations: general, team, player, sponsorship and business inquiries.',
});

export default async function ContactPage() {
  const email = setting(await getSettings(currentSite()), 'contact_email');
  return (
    <>
      <PageHero eyebrow="Contact" title="League operations" intro="Send sponsorship proposals and league inquiries by email." />
      <section className="section">
        <div className="wrap contact-grid">
          <div className="form-card">
            <EmailContact />
          </div>
          <aside className="contact-aside">
            <div>
              <Icon name="mail" />
              <h2>By email</h2>
              <p>For sponsorships and other inquiries, email league operations.</p>
              {email && <a href={`mailto:${email}`}>{email}</a>}
            </div>
            <div>
              <Icon name="shield" />
              <h2>Official channels</h2>
              <p>MPCS has no Discord server yet. Official channels will be announced on mpcs.gg.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

