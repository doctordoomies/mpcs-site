import { getPublished, listPublished, str } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { currentSite } from '@/lib/site';
import { JsonLd, Markdown } from '@/lib/ui';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fmt, NotifyBand } from '../../../_components/blocks';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublished(currentSite(), 'news', slug);
  if (!post) return { title: 'Not found' };
  return pageMetadata({ title: post.title, path: `/news/${slug}`, description: post.summary });
}

export default async function NewsPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPublished(currentSite(), 'news', slug);
  if (!post) notFound();
  return (
    <>
      <article className="article">
        <div className="wrap wrap-narrow">
          <Link href="/news" className="crumb">
            ← Announcements
          </Link>
          <p className="news-meta">
            <span>{str(post, 'category', 'Announcement')}</span>
            {post.publishedAt && <time dateTime={post.publishedAt.toISOString()}>{fmt(post.publishedAt)}</time>}
          </p>
          <h1>{post.title}</h1>
          <p className="lede">{post.summary}</p>
          <Markdown className="prose article-body">{post.body}</Markdown>
        </div>
      </article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: post.title,
          description: post.summary,
          datePublished: post.publishedAt?.toISOString(),
          dateModified: post.updatedAt.toISOString(),
          publisher: { '@type': 'Organization', name: 'MPCS' },
        }}
      />
      <NotifyBand title="Stay informed" text="League announcements and development updates are published here." />
    </>
  );
}


export async function generateStaticParams() {
 return (await listPublished(currentSite(), 'news')).map(post => ({ slug: post.slug }));
}
export const dynamicParams = false;
