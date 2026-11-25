import { PrivacyContent } from '@/lib/privacy';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({ title: 'Privacy', path: '/privacy', description: 'How we handle your data.' });

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="wrap wrap-narrow">
        <PrivacyContent />
      </div>
    </section>
  );
}

