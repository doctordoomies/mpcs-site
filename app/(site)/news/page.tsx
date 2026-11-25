import { listPublished } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { NewsCard, NotifyBand, PageHero } from '../../_components/blocks';

export const metadata = pageMetadata({ title: 'Announcements', path: '/news', description: 'MPCS league and season announcements, rule updates and development updates.' });

export default async function NewsPage() {
  const news = await listPublished(currentSite(), 'news');
  return (
    <>
      <PageHero eyebrow="Announcements" title="League news" intro="Season announcements, rule updates and development news." />
      <section className="section">
        <div className="wrap news-grid">
          {news.map((n) => (
            <NewsCard key={n.id} entry={n} />
          ))}
        </div>
      </section>
      <NotifyBand title="Announcements by email" text="Season announcements go to the list first." />
    </>
  );
}

